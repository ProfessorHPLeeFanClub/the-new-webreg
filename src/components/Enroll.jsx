import { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import SoCTable from "./SoCTable";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./Enroll.scss";
import { Col, FloatingLabel, Row } from "react-bootstrap";

const GE_CHECKBOXES = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
	(category, index) => (
		<Form.Check
			inline
			key={index}
			type="checkbox"
			id={`ge-${category}`}
			label={`GE ${category.toUpperCase()}`}
		/>
	)
);

function Enrollment(props) {
	return (
		<>
			<div className="">
				<div className="enrollmentWindowText">
					Enrollment Window: March 13, 2023
				</div>
				<hr className="hr-text" data-content="Course Code Enrollment"></hr>
				<EnrollCourseCodeForm
					courseCodeEnroll={props.courseCodeEnroll}
					courseCodeError={props.courseCodeError}
					fillCourseCode={props.fillCourseCode}
					courseCodeData={props.courseCodeData}
					highlightCourseCodeData={props.highlightCourseCodeData}
					setHighlightCourseCodeData={props.setHighlightCourseCodeData}
				></EnrollCourseCodeForm>
				<hr className="hr-text" data-content="Search Courses"></hr>
				<EnrollSearchForm
					departmentList={props.departmentList}
					courseCodeEnroll={props.courseCodeEnroll}
					fillCourseCode={props.fillCourseCode}
					setHighlightCourseCodeData={props.setHighlightCourseCodeData}
				></EnrollSearchForm>
			</div>
		</>
	);
}

function EnrollCourseCodeForm(props) {
	const [courseCode, setCourseCode] = useState(props.courseCodeData);
	const [authCode, setAuthCode] = useState("");
	const [gradingOption, setGradingOption] = useState("GR");
	const [units, setUnits] = useState("");
	const [courseCodeError, setCourseCodeError] = useState(props.courseCodeError);

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log("form clicked:"+courseCode+" and "+gradingOption)
		setCourseCode("");
		const formData = courseCode;
		props.courseCodeEnroll(formData, gradingOption);
	};

	useEffect(() => {
		setCourseCodeError(props.courseCodeError);
		setCourseCode(props.courseCodeData);
		console.log("set course code to " + props.courseCodeData);
	}, [props.courseCodeError, props.courseCodeData]);

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row className="align-items-center justify-content">
					<Col xl>
						<FloatingLabel
							controlId="course-code"
							label="Course Code"
							className="my-3"
						>
							<Form.Control
								placeholder="Course Code"
								value={courseCode}
								onChange={(e) => setCourseCode(e.target.value)}
							/>
							{courseCodeError ? (
								<>
									<div
										id="validationServer03Feedback"
										className="invalid-feedback"
									>
										Invalid Course Code
									</div>{" "}
								</>
							) : (
								""
							)}
						</FloatingLabel>
					</Col>

					<Col xl>
						<FloatingLabel
							controlId="auth-code"
							label="Auth Code (Optional)"
							className="my-3"
						>
							<Form.Control
								placeholder="Auth Code (Optional)"
								value={authCode}
								onChange={(e) => setAuthCode(e.target.value)}
							/>
						</FloatingLabel>
					</Col>
					<Col xl>
						<FloatingLabel
							controlId="grading-option"
							label="Grading Option"
							className="my-3"
						>
							<Form.Select
								aria-label="Grading option select"
								value={gradingOption}
								onChange={(e) => setGradingOption(e.target.value)}
							>
								<option value="GR">GR</option>
								<option value="P/NP">P/NP</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col xl>
						<FloatingLabel
							controlId="units"
							label="Units (Optional)"
							className="my-3"
						>
							<Form.Control
								placeholder="Units (Optional)"
								value={units}
								onChange={(e) => setUnits(e.target.value)}
							/>
						</FloatingLabel>
					</Col>
					<Col xl={1}>
						<button type="submit" className="my-3 py-1 enrollClassButton w-100">
							Enroll
						</button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

