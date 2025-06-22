import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        console.log("Registering...");
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            console.log("API response:", data);

            if (data.status === "registered") {
                navigate("/"); // Go to login page
            } else {
                alert(data.message || "Registration failed");
            }
        } catch (err) {
            console.error("Registration error:", err);
            alert("Server error");
        }
    };

    return (
        <div className="auth-bg">
            <div className="auth-wrapper">
                <div className="auth-box">
                    <h2>Create Account</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button onClick={handleRegister}>Sign Up</button>
                    <p>
                        Already have an account? <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
