// import { Link } from "react-router-dom";
// import db from "../Database";
// function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div className="list-group">
//         {courses.map((course) => (
//           <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
//             {course.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Dashboard;
import { React, useState } from "react";

import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });
  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };


  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };


  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };



  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
       onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
      <button className="btn btn-success"
      onClick={addNewCourse} >
        Add
      </button>

      <button onClick={updateCourse} className="btn btn-danger" >
        Update
      </button>


      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="d-flex flex-row flex-wrap">
       
          {courses.map((course, index) => (
             <div>
            <div className="card wd-card-size">
              <img src="../Images/course.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name} {course.number}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn list-group-item"
                >
                  <button
                  className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>

                  <button
                  className="btn btn-secondary"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }
                    
                    }>
                    Delete
                  </button>
                      <br/>
                  {course.name}
                </Link>
                <p class="card-text">
                  This course {course.name} start from {course.startDate} and end on {course.endDate}.
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Dashboard;