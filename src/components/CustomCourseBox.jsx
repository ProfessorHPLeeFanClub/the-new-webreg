import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import { Accordion, Table } from "react-bootstrap";

// import "../css/CourseBox";
import "../css/CourseBox.css";
//import "../../public/js/CourseBox"

const TABLE_COLS = [
	"Code",
	"Type",
	"Sec",
	"Unit",
	"Instr",
	"Time",
	"Lec",
	"Max",
	"Enr",
	"WL",
	"",
	"",
];

function CustomCourseBox(props) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [title, setTitle] = useState(props.title);
	const [units, setUnits] = useState(props.units);
	const [titleDesc, setTitleDesc] = useState(props.titleDesc);
	const [grading, setGrading] = useState(props.grading);
	const [finalDate, setFinalDate] = useState(props.finalDate);
	const [classes, setClasses] = useState(props.classes);
	// var title = props.title;
	// var units = props.units;
	// var grading = props.grading;
	// var finalDate = props.finalDate;
	// var classes = props.classes
	useEffect(() => {
		// console.log(props.title);
		// console.log(props.units);
		// console.log(props.grading);
		// console.log(props.finalDate);
		// console.log(props.classes)
		setTitle(props.title);
		setUnits(props.units);
		setTitleDesc(props.titleDesc);
		setGrading(props.grading);
		setFinalDate(props.finalDate);
		setClasses(props.classes);
	}, [
		props.title,
		props.units,
		props.titleDesc,
		props.grading,
		props.finalDate,
		props.classes,
	]);

	const handleDrop = (courseCode) => {
		console.log("dropping: " + courseCode);
		props.dropCourse(courseCode);
	};

	const handleEnroll = (courseCode) => {
		console.log("enrolling from saved: " + courseCode);
		props.courseCodeEnroll(courseCode);
	};
	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});
	}, [windowWidth]);

	return (
		<>
			<h2 className="mt-5 mb-3 text-center">My Schedule</h2>
			<div className="class-header w-100">
				{window.innerWidth < 992 ? (
					<Accordion defaultActiveKey="0" style={{ borderRadius: 0 }}>
						<Accordion.Item>
							<Accordion.Header>{title}</Accordion.Header>
							<Accordion.Body>
								<p>
									<strong>Units:</strong> {units}
								</p>
								<p>
									<strong>Grading: </strong> {grading}
								</p>
								<p>
									<strong>Final: </strong> {finalDate}
								</p>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				) : (
					<div className="courseTitleBox">
						<div className="courseTitle">{title}</div>
						<div className="vr"></div>
						<div className="courseTitleInfo">{titleDesc}</div>
						<div className="vr"></div>
						<div className="courseTitleInfo">{grading}</div>
						<div className="courseTitleInfo finalInfo">Final: {finalDate}</div>
					</div>
				)}
				<div className="courseContentBox justify-content-center">
					<Table responsive className="align-middle" borderless>
						<thead>
							<tr>
								{TABLE_COLS.map((col, index) => (
									<th
										key={index}
										scope="col"
										className={
											"courseTableTitles " +
											(index > TABLE_COLS.length - 3 ? "col-1" : "")
										}
									>
										{col}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{classes.map((classInfo, index) => (
								<tr key={index}>
									<th scope="row">{classInfo.courseCode}</th>
									<td>{classInfo.classType}</td>
									<td>{classInfo.section}</td>
									<td>{classInfo.units}</td>
									<td>{classInfo.instructor}</td>
									<td>{classInfo.time}</td>
									<td>{classInfo.location}</td>
									<td>{classInfo.enrolled}</td>
									<td>{classInfo.max}</td>
									<td>{classInfo.waitlist}</td>
									{props.allowButtons ? (
										<>
											<td>
												<button
													type="button"
													className="dropButton"
													onClick={() => handleDrop(classInfo.courseCode)}
												>
													<b>Drop</b>
												</button>
											</td>
											<td>
												<button type="button" className="changeButton">
													<b>Change</b>
												</button>
											</td>
										</>
									) : null}

									{props.allowEnroll ? (
										<td className="d-flex justify-content-center">
											<div className="hstack gap-2">
												<button
													className="enrollButton"
													onClick={() => handleEnroll(classInfo.courseCode)}
												>
													<b>Enroll</b>
												</button>
											</div>
										</td>
									) : (
										""
									)}
								</tr>
							))}
						</tbody>
					</Table>

					{/* <tr>
                                <th scope="row">49209</th>
                                <td>Lec</td>
                                <td>A</td>
                                <td>4</td>
                                <td>HP Lee</td>
                                <td>MWF 4:00-4:50pm</td>
                                <td>DBH 1600</td>
                                <td>112</td>
                                <td>112</td>
                                <td>5</td>
                                <td className='d-flex justify-content-center'>
                                    <div className='hstack gap-2'>
                                        <button class="dropButton" ><b>Drop</b></button>
                                        <button class="changeButton" ><b>Change</b></button>
                                    
                                    </div>
                                        
                                </td>
                                
                            </tr>
                            <tr>
                                <th scope="row">49210</th>
                                <td>Dis</td>
                                <td>A</td>
                                <td>0</td>
                                <td>STAFF</td>
                                <td>F 1:00-1:50pm</td>
                                <td>MSTB 124</td>
                                <td>31</td>
                                <td>31</td>
                                <td>5</td>
                                <td className='d-flex justify-content-center'>
                                    <div className='hstack gap-2'>
                                        <button class="dropButton" ><b>Drop</b></button>
                                        <button class="changeButton" ><b>Change</b></button>
                                    </div>
                                </td>
                                                            
                            </tr> */}
				</div>
			</div>
		</>
	);
}

export default CustomCourseBox;
