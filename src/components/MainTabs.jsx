import { Tab, Tabs } from "react-bootstrap";
import { Enrollment } from "./Enroll";
import "../css/MainTabs.css"

function MainTabs(props) {
    return (
    <>
    
    <div className="mainTabs">

        
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active contentBox" id="home" role="tabpanel" aria-labelledby="home-tab">
                
                <Enrollment courseCodeEnroll={props.courseCodeEnroll} 
                            courseCodeError={props.courseCodeError} 
                            departmentList={props.departmentList}
                            fillCourseCode={props.fillCourseCode}
                            courseCodeData={props.courseCodeData}
                            highlightCourseCodeData={props.highlightCourseCodeData}
                            setHighlightCourseCodeData={props.setHighlightCourseCodeData}></Enrollment>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>

    </div>
    
    </>
    );
}

export default MainTabs;