//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Chat(){

// content 사용자가 입력한 메시지를 저장
  let [ content, setContent ] = useState('');
  // chats 대화 내용을 저장
  const [chats, setChats] = useState([]);
  // welcome 사용자 앱 처음 접속 환영 메세지 
  let [ welcome, setWelcome ] = useState(true);

  // 스크롤 chat-list 엘리먼트에 대한 ref 생성
  const chatListRef = useRef(null);

  // 새로운 채팅이 추가될 때 스크롤을 아래로 이동하는 useEffect
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
        setChats([{
          "message" : "안녕하세요. 챗봇입니다",
          "type" : "AI"
        }])
        setWelcome(false);
      }, 500);
    }
  }, [welcome]);


  const onUserInput = () => {
    let copy = [...chats];
    const userInput = content
    copy.push({
      "type": "USER",
      "message": userInput
    });
    setChats(copy);

    setTimeout(() => {
      let copy2 = [...copy];
      let aiAnswer = "";
      if (userInput.includes("안녕")) {
        aiAnswer = "반갑습니다"
      } else if (userInput.includes("노트북")) {
        aiAnswer = (
          <div>
            <div>
          <img className="chat-image" src="/laptop.png" alt="맥북 이미지" />
          </div>
          <div><p>롤을 중옵으로 돌릴 수 있는 가성비 좋은 노트북으로 "HP Nero 15-fc0076AU WIN11"을 추천드립니다. 이 노트북은 AMD 라이젠3(Zen2) 7320U (2.4GHz) 쿼드코어 CPU, 8GB DR5 램, 내장그래픽 Radeon 610M, 256GB M.2(NVMe) 저장장치를 갖추고 있습니다. 또한, 윈도우11이 설치되어 있고, 무선랜은 802.11ax(Wi-Fi 6)를 지원합니다. 가격은 1,830,000원입니다.</p></div>
        </div>
        );
      } 

      copy2.push({
        "type": "AI",
        "message": aiAnswer
      });
      setChats(copy2);
    }, 1000);
  }
    return(
        <div className="container-wrap">
      
    
        <div className="right-content">
           {/* 채팅 메시지 스크롤 */}
          <div className="chat-list" ref={chatListRef}>
            {
              chats.map((chat, index) => {
                const top = index * 60;
                return <div
                key={index}
                className={chat.type === "USER" ? "user-chat" : "ai-chat"}
                style={{top: `${top}px`}}
                >
                  {chat.message}
                </div>
              })
            }
          </div>

          <div className="chat-box">


            {/* input 글 발행 
            1)input에 입력한 값 가져오기 
            2) input에 입력한 값 저장하기 */}
            <input className="user-input" type="text" placeholder="10인치 무게 1kg 노트북 추천해줘"
              onChange={(e)=>{ setContent(e.target.value);
              }} />

            {/* button누르면 chat 추가
            <div>생성x, state에 글 추가 
            unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가*/}
              <button onClick={onUserInput}>send</button>
          </div>
        </div>
      </div>

    )
}

export default Chat;