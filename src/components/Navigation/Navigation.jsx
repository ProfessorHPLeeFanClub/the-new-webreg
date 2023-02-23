import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import uci from "../../assets/uci.svg";
import "./Navigation.scss";

function Navigation() {
	return (
		<>
			{window.location.pathname === "/welcome" ? (
				""
			) : (
				<Navbar id="navbar" variant="dark" expand="lg">
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
									<Nav.Link href="/welcome" className="navLink logoutLink">
										Logout
									</Nav.Link>
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
