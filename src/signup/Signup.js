import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [data, setData] = useState({});
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState(false);

  const verify = () => {
    // Empty fields
    if (
      !dataArr.fullName ||
      !dataArr.email ||
      !dataArr.password ||
      !dataArr.cnfPassword
    ) {
      document.getElementById("error").textContent =
        "Error: All the fields are mandatory";
      setError(true);
      return;
    }

    // Email verification
    else if (
      !dataArr.email.contains("@") ||
      !dataArr.email.contains(".") ||
      !dataArr.email.length >= 6
    ) {
      document.getElementById("error").textContent = "Enter correct email";
      setError(true);
      return;
    }

    // Password Validation
    else if (dataArr.password.length < 8) {
      document.getElementById("error").textContent =
        "Password should be atleast 8 characters long";
      setError = true;
      return;
    }

    // Password match
    else if (dataArr.password !== dataArr.cnfPassword) {
      document.getElementById("error").textContent =
        "Password and Confirm Password do not match";
      setError(true);
      return;
    } else {
      document.getElementById("success").textContent = "Successfully signed up";
    }
  };

  return (
    <div>
      <h3> Sign Up </h3>
      <div className="input">
        <input
          placeholder="Full Name"
          onChange={(event) => {
            setData({ 'fullName': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <input
          placeholder="Email"
          onChange={(event) => {
            setData({ 'email': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setData({ 'password': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => {
            setData({ 'cnfPassword': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <button onClick={verify}> Sign Up </button>
      </div>

      <p id="error"> </p>
      <p id="success"> </p>

    </div>
  );
}

export default Signup;
