import { useEffect, useState } from "react";
import CustomCourseBox from "./CustomCourseBox";
import "../css/Schedule.css"


function Schedule(props) {
    // const [courseList, setCourseList] = useState([]);

    // useEffect(() => {
    //     setCourseList(props.courseList);
    // });
    // function addCourse(courseInfo) {
    //     setCourseList(courseList.push(courseInfo));
    // }
    console.log("schedule courseList length:")
    console.log(props.courseList.length);
    

    return <>
        <div className="scheduleList">

        
            {props.courseList.map((courseInfo) => {
                // console.log("in schedule map")
                // console.log(courseInfo);
                return (<div className="scheduleItem">
                <CustomCourseBox 
                    title={courseInfo.title}
                    units={courseInfo.units}
                    grading={courseInfo.grading}
                    finalDate={courseInfo.finalDate}
                    classes={courseInfo.classes}>
                </CustomCourseBox>
                </div>)
            })}
        </div>
    </>


}

export default Schedule;