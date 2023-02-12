import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./screens/LandingPage/LandingPage";
import NotFound from "./screens/notFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
		errorElement: <NotFound />,
		// children: [
		// 	{
		// 		path: "enrollment",
		// 	}
		// ]
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Navigation />
		<RouterProvider router={router} />
	</React.StrictMode>
);
