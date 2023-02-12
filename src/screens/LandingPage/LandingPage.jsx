import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../../assets/book.svg";
import feeStatus from "../../assets/dollarcircle.svg";
import help from "../../assets/messagequestion.svg";
import enrollment from "../../assets/bill.svg";
import "./LandingPage.scss";

function Landing() {
	return (
		<Container className="landing">
			<h1 className="my-5 text-center">Welcome to WebReg</h1>
			<Row className="mb-5 enrollment">
				<Col md={4} className="m-auto text-center">
					<Card>
						<div className="d-inline-block w-100 p-3 header">
							<img
								src={enrollment}
								alt="Enrollment window icon"
								width="30"
								className="d-inline"
							/>
							<span className="d-inline">Enrollment Window</span>
						</div>
						<div className="p-3 body">
							<p>March 13, 2023</p>
							<small>Monday at 9:00am PST</small>
						</div>
					</Card>
				</Col>
			</Row>
			<Row className="gx-5 justify-content-center align-items-center">
				<Col md={4} className="my-2">
					<Link to="/enrollment">
						<Card className="p-5">
							<img
								src={book}
								alt="Enrollment book icon"
								width="30"
								className="m-auto"
							/>
							<p className="mt-2 text-center">My Enrollment</p>
						</Card>
					</Link>
				</Col>
				<Col md={4} className="my-2">
					<Link to="/fee-status">
						<Card className="p-5">
							<img
								src={feeStatus}
								alt="Fee status icon"
								width="30"
								className="m-auto"
							/>
							<p className="mt-2 text-center">View Fee Status</p>
						</Card>
					</Link>
				</Col>
				<Col md={4} className="my-2">
					<Link to="/help">
						<Card className="p-5">
							<img src={help} alt="Help icon" width="30" className="m-auto" />
							<p className="mt-2 text-center">Help</p>
						</Card>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}

export default Landing;
