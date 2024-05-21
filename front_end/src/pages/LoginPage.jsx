import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform login logic here
    // ...

    // Navigate to the dashboard page
    navigate("/dashboard");
  };
  return (
    <div className="app-container">
      <div className="app-right">
        <div className="login-card">
          <div className="login-header-container">
            <div className="login-header">ADMIN PANEL</div>
          </div>
          <div className="login-form">
            <div className="input-container">
              <input
                type="email"
                placeholder="swt.admin@gmail.com"
                className="login-input"
              />
              <input
                type="password"
                placeholder="******"
                className="login-input"
              />
            </div>
            <div className="login-actions">
              <button className="forgot-password-btn">Forgot password</button>
              <button className="login-btn" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
