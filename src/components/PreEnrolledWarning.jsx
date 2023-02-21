import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import "bootstrap/js/dist/tooltip"
import "../css/PreEnrolledWarning.css"
import { Link } from 'react-router-dom';
import SavedCourses from './SavedCourses';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PreEnrolledWarning(props) {


    return (<>
        <div className="warningBox">
            {/* <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">

            </button> */}
            <div className='iconBox'>

            </div>
            <div className="warningText">
                There are saved courses you haven't enrolled in
            </div>
            <Link className="viewButton" 
                  to={{pathname:"/saved-courses", 
                  state:{courseList: props.courseList,
                         handleEnroll: props.handleEnroll}
                  }}>View</Link>
            {/* <button className="viewButton" onClick={""}></button> */}
        </div>
    
    </>)
}



export default PreEnrolledWarning;