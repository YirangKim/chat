import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypingText from "./TypingText";

function AiSpeed() {
  const [showSpecList, setShowSpecList] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpecList(true);
    }, 8000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <TypingText
          text="이 중에서 속도 빠른 노트북은 CPU 성능이 가장 뛰어난 DELL G시리즈 G15 DG5520-UB06KR WIN11이며, CPU 점수는 28435.0입니다. 이 제품은 인텔 코어i9-12세대 CPU를 탑재하고 있어, 빠른 처리 속도를 제공합니다"
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <img
                src="/note04.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              {/* <h5>HP Nero 15-fc0076AU WIN11</h5>
              <li>
                CPU: 인텔 / 코어i5-11세대 / i5-11300H (3.1GHz) / 쿼드(4)코어
              </li>
              <li>CPU 점수: 9988</li>
              <li>GPU 점수: 1100</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 260</li>
              <li>배터리: 60Wh / 어댑터: 65W / 충전단자: 타입C</li>
              <li>무게: 1.00kg</li> */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiSpeed;
