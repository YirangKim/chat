import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";

function AiDisplay() {
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
        <TypingText text="큰화면 노트북을 추천해드리겠습니다." interval={30} />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <img
                src="/note03.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              <h5>LG전자 2023 그램15 15ZD90RT-GX5BK WIN11</h5>
              <li>
                CPU: 인텔 / 코어i5-13세대 / i5-1340P (1.9GHz) / 12코어(4P+8E)
              </li>
              <li>CPU 점수: 100000</li>
              <li>GPU 점수: 1102</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 270</li>
              <li>파워: 배터리: 53Wh / 어댑터: 90W / 충전단자: DC </li>
              <li>무게: 1.00kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiDisplay;
