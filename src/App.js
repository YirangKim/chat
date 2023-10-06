//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import ReactDOM from 'react-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


function App() {

  // content 사용자가 입력한 메시지를 저장
  let [ content, setContent ] = useState('');
  // chats 대화 내용을 저장
  const [chats, setChats] = useState([]);
  // welcome 사용자 앱 처음 접속 환영 메세지 
  let [ welcome, setWelcome ] = useState(true);

  // 스크롤 chat-list 엘리먼트에 대한 ref 생성
  const chatListRef = useRef(null);

   // state
   const [data, setData] = useState([{}])

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
          <div><p>맥북을 추천합니다</p></div>
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


  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* fontawesome 아이콘가져와야함 */}
          <FontAwesomeIcon icon={faBars} />
          <Navbar.Brand href="#home">pickChat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>

            <Nav className="profile">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-wrap">
        <div className="left-slide" id="slide">
            <p className="slide-title">채팅목록</p>
            <p>영상편집 노트북 추천해줘</p>
            <p>사무용 노트북 추천해줘</p>
        </div>
    
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

      {/* <Routes>
        <Route path="/list" element={  } />
      </Routes> */}


  </div>
  )
 }


<script>

</script>

export default App;