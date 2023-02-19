// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../css/Enroll.css";
//import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

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
			<h2 className="enrollmentWindowText">
				Enrollment Window: March 13, 2023
			</h2>
			<hr className="hr-text" data-content="Course Code Enrollment" />
			<EnrollCourseCodeForm />
			<hr className="hr-text" data-content="Search Courses" />
			<EnrollSearchForm departmentList={props.departmentList} />
		</>
	);
}

function EnrollCourseCodeForm() {
	const [courseCode, setCourseCode] = useState("");
	const [authCode, setAuthCode] = useState("");
	const [gradingOption, setGradingOption] = useState("GR");
	const [units, setUnits] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		console.log(courseCode);
		console.log(authCode);
		console.log(gradingOption);
		console.log(units);
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row className="justify-content-center align-items-center">
					<Col lg className="my-3">
						<FloatingLabel controlId="course-code" label="Course Code">
							<Form.Control
								type="text"
								placeholder="12345"
								onChange={(e) => setCourseCode(e.target.value)}
								value={courseCode}
							/>
						</FloatingLabel>
					</Col>
					<Col lg className="my-3">
						<FloatingLabel controlId="auth-code" label="Auth Code (Optional)">
							<Form.Control
								type="text"
								placeholder="1234"
								onChange={(e) => setAuthCode(e.target.value)}
								value={authCode}
							/>
						</FloatingLabel>
					</Col>
					<Col lg className="my-3">
						<FloatingLabel controlId="grading-option" label="Grading Option">
							<Form.Select
								aria-label="Grading option select menu"
								value={gradingOption}
								onChange={(e) => setGradingOption(e.target.value)}
							>
								<option value="GR">GR</option>
								<option value="P/NP">P/NP</option>
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col lg className="my-3">
						<FloatingLabel controlId="units" label="Units (Optional)">
							<Form.Control
								type="number"
								placeholder="1234"
								onChange={(e) => setUnits(e.target.value)}
								value={units}
							/>
						</FloatingLabel>
					</Col>
					<Col lg={1} className="my-3">
						<Button type="submit" variant="success">
							Enroll
						</Button>
					</Col>
				</Row>
			</Form>
		</>
	);
}

function EnrollSearchForm(props) {
	// const [filterDepartmentText, setFilterDepartmentText] = useState("");

	// const clearfilterDepartmentText = () => {
	//     setFilterDepartmentText("");
	// }
	const filterDepartmentText = React.createRef();

	return (
		<>
			<Form>
				{/* <div className="dropdown ">
                <div className="form-floating mb-3 courseSearchBox">
                    <input type="text" className="jAuto form-control" id="floatingInput" placeholder="" />
                    <label for="floatingInput">Search Course</label>
                    
                </div>
                <div className="dropdown-menu">
                    <i className="hasNoResults">No matching results</i>
                    <div className="list-autocomplete">
                        <button type="button" className="dropdown-item">01 - Alpha  Barbuda</button>
                        <button type="button" className="dropdown-item">02 - Charlie Alpha</button>
                        <button type="button" className="dropdown-item">03 - Bravo Alpha</button>
                        <button type="button" className="dropdown-item">04 - Delta</button>
                    </div>
                    <button type="button" className="btn-extra">Custom button</button>
                </div>
            </div>  */}
				<Row className="mb-3 justify-content-center align-items-center">
					<Typeahead
						//defaultSelected={props.departmentList.slice(0, 1)}
						id="selections-example"
						labelKey="searchCourse"
						// onInputChange={(text, e) => {
						// setFilterDepartmentText(text)
						// }}
						ref={filterDepartmentText}
						//onChange={setFilterDepartmentText}
						options={[]}
						placeholder="Search Course"
						// value={filterDepartmentText}
						//selected={filterDepartmentText}
					/>
				</Row>

				<Row>
					<Col lg={8}>
						<h5>Filter:</h5>
						{GE_CHECKBOXES}
					</Col>
					<Col lg={4}>
						<Typeahead
							className="departmentFilter"
							//defaultSelected={props.departmentList.slice(0, 1)}
							id="selections-example"
							labelKey="departmentName"
							// onInputChange={(text, e) => {
							// setFilterDepartmentText(text)
							// }}
							ref={filterDepartmentText}
							//onChange={setFilterDepartmentText}
							options={props.departmentList}
							placeholder="Department"
							// value={filterDepartmentText}
							//selected={filterDepartmentText}
						/>
						{/* <button onClick={() => filterDepartmentText.current.clear()}>
                    Clear
                </button> */}
						<input
							className="departmentFilterClearButton"
							onClick={() => filterDepartmentText.current.clear()}
							type="button"
							value="🗙"
						/>
					</Col>
				</Row>
			</Form>
		</>
	);
}

export { Enrollment, EnrollCourseCodeForm, EnrollSearchForm };
