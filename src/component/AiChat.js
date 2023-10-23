import React, { useEffect, useState, useRef } from "react";
import "../App.css";

function AiChat() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const fetchDataFromServer = () => {
    // 서버불러오기
    // useEffect(() => {
    // fetch(`/chartdata?period=${period}`)
    fetch("/pickchat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((response) => response.text())
      // .then((response) => {
      //   console.log(response); // Log the full response
      //   return response.json();
      // })
      .then((data) => {
        console.log(data);
        setText2(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    // }, []); // chat 페이지 렌더링
  };

  const handleButtonClick = () => {
    fetchDataFromServer();
  };

  return (
    <div>
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleButtonClick}>데이터 불러오기</button>
      <div>질문 : {text}</div>
      <div>Ai : {text2}</div> */}

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
