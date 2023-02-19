import { Tab, Tabs } from "react-bootstrap";
import { Enrollment } from "../Enroll";
import ZotPick from "../ZotPick";
import "./MainTabs.scss";

function PlanOfStudy() {
	return (
		<Tabs defaultActiveKey="enroll" className="pos-tabs">
			<Tab eventKey="enroll" title="Enroll">
				<Enrollment />
			</Tab>
			<Tab eventKey="planofstudy" title="Plan of Study">
				<p>Suggested Classes</p>
			</Tab>
			<Tab eventKey="zotpick" title="ZotPick">
				<ZotPick />
			</Tab>
		</Tabs>
	);
}

export default PlanOfStudy;
