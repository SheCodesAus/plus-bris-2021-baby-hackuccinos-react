import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import "../../pages/ErrorPage/ErrorPage";

function LoginForm() {
    const [isRegistering, setIsRegistering] = useState(true)

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    let navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value, 
        }));
    };

    const postData = async () => {
        try{
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
            if (response.status==404){
                navigate('/errorpage/');
            }
            return response.json();
        } catch(err){
            console.log(err)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                if (!response.token) {
                    navigate("/errorpage/")
                  }
                else {
                console.log("This is the response",response);
                window.localStorage.setItem("token", response.token);
                navigate ("/");
                }
            });
            }
    };

    return (
        <form class="login-form">
            <h2 class="form-h2">
                {isRegistering ? 
                    "Register" : 
                    "Login"
                }
            </h2>
            {isRegistering && 
                <div>
                    <div class="label">
                    <label htmlFor="first_name">First Name:</label>
                    <input 
                        type="text"
                        id="first_name"
                        placeholder="Hello there ???"
                        onChange={handleChange}
                    />
                    </div>
                    <div class="label">
                    <label htmlFor="last_name">Last Name:</label>
                    <input 
                        type="text"
                        id="last_name"
                        placeholder="Hello there ???"
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
            }
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
                ? "Register"
                : "Login"
            }
            </button>
            {isRegistering ?
                <h3 class="form_h3">Already have an account?<a onClick={() => setIsRegistering(!isRegistering)}> Click here to login.</a>
                </h3>
                :
                <h3 class="form_h3">Need an account?<a onClick={() => setIsRegistering(!isRegistering)}> Click here to sign up.</a></h3>
            }
        </form>
    );
}

export default LoginForm