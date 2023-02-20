import "./PlanOfStudy.scss";

import { PsychPOS, PsychSample } from "../../majors";
import { Container, Row, Accordion } from "react-bootstrap";

function PlanOfStudy() {
	return (
		<Container id="list-view">
			<Row>
				<Accordion defaultActiveKey="0" flush alwaysOpen>
					<Accordion.Item eventKey="0" aria-expanded="true">
						<Accordion.Header>
							<div className="section-header">
								SUGGESTED CLASSES FOR CURRENT QUARTER (YEAR 2 FALL)
							</div>
						</Accordion.Header>
						<Accordion.Body>
							<PsychSample />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>
							<div className="section-header">MAJOR REQUIREMENTS</div>
						</Accordion.Header>
						<Accordion.Body>
							<PsychPOS />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Row>
		</Container>
	);
}

export default PlanOfStudy;
