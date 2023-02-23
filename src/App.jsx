// import "./App.css";
import MyEnrollment from "./screens/myEnrollment";
import ScheduleCalendar from "./components/Calendar";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import SavedCourses from "./components/SavedCourses";
import NotFound from "./screens/notFound";
import WelcomePage from "./screens/WelcomePage/WelcomePage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{localStorage.getItem("major") ? (
						<>
							<Route path="/" element={<Navigate to="/welcome" />} />
							<Route
								path="/home"
								element={
									localStorage.getItem("major") ? (
										<>
											<Navigation />
											<LandingPage />
										</>
									) : (
										<Navigate to="/welcome" />
									)
								}
							/>
							<Route
								path="/enrollment"
								element={
									<>
										<Navigation />
										<MyEnrollment isSchedulePage={false} />
									</>
								}
							/>
							<Route
								path="/calendar"
								element={
									<>
										<Navigation />
										<ScheduleCalendar />{" "}
									</>
								}
							/>
							<Route
								path="/saved-courses"
								element={
									<>
										<Navigation />
										<SavedCourses />
									</>
								}
							/>
							<Route
								path="/schedule"
								element={
									<>
										<Navigation />
										<MyEnrollment isSchedulePage={true} />
									</>
								}
							/>
							<Route path="*" element={<NotFound />} />
						</>
					) : null}
					<Route path="/welcome" element={<WelcomePage />}></Route>

					<Route path="*" element={<Navigate to="/welcome" />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
