import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import Quizes from "./quize";
function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  console.log(API_BASE,"************!!!!API_BASE")


    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${API_BASE}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
          <EncodingParametersInURLs/>
          <WorkingWithObjects/>
          <WorkingWithArrays/> 



        </div>
        <Quizes/>
      </div>
    );
  }
  export default Assignment5;