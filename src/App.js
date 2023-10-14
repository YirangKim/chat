//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Chat from './component/Chat.js';
import Navigation from './component/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatHistory from './component/ChatHistory';

function App() {


   // state
   const [data, setData] = useState([{}])

  // chat
  
  return (
    <div className="App">

      <Navigation />
      <Routes>
        {/* Chat 컴포넌트를 렌더링하는 루트 경로 */}
        <Route path="/" exact component={Chat} />

        {/* ChatHistory 컴포넌트를 /history 경로로 렌더링 */}
        <Route path="/history" element={<ChatHistory/>} />
      </Routes>

      <Chat />

    </div>
  )
 }


<script>

</script>

export default App;