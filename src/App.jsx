// import "./App.css";
import MyEnrollment from "./screens/myEnrollment";
import ScheduleCalendar from "./components/Calendar";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import SavedCourses from "./components/SavedCourses";
import NotFound from "./screens/notFound";
import Schedule from "./components/Schedule";

function App() {
	return (
		<>
			<Navigation />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
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

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
