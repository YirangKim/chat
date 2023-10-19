import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardslide from "./Cardslide";
import Chart from "./Chart";
import TypingText from "./TypingText";
import Detail from "./Detail";
import Loading from "./Loading";
import Spec1 from "./Spec1";
import Spec2 from "./Spec3";
import Spec3 from "./Spec3";
import AiSpeed from "./AiSpeed.js";
import AiWeight from "./AiWeight.js";
import AiDisplay from "./AiDisplay.js";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Chat() {
  // 상태
  // content 사용자가 입력한 메시지를 저장
  const [content, setContent] = useState("");
  // chats 대화 내용을 저장
  const [chats, setChats] = useState([]);
  // 처음 접속시 웰컴 메세지
  const [welcome, setWelcome] = useState(true);
  // Detail 상태
  // 채팅창 입력 showDetail(true) 설정
  const [showDetail, setShowDetail] = useState(false);
  //채팅 높이 조절
  // const [chatListHeight, setChatListHeight] = useState("100px"); // 초기 높이 설정

  // Ref
  // 스크롤 chat-list 엘리먼트에 대한 ref 생성
  const chatListRef = useRef(null);
  // 채팅 메시지  스타일 동적으로 변경
  const chatRefs = useRef([]);

  // useEffect
  // 스크롤 바닥으로 내려주는 역할
  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chats]);

  // 처음에 웰컴메시지 띄우는 역할
  useEffect(() => {
    if (welcome) {
      setTimeout(() => {
        setChats([
          {
            message: <TypingText text="안녕하세요. 픽챗입니다" interval={40} />,
            type: "AI",
          },
        ]);
        setWelcome(false);
      }, 500);
    }
  }, [welcome]);

  //Detail 컴포넌트 띄우기
  useEffect(() => {
    // 조건만족되면 showDetail 실행
    if (showDetail) {
      const updatedChats = [...chats];
      updatedChats[updatedChats.length - 1] = {
        type: "AI",
        message: <Detail />,
      };
      setChats(updatedChats);
      setShowDetail(false);
    }
  }, [showDetail]);

  // 채팅 메시지 쌓일 때마다 채팅메시지의 높이 조절
  useEffect(() => {
    let chatHeight = 0;
    chatRefs.current.forEach((chatRef) => {
      if (chatRef) {
        const height = chatRef.getBoundingClientRect().height;
        chatRef.style.top = `${chatHeight}px`;
        chatHeight += height + 25;
      }
    });
  }, [chats]);

  // 유저 인풋 받기
  const onUserInput = () => {
    // destructor
    const newChats = [...chats, { type: "USER", message: content }];
    setChats(newChats);

    // 채팅 처리 후, 입력 내용 초기화
    // setContent("");

    setTimeout(() => {
      let aiAnswer = "";

      if (content.includes("안녕")) {
        aiAnswer = "반갑습니다";
      } else if (content.includes("노트북 추천")) {
        aiAnswer = <Cardslide />;
      } else if (content.includes("속도")) {
        aiAnswer = <AiSpeed />;
      } else if (content.includes("가벼운")) {
        aiAnswer = <AiWeight />;
      } else if (content.includes("큰화면")) {
        aiAnswer = <AiDisplay />;
      } else if (content.includes("1번 노트북 성능")) {
        aiAnswer = <Spec1 />;
      } else if (content.includes("2번 노트북 성능")) {
        aiAnswer = <Spec2 />;
      } else if (content.includes("3번 노트북 성능")) {
        aiAnswer = <Spec3 />;
      } else if (content.includes("픽챗")) {
        aiAnswer = <Loading />;
        // 2.5초 후
        setTimeout(() => setShowDetail(true), 2500);
      }
      // AI 답변을 newChats에 추가하기. destructor
      setChats([...newChats, { type: "AI", message: aiAnswer }]);
    }, 1000);

    // Clear the input field
    setContent("");
  };

  return (
    <div className="right-content">
      {/* 채팅 메시지 스크롤 */}
      <div className="chat-list" ref={chatListRef}>
        {chats.map((chat, index) => (
          <div
            key={index}
            ref={(el) => (chatRefs.current[index] = el)}
            className={chat.type === "USER" ? "user-chat" : "ai-chat"}
          >
            {chat.message}
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div className="chat-input">
          <input
            className="user-input input-no-border"
            type="text"
            placeholder="픽챗에게 무엇이든 질문하세요. 1kg 100만원대 노트북 추천해줘"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onUserInput()}
            style={{ outline: "none" }}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{ color: "#294ad3", marginRight: "15px" }}
            size="lg"
            onClick={() => onUserInput()}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Chat;
