import * as client from "./client";
import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
function Account() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const fetchUser = async () => {
      try {
        const user = await client.account();
        setUser(user);
      } catch (error) {
        navigate("/project/signin");
      }
    };

    // const signout = async () => {
    //   const status = await client.signout();
    //   navigate("/project/signin");
    // };
    useEffect(() => {
      fetchUser();
    }, []);


    const save = async () => {
      await client.updateUser(user);
    };

    const signout = async () => {
      await client.signout();
      navigate("/project/signin");
    };
  
  
    return (
      
      <div>

        <h1>Account</h1>

        {user && (
          <div>
            <input value={user.password}
            className="form-control"
            onChange={(e) => setUser({ ...user,
              password: e.target.value })}/>

            <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />

            <input className="form-control" type="date"
            value={user.dob}
            onChange={(e) => setUser({ ...user,
              dob: e.target.value })}
              />
            <input value={user.email}
                type="email" class="form-control"
                onChange={(e) => setUser({ ...user,
                email: e.target.value })}/>

            <select className="form-control"
            onChange={(e) => setUser({ ...user,
                role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br/>
            <button onClick={save} className="btn btn-success w-100">Save</button>

            <Link to="/project/admin/users" className="btn btn-warning w-100">Users</Link>

            <button onClick={signout}  className="btn btn-danger w-100"> Signout</button>

            

          </div>
          
        )}
      </div>
    );
}
export default Account;