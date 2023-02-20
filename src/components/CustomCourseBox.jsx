import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';

// import "../css/CourseBox";
import "../css/CourseBox.css";
//import "../../public/js/CourseBox"
function CustomCourseBox(props) {

    const [title, setTitle] = useState(props.title);
    const [units, setUnits] = useState(props.units);
    const [titleDesc, setTitleDesc] = useState(props.titleDesc);
    const [grading, setGrading] = useState(props.grading);
    const [finalDate, setFinalDate] = useState(props.finalDate);
    const [classes, setClasses] = useState(props.classes);
    // var title = props.title;
    // var units = props.units;
    // var grading = props.grading;
    // var finalDate = props.finalDate;
    // var classes = props.classes
    useEffect(() => {
        // console.log(props.title);
        // console.log(props.units);
        // console.log(props.grading);
        // console.log(props.finalDate);
        // console.log(props.classes)
        setTitle(props.title);
        setUnits(props.units);
        setTitleDesc(props.titleDesc);
        setGrading(props.grading);
        setFinalDate(props.finalDate);
        setClasses(props.classes)
    }, [props.title,
        props.units,
        props.titleDesc,
        props.grading,
        props.finalDate,
        props.classes]);

    const handleDrop = (courseCode) => {
        console.log("dropping: " +  courseCode);
        props.dropCourse(courseCode);
    }

    const handleEnroll = (courseCode) => {
        console.log("enrolling from saved: " + courseCode);
        props.courseCodeEnroll(courseCode);
    }
    

    return (<>
        <div className='courseBox justify-content-between'>
            <div className='courseTitleBox'>
                <div className='courseTitle'>
                    {title}
                </div>
                <div className="vr"></div>
                <div className='courseTitleInfo'>
                    {titleDesc}
                </div>
                <div className="vr"></div>
                <div className='courseTitleInfo'>
                    {grading}
                </div>
                <div className='courseTitleInfo finalInfo'>
                    Final: {finalDate}
                </div>
            </div>
            <div className='courseContentBox justify-content-center'>
            <table className="table table-sm align-middle table-borderless">
                        <thead>
                            <tr>
                            <th scope="col" className='courseTableTitles'>Code</th>
                            <th scope="col" className='courseTableTitles'>Type</th>
                            <th scope="col" className='courseTableTitles'>Sec</th>
                            <th scope="col" className='courseTableTitles'>Unit</th>
                            <th scope="col" className='courseTableTitles'>Instr</th>
                            <th scope="col" className='courseTableTitles'>Time</th>
                            <th scope="col" className='courseTableTitles'>Loc</th>
                            <th scope="col" className='courseTableTitles'>Max</th>
                            <th scope="col" className='courseTableTitles'>Enr</th>
                            <th scope="col" className='courseTableTitles'>WL</th>
                            
                            {/* <th scope="col">ENROLL</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((classInfo) => {
                                return (
                                <tr>
                                    <th scope="row">{classInfo.courseCode}</th>
                                    <td>{classInfo.classType}</td>
                                    <td>{classInfo.section}</td>
                                    <td>{classInfo.units}</td>
                                    <td>{classInfo.instructor}</td>
                                    <td>{classInfo.time}</td>
                                    <td>{classInfo.location}</td>
                                    <td>{classInfo.max}</td>
                                    <td>{classInfo.enrolled}</td>
                                    <td>{classInfo.waitlist}</td>
                                    {props.allowButtons ? (
                                    <td className='d-flex justify-content-center'>

                                        <div className='hstack gap-2'>
                                            <button className="dropButton"
                                                    onClick={() => handleDrop(classInfo.courseCode)}
                                                    ><b>Drop</b></button>
                                            <button className="changeButton" ><b>Change</b></button>

                                        </div>
                                            
                                    </td>) : ""}
                                    {props.allowEnroll ? (
                                            <td className='d-flex justify-content-center'>

                                            <div className='hstack gap-2'>
                                                <button className="enrollButton"
                                                        onClick={() => handleEnroll(classInfo.courseCode)}
                                                        ><b>Enroll</b></button>
                                            </div>
                                            
                                        </td>
                                    ) : "" }
                                    
                                </tr>);
                            })}
                            {/* <tr>
                                <th scope="row">49209</th>
                                <td>Lec</td>
                                <td>A</td>
                                <td>4</td>
                                <td>HP Lee</td>
                                <td>MWF 4:00-4:50pm</td>
                                <td>DBH 1600</td>
                                <td>112</td>
                                <td>112</td>
                                <td>5</td>
                                <td className='d-flex justify-content-center'>
                                    <div className='hstack gap-2'>
                                        <button class="dropButton" ><b>Drop</b></button>
                                        <button class="changeButton" ><b>Change</b></button>
                                    
                                    </div>
                                        
                                </td>
                                
                            </tr>
                            <tr>
                                <th scope="row">49210</th>
                                <td>Dis</td>
                                <td>A</td>
                                <td>0</td>
                                <td>STAFF</td>
                                <td>F 1:00-1:50pm</td>
                                <td>MSTB 124</td>
                                <td>31</td>
                                <td>31</td>
                                <td>5</td>
                                <td className='d-flex justify-content-center'>
                                    <div className='hstack gap-2'>
                                        <button class="dropButton" ><b>Drop</b></button>
                                        <button class="changeButton" ><b>Change</b></button>
                                    </div>
                                </td>
                                                            
                            </tr> */}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default CustomCourseBox;
