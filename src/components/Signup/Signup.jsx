import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import validator from "../Validator/Validator";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    cpassword: ""
  });

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const signupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validator(values, "signup");
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Submitted");
      console.log(values)
      navigate("/");
    }
  };

  return (
    <div className="signup_popup ">
      <div className="popup_box">
        <i className="fa-solid fa-arrow-left-long" onClick={() => navigate(-1)}></i>
        <h2>SignUp</h2>
        <form onSubmit={signupSubmit} method="post">
          <div className="username input">
            <div className="input_wrapper">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                id="username"
                placeholder="Type your username"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            {error.name && <p className="error_message">{error.name}</p>}
          </div>
          <div className="password input">
            <div className="input_wrapper">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                id="password"
                placeholder="Type your password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            {error.password && <p className="error_message">{error.password}</p>}
          </div>
          <div className="password input">
            <div className="input_wrapper">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm your password"
                name="cpassword"
                value={values.cpassword}
                onChange={handleChange}
              />
            </div>
            {error.cpassword && <p className="error_message">{error.cpassword}</p>}
          </div>
          <input type="submit" className="btn" value="Signup" />
        </form>
        <p className="signup">
          Have an account. <Link to="/" className="signup_link">Signin Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
