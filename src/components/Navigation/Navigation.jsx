import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import Popup from "../Popup";
import uci from "../../assets/uci.svg";
import "./Navigation.scss";

function Navigation() {
	const logoutFunction = () => {
		window.location.pathname = "/";
	};

	var logoutLink = <Nav.Link className="navLink logoutLink">Logout</Nav.Link>;

	return (
		<>
			{window.location.pathname === "/welcome" ? (
				""
			) : (
				<Navbar id="navbar" variant="dark" expand="xl">
					<Container fluid>
						<Navbar.Brand href="/home">
							<Row className="align-items-center">
								<Col>
									<img src={uci} alt="UCI logo" />
								</Col>
								<Col>
									<Navbar.Text>
										University of California, Irvine <br /> WebReg
									</Navbar.Text>
								</Col>
							</Row>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								<div className="">
									<Nav.Link href="/home" className="navLink">
										Home
									</Nav.Link>
								</div>
								<div>
									<Nav.Link href="/enrollment" className="navLink">
										My Enrollment
									</Nav.Link>
								</div>
								<div>
									<Nav.Link href="/schedule" className="navLink">
										My Schedule
									</Nav.Link>
								</div>
								<div>
									<Nav.Link href="/calendar" className="navLink">
										My Calendar
									</Nav.Link>
								</div>
								<div>
									<Popup component={logoutLink} action={logoutFunction}></Popup>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			)}
		</>
	);
}

export default Navigation;
