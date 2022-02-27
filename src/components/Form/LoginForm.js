import React from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value === "Admin" && e.target[1].value === "Admin") {
      navigate("/search");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-form">
      <div className="form-title">
        <h2>Login</h2>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-label">
          <label forhtml="userName">UserName:</label>
        </div>
        <div className="form-input">
          <input type="text" required />
        </div>
        <div className="form-label">
          <label forhtml="password" required>
            Password:
          </label>
        </div>
        <div className="form-input">
          <input type="password" />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
