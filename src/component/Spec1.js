import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";
import Chart from "./Chart";

function Spec1() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 6000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <Chart />
      </div>
      <div>
        <TypingText
          text="ASUS ROG 제피러스 G14 GA402XI-N2042의 성능은 다음과 같아요.이 제품은 높은 성능의 CPU와 GPU를 탑재하고 있어, 영상 편집에 적합한 성능을 가지고 있습니다.  "
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <li>CPU: AMD 라이젠9(Zen4) 7940HS (4.0Hz), 옥타(8)코어</li>
              <li>CPU 점수: 28435</li>
              <li>GPU 점수: 9755</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 500nit </li>
              <li>파워: 배터리: 76Wh / 어댑터: 240W / 충전단자: DC</li>
              <li>무게:0.87kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spec1;
