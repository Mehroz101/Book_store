import React, { useEffect, useState } from "react";
import "./Popup.css";
import { Link } from "react-router-dom";
import validator from "../Validator/Validator";
const Popup = ({ state, stateFun }) => {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState({});

  function handleChnage(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function submitForm(e) {
    e.preventDefault();
    setError(validator(values));
  }
  useEffect(()=>{
    if(Object.keys(error).length === 0 && (values.name !== "" && values.password !== "")){
        alert("submited");
        console.log(values)
        stateFun(false);
    }
  },[error])
  return (
    <>
      <div className={`popup ${state ? "" : "popupshow"}`}>
        <div className="popup_box">
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              stateFun(!state);
            }}
          ></i>
          <h2>Login</h2>
          <form action="" onSubmit={submitForm} method="post">
            <div className="username input">
              <label htmlFor="username">Usename</label>
              <div className="input_wrapper">
                <i className="fa-regular fa-user"></i>
                <input
                  type="text"
                  id="username"
                  placeholder="Type your username"
                  name="name"
                  value={values.name}
                  onChange={handleChnage}
                />
              </div>
              {error.name && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    alignSelf: "flex-start",
                  }}
                >
                  {error.name}
                </p>
              )}
            </div>
            <div className="password input">
              <label htmlFor="password">Password</label>
              <div className="input_wrapper">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Type your password"
                  name="password"
                  value={values.password}
                  onChange={handleChnage}
                />
              </div>
              {error.password && (
                <p
                  style={{
                    color: "red",
                    fontSize: "14px",
                    alignSelf: "flex-start",
                  }}
                >
                  {error.password}
                </p>
              )}
            </div>
            <input type="submit" className="btn" value="Login" />
          </form>
          <p className="signup">
            Don't have an account.{" "}
            <Link to="/signup" className="signup_link">
              Signup Here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Popup;
