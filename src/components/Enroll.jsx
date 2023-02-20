import { Component, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import "../css/Enroll.css"
import $ from "jquery";
import { useEffect } from "react";
//import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import {fetchCourseSearchData} from "../api/fetchData"
import SoCTable from "./SoCTable";
//  import { fetchCourseSearchData } from "../api/fetchData";

function Enrollment(props) {

        

        return (<>
        <div className="enrollmentWindowText">
            Enrollment Window: March 13, 2023
        </div>
        <hr className="hr-text" data-content="Course Code Enrollment"></hr>
        <EnrollCourseCodeForm courseCodeEnroll={props.courseCodeEnroll} 
                              courseCodeError={props.courseCodeError}
                              fillCourseCode={props.fillCourseCode}
                              courseCodeData={props.courseCodeData}
                              highlightCourseCodeData={props.highlightCourseCodeData}
                              setHighlightCourseCodeData={props.setHighlightCourseCodeData}></EnrollCourseCodeForm>
        <hr className="hr-text" data-content="Search Courses"></hr>
        <EnrollSearchForm departmentList={props.departmentList}
                          courseCodeEnroll={props.courseCodeEnroll}
                          fillCourseCode={props.fillCourseCode}
                          setHighlightCourseCodeData={props.setHighlightCourseCodeData}></EnrollSearchForm>

        </>)


}

function EnrollCourseCodeForm(props) {
	// const [courseCode, setCourseCode] = useState();
	// const [authCode, setAuthCode] = useState();
	// const [gradingOption, setGradingOption] = useState();
	// const [units, setUnits] = useState();

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
    }
    useEffect(() => {
        setCourseCodeError(props.courseCodeError);
        setCourseCode(props.courseCodeData);
        console.log("set course code to " + props.courseCodeData);
    }, [props.courseCodeError, props.courseCodeData]);

    

    return (<>
    
    <div onSubmit={handleSubmit} className="enrollCourseCodeForm">
        <form className="hstack gap-3 "> {/* courseCodeForm */}
            
            <div className="form-floating mb-3 courseCodeInput">
                <input value={courseCode} onChange={(e) => setCourseCode(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Course Code</label>
                {courseCodeError ? <>
                    <div id="validationServer03Feedback" className="invalid-feedback">
                        Invalid Course Code
                    </div> </>
                    : ""}
            </div>
            <div className="form-floating mb-3 authCodeInput">
                <input type="text" className="form-control" id="floatingInput" placeholder="" />
                <label htmlFor="floatingInput">Auth Code (Optional)</label>
            </div>
            {/* <select className="form-select form-select-lg gradingOption" aria-label="Default select example">
                <option selected value="GR">GR</option>
                
                <option value="P/NP">P/NP</option>
            </select> */}
					<select
						className="form-select form-select-lg mb-3 gradingOption"
						aria-label="example"
                        defaultValue="GR"
					>
						<option value="GR">
							GR
						</option>

						<option value="P/NP">P/NP</option>
					</select>
					<div className="form-floating mb-3 unitsInput">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Units (Optional)</label>
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
        return
    }
    const firstPotentialDepartment = potentialDepartments[0].split(" - ")[0];
    console.log(firstPotentialDepartment)
    const url = "https://api.peterportal.org/rest/v0/schedule/soc?term=2023%20Spring&department=" + firstPotentialDepartment;
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
        
        setResultData(searchResult)
    }

    useEffect(() => {

    }, [searchResult, resultData]);


    const addGe = (geName) => {
        setGeList(geList.push(geName));
    }
    const removeGe = (geName) => {
        const newList = geList.filter((ge) => ge != geName)
        setGeList(newList);
    }
    const handleDepartmentName = (name) => {
        //console.log(name);
        setDepartmentName(name);
    }
    
    

    const filterDepartmentText = React.useRef(""); //React.createRef();


    const filterBy = () => true;
    return <>
    
    <form className="courseSearchForm">

        <div className="courseSearchGroup">

            {/* <div className="dropdown ">
                <div className="form-floating mb-3 courseSearchBox">
                    <input type="text" className="jAuto form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Search Course</label>
                    
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
            
            <AsyncTypeahead
                    className="courseSearchBox"
                    filterBy={filterBy}
                    isLoading={isLoading}
                    minLength={1}
                    onSearch={handleInputSearch}
                    options={options}
                    caseSensitive={false}
                    labelKey={option => `${option.deptCode} ${option.courseNumber}: ${option.courseTitle}`}
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

            
            <button type="submit" onClick={(e) => {e.preventDefault(); handleSearch()}} className="searchButton">Search</button>
            
        </div>

        <div className="filterSpacing">
            <div className="filterGEs">
                <h5 className="geCol filter">Filter: </h5>
                <div className="geCol ">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckDefault1" />
                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                            GE I
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckChecked5" />
                        <label className="form-check-label" htmlFor="flexCheckChecked5">
                            GE V
                        </label>
                    </div>
                </div>
                <div className="geCol">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckDefault2" />
                        <label className="form-check-label" htmlFor="flexCheckDefault2">
                            GE II
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckChecked6" />
                        <label className="form-check-label" htmlFor="flexCheckChecked6">
                            GE VI
                        </label>
                    </div>
                </div>
                <div className="geCol">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckDefault3" />
                        <label className="form-check-label" htmlFor="flexCheckDefault3">
                            GE III
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckChecked7" />
                        <label className="form-check-label" htmlFor="flexCheckChecked7">
                            GE VII
                        </label>
                    </div>
                </div>
                <div className="geCol">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckDefault4" />
                        <label className="form-check-label" htmlFor="flexCheckDefault4">
                            GE IV
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="ge" value="" id="flexCheckChecked8" />
                        <label className="form-check-label" htmlFor="flexCheckChecked8">
                            GE VIII
                        </label>
                    </div>
                </div>

                

            </div>
            <div className="departmentFilterGroup">
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
                    
                 >     
                </Typeahead>

            </div>
        </div>




    </form>

    {resultData.length > 0 ? (
        <SoCTable data={resultData} 
              fillCourseCode={props.fillCourseCode} 
              setHighlightCourseCodeData={props.setHighlightCourseCodeData}></SoCTable>) 
    : ""}
    
    
    
    </>
}

export { Enrollment, EnrollCourseCodeForm, EnrollSearchForm };
