import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import uci from "../../assets/uci.svg";
import "./Navigation.scss";

function Navigation() {
	return (
		<Navbar id="navbar" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
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
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/enrollment">My Enrollment</Nav.Link>
						<Nav.Link href="/">Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
