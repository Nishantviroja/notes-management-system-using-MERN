import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      //    const sendSubmit = ()=>{
      navigate("/notes");
      props.showAlert("Avi jaaa andar", "success");
      // }
    } else {
      props.showAlert("Saavvv khotu 6e bhai", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="h100  container">
      
      <div className="col-4"></div>

      <form className="col-4" onSubmit={handleSubmit}>
      <div>
      <div className=" text-primary my-4 text-center" >
        <h1>SKYNotE</h1>
      </div>
      <div className="text-dark my-4 text-center"  >
        <h5>Log in to Your Notebook</h5>
      </div>
      </div>
        <div className="form-group ">
          <input
            type="email"
            className="form-control my-4"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control my-4"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block my-3">
          Submit
        </button>
        <div className="text-center">
          <p className="text-danger">
            Not a member ? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
      <div className="col-4"></div>
    </div>
  );
};
