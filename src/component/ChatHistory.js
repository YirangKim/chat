import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatHistory() {
  return (
    <div>
      <div className="slide-title">
        <img
          src="/symbol.png"
          alt="로고"
          style={{ width: "150px", marginLeft: "20px" }}
        />
        <p className="slide-title">채팅목록</p>
      </div>

      <p>영상편집 노트북 추천해줘</p>
      <p>사무용 노트북 추천해줘</p>
    </div>
  );
}

export default ChatHistory;
