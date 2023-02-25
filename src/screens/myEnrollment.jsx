import Schedule from "../components/Schedule";
import MainTabs from "../components/MainTabs/MainTabs";
import "./MyEnrollment.scss";
import PreEnrolledWarning from "../components/PreEnrolledWarning";
import {
	fetchCourseCodeData,
	parseCourseData,
	combineParsedCourses,
} from "../api/fetchData";
import { useEffect, useState } from "react";
import "../components/Overlay.scss";
import { ErrorOverlay } from "../components/Overlay";
import { Container } from "react-bootstrap";

// const API_PETER =
// 	"https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Winter";

// function create_website_code(section_code) {
// 	return API_PETER + `&sectionCodes=${section_code}`;
// }

// request.open("GET", api_peter);
// request.send();

//console.log(JSON.stringify(data, null, 2));
function Enrollment(props) {
	const departmentList = [
		"AC ENG - Academic English",
		"AFAM - African American Studies",
		"ANATOMY - Anatomy and Neurobiology",
		"ANESTH - Anesthesiology",
		"ANTHRO - Anthropology",
		"ARABIC - Arabic",
		"ARMN - Armenian (started 2018 Spg)",
		"ART - Art",
		"ART HIS - Art History",
		"ARTS - Arts",
		"ARTSHUM - Arts and Humanities",
		"ASIANAM - Asian American Studies",
		"BANA - Business Analytics (started 2017 SS2)",
		"BATS - Biomedical and Translational Science",
		"BIO SCI - Biological Sciences",
		"BIOCHEM - Biological Chemistry",
		"BME - Biomedical Engineering",
		"CAMPREC - Campus Recreation",
		"CBE - Chemical and Biomolecular Engineering (started 2018 Fall)",
		"CEM - Community and Environmental Medicine",
		"CHC/LAT - Chicano Latino",
		"CHEM - Chemistry",
		"CHINESE - Chinese",
		"CLASSIC - Classics",
		"CLT&THY - Culture & Theory",
		"COGS - Cognitive Sciences",
		"COM LIT - Comparative Literature",
		"COMPSCI - Computer Science",
		"CRITISM - Criticism",
		"CRM/LAW - Criminology, Law and Society",
		"CSE - Computer Science and Engineering",
		"DANCE - Dance",
		"DATA - Data Science (started 2022 SS1)",
		"DERM - Dermatology",
		"DEV BIO - Developmental and Cell Biology",
		"DRAMA - Drama",
		"EARTHSS - Earth System Sciences",
		"EAS - East Asian Studies (started 2019 Fall)",
		"ECO EVO - Ecology and Evolutionary Biology",
		"ECPS - Embedded and Cyber-Physical Systems",
		"ED AFF - Educational Affairs (Sch of Med)",
		"EDUC - Education",
		"EECS - Electrical Engineering & Computer Science",
		"EHS - Environmental Health Sciences",
		"ENGLISH - English",
		"ENGR - Engineering",
		"ENGRCEE - Engineering, Civil and Environmental",
		"ENGRMAE - Engineering, Mechanical and Aerospace",
		"ENGRMSE - Materials Science and Engineering (until 2020 SS2)",
		"EPIDEM - Epidemiology",
		"ER MED - Emergency Medicine",
		"EURO ST - European Studies",
		"FAM MED - Family Medicine",
		"FIN - Finance (started 2017 Fall)",
		"FLM&MDA - Film and Media Studies",
		"FRENCH - French",
		"GDIM - Game Design and Interactive Media (started 2021 Fall)",
		"GEN&SEX - Gender and Sexuality Studies",
		"GERMAN - German",
		"GLBL ME - Global Middle East Studies",
		"GLBLCLT - Global Cultures",
		"GREEK - Greek",
		"HEBREW - Hebrew",
		"HINDI - Hindi",
		"HISTORY - History",
		"HUMAN - Humanities",
		"HUMARTS - Humanities and Arts",
		"I&C SCI - Information and Computer Science",
		"IN4MATX - Informatics",
		"INNO - Masters of Innovation and Entrepreneurship (started 2019 Fall)",
		"INT MED - Internal Medicine",
		"INTL ST - International Studies",
		"IRAN - Iranian (started 2020 Fall)",
		"ITALIAN - Italian",
		"JAPANSE - Japanese",
		"KOREAN - Korean",
		"LATIN - Latin",
		"LAW - Law",
		"LINGUIS - Linguistics (until 2019 SS2)",
		"LIT JRN - Literary Journalism",
		"LPS - Logic and Philosophy of Science",
		"LSCI - Language Science (started 2019 Fall)",
		"M&MG - Microbiology and Molecular Genetics",
		"MATH - Mathematics",
		"MED - Medicine",
		"MED ED - Medical Education",
		"MED HUM - Medical Humanities",
		"MGMT - Management",
		"MGMT EP - Executive MBA",
		"MGMT FE - Fully Employed MBA",
		"MGMT HC - Health Care MBA",
		"MGMTMBA - Management MBA",
		"MGMTPHD - Management PhD",
		"MIC BIO - Microbiology",
		"MOL BIO - Molecular Biology and Biochemistry",
		"MPAC - Accounting",
		"MSE - Materials Science and Engineering (started 2020 Fall)",
		"MUSIC - Music",
		"NET SYS - Networked Systems",
		"NEURBIO - Neurobiology and Behavior",
		"NEUROL - Neurology",
		"NUR SCI - Nursing Science",
		"OB/GYN - Obstetrics and Gynecology",
		"OPHTHAL - Ophthalmology",
		"PATH - Pathology and Laboratory Medicine",
		"PED GEN - Pediatrics Genetics",
		"PEDS - Pediatrics",
		"PERSIAN - Persian",
		"PHARM - Pharmacology (started 2020 Fall)",
		"PHILOS - Philosophy",
		"PHMD - Pharmacy (started 2021 Fall)",
		"PHRMSCI - Pharmaceutical Sciences",
		"PHY SCI - Physical Science",
		"PHYSICS - Physics",
		"PHYSIO - Physiology and Biophysics",
		"PLASTIC - Plastic Surgery",
		"PM&R - Physical Medicine and Rehabilitation",
		"POL SCI - Political Science",
		"PORTUG - Portuguese",
		"PP&D - Planning, Policy, and Design (until 2018 SS2; see UPPP)",
		"PSCI - Psychological Science (started 2019 Fall)",
		"PSY BEH - Psychology and Social Behavior (until 2019 SS2)",
		"PSYCH - Cognitive Sciences",
		"PUB POL - Public Policy",
		"PUBHLTH - Public Health",
		"RADIO - Radiology",
		"REL STD - Religious Studies",
		"ROTC - Reserve Officers' Training Corps",
		"RUSSIAN - Russian",
		"SOC SCI - Social Science",
		"SOCECOL - Social Ecology",
		"SOCIOL - Sociology",
		"SPANISH - Spanish",
		"SPPS - Social Policy & Public Service",
		"STATS - Statistics",
		"SURGERY - Surgery",
		"SWE - Software Engineering (started 2019 Fall)",
		"TAGALOG - Tagalog",
		"TOX - Toxicology",
		"UCDC - UC Washington DC",
		"UNI AFF - University Affairs",
		"UNI STU - University Studies",
		"UPPP - Urban Planning and Public Policy (started 2018 Fall)",
		"VIETMSE - Vietnamese",
		"VIS STD - Visual Studies",
		"WRITING - Writing",
	];

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

	//initializes courseList with localStorage value
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

	const [courseCodeData, setCourseCodeData] = useState("");
	const [highlightCourseCodeData, setHighlightCourseCodeData] = useState(false);
	const [invalidCourseCodeError, setCourseCodeError] = useState(false);

	//updates localstorage
	useEffect(() => {
		//setCourseList(getStartingCourseList();
		localStorage.setItem("courses", JSON.stringify(courseList));
		localStorage.setItem("savedCourses", JSON.stringify(savedCourseList));
		console.log(courseCodeData);
	}, [courseList, savedCourseList, courseCodeData]);

	const closeError = () => {
		setCourseCodeError(false);
	};

	//fetches class from api and updates courseList
	const courseCodeEnroll = async (courseCode, gradingOption) => {
		try {
			const rawData = await fetchCourseCodeData(courseCode);
			setCourseCodeError(false);

			const data = parseCourseData(rawData);
			data.grading = gradingOption;
			//console.log(data)
			const newCourseList = combineParsedCourses(courseList, data);
			//console.log(newCourseList)
			setCourseList([...newCourseList]);
		} catch (error) {
			setCourseCodeError(true);
		}

		//console.log("Enrolled in " + data.title)
	};

	const dropCourse = (courseCode) => {
		var tempList = [...courseList];
		for (var i = 0; i < tempList.length; i++) {
			var classes = [...tempList[i].classes];
			classes = classes.filter(
				(classInfo) => classInfo.courseCode !== courseCode
			);
			tempList[i].classes = classes;
		}

		tempList = tempList.filter((courses) => courses.classes.length !== 0);
		setCourseList([...tempList]);
	};

	const fillCourseCode = (courseCode) => {
		//console.log(courseCode);
		setCourseCodeData(courseCode);
	};

	return (
		<Container>
			{savedCourseList.length ? (
				<PreEnrolledWarning
					courseList={courseList}
					handleEnroll={courseCodeEnroll}
				></PreEnrolledWarning>
			) : undefined}
			{props.isSchedulePage ? (
				""
			) : (
				<MainTabs
					courseCodeEnroll={courseCodeEnroll}
					courseCodeError={invalidCourseCodeError}
					className="mainTabs"
					departmentList={departmentList}
					fillCourseCode={fillCourseCode}
					courseCodeData={courseCodeData}
					highlightCourseCodeData={highlightCourseCodeData}
					setHighlightCourseCodeData={setHighlightCourseCodeData}
				/>
			)}

			<h2 className="mt-5 mb-3 text-center myScheduleTitle">My Schedule</h2>
			<div key={courseList}>
				<Schedule
					className="schedule"
					courseList={courseList}
					dropCourse={dropCourse}
					allowButtons={true}
				/>
			</div>

			{invalidCourseCodeError ? (
				<ErrorOverlay
					errorTitle={"Error! "}
					desc={" Invalid Course Code"}
					handleError={closeError}
				/>
			) : (
				""
			)}
		</Container>
	);
}

export default Enrollment;
