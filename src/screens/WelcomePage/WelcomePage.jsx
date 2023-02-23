import { useState } from "react";
import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
} from "react-bootstrap";
import "./WelcomePage.scss";

function WelcomePage(props) {
	const [major, setMajor] = useState("");

	function processMajor(e) {
		localStorage.setItem("major", major);
	}

	return (
		<Container>
			<Row
				className="justify-content-center align-items-center"
				style={{ minHeight: "80vh" }}
			>
				<Col lg={6}>
					<h1>The New WebReg</h1>
					<p className="mx-0">Please enter your major below:</p>
					<Form onSubmit={processMajor} action="/home">
						<FloatingLabel controlId="major" label="Major" className="mb-3">
							<Form.Control
								placeholder="Major"
								onChange={(e) => setMajor(e.target.value)}
								required
							/>
						</FloatingLabel>
						<Button type="submit" variant="success">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
			<div className="videoContainer">
				<iframe className="videoFrame" />
			</div>
		</Container>
	);
}

export default WelcomePage;
