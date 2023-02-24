import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../../assets/book.svg";
import enrollment from "../../assets/bill.svg";
import "./LandingPage.scss";
import Help from "../../components/Help";
import FeeStatus from "../../components/FeeStatus";

function Landing() {
	return (
		<Container className="landing">
			<h1 className="my-5 text-center">Welcome to WebReg</h1>
			<Row className="mb-5 enrollment">
				<Col lg={4} className="m-auto text-center">
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
				<Col lg={4} className="my-2">
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
				<Col lg={4} className="my-2">
					<FeeStatus />
				</Col>
				<Col lg={4} className="my-2">
					<Help />
				</Col>
			</Row>
		</Container>
	);
}

export default Landing;
