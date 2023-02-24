import { Tab, Tabs } from "react-bootstrap";
import { Enrollment } from "../Enroll";
import PlanOfStudy from "../PlanOfStudy/PlanOfStudy";
import ZotPick from "../ZotPick";
import "./MainTabs.scss";

function MainTabs(props) {
	return (
		<Tabs defaultActiveKey="enroll" className="pos-tabs">
			<Tab eventKey="enroll" title="Enroll">
				<Enrollment
					courseCodeEnroll={props.courseCodeEnroll}
					courseCodeError={props.courseCodeError}
					departmentList={props.departmentList}
					fillCourseCode={props.fillCourseCode}
					courseCodeData={props.courseCodeData}
					highlightCourseCodeData={props.highlightCourseCodeData}
					setHighlightCourseCodeData={props.setHighlightCourseCodeData}
				/>
			</Tab>
			<Tab eventKey="planofstudy" title="Plan of Study">
				<PlanOfStudy major={localStorage.major} />
			</Tab>
			<Tab eventKey="zotpick" title="ZotPick">
				<ZotPick />
			</Tab>
		</Tabs>
	);
}

export default MainTabs;
