import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";
// import Chart from "./Chart";
import Chart2 from "./Chart2";

function Spec2() {
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
        <Chart2 />
      </div>
      <div>
        <TypingText
          text="레노버 요가 Slim7 Carbon
          14ACN6 82L0004YKR 노트북 성능은 다음과 같습니다."
          interval={30}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <li>
                CPU: 인텔 / 코어i5-11세대 / i5-11300H (3.1GHz) / 쿼드(4)코어
              </li>
              <li>CPU 점수: 9988</li>
              <li>GPU 점수: 1100</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 260</li>
              <li>배터리: 60Wh / 어댑터: 65W / 충전단자: 타입C</li>
              <li>무게: 1.00kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spec2;
