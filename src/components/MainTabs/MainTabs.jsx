import { Tab, Tabs } from "react-bootstrap";
import { Enrollment } from "../Enroll";
import PlanOfStudy from "../PlanOfStudy/PlanOfStudy";
import ZotPick from "../ZotPick";
import "./MainTabs.scss";

function MainTabs() {
	return (
		<Tabs defaultActiveKey="enroll" className="pos-tabs">
			<Tab eventKey="enroll" title="Enroll">
				<Enrollment />
			</Tab>
			<Tab eventKey="planofstudy" title="Plan of Study">
				<PlanOfStudy />
			</Tab>
			<Tab eventKey="zotpick" title="ZotPick">
				<ZotPick />
			</Tab>
		</Tabs>
	);
}

export default MainTabs;
