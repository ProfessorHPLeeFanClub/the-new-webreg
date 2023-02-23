import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useState, useEffect } from "react";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
import "../css/Calendar.css";
import Schedule from "./Schedule";
import "react-big-calendar/lib/css/react-big-calendar.css";

// or globalizeLocalizer

function ScheduleCalendar(props) {
	const localizer = momentLocalizer(moment);

	const [courseList, setCourseList] = useState(
		JSON.parse(localStorage.courses)
	);
	const [TBDCourseList, setTBDCourseList] = useState([]);
	const [parsedEvents, setParsedEvents] = useState([]);

	const getMeetingDays = (meetingDayStr) => {
		var days = [];
		if (meetingDayStr.search("M") >= 0) {
			days.push(1);
		}
		if (meetingDayStr.search("Tu") >= 0) {
			days.push(2);
		}
		if (meetingDayStr.search("W") >= 0) {
			days.push(3);
		}
		if (meetingDayStr.search("Th") >= 0) {
			days.push(4);
		}
		if (meetingDayStr.search("F") >= 0) {
			days.push(5);
		}
		return days;
	};

	// returns [startdate, enddate]
	//         [[hr,min],[hr,min]]
	const getMeetingTimes = (meetingTimeStr) => {
		let times = meetingTimeStr.split("-");
		times[0] = times[0].trim();
		times[1] = times[1].trim();
		times[0] = times[0].split(":");
		times[1] = times[1].split(":");

		if (times[1][1].endsWith("p")) {
			times[1][1] = times[1][1].slice(0, -1);
			times[0][0] = Number(times[0][0]) + 12;
			times[1][0] = Number(times[1][0]) + 12;
		} else {
			times[0][0] = Number(times[0][0]);
			times[1][0] = Number(times[1][0]);
		}
		return times;
	};

	const parseCourseList = (courseList) => {
		let events = [];

		for (let i = 0; i < courseList.length; i++) {
			const classes = courseList[i].classes;
			classes.forEach((classData) => {
				const className = classData.name;
				const courseCode = classData.courseCode;
				const meetingDay = classData.meetingDay;
				const meetingTime = classData.meetingTime;
				const sectionType = classData.classType;
				if (meetingDay === "" || meetingTime === "TBA") {
					let newTBDCourseList = [...TBDCourseList];
					newTBDCourseList.push(courseList[i]);
					setTBDCourseList(newTBDCourseList);
				} else {
					const days = getMeetingDays(meetingDay);
					const times = getMeetingTimes(meetingTime);
					const eventTitle = (
						<div>
							<div>{className}</div>
							<div className="eventTitleInfo">
								<div>{sectionType}</div>
								<div>{courseCode}</div>
							</div>
						</div>
					);
					days.forEach((dayNum) => {
						let event = {};
						event.title = eventTitle;
						event.start = new Date(2018, 0, dayNum, times[0][0], times[0][1]);
						event.end = new Date(2018, 0, dayNum, times[1][0], times[1][1]);
						event.sectionCode = courseCode;
						event.sectionType = sectionType;
						events.push(event);
					});
				}
			});
		}

		return events;
	};

	useEffect(() => {
		const eventList = parseCourseList(courseList);
		console.log(eventList);
		setParsedEvents(eventList);
		console.log(courseList);
	}, [courseList]);

	const handleCourseBoxSelect = () => {};

	//Monday is the 1st (3rd param)
	// const events = [
	//     {
	//         title: "EECS 112",
	//         start: new Date(2018, 0, 1, 4+12, 0),
	//         end: new Date(2018, 0, 1, 4+12, 50),
	//         sectionCode: "29462"
	//     },
	//     {
	//         title: "EECS 112",
	//         start: new Date(2018, 0, 3, 4+12, 0),
	//         end: new Date(2018, 0, 3, 4+12, 50),
	//         sectionCode: "29463",
	//     },
	//     {
	//         title: "EECS 112",
	//         start: new Date(2018, 0, 5, 4+12, 0),
	//         end: new Date(2018, 0, 5, 4+12, 50)
	//     },
	// ]

	return (
		<>
			<div className="calendarWithText">
				<h3 className="calendarTitle">My Calendar</h3>

				<button
					className="exportCalendarButton"
					onClick={(e) => e.preventDefault()}
				>
					Export Calendar
				</button>

				<div className="calendarContainer">
					<Calendar
						className="calendar"
						localizer={localizer}
						events={parsedEvents}
						formats={{
							dayFormat: "dddd",
							timeGutterFormat: (date, culture, localizer) =>
								date.getMinutes() === 0 ? localizer.format(date, "h A") : "",
						}}
						step={15}
						timeslots={2}
						defaultDate={new Date(2018, 0, 1)}
						min={new Date(2018, 0, 1, 7)}
						max={new Date(2018, 0, 1, 23)}
						views={[Views.WORK_WEEK]}
						view={Views.WORK_WEEK}
						defaultView={Views.WORK_WEEK}
						toolbar={false}
						onSelectEvent={handleCourseBoxSelect}
						titleAccessor={"title"}
						components={{}}
					/>
				</div>
			</div>
			{TBDCourseList.length > 0 ? (
				<div className="coursesNotDisplayedTitleBox">
					<h3 className="notDisplayedTitle">Courses Not Displayed</h3>
					<div className="coursesNotDisplayedBox">
						<Schedule allowButtons={false} courseList={TBDCourseList} />
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
}

export default ScheduleCalendar;
