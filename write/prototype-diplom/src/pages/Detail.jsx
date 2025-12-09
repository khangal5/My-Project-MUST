import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import monuments from "../data/monuments.json";
import ModelViewer from "../components/ModelView/ModelViewer";
import "./Detail.css";

const Detail = ({ theme }) => {
  const { id } = useParams();
  const monument = monuments.find((m) => m.id === parseInt(id));
  const { t } = useTranslation();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;

    setComments([...comments, newComment]);
    setNewComment("");
  };
  <Link to="/" className={`back-btn ${theme}`}>
    {t("back")}
  </Link>;
  if (!monument) {
    return <h2 className="not-found">Мэдээлэл олдсонгүй</h2>;
  }

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div className="detail-header">
          <h1>{monument.name}</h1>
          <p className="era">{monument.era}</p>
        </div>

        <div className="detail-body">
          <div className="detail-info">
            <h3>Байршил</h3>
            <p>{monument.location}</p>

            <h3>Тайлбар</h3>
            <p>{monument.description}</p>
          </div>
          <div className="detail-model-box">
            <ModelViewer modelUrl={monument.modelUrl} />
          </div>
        </div>
        <div className="comment-section">
          <h3>Сэтгэгдэл</h3>

          <textarea
            className="comment-input"
            placeholder="Сэтгэгдэл бичих..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <button className="comment-btn" onClick={addComment}>
            Илгээх
          </button>

          <div className="comment-list">
            {comments.length === 0 ? (
              <p className="no-comment">Сэтгэгдэл байхгүй байна</p>
            ) : (
              comments.map((c, index) => (
                <div key={index} className="comment-item">
                  {c}
                </div>
              ))
            )}
          </div>
        </div>
        <Link to="/" className={`back-btn ${theme}`}>
          Буцах
        </Link>
      </div>
    </div>
  );
};

export default Detail;
