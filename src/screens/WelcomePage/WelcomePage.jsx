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
	const seededSavedCourses = [
		{
			title: "SOCIOL 1",
			titleDesc: "INTRO TO SOCIOLOGY",
			units: "4",
			grading: "GR",
			finalDate: "TBA",
			classes: [
				{
					courseCode: "69000",
					classType: "Lec",
					section: "A",
					units: "4",
					instructor: "WOSICK, K.",
					time: " TBA",
					meetingDay: "",
					meetingTime: "TBA",
					location: "ON LINE",
					enrolled: "0",
					max: "200",
					waitlist: "0",
					status: "OPEN",
				},
				{
					courseCode: "69004",
					classType: "Dis",
					section: "4",
					units: "0",
					instructor: "STAFF\nWOSICK, K.",
					time: "F  9:00- 9:50 ",
					meetingDay: "F",
					meetingTime: " 9:00- 9:50 ",
					location: "ON LINE",
					enrolled: "0",
					max: "33",
					waitlist: "0",
					status: "OPEN",
				},
			],
		},
		{
			title: "ECON 13",
			titleDesc: "GLOBAL ECONOMY",
			units: "4",
			grading: "P/NP",
			finalDate: "TBA",
			classes: [
				{
					name: "ECON 13",
					courseCode: "62000",
					classType: "Lec",
					section: "A",
					units: "4",
					instructor: "SARRAF, G.",
					time: " TBA",
					meetingDay: "",
					meetingTime: "TBA",
					location: "ON LINE",
					enrolled: "0",
					max: "448",
					waitlist: "0",
					status: "OPEN",
				},
				{
					courseCode: "62002",
					classType: "Dis",
					section: "A2",
					units: "0",
					instructor: "STAFF\nSARRAF, G.",
					time: "Tu  8:00- 8:50p",
					location: "SST 220A",
					enrolled: "0",
					max: "50",
					waitlist: "0",
					status: "OPEN",
				},
			],
		},
	];

	localStorage.setItem("savedCourses", JSON.stringify(seededSavedCourses));
	localStorage.setItem("courses", JSON.stringify([]));

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
						style={{ minHeight: "90vh", backgroundColor: "#eee" }}
					>
						<Col lg={6}>
							<h1>The New WebReg</h1>
							<p style={{ fontSize: "12px" }}>
								Designed by the Professor HP Lee Fan Club: <br /> Akshay
								Kshipra, Antoine Nguyen, Gabriel Garcia, Sam Der, Wentao Chen
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
										<option value="Computer Science and Engineering">
											Computer Science and Engineering
										</option>
										<option value="Computer Science">Computer Science</option>
										<option value="Biological Sciences">
											Biological Sciences
										</option>
										<option value="Business">Business</option>
										<option value="Mechanical Engineering">
											Mechanical Engineering
										</option>
										<option value="Psychology">Psychology</option>
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
					<Row>
						<p style={{ textAlign: "center", fontSize: "50px" }}>⮟</p>
					</Row>
				</Container>
			</div>
			<Container className="videoContainer p-5">
				<h2 className="text-center mb-5">Demonstration Video</h2>
				<div className="text-center">
					<iframe
						style={{ textAlign: "center", width: "50vw", height: "60vh" }}
						allowFullScreen={true}
						className="videoFrame"
						src="https://www.youtube.com/embed/I4xXb1eVN2E"
					/>
					<a style={{ display: "block" }} href="https://youtu.be/I4xXb1eVN2E">
						https://youtu.be/I4xXb1eVN2E
					</a>
				</div>
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
								<Card.Body classname="card-body">
									<Card.Title>
										<b>Search & Enroll</b>
									</Card.Title>
									<Card.Text>
										Similar to the old version of WebReg, students are be able
										to conveniently enroll in their classes through this new
										system. Students can now search and filter for courses with
										the integrated Schedule of Classes.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={planOfStudy} />
								</div>
								<Card.Body classname="card-body">
									<Card.Title>
										<b>Plan of Study</b>
									</Card.Title>
									<Card.Text>
										The New WebReg displays the course requirements for your
										major. You can view the recommended courses based on your
										major's sample program.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col lg className="mb-3">
							<Card>
								<div className="img-container">
									<Card.Img variant="top" src={zotpick} />
								</div>
								<Card.Body classname="card-body">
									<Card.Title>
										<b>ZotPick</b>
									</Card.Title>
									<Card.Text>
										Struggling to choose a class? Let ZotPick do the work for
										you! With a single click of a button, The New WebReg will
										generate a random GE offered at UCI.
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
								<Card.Body classname="card-body">
									<Card.Title>
										<b>Helpful Emails</b>
									</Card.Title>
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
								<Card.Body classname="card-body">
									<Card.Title>
										<b>Interactive Schedule</b>
									</Card.Title>
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
								<Card.Body classname="card-body">
									<Card.Title>
										<b>Saved Courses</b>
									</Card.Title>
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
