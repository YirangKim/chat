//useState가 정의되어 있지 않음 오류 : 최상단에 넣기
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
// import Chat from "./component/Chat.js";
import Chat from "./component/Chat.js";
import NewChart from "./component/Chart.js";
import Navigation from "./component/Navbar.js";
import Header from "./component/Header.js";
import AiChat from "./component/AiChat.js";
import ChatList from "./component/ChatList.js";
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
      <Navigation />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/AI" element={<AiChat />} />
        <Route path="/ChatList" element={<ChatList />} />
      </Routes>
    </div>
  );
}

<script></script>;

export default App;
