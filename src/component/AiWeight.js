import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";

function AiWeight() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 4000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <TypingText
          text="이 중에서 가장 가벼운 노트북은 ASUS ROG 제피러스 G14 GA402XI-N2042이며, 무게는 1.65kg입니다."
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <img
                src="/note03.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              {/* <h5>ASUS ROG 제피러스 G14 GA402XI-N2042</h5>
              <li>
                CPU: 인텔 / 코어i5-11세대 / i5-1135G7 (2.4GHz) / 쿼드(4)코어
              </li>
              <li>CPU 점수: 9917</li>
              <li>GPU 점수: 1102</li>
              <li>화면 크기: 13.3인치</li>
              <li>화면 밝기: 250 </li>
              <li>파워: 배터리: 63Wh / 어댑터: 65W / 충전단자: 타입C</li>
              <li>무게:0.87kg</li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiWeight;
