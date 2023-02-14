import Container from "react-bootstrap/Container";

function NotFound() {
	return (
		<Container
			style={{
				height: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<h1>404 Not Found</h1>
			<p>The page you are searching for does not exist!</p>
		</Container>
	);
}

export default NotFound;
