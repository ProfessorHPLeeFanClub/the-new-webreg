import { useState, useEffect } from "react";
import "../css/SoCTable.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


function SoCTable(props) {

    const [socData, setSocData] = useState(props.data);

    useEffect(() => {
        setSocData(props.data);
    }, [props.data]);

    //console.log(socData);

    const handleEnrollAction = (courseCode) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        //console.log(typeof props.fillCourseCode);
        props.setHighlightCourseCodeData(true)
        props.fillCourseCode(courseCode);
          
    }

    return (
    <>
    <div className="socTableContainer">
        {socData.length > 0 ? (
        <div>
        
            <div className="socTitleContainer">
                <h3 className="socTitle">Schedule of Classes</h3>
            </div>
            <div className="socTableContent">
                {socData.map((school) => {
                    
                    //console.log(school.schoolName);
                    const departments = school.departments;

                    return (<div className="schoolContainer">
                        <div className="schoolContent">
                            <h4>{school.schoolName}</h4>
                            <div dangerouslySetInnerHTML={{ __html: school.schoolComment}} className="schoolComment"></div>
                        </div>
                        {departments.map((dept) => {
                            
                            const courses = dept.courses;

                            return (
                                <div className="departmentContainer">
                                    
                                    <div className="departmentContent">
                                        <div dangerouslySetInnerHTML={{ __html: dept.deptName}} className="departmentName"></div>

                                        <div dangerouslySetInnerHTML={{ __html: dept.deptComment}} className="departmentComment"></div>
                                        {courses.map((course) => {

                                            const sections = course.sections

                                            return (
                                                <div className="tableContainer">
                                                    <div className="className">
                                                        {course.deptCode + " " + course.courseNumber + ": " + course.courseTitle}
                                                        <hr></hr>
                                                    </div>
                                                    <table className="table table-hover table-sm">
                                                    
                                                    <thead>
                                                        
                                                        <tr>
                                                        <th scope="col">Code</th>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">Sec</th>
                                                        <th scope="col">Units</th>
                                                        <th scope="col">Instr</th>
                                                        <th scope="col">Loc</th>
                                                        <th scope="col">Time</th>
                                                        <th scope="col">Finals</th>
                                                        <th scope="col">Max</th>
                                                        <th scope="col">Enr</th>
                                                        <th scope="col">W/L</th>
                                                        <th scope="col">Req</th>
                                                        <th scope="col">Rstr</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {sections.map((sec) => {
                                                            

                                                            return (
                                                                <tr>
                                                                    <th scope="row">{sec.sectionCode}</th>
                                                                    <td>{sec.sectionType}</td>
                                                                    <td>{sec.sectionNum}</td>
                                                                    <td>{sec.units}</td>
                                                                    <td>{sec.instructors.join("\n")}</td>
                                                                    <td>{sec.meetings[0].bldg}</td>
                                                                    <td>{sec.meetings[0].days + sec.meetings[0].time}</td>
                                                                    <td>{sec.finalExam}</td>
                                                                    <td>{sec.maxCapacity}</td>
                                                                    <td>{sec.numCurrentlyEnrolled.totalEnrolled}</td>
                                                                    <td>{sec.numOnWaitlist}</td>
                                                                    <td>{sec.numRequested}</td>
                                                                    <td>{sec.restrictions === "" ? "None" : sec.restrictions}</td>
                                                                    <td>{sec.status === "OPEN" ? (<button className="enrollButton" onClick={() => handleEnrollAction(sec.sectionCode)}>Enroll</button>) : sec.status}</td>
                                                                
                                                                </tr>
                                                            );
                                                        })}

                                                        {/* <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row">3</th>
                                                        <td colspan="2">Larry the Bird</td>
                                                        <td>@twitter</td>
                                                        </tr> */}
                                                    </tbody>
                                                    </table>
                                                </div>
                                                
                                            );
                                        })}

                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>);

                    


                })}
                
            </div>



        </div>
        ) : "" }



        {/* {socData ? (
        <div>
            <div className="socTitleContainer">
                <h3 className="socTitle">Schedule of Classes</h3>
            </div>
            <div>

            </div>



        </div>   
        ) : (
            <div>

            </div>
        
        
        
        )} */}
    </div>
    </>
    );
}

export default SoCTable;