import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import Header from "../../components/Header/Header";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Header title="Welcome" />
      <LoginForm />
    </div>
  );
};

export default Login;
