import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import ChatList from "./ChatList";

function ChatHistory() {
  const navigate = useNavigate();

  return (
    <div className="chatHistory">
      <div className="chatHistory-title">
        <p>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ cursor: "pointer", color: "#0072ed" }}
            size="lg"
          />
          <span>채팅목록</span>
        </p>
        <div className="chatHistory-icon"></div>
      </div>
      <div className="HistoryList-txt">
        <div className="HistoryList-content">
          <p>
            <FontAwesomeIcon
              icon={faComment}
              style={{ cursor: "pointer", color: "#0072ed" }}
              size="lg"
            />
            {/* ChatList 컴포넌트로 연결하는 Link */}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/ChatList")}
            >
              성능 좋은 카메라 추천해줘
            </span>
          </p>
        </div>
        {/* <div className="HistoryList-content">
          <p>
            <FontAwesomeIcon
              icon={faComment}
              style={{ cursor: "pointer", color: "#0072ed" }}
              size="lg"
            />
            <span>사무용 노트북 추천해줘</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ChatHistory;
