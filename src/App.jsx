// import "./App.css";
import MyEnrollment from "./screens/myEnrollment";
import ScheduleCalendar from "./components/Calendar";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
	return (
		<>
			<Navigation />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/enrollment" element={<MyEnrollment />} />
					<Route path="/calendar" element={<ScheduleCalendar />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
