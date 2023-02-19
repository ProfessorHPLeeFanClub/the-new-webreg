import Container from "react-bootstrap/Container";
import MainTabs from "../components/MainTabs/MainTabs";
import Schedule from "../components/Schedule";
//By Sam
/*
    How to query
    "field" = "serch terms" where space is replaced with % (e.g. 2022 Fall -> 2022%Fall)
    subseqeuntly add more fields with & (see sample below);
*/

// const API_PETER =
// 	"https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Winter";

// function create_website_code(section_code) {
// 	return API_PETER + `&sectionCodes=${section_code}`;
// }

// function create_website_search(conditions) {
// 	let a = API_PETER;
// 	const l = conditions.length;
// 	for (let i = 0; i < l; i++) {
// 		a += "&" + conditions[i][0] + "=" + conditions[i][1];
// 	}
// 	return a;
// }

// async function getData() {
// 	const data = await fetch(API_PETER);
// 	console.log(await data.json());
// }

// console.log(getData());

const COURSES = [
	{
		title: "CSE 112",
		units: 4,
		grading: "GR",
		finalDate: "Tuesday, December 15, 2022",
		classes: [
			{
				courseCode: 12345,
				classType: "LEC",
				section: "A",
				units: 4,
				instructor: "LEE, H.",
				time: "MWF 11-11:50am",
				location: "DBH 1600",
				enrolled: 300,
				max: 300,
				waitlist: 50,
			},
		],
	},
];

function MyEnrollment() {
	return (
		<Container className="my-5">
			<MainTabs />
			<Schedule courseList={COURSES} />
		</Container>
	);
}

export default MyEnrollment;
