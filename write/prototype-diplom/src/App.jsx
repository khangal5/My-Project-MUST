import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import monuments from "./data/monuments.json";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const filtered = monuments.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <>
              <div className="search-container">
                <input
                  type="text"
                  placeholder={t("search_placeholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>{t("name")}</th>
                      <th>{t("location")}</th>
                      <th>{t("era")}</th>
                      <th>{t("description")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((m) => (
                      <tr
                        key={m.id}
                        onClick={() => navigate(`/detail/${m.id}`)}
                        className="clickable-row">
                        <td>{m.name}</td>
                        <td>{m.location}</td>
                        <td>{m.era}</td>
                        <td>{m.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
