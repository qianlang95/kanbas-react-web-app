import Assignment3 from "./a3";
import JavaScript from "./a3/JavaScript";
import Nav from "../Nav";
import PathParameters from "./a3/PathParameters";



function Labs() {
    return(
        <div className="container">
               {/* <Link to="/hello">Hello</Link> |
                <Link to="/Labs/a3">A3</Link> |
                <Link to="/Kanbas">Kanbas</Link> */}
            <Nav/>
            <Assignment3/>
            <JavaScript/>
            <PathParameters/>

        </div>
   
    );
 }
 export default Labs;