import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../css/Enroll.css";
//import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import React from "react";

function Enrollment(props) {
	return (
		<>
			<div className="enrollmentWindowText">
				Enrollment Window: March 13, 2023
			</div>
			<hr class="hr-text" data-content="Course Code Enrollment"></hr>
			<EnrollCourseCodeForm></EnrollCourseCodeForm>
			<hr class="hr-text" data-content="Search Courses"></hr>
			<EnrollSearchForm
				departmentList={props.departmentList}
			></EnrollSearchForm>
		</>
	);
}

function EnrollCourseCodeForm(props) {
	const [courseCode, setCourseCode] = useState();
	const [authCode, setAuthCode] = useState();
	const [gradingOption, setGradingOption] = useState();
	const [units, setUnits] = useState();

	var handleSubmit = props.handleCourseCodeSubmit;

	return (
		<>
			<div onSubmit={handleSubmit} className="enrollCourseCodeForm">
				<form className="hstack gap-3 ">
					{" "}
					{/* courseCodeForm */}
					<div className="form-floating mb-3 courseCodeInput">
						<input
							type="text"
							class="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label for="floatingInput">Course Code</label>
					</div>
					<div className="form-floating mb-3 authCodeInput">
						<input
							type="text"
							class="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label for="floatingInput">Auth Code (Optional)</label>
					</div>
					{/* <select className="form-select form-select-lg gradingOption" aria-label="Default select example">
                <option selected value="GR">GR</option>
                
                <option value="P/NP">P/NP</option>
            </select> */}
					<select
						className="form-select form-select-lg mb-3 gradingOption"
						aria-label="example"
					>
						<option selected value="GR">
							GR
						</option>

						<option value="P/NP">P/NP</option>
					</select>
					<div className="form-floating mb-3 unitsInput">
						<input
							type="text"
							class="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label for="floatingInput">Units (Optional)</label>
					</div>
					<div className="submitButton">
						<input type="submit" className="enrollButton" value="Enroll" />
					</div>
				</form>
			</div>
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
			<form className="courseSearchForm">
				<div className="courseSearchGroup">
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
					<Typeahead
						className="courseSearchBox"
						//defaultSelected={props.departmentList.slice(0, 1)}
						id="selections-example"
						labelKey="searchCourse"
						onInputChange={(text, e) => {
							// setFilterDepartmentText(text)
						}}
						ref={filterDepartmentText}
						//onChange={setFilterDepartmentText}
						options={[]}
						placeholder="Search Course"
						// value={filterDepartmentText}
						//selected={filterDepartmentText}
					/>

					<input type="submit" className="searchButton" value="Search" />
				</div>

				<div className="filterSpacing">
					<div className="filterGEs">
						<h5 className="geCol filter">Filter: </h5>
						<div className="geCol ">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									GE I
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckChecked"
								/>
								<label class="form-check-label" for="flexCheckChecked">
									GE V
								</label>
							</div>
						</div>
						<div className="geCol">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									GE II
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckChecked"
								/>
								<label class="form-check-label" for="flexCheckChecked">
									GE VI
								</label>
							</div>
						</div>
						<div className="geCol">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									GE III
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckChecked"
								/>
								<label class="form-check-label" for="flexCheckChecked">
									GE VII
								</label>
							</div>
						</div>
						<div className="geCol">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="form-check-label" for="flexCheckDefault">
									GE IV
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckChecked"
								/>
								<label class="form-check-label" for="flexCheckChecked">
									GE VIII
								</label>
							</div>
						</div>
					</div>
					<div className="departmentFilterGroup">
						<Typeahead
							className="departmentFilter"
							//defaultSelected={props.departmentList.slice(0, 1)}
							id="selections-example"
							labelKey="departmentName"
							onInputChange={(text, e) => {
								// setFilterDepartmentText(text)
							}}
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
						{/* <input onClick={clearfilterDepartmentText} type="button"></input> */}
					</div>
				</div>
			</form>
		</>
	);
}

export { Enrollment, EnrollCourseCodeForm, EnrollSearchForm };
