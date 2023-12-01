import Signin from "./users/signin";
import Account from "./users/account";
import Nav from "../Nav";

import { Routes, Route, Navigate,Link} from "react-router-dom";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
    
    <div>
        <Nav/>
        <div className="row">
        <div className="col-2">
            <div className="list-group">
                <Link to="/project/" className="list-group-item">
                Home
                </Link>
                <Link to="/project/signin" className="list-group-item">
                Signin
                </Link>
                <Link to="/project/signup" className="list-group-item">
                Signup
                </Link>
                <Link to="/project/account" className="list-group-item">
                Account
                </Link>
                <Link to="/project/search" className="list-group-item">
                Search
                </Link>
                <Link to="/project/users" className="list-group-item">
                Users
                </Link>
                {/* <Link to="/project/details" className="list-group-item">
                Details
                </Link> */}
            </div>
        </div>
        <div className="col-10">
            <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signup" element={<Signup />} />
            

            
            </Routes>
        </div>
        </div>

    </div>
  );
}
export default Project;