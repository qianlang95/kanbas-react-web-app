import * as client from "./client";
import { useState, useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
function Account() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const findUserById = async (id) => {
      const user = await client.findUserById(id);
      setUser(user);
    };
  
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
      if (id) {
        findUserById(id);
      } else {
      fetchUser();
      }
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
            className="form-control w-50"
            onChange={(e) => setUser({ ...user,
              password: e.target.value })}/>
            <br/>

            <input
              type="text"
              className="form-control w-50"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
            <br/>
            <input
              type="text"
              className="form-control w-50"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
            <br/>

            <input className="form-control w-50" type="date"
            value={user.dob}
            onChange={(e) => setUser({ ...user,
              dob: e.target.value })}
              />
            <br/>
            <input value={user.email}
                type="email" class="form-control w-50"
                onChange={(e) => setUser({ ...user,
                email: e.target.value })}/>
            <br/>

            <select className="form-control w-50"
            onChange={(e) => setUser({ ...user,
                role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br/>
            <button onClick={save} className="btn btn-success w-50">Save</button>


            <br/><br/>

            <Link to="/project/admin/users" className="btn btn-warning w-50">Users</Link>
            <br/><br/>

            <button onClick={signout}  className="btn btn-danger w-50"> Signout</button>
            <br/><br/>

            

          </div>
          
        )}
      </div>
    );
}
export default Account;