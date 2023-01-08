import React, { useState } from "react";
import "Signup.css";

function Signup() {
  const [data, setData] = useState({});
  const [dataArr, setDataArr] = useState([]);

  const verify = () => {
    if(!dataArr.fullName || !dataArr.email || !dataArr.password || !dataArr.cnfPassword) {
      // error
      return
    }

    if(!dataArr.email.contains('@') || !dataArr.email.contains('.') || !dataArr.email.length >= 6 ) {
      // error
      return
    }

    // Password Validation
    if(dataArr.password !== dataArr.cnfPassword) {
      // error
      return
    }
  }

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
          placeholder="Password"
          onChange={(event) => {
            setData({ 'password': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <input
          placeholder="Confirm Password"
          onChange={(event) => {
            setData({ 'cnfPassword': event.target.value });
            setDataArr([...dataArr, data]);
          }}
        />
        <button onClick={verify}> Sign Up </button>
      </div>
    </div>
  );
}

export default Signup;
