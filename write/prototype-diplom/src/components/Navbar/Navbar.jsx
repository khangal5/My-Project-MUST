import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo_light from "./assets/logo-black.png";
import logo_dark from "./assets/logo-white.png";
import toggle_light from "./assets/night.png";
import toggle_dark from "./assets/day.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLang = () => {
    const newLang = i18n.language === "mn" ? "en" : "mn";
    i18n.changeLanguage(newLang);
  };
  const langLabel = i18n.language === "mn" ? "EN" : "MN";
  return (
    <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      {/* Лого */}
      <img
        src={theme === "light" ? logo_light : logo_dark}
        className="logo"
        onClick={() => navigate("/")}
      />

      {/* Меню */}
      <ul>
        <li onClick={() => navigate("/")}>{t("home")}</li>
      </ul>

      {/* Хэл солих товч */}
      <button className="lang-btn" onClick={toggleLang}>
        {langLabel}
      </button>

      {/* Login */}
      <button className="login-btn" onClick={() => navigate("/login")}>
        {t("login")}
      </button>

      {/* Toggle */}
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="toggle-icon"
        src={theme === "light" ? toggle_light : toggle_dark}
      />
    </div>
  );
};

export default Navbar;
