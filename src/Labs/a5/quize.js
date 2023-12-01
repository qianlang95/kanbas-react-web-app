import React, { useEffect,useState } from "react";
import axios from "axios";

function Quizes() {


    const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};
    alice.salary += 10000

    console.log(alice);


    const a = [1, 2, 3]
    const e = [...a, 4]
    const [f] = e
    console.log(f)

    // const [tests, setTests] = useState([]);

    //   const API_BASE = process.env.REACT_APP_API_BASE;


    //   const URL = `${API_BASE}/api/tests`;

    //   const fetchAssignment = async () => {
    //     const response = await axios.get(`${URL}`);
    //     setTests(response.data);
    //   };

    //   useEffect(() => {
    //     fetchAssignment();
    //   }, []);
    
    
  return (
    <div>
      

            {/* <pre>{JSON.stringify(tests, null, 2)}</pre> */}


    </div>
  );
}
export default Quizes;