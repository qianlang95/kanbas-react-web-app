import React, { useState, useRef,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import assignmentsReducer from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import Dialog from "./Dialog";
import * as client from "./client";


import { addAssignment, deleteAssignment, updateAssignment, setAssignment, setAssignments } from "./assignmentsReducer";
import { add } from "../../../Labs/a4/ReduxExamples/AddRedux/addReducer";


function Assignments() {
    const { courseId } = useParams();
    // const assignments = db.assignments;
    const idAssRef = useRef();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();


    useEffect(() => {
      client.findAssignmentsForCourse(courseId)
        .then((assigments) =>
          dispatch(setAssignments(assigments))
      );
    }, [courseId]);

    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);

      const [dialog, setDialog] = useState( false);

      const handleDelete = (id) => {
        setDialog(true);
        idAssRef.current = id;
      };

    
      const areUSureDelete = (choose) => {
        if (choose) {
          // dispatch(deleteAssignment(idAssRef.current))
          handleDeleteAssignmnt(idAssRef.current)
          setDialog(false);
        } else {
          setDialog(false);  }
      };
      
      const handleDeleteAssignmnt = (assignmentId) => {
        console.log(assignmentId,"**************4");
        client.deleteAssignment(assignmentId).then((status) => {
          dispatch(deleteAssignment(assignmentId));
        });
      };

      
    return (
      <div>

                            <div>
                                    <div class="float-end">
                                <button class="btn btn-secondary">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    Group</button>
                                <Link class="btn btn-danger" 
                                 to={`/Kanbas/Courses/${courseId}/Assignments/addNewAssignment/${new Date().getTime().toString()}`}>
                                    +Assigment</Link>
                                

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
        <ul className="list-group">
        <li className="list-group-item">

          {
            courseAssignments.map((cur_assignment, index) => (

                <>
                <div className="wd-dis">
                <button
                className="btn btn-warning float-end"
                // onClick={() => dispatch(deleteAssignment(cur_assignment._id))}
                onClick={() => handleDelete(cur_assignment._id)}
                >
                Delete
              </button>
              
              


              <button onClick={() => dispatch(setAssignment(cur_assignment))} className="wd-button">
                  <Link
                    key={cur_assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${cur_assignment._id}`}
                    className="wd-link"
                    >


                    {/* {cur_assignment._id} */}
                    {cur_assignment.title}

                   
                   
                  </Link>
                </button>
                <br />
                Multiple Modules | 100pts | start: {cur_assignment.availableFromDate.toString()} | end: {cur_assignment.availableUntilDate.toString()}
                    <br/>
                    {cur_assignment.description}
                </div>


                {dialog && (
                  <Dialog
                    //Update
                    onDialog={areUSureDelete}
                  />
      )}



                </>
          ))}
          </li>
        </ul>



        
      </div>
    );
  }
  export default Assignments;