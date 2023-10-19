// import Nav from "../Nav";
// function Kanbas() {
//     return(
//        <div>
//          {/* <Link to="/hello">Hello</Link> |
//          <Link to="/Labs/a3">A3</Link> |
//          <Link to="/Kanbas">Kanbas</Link> */}
//          <Nav/>
//          <h1>Kanbas</h1>
//        </div>
//     );
//  }
//  export default Kanbas

import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";



function Kanbas() {
   return (
     <div className="d-flex">
       <div>
         <KanbasNavigation />

       </div>
       <div>
         <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
         </Routes>

       </div>
     </div>
   );
 }
 export default Kanbas;