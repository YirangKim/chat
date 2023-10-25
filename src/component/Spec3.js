import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";
import Chart from "./Chart";

function Spec3() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 7000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <Chart />
      </div>
      <div>
        <TypingText
          text="MSI GP시리즈 Vector GP66 12UH-i9의 성능은 다음과 같습니다.화면은 15.6인치 크기에 141ppi의 해상도를 가지고 있으며, 300nit의 밝기와 165Hz의 높은 주사율을 지원합니다"
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <li>CPU: 인텔 코어i9-12세대 i9-12900H (2.5GHz), 14코어(6P+8E)</li>
              <li>CPU 점수: 100000</li>
              <li>GPU 점수: 9952</li>
              <li>화면 크기: 15.6인치</li>
              <li>화면 밝기: 300nit</li>
              <li>파워: 배터리: 65Wh / 어댑터: 280W / 충전단자: DC </li>
              <li>무게: 2.38kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spec3;
