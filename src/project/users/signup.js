import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        className="form-control w-50"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
    <br/>
      <input
        value={credentials.password}
        className="form-control w-50"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
    <br/>
      <button onClick={signup} className="btn btn-primary">
        Signup
      </button>
    </div>
  );
}
export default Signup;