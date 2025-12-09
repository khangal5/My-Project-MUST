import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Бүртгүүлэх</h2>

        <input type="text" placeholder="Имэйл" />
        <input type="text" placeholder="Хэрэглэгчийн нэр" />
        <input type="password" placeholder="Нууц үг" />
        <input type="password" placeholder="Нууц үгээ давт" />

        <button className="auth-btn">Register</button>

        <p className="switch-text">
          Аль хэдийн бүртгэлтэй юу? <Link to="/login">Нэвтрэх</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
