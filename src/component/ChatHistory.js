//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Switch } from 'react-router-dom';

function ChatHistory(){
    return(
        <div className="left-slide" id="slide">
            <p className="slide-title">채팅목록</p>
            {/* <p>영상편집 노트북 추천해줘</p>
            <p>사무용 노트북 추천해줘</p> */}
        </div>
    )
}

export default ChatHistory;