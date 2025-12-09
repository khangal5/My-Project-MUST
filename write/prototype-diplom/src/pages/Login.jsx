import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Нэвтрэх</h2>

        <input type="text" placeholder="Имэйл" />
        <input type="password" placeholder="Нууц үг" />

        <button className="auth-btn">Login</button>

        <p className="switch-text">
          Бүртгэл байхгүй юу? <Link to="/register">Бүртгүүлэх</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
