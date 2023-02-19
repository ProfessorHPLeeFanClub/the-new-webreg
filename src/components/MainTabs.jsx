import { Tab, Tabs } from "react-bootstrap";

function PlanOfStudy() {
	return (
		<Tabs defaultActiveKey="enroll" id="pos-tabs" className="">
			<Tab eventKey="enroll" title="Enroll">
				<p>Search</p>
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

export default PlanOfStudy;
