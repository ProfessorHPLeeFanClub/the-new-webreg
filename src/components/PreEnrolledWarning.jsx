import "../css/PreEnrolledWarning.css";
import { Link } from "react-router-dom";

function PreEnrolledWarning(props) {
	return (
		<>
			<Link
				className="warningBox warningBoxContent d-flex p-3 my-3 justify-content-center"
				to={{
					pathname: "/saved-courses",
					state: {
						courseList: props.courseList,
						handleEnroll: props.handleEnroll,
					},
				}}
			>
				<span className="warningBoxContent warningText">
					There are saved courses you have not enrolled in yet!
				</span>
			</Link>
		</>
	);
}

export default PreEnrolledWarning;
