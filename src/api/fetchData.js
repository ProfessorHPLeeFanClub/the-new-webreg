// import fetch from "node-fetch";

async function fetchCourseCodeData(courseCode) {
	const baseURL = new URL("https://api.peterportal.org/rest/v0/schedule/soc");
	const searchParams = { term: "2023Spring", sectionCodes: courseCode };
	const searchString = new URLSearchParams(searchParams).toString();
	baseURL.search = searchString;
	//"?term=2023%20Winter&sectionCodes=15110";
	//console.log(searchString);
	const response = await fetch(baseURL).then((r) => r.json()); //.json());
	//console.log(response);
	return response;
}

function parseCourseData(rawData) {
	const data = rawData.schools[0];
	const departmentData = data.departments[0];
	const courseData = departmentData.courses[0];
	const sectionData = courseData.sections[0];
	const meetingData = sectionData.meetings[0];
	const parsed = {
		schoolName: data.schoolName,
		schoolComment: data.schoolComment,
		deptName: departmentData.deptName,
		deptCode: departmentData.deptCode,
		courseNumber: courseData.courseNumber,
		title: departmentData.deptCode + " " + courseData.courseNumber,
		titleDesc: courseData.courseTitle,
		units: sectionData.units,
		//grading
		finalDate: sectionData.finalExam,
		courseCode: sectionData.sectionCode,
		classType: sectionData.sectionType,
		section: sectionData.sectionNum,
		instructor: sectionData.instructors.join("\n"),
		time: meetingData.days + meetingData.time,
		meetingDay: meetingData.days,
		meetingTime: meetingData.time,
		location: meetingData.bldg,
		enrolled: sectionData.numCurrentlyEnrolled.totalEnrolled,
		max: sectionData.maxCapacity,
		waitlist: sectionData.numOnWaitlist,
	};
	return parsed;

	/*
    {
            title: "EECS 70A",
            units: "4",
            grading: "P/NP",
            finalDate: "March 23, 2023 at 10:00-12:00pm",
            classes: [
                {
                    courseCode: "56372",
                    classType: "Lec",
                    section: "A",
                    units: "4",
                    instructor: "Aghasi",
                    time: "TTh 10:00-11:50am",
                    location: "ELH 100",
                    enrolled: "78",
                    max: "67",
                    waitlist: "0"
                },
                {
                    courseCode: "56376",
                    classType: "Dis",
                    section: "B",
                    units: "0",
                    instructor: "STAFF",
                    time: "Th 12:00-1:00pm",
                    location: "ICS 189",
                    enrolled: "28",
                    max: "18",
                    waitlist: "0"
                }
            ]
        },
        */
}

function combineParsedCourses(currentClasses, newClass) {
	const newContent = {
		name: newClass.title,
		courseCode: newClass.courseCode,
		titleDesc: newClass.titleDesc,
		classType: newClass.classType,
		section: newClass.section,
		units: newClass.units,
		instructor: newClass.instructor,
		time: newClass.time,
		meetingDay: newClass.meetingDay,
		meetingTime: newClass.meetingTime,
		location: newClass.location,
		enrolled: newClass.enrolled,
		max: newClass.max,
		waitlist: newClass.waitlist,
	};
	const sameCourses = currentClasses.filter(
		(courseData) => courseData.title === newClass.title
	);
	if (sameCourses.length === 0) {
		let newCourseList = currentClasses;
		const newCourse = {
			title: newClass.title,
			units: newClass.units,
			titleDesc: newClass.titleDesc,
			grading: newClass.grading,
			finalDate: newClass.finalDate,
			classes: [newContent],
		};
		newCourseList.push(newCourse);
		return newCourseList;
	} else {
		let updatedCourse = sameCourses[0];
		//console.log(updatedCourse);
		updatedCourse.classes.push(newContent);
		let newCourseList = currentClasses;
		for (let i = 0; i < newCourseList.length; i++) {
			if (newCourseList[i].title === updatedCourse.title) {
				newCourseList[i] = updatedCourse;
			}
		}
		return newCourseList;
	}
}

// function filterResponseData(responseJson) {
//     let parsedData = {}

//     parsedData = responseJson.filter((schoolData) => {

//     });
// }

async function fetchCourseSearchData(departmentName, courseNum, geName) {
	const baseURL = new URL("https://api.peterportal.org/rest/v0/schedule/soc");
	// const searchParams = {
	// 	term: "2023 Spring",
	// 	courseNum: courseNum,
	// 	department: departmentName,
	// 	ge: geName,
	// };
	//const searchString = new URLSearchParams(searchParams).toString();
	const searchString =
		"?term=2023%20Spring&department=COMPSCI&courseNumber=161";
	baseURL.search = searchString;

	const response = await fetch(baseURL).then((r) => r.json()); //.json());
	//console.log(response);
	return response;
}

export {
	fetchCourseCodeData,
	fetchCourseSearchData,
	parseCourseData,
	combineParsedCourses,
};
