import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatHistory() {
  // ChatHistory 컴포넌트의 상태 설정
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`left-slide${isVisible ? " on" : ""}`} id="slide">
      <p className="slide-title">채팅목록</p>
      <p>영상편집 노트북 추천해줘</p>
      <p>사무용 노트북 추천해줘</p>
    </div>
  );
}

export default ChatHistory;
