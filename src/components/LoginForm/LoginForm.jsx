import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "../../pages/ErrorPage/ErrorPage";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({
    username:"",
    password:"",
  });
  const [error, setError] = useState(false)


  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}${ isRegistering ? "users" : "api-token-auth"}/`,

      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData()
        .then((response) => {
          if (response.token) {
            setError(false)
            window.localStorage.setItem("token", response.token);
            window.localStorage.setItem("username", credentials.username);
            window.location = `${window.location.origin}/`
            navigate("/success-login");
          } else {
            setError(true)
          }
        })
    }
    else {
      setError(true)
    }     
  };

  return (
    <form class="login-form">
      <h2 class="form-h2">{isRegistering ? "Register" : "Login"}</h2>
      {isRegistering && (
        <div>
          <div class="label">
            <label htmlFor="student_id">Student ID:</label>
            <input
              type="number"
              id="student_id"
              placeholder="12345"
              onChange={handleChange}
            />
          </div>
          <div class="label">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              placeholder="Please enter your first name"
              onChange={handleChange}
            />
          </div>
          <div class="label">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              placeholder="Please enter my first name"
              onChange={handleChange}
            />
          </div>
          <div class="label">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="cupcake@coder.com"
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      <div class="label">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div class="label">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      {
          error && <div style={{ color: `white`, textAlign: `left`, marginBottom: `1em`, marginTop: '1em' }}>Wrong username/password. Please try again.</div>
      }
      <div class="button-centre">
        <button type="submit" onClick={handleSubmit}>
          {isRegistering ? "Register" : "Login"}
        </button>
      </div>
      {isRegistering ? (
        <h3 class="form_h3">
          Already have an account?
          <a onClick={() => setIsRegistering(!isRegistering)}>
            {" "}
            Click here to login.
          </a>
        </h3>
      ) : (
        <h3 class="form_h3">
          Need an account?
          <a onClick={() => setIsRegistering(!isRegistering)}>
            {" "}
            Click here to sign up.
          </a>
        </h3>
      )}
    </form>
  );
};
export default LoginForm;
