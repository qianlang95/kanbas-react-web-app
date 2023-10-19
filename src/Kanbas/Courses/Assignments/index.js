import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
    return (
      <div>

                            <div>
                                    <div class="float-end">
                                <button class="btn btn-secondary">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    Group</button>
                                <button class="btn btn-danger">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    Assigment</button>
                                

                                <span class="dropdown">
                                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Edit Assigment Dates
                                    </button>
                                </span>
                                
                            </div>
                      
                            </div>
                            <input class="form-control w-25" type="text" placeholder="search for assigments" />
                            <hr></hr>
                            


        <h2>Assignments for course {courseId}</h2>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
              <br />
              Multiple Modules | 100pts
            </Link>
          ))}
        </div>
      </div>
    );
  }
  export default Assignments;