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
    }, 6000);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  return (
    <div className="spec-wrap">
      <div>
        <Chart2 />
      </div>
      <div>
        <TypingText
          text="DELL G시리즈 G15 DG5520-UB06KR WIN11 성능은 다음과 같습니다. 이 제품은 높은 성능의 CPU와 GPU를 탑재하고 있어, 빠른 처리 속도를 제공합니다. 또한, 램 용량이 32GB로 매우 크며, 저장장치로는 빠른 속도의 NVMe SSD를 사용하고 있습니다"
          interval={50}
        />
        {showSpecList && (
          <div className="spec-list">
            <ul>
              <li>CPU: 인텔 코어i9-12세대 i9-12900H (2.5GHz), 14코어(6P+8E)</li>
              <li>CPU 점수: 28146</li>
              <li>GPU 점수: 8599</li>
              <li>화면 크기: 15.6인치</li>
              <li>화면 밝기: 400nit</li>
              <li>배터리: 86Wh / 어댑터: 240W / 충전단자: DC</li>
              <li>무게: 2.67kg</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Spec2;
