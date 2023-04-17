import React, { useState } from 'react';
import "./Login.css";

export default function Login() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
  
    if (isLoggedIn && usernameSession !== null) {
        // redirect to home page or some other authorized page
        window.location.href = "/";
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        // In fetch should be included the username and password in POST data
        try {
            /*const response = await fetch("https://example.com/api/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
            });*/

            const response = await fetch("https://raw.githubusercontent.com/karanwl/cloudFrontEnd/main/datajson/login.json");

            const data = await response.json();

            // validate username and password, and perform authentication
            if (data.status === "ok" && data.msg === "Login Successful!") {
                // set session value in local storage
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", username);
                // redirect to home page or some other authorized page
                window.location.href = "/";
            } else {
                alert("Invalid username or password.");
            }

        } catch (error) {
            console.log("Login error:", error);
            alert("Login error. Please try again later.");
        }
    };
  
    return (
        <div className="logincontent">
            <div className="form">
                <h1>Login</h1>
                <form className="form justify-content-center" onSubmit={handleLogin}>
                    <div>
                        <label for="username">Username : </label>
                        <input
                        type="username"
                        className="forminput"
                        id="username"
                        aria-describedby="emailHelp"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label for="password">Password : </label>
                        <input
                        type="password"
                        className="forminput"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
