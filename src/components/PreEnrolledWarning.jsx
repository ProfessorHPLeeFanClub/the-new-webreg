import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/js/dist/tooltip";
import "../css/PreEnrolledWarning.css";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function PreEnrolledWarning(props) {
	return (
		<>
			<Alert variant="warning" className="mt-3 mb-5">
				There are saved courses you haven't enrolled in yet!{" "}
				<Link
					to={{
						pathname: "/saved-courses",
						state: {
							courseList: props.courseList,
							handleEnroll: props.handleEnroll,
						},
					}}
				>
					View
				</Link>
			</Alert>
		</>
	);
}

export default PreEnrolledWarning;
