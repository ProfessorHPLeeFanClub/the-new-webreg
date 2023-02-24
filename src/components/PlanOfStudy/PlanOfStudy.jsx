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

function getMajorSample(major) {
	switch (major) {
		case "BioSci":
			return <Majors.BioSciSample />;
		case "Business":
			return <Majors.BusinessSample />;
		case "MechEng":
			return <Majors.MechEngSample />;
		case "Psych":
			return <Majors.PsychSample />;
		case "CompSci":
			return <Majors.CompSciSample />;
		case "Math":
			return <Majors.MathSample />;
		case "Sociology":
			return <Majors.SociologySample />;
		case "English":
			return <Majors.EnglishSample />;
		case "CSE":
			return <Majors.CSESample />;
		default:
			return <Majors.CSESample />;
	}
}

function PlanOfStudy(props) {
	return (
		<Accordion defaultActiveKey="0" flush alwaysOpen>
			<Accordion.Item eventKey="0" aria-expanded="true">
				<Accordion.Header>
					<div className="section-header">
						SUGGESTED CLASSES FOR CURRENT QUARTER (YEAR 2 FALL)
					</div>
				</Accordion.Header>
				<Accordion.Body>{getMajorSample(props.major)}</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>
					<div className="section-header">MAJOR REQUIREMENTS</div>
				</Accordion.Header>
				<Accordion.Body>{getMajorPOS(props.major)}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default PlanOfStudy;
