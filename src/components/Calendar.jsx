import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

// import { View } from "react-big-calendar";
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
import "../css/Calendar.css";

// or globalizeLocalizer

function ScheduleCalendar() {
	const localizer = momentLocalizer(moment);

	const handleCourseBoxSelect = () => {};

	// const culture = "";

	//Monday is the 1st (3rd param)
	const events = [
		{
			title: "EECS 112",
			start: new Date(2018, 0, 1, 4 + 12, 0),
			end: new Date(2018, 0, 1, 4 + 12, 50),
			sectionCode: "29462",
		},
		{
			title: "EECS 112",
			start: new Date(2018, 0, 3, 4 + 12, 0),
			end: new Date(2018, 0, 3, 4 + 12, 50),
			sectionCode: "29463",
		},
		{
			title: "EECS 112",
			start: new Date(2018, 0, 5, 4 + 12, 0),
			end: new Date(2018, 0, 5, 4 + 12, 50),
		},
	];

	return (
		<>
			<div className="calendarWithText">
				<h3 className="calendarTitle">My Calendar</h3>

				<div className="calendarContainer">
					<Calendar
						className="calendar"
						localizer={localizer}
						events={events}
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
		</>
	);
}

export default ScheduleCalendar;
