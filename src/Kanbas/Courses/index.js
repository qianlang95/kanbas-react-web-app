import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      {/* <h1>Courses {course.name} / {screen}</h1> */}
      <nav style={{padding:20}}>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item wd-bread-nav">{course.name}</li>
                    <li class="breadcrumb-item active" aria-current="page">{screen}</li>
                    </ol>
        </nav>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />

          </Routes>
        </div>
      </div>















    </div>
  );
}
export default Courses;