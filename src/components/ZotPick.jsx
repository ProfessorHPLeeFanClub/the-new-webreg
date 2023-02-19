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
				<h5>Can&apos;t decide what classes to take? Let us help!</h5>
				<Button
					type="button"
					variant="warning"
					onClick={getRandomClass}
					className="mb-5"
				>
					Find a class!
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
					<Button type="button" variant="success">
						Go Enroll!
					</Button>
				</Container>
			) : null}
		</>
	);
}

export default ZotPick;
