import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import caution from "../assets/caution.svg";
import "bootstrap/js/dist/tooltip";
import "../css/PreEnrolledWarning.css";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function PreEnrolledWarning(props) {
	return (
		<>
			<Link
				className="warningBox"
				to={{
					pathname: "/saved-courses",
					state: {
						courseList: props.courseList,
						handleEnroll: props.handleEnroll,
					},
				}}
			>
				<div className="warningBoxContent">
					<div className="warningText">
						There are saved courses you haven't enrolled in yet!{" "}
					</div>

					<a className="viewButton">View</a>
				</div>
			</Link>
		</>
	);
}

export default PreEnrolledWarning;
