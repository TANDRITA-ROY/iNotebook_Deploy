import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://inotebookbackend-fw78.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cred.email, password: cred.password }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      //save authtoken
      localStorage.setItem("token", json.token);
      //redirect
      navigate("/");
      props.showAlert("Logged in successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={cred.email}
            onChange={onchange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={cred.password}
            onChange={onchange}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
