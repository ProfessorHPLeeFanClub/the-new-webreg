import "./PlanOfStudy.scss";

import * as Majors from "../../majors";
import { Accordion } from "react-bootstrap";

/*
	List of Majors
		"BioSci"
		"Business"
		"MechEng"
		"Psych"
		"CompSci"
		"Math"
		"Sociology"
		"English"
*/

function getMajorPOS(major) {
	switch (major) {
		case "BioSci":
			return <Majors.BioSciPOS />;
		case "Business":
			return <Majors.BusinessPOS />;
		case "MechEng":
			return <Majors.MechEngPOS />;
		case "Psych":
			return <Majors.PsychPOS />;
		case "CompSci":
			return <Majors.CompSciPOS />;
		case "Math":
			return <Majors.MathPOS />;
		case "Sociology":
			return <Majors.SociologyPOS />;
		case "English":
			return <Majors.EnglishPOS />;
		case "CSE":
			return <Majors.CSEPOS />;
		default:
			return <Majors.CSEPOS />;
	}
}

function getMajorSample(major, handleTabSelect) {
	switch (major) {
		case "Biological Sciences":
			return <Majors.BioSciSample handleTabSelect={handleTabSelect} />;
		case "Business":
			return <Majors.BusinessSample handleTabSelect={handleTabSelect} />;
		case "Mechanical Engineering":
			return <Majors.MechEngSample handleTabSelect={handleTabSelect} />;
		case "Psychology":
			return <Majors.PsychSample handleTabSelect={handleTabSelect} />;
		case "Computer Science":
			return <Majors.CompSciSample handleTabSelect={handleTabSelect} />;
		case "Math":
			return <Majors.MathSample handleTabSelect={handleTabSelect} />;
		case "Sociology":
			return <Majors.SociologySample handleTabSelect={handleTabSelect} />;
		case "English":
			return <Majors.EnglishSample handleTabSelect={handleTabSelect} />;
		case "Computer Science and Engineering":
			return <Majors.CSESample handleTabSelect={handleTabSelect} />;
		default:
			return <Majors.CSESample handleTabSelect={handleTabSelect} />;
	}
}

function PlanOfStudy(props) {
	return (
		<>
			<h4 style={{ marginBottom: "15px" }}>{localStorage.major}</h4>

			<div className="posBox">
				<Accordion defaultActiveKey="0" flush alwaysOpen>
					<Accordion.Item eventKey="0" aria-expanded="true">
						<Accordion.Header>
							<div className="section-header">
								SUGGESTED CLASSES FOR CURRENT QUARTER (YEAR 2 FALL)
							</div>
						</Accordion.Header>
						<Accordion.Body>
							{getMajorSample(props.major, props.handleTabSelect)}
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<div className="section-header">MAJOR REQUIREMENTS</div>
						</Accordion.Header>
						<Accordion.Body className="posContainer">
							{getMajorPOS(props.major)}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</>
	);
}

export default PlanOfStudy;
