import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("Logging in...");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("API response:", data);

            if (data.status === "logged_in") {
                navigate("/connect");
            } else {
                alert(data.error || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Server error");
        }
    };

    return (
        <div className="auth-bg">
            <div className="auth-wrapper">
                <div className="auth-box">
                    <h2>Login to your account</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="checkbox-row">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    <p>
                        New to MyApp? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
