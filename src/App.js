//useState가 정의되어 있지 않음 오류 : 최상단에 넣기
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
// import Chat from "./component/Chat.js";
import Chat from "./component/Chat.js";
import NewChart from "./component/Chart.js";
import Navigation from "./component/Navbar.js";
import Header from "./component/Header.js";
// import LineChart from "./component/LineChart.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatHistory from "./component/ChatHistory";
// import KitchenSinkExample from './component/Cardslide';

function App() {
  // state
  //  const [data, setData] = useState([{}])

  // chat

  return (
    <div className="App">
      {/* <Header /> */}
      <Navigation />
      <div className="container-wrap">
        {/* <ChatHistory /> */}
        <Chat />
      </div>
    </div>
  );
}

<script></script>;

export default App;
