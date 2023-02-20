// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap';
// import "../css/CourseBox.scss";
// // import "../css/CourseBox";
// import "../css/CourseBox.css";
// //import "../../public/js/CourseBox"
// function CourseBox(props) {



//     const styles = {
//         outerBox: {
//             margin: "150px",
            
//         },
//         innerBox: {
//             width: "45%",
//             height: "200px",
//             backgroundColor: "blue"
//         },
//         titleBox: {

//         },
//         contentBox: {

//         },
//         final: {
//             fontWeight: 'bold',
//         },
//         courseName: {
//             fontWeight: 'bold',
//             fontSize: 18
//         },
//         titleInfoSpacing: {
            
//         },
//         contentText: {
//             verticalAlign: "middle",
//             fontSize: 14
//         },
//         btnXs: {
//             padding: ".4rem .4rem",
//             fontSize: ".875rem",
//             lineHeight: ".9",
//             borderRadius: ".2rem",
//           }

//     }


//     return (<>
//         <div style={styles.outerBox}>
//             <button class="courseAccordion">Section 1</button>
//             <div class="panel">
//             <p>Lorem ipsum...</p>
//             </div>

//             <button class="courseAccordion">Section 2</button>
//             <div class="panel">
//             <p>Lorem ipsum...</p>
//             </div>

//             <button class="courseAccordion">Section 3</button>
//             <div class="panel">
//             <p>Lorem ipsum...</p>
//         </div> 

//         <div class="courseBox">
//             <div class="courseBoxHeader">

//             </div>
//             <div class="courseBoxBody">

//             </div>
//         </div>

//         <div class="accordion" id="accordionPanelsStayOpenExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                 <div class="justify-content-between hstack gap-3 ">
//                     <div class="bg-body-tertiary" style={styles.courseName}>CSE 112</div>
//                     <div class="vr"></div>
//                     <div class="ms-auto">4 units</div>
//                     <div class="vr"></div>
//                     <div class="ms-auto">GR</div>
//                     <div class="vr"></div>
//                     <div class="" style={styles.final}>Final: Wed, Dec 7</div>
//                 </div>
//             </button>
//           </h2>
//           <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//             <div class="accordion-body">
//                 <div class="container" style={styles.contentText}>
//                     <table class="table table-sm align-middle">
//                         <thead>
//                             <tr>
//                             <th scope="col">Code</th>
//                             <th scope="col">Type</th>
//                             <th scope="col">Sec</th>
//                             <th scope="col">Unit</th>
//                             <th scope="col">Instr</th>
//                             <th scope="col">Time</th>
//                             <th scope="col">Loc</th>
//                             <th scope="col">Max</th>
//                             <th scope="col">Enr</th>
//                             <th scope="col">WL</th>
//                             {/* <th scope="col">ENROLL</th> */}
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <th scope="row">49209</th>
//                                 <td>Lec</td>
//                                 <td>A</td>
//                                 <td>4</td>
//                                 <td>HP Lee</td>
//                                 <td>MWF 4:00-4:50pm</td>
//                                 <td>DBH 1600</td>
//                                 <td>112</td>
//                                 <td>112</td>
//                                 <td>5</td>
//                                 <td>
//                                     <div class="hstack gap-3 ">
//                                         <button class="btn btn-danger btn-sm" ><b>Drop</b></button>
//                                         <button class="btn btn-warning btn-sm" ><b>Change</b></button>
//                                     </div>
//                                 </td>
                                
//                             </tr>
//                             <tr>
//                                 <th scope="row">49210</th>
//                                 <td>Dis</td>
//                                 <td>A</td>
//                                 <td>0</td>
//                                 <td>STAFF</td>
//                                 <td>F 1:00-1:50pm</td>
//                                 <td>MSTB 124</td>
//                                 <td>31</td>
//                                 <td>31</td>
//                                 <td>5</td>
//                                 <div class="hstack gap-3 ">
//                                     <button class="btn btn-danger btn-sm" ><b>Drop</b></button>
//                                     <button class="btn btn-warning btn-sm" ><b>Change</b></button>
//                                 </div>                            
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//           </div>
//         </div>
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
//             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//               Accordion Item #2
//             </button>
//           </h2>
//           <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//             <div class="accordion-body">
//               <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingThree">
//             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//               Accordion Item #3
//             </button>
//           </h2>
//           <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
//             <div class="accordion-body">
//               <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>

//     </>);
// }



// export default CourseBox;