import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const onchange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://inotebookbackend-fw78.onrender.com/api/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cred.name,
          email: cred.email,
          password: cred.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success === true) {
      //save authtoken
      localStorage.setItem("token", json.token);
      //redirect
      navigate("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            name="name"
            value={cred.name}
            onChange={onchange}
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={cred.email}
            onChange={onchange}
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={cred.password}
            onChange={onchange}
            minLength={5}
            required
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            value={cred.cpassword}
            onChange={onchange}
            minLength={5}
            required
            id="cpassword"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
