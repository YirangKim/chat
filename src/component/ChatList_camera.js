import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Chat 컴포넌트의 스타일을 ChatList에서 사용하기 위해 import합니다.
import Cardslide_camera from "./Cardslide_camera";
import Spec1 from "./Spec1";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatList(props) {
  // ChatList 컴포넌트에서 Chat 컴포넌트의 스타일을 사용하기 위해
  // Chat 컴포넌트에서 정의한 스타일과 클래스를 props로 전달받습니다.
  const { chatListRef, chatRefs, content, onUserInput } = props;

  return (
    <div className="ChatList-Wrap">
      <div className="chat-item chat-list-right  user-chat">
        성능좋은 카메라 추천해줘
      </div>
      <div className="chat-item chat-list-left ai-chat">
        <Cardslide_camera />
      </div>
      {/* <div className="chat-item user-chat">1번 노트북 성능 뭐야?</div>
      <div className="chat-item ai-chat">
        <Spec1 />
      </div> */}
    </div>
  );
}

export default ChatList;
