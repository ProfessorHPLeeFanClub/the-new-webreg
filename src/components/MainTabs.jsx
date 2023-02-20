import { Tab, Tabs } from "react-bootstrap";
import { Enrollment } from "./Enroll";

function MainTabs(props) {
	return (
		<Tabs defaultActiveKey="enroll" id="pos-tabs">
			<Tab eventKey="enroll" title="Enroll">
                <Enrollment courseCodeEnroll={props.courseCodeEnroll} 
                            courseCodeError={props.courseCodeError} 
                            departmentList={props.departmentList}
                            fillCourseCode={props.fillCourseCode}
                            courseCodeData={props.courseCodeData}
                            highlightCourseCodeData={props.highlightCourseCodeData}
                            setHighlightCourseCodeData={props.setHighlightCourseCodeData}></Enrollment>
			</Tab>
			<Tab eventKey="planofstudy" title="Plan of Study">
				<p>Suggested Classes</p>
			</Tab>
			<Tab eventKey="zotpick" title="ZotPick">
				<p>Pick a class for me!</p>
			</Tab>
		</Tabs>
	);
}

export default MainTabs;
