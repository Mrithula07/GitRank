import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password) {
      console.log(isLogin ? "Login" : "Sign up", { email, password });
      navigate("/home");
    }
  };

  const handleGoogleAuth = () => {
    console.log("Google authentication");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card-wrapper">
        {/* Left side - Purple gradient card */}
        <div className="login-left-panel">
          <img
            height="350px"
            width="350px"
            src="Gitrank.svg"
            alt="Gitrank </>"
          />
        </div>

        {/* Right side - Login form */}
        <div className="login-right-panel">
          <div className="form-container">
            <h2 className="form-title">{isLogin ? "Log in" : "Sign up"}</h2>

            <div className="form-content">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
              </div>

              {isLogin && (
                <div className="forgot-password">
                  <button type="button" className="forgot-link">
                    Forgot your password?
                  </button>
                </div>
              )}

              <button onClick={handleSubmit} className="login-button">
                {isLogin ? "Log in" : "Sign up"}
              </button>
            </div>

            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">or continue with</span>
              <div className="divider-line"></div>
            </div>

            <button onClick={handleGoogleAuth} className="google-button">
              <img
                height="20px"
                width="20px"
                src="google-icon-logo.svg"
                alt="G"
              />
              <span>Log in</span>
            </button>

            <div className="toggle-section">
              <span className="toggle-text">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="toggle-button"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
