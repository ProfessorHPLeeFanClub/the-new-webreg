// import "./App.css";
// import CourseBox from "./components/CourseBox";
// import CustomCourseBox from "./components/CustomCourseBox";
// import Enroll from "./components/Enroll";
import MyEnrollment from "./screens/myEnrollment";
// import MainTabs from "./components/MainTabs";
// import NewMainTabs from "./components/NewMainTabs";
import ScheduleCalendar from "./components/Calendar";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/landingPage";
import SavedCourses from "./components/SavedCourses";

function App() {
	return (
		<>
			{/* <MainTabs /> */}
			<Navigation></Navigation>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />}></Route>
					<Route path="/enrollment" element={<MyEnrollment />} />
					<Route path="/calendar" element={<ScheduleCalendar />} />
					<Route path="/saved-courses" element={<SavedCourses />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>

			{/* <Navigation></Navigation>
			<MyEnrollment />
			<ScheduleCalendar></ScheduleCalendar> */}
		</>
	);
}

export default App;
