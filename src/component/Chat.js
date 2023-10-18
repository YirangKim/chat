//useState가 정의되어 있지 않음 오류 : 최상단에 넣기
import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from 'react-bootstrap/Carousel';
import Cardslide from "./Cardslide";
import Chart from "./Chart";
import TypingText from "./TypingText";
import Detail from "./Detail";
import Loading from "./Loading.js";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Chat() {
  // content 사용자가 입력한 메시지를 저장
  let [content, setContent] = useState("");
  // chats 대화 내용을 저장
  const [chats, setChats] = useState([]);
  // welcome 사용자 앱 처음 접속 환영 메세지
  let [welcome, setWelcome] = useState(true);

  // 스크롤 chat-list 엘리먼트에 대한 ref 생성
  const chatListRef = useRef(null);

  //채팅 높이 조절
  const [chatListHeight, setChatListHeight] = useState("100px"); // 초기 높이 설정

  // 새로운 채팅이 추가될 때 스크롤을 아래로 이동하고 높이 업데이트
  useEffect(() => {
    if (chatListRef.current) {
      // chat-list 엘리먼트의 스크롤을 아래로 이동
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chats]);

  // 첫 방문 시 챗봇 메시지와 스타일을 1초 뒤에 나타나게 하기
  // useEffect : 타이머
  // 배열안에 객체 "message": "안녕하세요. 챗봇입니다"
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

  const onUserInput = () => {
    let copy = [...chats];
    const userInput = content;
    copy.push({
      type: "USER",
      message: userInput,
    });
    setChats(copy);

    // 채팅 처리 후, 입력 내용 초기화
    setContent("");

    setTimeout(() => {
      let copy2 = [...copy];
      // aiAnswer 내용 초기화
      let aiAnswer = "";
      if (userInput.includes("안녕")) {
        aiAnswer = "반갑습니다";
      } else if (userInput.includes("노트북 5개")) {
        aiAnswer = <Cardslide />;
      } else if (userInput.includes("노트북")) {
        aiAnswer = (
          <div className="cardContent" style={{ width: "700px" }}>
            <div>
              <img className="chat-image" src="/laptop01.jpg" alt="노트북" />
            </div>
            <div>
              <TypingText
                text="롤을 중옵으로 돌릴 수 있는 가성비 좋은 노트북으로 'HP Nero 15-fc0076AU WIN11'을 추천드립니다. 이 노트북은 AMD 라이젠3(Zen2) 7320U (2.4GHz) 쿼드코어 CPU, 8GB DR5 램, 내장그래픽 Radeon 610M, 256GB M.2(NVMe) 저장장치를 갖추고 있습니다. 또한, 윈도우11이 설치되어 있고, 무선랜은 802.11ax(Wi-Fi 6)를 지원합니다. 가격은 1,830,000원입니다."
                interval={30}
              />
            </div>
          </div>
        );
      } else if (userInput.includes("성능")) {
        aiAnswer = <Chart />;
      } else if (userInput.includes("픽챗")) {
        aiAnswer = <Loading />;
      }

      copy2.push({
        type: "AI",
        message: aiAnswer,
      });
      setChats(copy2);
    }, 1000);
  };
  return (
    <div className="right-content">
      {/* 채팅 메시지 스크롤 */}
      <div className="chat-list" ref={chatListRef}>
        {chats.map((chat, index) => {
          const top_list = [
            0, 80, 160, 240, 360, 880, 970, 1420, 1570, 1700, 1800,
          ];
          const top = index * 60;
          return (
            <div
              key={index}
              className={chat.type === "USER" ? "user-chat" : "ai-chat"}
              style={{ top: `${top_list[index]}px` }}
            >
              {chat.message}
            </div>
          );
        })}
      </div>

      <div className="chat-box">
        {/* input 글 발행 
            1)input에 입력한 값 가져오기 
            2) input에 입력한 값 저장하기
            3) 마우스 엔터 */}
        <input
          className="user-input input-no-border"
          type="text"
          placeholder="픽챗에게 무엇이든 요청하세요. 1kg 100만원대 노트북 추천해줘"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onUserInput();
            }
          }}
        />

        {/* button누르면 chat 추가
            <div>생성x, state에 글 추가 
            unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가*/}
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
}

export default Chat;
