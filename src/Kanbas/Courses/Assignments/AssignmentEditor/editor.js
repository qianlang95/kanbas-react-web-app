import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";
import * as client from "../client";
function AssignmentEditor() {
  const { assignmentId } = useParams();

  
    // const assignments = useSelector((state) => state.assignmentsReducer.assignments);
        const assignment = useSelector((state) => state.assignmentsReducer.assignment);

    const dispatch = useDispatch();
  
    const { courseId } = useParams();


    // const assignment = assignments.find(
    //     (assignment) => assignment._id === assignmentId);

    const navigate = useNavigate();
    const handleSave = () => {
      console.log("Actually saving assignment TBD in later assignments");
      dispatch(setAssignment({...assignment, _id:assignmentId }))
      handleUpdateAssignment();
      console.log("id***************" + assignment._id);
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const handleUpdateAssignment = async () => {
      const status = await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    };
  
  return (
    <div>
      <h2>Assignment Name</h2>

<input value={assignment.title}
             className="form-control mb-2" 
             onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value})) }/>
    
    <input value={assignment.description}
             className="form-control mb-2" 
             onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value})) }/>

<input value={assignment.availableFromDate} type='date'
             className="form-control mb-2" 
             onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value})) }/>

<input value={assignment.availableUntilDate} className="form-control" type="date"
      onChange={(e) =>  dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))} />

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>

    
    </div>
  );
}


export default AssignmentEditor;