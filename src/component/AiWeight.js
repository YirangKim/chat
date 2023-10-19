import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";

function AiWeight() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <TypingText text="가벼운 노트북을 추천해드리겠습니다." interval={30} />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <img
                src="/note02.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              <h5>한성컴퓨터 TFX4150HW</h5>
              <li>
                CPU: 인텔 / 코어i5-11세대 / i5-1135G7 (2.4GHz) / 쿼드(4)코어
              </li>
              <li>CPU 점수: 9917</li>
              <li>GPU 점수: 1102</li>
              <li>화면 크기: 13.3인치</li>
              <li>화면 밝기: 250 </li>
              <li>파워: 배터리: 63Wh / 어댑터: 65W / 충전단자: 타입C</li>
              <li>무게:0.87kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiWeight;
