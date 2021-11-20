import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
    const [isRegistering, setIsRegistering] = useState(false)

    const ToggleButton = () => {
        return (
            <div>
                <button onClick={() => setIsRegistering(!isRegistering)}>Sign up</button>
            </div>
        )
    }

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const history = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value, 
        }));
    };

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`, 
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
            postData().then((response) => {
                console.log("This is the response",response);
                window.localStorage.setItem("token", response.token);
                history.push("/");
            });
            }
    };

    return (
        <form class="login-form">
            <h2 class="auth-h2">
            {
            isRegistering 
            ? "Login"
            : "Register"
            }
            </h2>
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
        <button type="submit" onClick={handleSubmit}>{
            isRegistering
            ? "Login"
            : "Register"
        }
        </button>
        <h3>Not yet registered?<a onClick={() => setIsRegistering(!isRegistering)}> Click here to get started.</a>
        </h3>
        </form>
    );
}

export default LoginForm