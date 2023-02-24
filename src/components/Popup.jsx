import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import caution from "../assets/caution.svg";
import "./Popup.scss";

function Popup(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div onClick={handleShow}>{props.component}</div>

			<Modal
				className="popup"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Header className="popup-header">
					<Modal.Title className="mx-auto">Logout?</Modal.Title>
				</Modal.Header>
				<Modal.Body className="px-3" id="popup-body">
					<Container>
						<Row>
							<Col md="auto">
								<img src={caution} width="70" />
							</Col>
							<Col>
								<div>
									<p>Logging out will log you out!</p>
									<small>Are you sure you want to log out?</small>
								</div>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer className="popup-footer">
					<Button className="keep-working" onClick={handleClose}>
						Keep Working
					</Button>
					<Button className="log-out" onClick={props.action}>
						Log Out
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Popup;
