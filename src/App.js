//useState가 정의되어 있지 않음 오류 : 최상단에 넣기
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
// import Chat from "./component/Chat.js";
import Chat from "./component/Chat.js";
import NewChart from "./component/Chart.js";
import Navigation from "./component/Navbar.js";
import Header from "./component/Header.js";
import AiChat from "./component/AiChat.js";
import ChatList_camera from "./component/ChatList_camera.js";
import ChatList_car from "./component/ChatList_car.js";
// import LineChart from "./component/LineChart.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatHistory from "./component/ChatHistory";
// import KitchenSinkExample from './component/Cardslide';

function App() {
  // state
  //  const [data, setData] = useState([{}])

  // chat

  return (
    <div classNameName="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/AI" element={<AiChat />} />
        <Route path="/ChatList_camera" element={<ChatList_camera />} />
        <Route path="/ChatList_car" element={<ChatList_car />} />
      </Routes>

      {/* <div className="swiper-slide best-model__item" style={{ width: "432px" }}>
        <div className="best-model__item--title">
          <p className="label-txt ">최고가 모델</p>
          <h4 className="name">
            <span>1.6 하이브리드</span>
            6인승 시그니처 그래비티 4WD A/T
          </h4>
        </div>
        <div className="best-model__item--photo">
          <img
            src="./sorento.png"
            alt="6인승 시그니처 그래비티 4WD A/T"
            style={{ width: "390px" }}
          />
        </div>
        <ul className="best-seller__info--list">
          <li>
            <div className="info--list-tit">외장 컬러</div>
            <div className="info--list-txt">스노우 화이트 펄</div>
          </li>
          <li>
            <div className="info--list-tit">내장 컬러</div>
            <div className="info--list-txt">올리브 브라운</div>
          </li>
          <li>
            <div className="info--list-tit">옵션 (6)</div>

            <div className="info--list-txt option">
              <p> 컴포트 </p>
              <p> 드라이브 와이즈 </p>
              <p> HUD + 빌트인 캠 2 등 </p>
            </div>
          </li>
        </ul>

        <div className="bottm_area">
          <div className="best-model__item--price">
            <p className="price--title">최저가</p>
            <div>
              54,720,000
              <span> 원</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

<script></script>;

export default App;
