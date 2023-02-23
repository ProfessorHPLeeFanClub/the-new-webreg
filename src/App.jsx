// import "./App.css";
import MyEnrollment from "./screens/myEnrollment";
import ScheduleCalendar from "./components/Calendar";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import SavedCourses from "./components/SavedCourses";
import NotFound from "./screens/notFound";
import Schedule from "./components/Schedule";
import WelcomePage from "./screens/WelcomePage/WelcomePage";

function App() {
	return (
		<>
			<Navigation />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/welcome" />} />
					<Route
						path="/home"
						element={
							localStorage.getItem("major") ? (
								<LandingPage />
							) : (
								<Navigate to="/welcome" />
							)
						}
					/>
					<Route
						path="/enrollment"
						element={<MyEnrollment isSchedulePage={false} />}
					/>
					<Route path="/calendar" element={<ScheduleCalendar />} />
					<Route path="/saved-courses" element={<SavedCourses />} />
					<Route
						path="/schedule"
						element={<MyEnrollment isSchedulePage={true} />}
					/>
					<Route path="/welcome" element={<WelcomePage />}></Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
