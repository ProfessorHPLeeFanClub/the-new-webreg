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
    const [courseList , setCourseList] = useState(props.courseList)

   useEffect(() => {
        //console.log("in use effect!");
        //console.log(courseList);
        setCourseList(props.courseList);


   }, [props.courseList]) //JSON.stringify(props.courseList), 

    //console.log(JSON.stringify(courseList))
    

    return <>
        <div className="scheduleList">

            {courseList.length == 0 ? (<div className="emptySchedule">No Courses</div>) : courseList.map((courseInfo) => {
                //console.log("in schedule map")
                
                return (<div className="scheduleItem">
                <CustomCourseBox 
                    allowButtons={props.allowButtons}
                    title={courseInfo.title}
                    units={courseInfo.units}
                    titleDesc={courseInfo.titleDesc}
                    grading={courseInfo.grading}
                    finalDate={courseInfo.finalDate}
                    classes={courseInfo.classes}
                    dropCourse={props.dropCourse}>
                </CustomCourseBox>
                </div>)
            })
            
            }
            
        </div>
    </>


}

export default Schedule;