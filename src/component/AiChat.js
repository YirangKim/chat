import React, { useEffect, useState, useRef } from "react";
import "../App.css";

function AiChat() {
  return (
    <div>
      {/* <iframe>을 사용하여 Streamlit 앱 또는 웹 콘텐츠를 포함합니다. */}
      <iframe
        title="Streamlit App"
        src="https://pick-chat.streamlit.app/?embedded=true"
        width="100%"
        height="900px"
      />
    </div>
  );
}

export default AiChat;
