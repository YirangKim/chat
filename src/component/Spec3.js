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
          text="LG전자 2023 그램15
          15ZD90RT-GX5BK WIN11 노트북 성능은 다음과 같습니다."
          interval={30}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <li>
                CPU: 인텔 / 코어i5-13세대 / i5-1340P (1.9GHz) / 12코어(4P+8E)
              </li>
              <li>CPU 점수: 11014</li>
              <li>GPU 점수: 1102</li>
              <li>화면 크기: 14인치</li>
              <li>화면 밝기: 300</li>
              <li>파워: 배터리: 53Wh / 어댑터: 90W / 충전단자: DC </li>
              <li>무게: 1.00kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spec3;
