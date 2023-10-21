import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardslide from "./Cardslide";
import Cardslide2 from "./Cardslide2";
import Chart from "./Chart";
import TypingText from "./TypingText";
import Detail from "./Detail";
import Loading from "./Loading";
import Spec1 from "./Spec1";
import Spec2 from "./Spec3";
import Spec3 from "./Spec3";
import AiSpeed from "./AiSpeed.js";
import AiWeight from "./AiWeight.js";
import AiDisplay from "./AiDisplay.js";
import Intro from "./Intro.js";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
      // .then((response) => response.json())
      // .then((response) => {
      //   console.log(response); // Log the full response
      //   return response.json();
      // })
      .then((data) => {
        console.log(data);
        setText2(data.response);
        // setChatData({
        //   Model1: data.Model1,
        //   Model2: data.Model2,
        //   Model3: data.Model3,
        //   Model4: data.Model4,
        //   Model5: data.Model5,
        // });
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
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleButtonClick}>데이터 불러오기</button>
      <div>텍스트 : {text}</div>
      <div>안녕 : {text2}</div>
    </div>
  );
}

export default AiChat;
