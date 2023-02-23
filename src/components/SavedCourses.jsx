import { useState, useEffect } from "react";
import CustomCourseBox from "./CustomCourseBox";
import {
	fetchCourseCodeData,
	combineParsedCourses,
	parseCourseData,
} from "../api/fetchData";
import "../css/SavedCourses.css";

function SavedCourses(props) {
	// const [courseList, setCourseList] = useState([]);

	// useEffect(() => {
	//     setCourseList(props.courseList);
	// });
	// function addCourse(courseInfo) {
	//     setCourseList(courseList.push(courseInfo));
	// }
	const seededSavedCourses = [
		{
			title: "SOCIOL 1",
			titleDesc: "INTRO TO SOCIOLOGY",
			units: "4",
			grading: "GR",
			finalDate: "TBA",
			classes: [
				{
					courseCode: "69000",
					classType: "Lec",
					section: "A",
					units: "4",
					instructor: "WOSICK, K.",
					time: " TBA",
					meetingDay: "",
					meetingTime: "TBA",
					location: "ON LINE",
					enrolled: "0",
					max: "200",
					waitlist: "0",
					status: "OPEN",
				},
				{
					courseCode: "69004",
					classType: "Dis",
					section: "4",
					units: "0",
					instructor: "STAFF\nWOSICK, K.",
					time: "F  9:00- 9:50 ",
					meetingDay: "F",
					meetingTime: " 9:00- 9:50 ",
					location: "ON LINE",
					enrolled: "0",
					max: "33",
					waitlist: "0",
					status: "OPEN",
				},
			],
		},
		{
			title: "ECON 13",
			titleDesc: "GLOBAL ECONOMY",
			units: "4",
			grading: "P/NP",
			finalDate: "TBA",
			classes: [
				{
					name: "ECON 13",
					courseCode: "62000",
					classType: "Lec",
					section: "A",
					units: "4",
					instructor: "SARRAF, G.",
					time: " TBA",
					meetingDay: "",
					meetingTime: "TBA",
					location: "ON LINE",
					enrolled: "0",
					max: "448",
					waitlist: "0",
					status: "OPEN",
				},
				{
					courseCode: "62002",
					classType: "Dis",
					section: "A2",
					units: "0",
					instructor: "STAFF\nSARRAF, G.",
					time: "Tu  8:00- 8:50p",
					location: "SST 220A",
					enrolled: "0",
					max: "50",
					waitlist: "0",
					status: "OPEN",
				},
			],
		},
	];

	const getStartingCourseList = () => {
		const courses = JSON.parse(localStorage.getItem("courses"));
		if (courses == null) {
			return [];
		}
		return courses;
	};
	const getStartingSavedCourseList = () => {
		const savedCourses = JSON.parse(localStorage.getItem("savedCourses"));
		if (savedCourses == null) {
			return seededSavedCourses;
		}
		return savedCourses;
	};

	const [courseList, setCourseList] = useState(getStartingCourseList);
	const [savedCourseList, setSavedCourseList] = useState(
		getStartingSavedCourseList
	);

	//    useEffect(() => {
	//         //console.log("in use effect!");
	//         //console.log(courseList);
	//         setCourseList(props.courseList);

	//    }, [courseList]) //JSON.stringify(props.courseList),

	useEffect(() => {
		//setCourseList(getStartingCourseList();
		localStorage.setItem("courses", JSON.stringify(courseList));
		localStorage.setItem("savedCourses", JSON.stringify(savedCourseList));
	}, [courseList, savedCourseList]);

	//console.log(JSON.stringify(courseList))
	//fetches class from api and updates courseList
	const courseCodeEnroll = async (courseCode, gradingOption) => {
		try {
			const rawData = await fetchCourseCodeData(courseCode);

			const data = parseCourseData(rawData);
			data.grading = gradingOption;
			//console.log(data)
			const newCourseList = combineParsedCourses(courseList, data);
			//console.log(newCourseList)
			setCourseList([...newCourseList]);
			removeSavedCourse(courseCode);
		} catch (error) {}

		//console.log("Enrolled in " + data.title)
	};

	const removeSavedCourse = (courseCode) => {
		var tempList = [...savedCourseList];
		for (var i = 0; i < tempList.length; i++) {
			var classes = [...tempList[i].classes];
			classes = classes.filter(
				(classInfo) => classInfo.courseCode !== courseCode
			);
			tempList[i].classes = classes;
		}

		tempList = tempList.filter((courses) => courses.classes.length !== 0);
		setSavedCourseList([...tempList]);
	};

	return (
		<>
			<div className="savedCoursesTitle">Saved Courses</div>
			<div className="scheduleListSaved">
				{savedCourseList.length === 0 ? (
					<div className="emptySchedule">No Courses</div>
				) : (
					savedCourseList.map((courseInfo) => {
						console.log(courseInfo);

						return (
							<div className="scheduleItem">
								<CustomCourseBox
									allowButtons={props.allowButtons}
									allowEnroll={true}
									title={courseInfo.title}
									units={courseInfo.units}
									titleDesc={courseInfo.titleDesc}
									grading={courseInfo.grading}
									finalDate={courseInfo.finalDate}
									classes={courseInfo.classes}
									dropCourse={props.dropCourse}
									courseCodeEnroll={courseCodeEnroll}
								></CustomCourseBox>
							</div>
						);
					})
				)}
			</div>
		</>
	);
}

export default SavedCourses;
