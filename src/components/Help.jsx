import React, { useState } from "react";
import { Modal, Container, Row, Col, Card, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import help from "../assets/messagequestion.svg";
import anteater from "../assets/anteater.png";

import "./Help.scss";

function Help() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card onClick={handleShow} className="p-5">
				<img src={help} alt="Help icon" width="30" className="m-auto" />
				<p className="mt-2 text-center">Help</p>
			</Card>

			<Modal
				className="help"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Body className="px-3" id="popup-body">
					<Container>
						<Row>
							<Col width="fit-content" style={{ textAlign: "right" }}>
								<CloseButton onClick={handleClose} />
							</Col>
						</Row>
						<Row>
							<Col>
								<Modal.Title className="mx-auto">
									<h2>I would like help with...</h2>
									<img src={anteater} alt="UCI Anteater" width="100" />
								</Modal.Title>
							</Col>
						</Row>
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<h4>Mental Health Resources</h4>
									<p>
										<a href="https://counseling.uci.edu/">
											UCI Counseling Center
										</a>
									</p>
									<p>
										<a href="https://shc.uci.edu/psychiatry-mental-health-services/online-mental-health-services">
											UCI Student Health Center Online Mental Health Resources
										</a>
									</p>
									<p>
										<a href="https://mentalhealthhotline.org/california/">
											California Mental Health Hotline
										</a>
									</p>
									<p>
										<a href="https://www.samhsa.gov/find-help/national-helpline">
											SAMHSA's National Helpline
										</a>
										: 1-800-662-HELP (4357)
									</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<h4>Contacting an Academic Advisor</h4>
									<small>
										Schedule an appointment with an advisor or visit LiveChat!
									</small>
									<br />
									<p>
										<a href="https://www.arts.uci.edu/student-affairs-artschat">
											Claire Trever School of the Arts
										</a>
									</p>
									<p>
										<a href="https://undergraduate.bio.uci.edu/student-affairs/chat/">
											School of Biological Sciences
										</a>
									</p>
									<p>
										<a href="https://merage.uci.edu/programs/undergraduate/index.html">
											The Paul Merage School of Business
										</a>
									</p>
									<p>
										<a href="https://advise.education.uci.edu/contact-us.html">
											School of Education
										</a>
									</p>
									<p>
										<a href="https://undergraduate.eng.uci.edu/advising/zot-chat">
											The Henry Samueli School of Engineering
										</a>
									</p>
									<p>
										<a href="https://www.humanities.uci.edu/undergrad/contact-us">
											School of Humanities
										</a>
									</p>
									<p>
										<a href="https://www.ics.uci.edu/ugrad/livechat.php">
											Donald Bren School of Information & Computer Sciences
										</a>
									</p>
									<p>
										<a href="https://www.law.uci.edu/about/administration/contact-admin.html">
											School of Law
										</a>
									</p>
									<p>
										<a href="http://www.som.uci.edu/contact-us.asp">
											School of Medicine
										</a>
									</p>
									<p>
										<a href="https://nursing.uci.edu/admissions/bs-admissions/">
											Sue and Bill Gross School of Nursing
										</a>
									</p>
									<p>
										<a href="https://pharmsci.uci.edu/student-affairs/">
											School of Pharmacy and Pharmaceutical Sciences
										</a>
									</p>
									<p>
										<a href="https://ps.uci.edu/stuaff/content/live-chat">
											School of Physical Sciences
										</a>
									</p>
									<p>
										<a href="https://students.soceco.uci.edu/pages/zot-chat">
											School of Social Ecology
										</a>
									</p>
									<p>
										<a href="https://www.undergrad.socsci.uci.edu/ssusa/chat.php">
											School of Social Sciences
										</a>
									</p>
									<p>
										<a href="uu.uci.edu/u-u-live-chat">
											Undergraduate/Undeclared
										</a>
									</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<h4>Choosing Classes</h4>
									<Link to="/enrollment">
										<p>ZotPick - choose a class for me</p>
									</Link>
									<Link to="/enrollment">
										<p>View Major Sample Program</p>
									</Link>
									<p>
										<a href="https://www.reg.uci.edu/access/student/degreeworks/?seg=U">
											DegreeWorks
										</a>
									</p>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									<h4>
										<a href="https://uci.service-now.com/sp?id=kb_article_view&sysparm_article=KB0012712">
											Tech Issues
										</a>
									</h4>
								</div>
							</Col>
						</Row>
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Help;
