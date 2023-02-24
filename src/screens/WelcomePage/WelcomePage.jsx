import { useState, useEffect } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	FloatingLabel,
	Form,
	Row,
	Dropdown,
} from "react-bootstrap";
import emailFeature from "../../assets/email-feature.png";
import enrollment from "../../assets/enrollment.png";
import planOfStudy from "../../assets/plan-of-study.png";
import savedCourses from "../../assets/saved-courses.png";
import schedule from "../../assets/schedule.png";
import zotpick from "../../assets/zotpick.png";
import "./WelcomePage.scss";

function WelcomePage(props) {
	const [major, setMajor] = useState("CSE");

	useEffect(() => {
		processMajor();
		console.log(major);
	}, [major]);

	function processMajor(e) {
		localStorage.setItem("major", major);
	}

	return (
		<>
			<div style={{ backgroundColor: "#eee" }}>
				<Container>
					<Row
						className="justify-content-center align-items-center m-0"
						style={{ minHeight: "100vh", backgroundColor: "#eee" }}
					>
						<Col lg={6}>
							<h1>The New WebReg</h1>
							<p style={{ fontSize: "12px" }}>
								Designed by Professor HP Lee Fan Club: <br /> Akshay Kshipra,
								Antoine Nguyen, Gabriel Garcia, Sam Der, Wentao Chen
							</p>
							<p className="mx-0">Please enter your major below:</p>
							<Form onSubmit={processMajor} action="/home">
								<FloatingLabel controlId="major" label="Major" className="mb-3">
									<Form.Control
										as="select"
										placeholder="Major"
										onChange={(e) => setMajor(e.target.value)}
										required
									>
										<option value="CSE">
											Computer Science and Engineering
										</option>
										<option value="CompSci">Computer Science</option>
										<option value="BioSci">Biological Sciences</option>
										<option value="Business">Business</option>
										<option value="MechEng">Mechanical Engineering</option>
										<option value="Psych">Psychology</option>
										<option value="Math">Math</option>
										<option value="Sociology">Sociology</option>
										<option value="English">English</option>
									</Form.Control>
								</FloatingLabel>

								<Button type="submit" variant="success">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className="videoContainer p-5">
				<h2 className="text-center mb-5">Demonstration Video</h2>
				<iframe className="videoFrame" />
			</Container>
			<div style={{ backgroundColor: "#eee" }}>
				<Container className="key-features p-5">
					<h2 className="text-center mb-5">Key Features</h2>
					<Row className="card-row gx-5">
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={enrollment} />
								</div>
								<Card.Body>
									<Card.Title>Enrollment</Card.Title>
									<Card.Text>
										Similar to the old version of WebReg, students are be able
										to conveniently enroll in their classes through this new
										system.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={planOfStudy} />
								</div>
								<Card.Body>
									<Card.Title>Plan of Study</Card.Title>
									<Card.Text>
										The New WebReg asks for your major before accessing the main
										website. This information is used to show the study plan
										specific to your major!
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={zotpick} />
								</div>
								<Card.Body>
									<Card.Title>ZotPick</Card.Title>
									<Card.Text>
										Struggling to choose a class? Let ZotPick do the work for
										you! With a single click of a button, The New WebReg will
										generate a random class offered at UCI.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="card-row gx-5">
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={emailFeature} />
								</div>
								<Card.Body>
									<Card.Title>Helpful Emails</Card.Title>
									<Card.Text>
										The New WebReg sends automatic emails to users reminding
										them of various important dates and deadlines, including
										open enrollment.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={schedule} />
								</div>
								<Card.Body>
									<Card.Title>Interactive Schedule</Card.Title>
									<Card.Text>
										The New WebReg displays the classes you signed up in a
										concise, easy to read format that allows easy dropping and
										grading option changes.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={savedCourses} />
								</div>
								<Card.Body>
									<Card.Title>Saved Courses</Card.Title>
									<Card.Text>
										Interested in a course, but unable to enroll until later?
										The New WebReg allows you to save specific lecture and
										discussion times so that you can enroll in them later with a
										click of a button!
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default WelcomePage;
