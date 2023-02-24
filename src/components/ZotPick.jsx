import { useState } from "react";
import { Button, Container } from "react-bootstrap";

function ZotPick() {
	const [randomClass, setRandomClass] = useState(null);

	async function getRandomClass() {
		const response = await fetch(
			"https://api.peterportal.org/rest/v0/courses/all"
		);
		const data = await response.json();
		let chosenClass = data[Math.floor(Math.random() * data.length)];
		setRandomClass(chosenClass);
	}

	return (
		<>
			<div className="text-center">
				<h5>Can&apos;t decide what GE to take? Let us help!</h5>
				<p style={{ fontSize: "14px" }}>
					ZotPick searches for a random GE course for <br></br>GE requirements
					you haven't completed.
				</p>
				<Button
					type="button"
					variant="warning"
					onClick={getRandomClass}
					className="mb-5"
				>
					Find a Class!
				</Button>
			</div>
			{randomClass ? (
				<Container>
					<h5 className="fw-bold">
						{randomClass.department +
							" " +
							randomClass.number +
							" - " +
							randomClass.title}
					</h5>
					<p>{randomClass.units[0] + " units"}</p>
					<p>{randomClass.description}</p>
					<p>
						{randomClass.ge_text ? "Satisfies GE " + randomClass.ge_text : ""}
					</p>
				</Container>
			) : null}
		</>
	);
}

export default ZotPick;
