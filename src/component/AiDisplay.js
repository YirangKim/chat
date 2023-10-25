import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";

function AiDisplay() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <TypingText
          text="이 중에서 화면 크기가 가장 큰 노트북은 MSI GP시리즈 Vector GP66 12UH-i9 입니다. 15.6인치 크기의 화면을 가지고 있습니다."
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <img
                src="/note01.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              {/* <h5>LG전자 2023 그램15 15ZD90RT-GX5BK WIN11</h5>
              <li>
                CPU: 인텔 / 코어i5-13세대 / i5-1340P (1.9GHz) / 12코어(4P+8E)
              </li>
              <li>CPU 점수: 100000</li>
              <li>GPU 점수: 1102</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 270</li>
              <li>파워: 배터리: 53Wh / 어댑터: 90W / 충전단자: DC </li>
              <li>무게: 1.00kg</li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiDisplay;
