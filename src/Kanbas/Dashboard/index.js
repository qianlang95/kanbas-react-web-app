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

import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="d-flex flex-row flex-wrap">
       
          {courses.map((course, index) => (
             <div class="p-2 col-md-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className="card wd-card-size">
              <img src="../Images/course.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
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