function EnrollSearchForm(props) {
	// const [filterDepartmentText, setFilterDepartmentText] = useState("");

	// const [filterDepartmentText, setFilterDepartmentText] = useState("");

	// const clearfilterDepartmentText = () => {
	//     setFilterDepartmentText("");
	// }
	const [departmentName, setDepartmentName] = useState("");
	const [departmentList, setDepartmentList] = useState(props.departmentList);
	const [courseNum, setCourseNum] = useState("");
	const [geList, setGeList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	const [resultData, setResultData] = useState([]);
	const [searchCourse, setSearchCourse] = useState("");

	const handleInputSearch = (input) => {
		setIsLoading(true);
		const splitQuery = input.split(" ");
		const potentialDepartments = departmentList.filter((dept) =>
			dept.startsWith(splitQuery[0].toUpperCase())
		);
		if (potentialDepartments.length === 0) {
			setOptions([]);
			return;
		}
		const firstPotentialDepartment = potentialDepartments[0].split(" - ")[0];
		console.log(firstPotentialDepartment);
		let url =
			"https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Spring&department=" +
			firstPotentialDepartment;
		if (splitQuery.length === 2) {
			url += "&courseNumber=" + splitQuery[1];
		}

		fetch(url)
			.then((resp) => resp.json())
			.then((res) => {
				// const data = items.filter(() => {

				setSearchResult(res.schools);
				// })
				//console.log(items)
				const data = res.schools[0].departments[0].courses;
				//console.log(data);
				setOptions(data);
				setIsLoading(false);
			});
	};

	const handleSearch = () => {
		setResultData(searchResult);
	};

	useEffect(() => {}, [searchResult, resultData]);

	const addGe = (geName) => {
		setGeList(geList.push(geName));
	};
	const removeGe = (geName) => {
		const newList = geList.filter((ge) => ge != geName);
		setGeList(newList);
	};
	const handleDepartmentName = (name) => {
		//console.log(name);
		setDepartmentName(name);
	};

	const filterDepartmentText = useRef(""); //React.createRef();

	const filterBy = () => true;
	return (
		<>
			<form className="courseSearchForm">
				<div className="courseSearchGroup">
					<AsyncTypeahead
						className="courseSearchBox"
						filterBy={filterBy}
						isLoading={isLoading}
						minLength={1}
						onSearch={handleInputSearch}
						options={options}
						caseSensitive={false}
						labelKey={(option) =>
							`${option.deptCode} ${option.courseNumber}: ${option.courseTitle}`
						}
						//defaultSelected={props.departmentList.slice(0, 1)}
						id="selections-example"
						// labelKey="searchCourse"
						onInputChange={(text, e) => {
							//setSearchCourse(text)
						}}
						//ref={filterDepartmentText}
						//onChange={setFilterDepartmentText}

						placeholder="Search Course"
						// value={filterDepartmentText}
						//selected={filterDepartmentText}
					/>

					<button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							handleSearch();
						}}
						className="searchButton"
					>
						Search
					</button>
				</div>

				<Row className="align-items-end">
					<Col xl={7}>
						<h5>Filter:</h5>
						{GE_CHECKBOXES}
					</Col>
					<Col xl={5}>
						<Typeahead
							className="departmentFilter"
							clearButton={true}
							//defaultSelected={props.departmentList.slice(0, 1)}
							id="selections-example"
							labelKey="departmentName"
							// onInputChange={(text, e) => {
							//     handleDepartmentName(text)
							// }}
							//ref={departmentName}
							onChange={handleDepartmentName}
							options={props.departmentList}
							placeholder="Department"
							// value={filterDepartmentText}
							//selected={filterDepartmentText}
						></Typeahead>
					</Col>
				</Row>
			</form>

			{resultData.length > 0 ? (
				<SoCTable
					data={resultData}
					fillCourseCode={props.fillCourseCode}
					setHighlightCourseCodeData={props.setHighlightCourseCodeData}
				/>
			) : (
				""
			)}
		</>
	);
}

export { Enrollment, EnrollCourseCodeForm, EnrollSearchForm };
