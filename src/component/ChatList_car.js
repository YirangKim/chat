import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Chat 컴포넌트의 스타일을 ChatList에서 사용하기 위해 import합니다.
import Cardslide_car from "./Cardslide_car";
import Spec1 from "./Spec1";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatList_camera(props) {
  const { chatListRef, chatRefs, content, onUserInput } = props;

  return (
    <div className="ChatList-Wrap">
      <div className="chat-item chat-list-right user-chat">
        판매량 좋은 자동차 추천해줘
      </div>
      <div className="chat-item chat-list-left ai-chat">
        <Cardslide_car />
      </div>
    </div>
  );
}

export default ChatList_camera;
