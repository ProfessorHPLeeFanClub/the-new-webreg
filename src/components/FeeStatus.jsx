import React, { useState } from "react";
import { Modal, Container, Row, Col, Card, CloseButton } from "react-bootstrap";
import feeStatus from "../assets/dollarcircle.svg";
import caution from "../assets/caution.svg";

import "./Popup.scss";

function FeeStatus() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Card onClick={handleShow} className="p-5">
				<img
					src={feeStatus}
					alt="Fee status icon"
					width="30"
					className="m-auto"
				/>
				<p className="mt-2 text-center">View Fee Status</p>
			</Card>

			<Modal
				className="help"
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Header>
					<CloseButton onClick={handleClose} />
				</Modal.Header>
				<Modal.Body className="px-3" id="popup-body">
					<Container>
						<Row className="align-items-center">
							<Col md="auto">
								<img src={caution} width="70" alt="Warning Sign" />
							</Col>
							<Col>
								<Modal.Title className="mx-auto my-auto">
									<h2>Your fees are: Not Paid</h2>
								</Modal.Title>
							</Col>
						</Row>
						<Row>
							<Col>
								<p>
									Pay your fees here:{" "}
									<a href="https://zotaccount.uci.edu/">ZotAccount</a>
								</p>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default FeeStatus;
