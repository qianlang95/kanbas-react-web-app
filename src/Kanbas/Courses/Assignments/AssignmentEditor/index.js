import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";

function AssignmentAddEditor() {
  const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId);
  
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    dispatch( addAssignment({ ...assignment, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title}
             className="form-control mb-2" 
             onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value })) }/>

      <input value={assignment.description} className="form-control"
      onChange={(e) =>  dispatch(setAssignment({ ...assignment, description: e.target.value }))} />
      <input value={assignment.availableFromDate} className="form-control" type="date" 
      onChange={(e) =>  dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))} 
      />
      <input value={assignment.availableUntilDate} className="form-control" type="date"
      onChange={(e) =>  dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))} 
       />
      
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


export default AssignmentAddEditor;