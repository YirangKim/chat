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
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <Chart />
      </div>
      <div>
        <TypingText
          text="삼성전자 갤럭시북 프로 NT930XDB-KC59S 노트북 성능은 다음과 같습니다."
          interval={30}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
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

export default Spec1;
