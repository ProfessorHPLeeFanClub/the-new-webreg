import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// import "../css/CourseBox";
import "../css/CourseBox.css";
//import "../../public/js/CourseBox"
function CustomCourseBox(props) {

    var title = props.title;
    var units = props.units;
    var grading = props.grading;
    var finalDate = props.finalDate;
    var classes = props.classes

    console.log("in custom ")
    console.log(props);
    


    return (<>
        <div className='courseBox justify-content-between'>
            <div className='courseTitleBox'>
                <div className='courseTitle'>
                    {title}
                </div>
                <div class="vr"></div>
                <div className='courseTitleInfo'>
                    {units} units
                </div>
                <div class="vr"></div>
                <div className='courseTitleInfo'>
                    {grading}
                </div>
                <div className='courseTitleInfo finalInfo'>
                    Final: {finalDate}
                </div>
            </div>
            <div className='courseContentBox justify-content-center'>
            <table class="table table-sm align-middle table-borderless">
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
                                    <td>{classInfo.enrolled}</td>
                                    <td>{classInfo.max}</td>
                                    <td>{classInfo.waitlist}</td>
                                    <td className='d-flex justify-content-center'>
                                        <div className='hstack gap-2'>
                                            <button class="dropButton" ><b>Drop</b></button>
                                            <button class="changeButton" ><b>Change</b></button>
                                        
                                        </div>
                                            
                                    </td>
                                    
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

    </>);
}



export default CustomCourseBox;