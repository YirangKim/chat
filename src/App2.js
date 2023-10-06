//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React, { useEffect, useState } from "react";
import "./App2.css";
import ReactDOM from 'react-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {


  //chat 내용
  let [ chat, setChat ] = useState(['']);
  let [ welcome, setWelcome ] = useState(true);
  // input 저장
  let [ content, setContent ] = useState('');
 
   // 챗봇 메시지를 나타내는 상태 추가
   let [message, setMessage] = useState("");
  // 챗봇 스타일을 나타내는 상태 추가
  let [style, setStyle] = useState({ display: "none" });

   // 첫 방문 시 챗봇 메시지와 스타일을 1초 뒤에 나타나게 하기
   useEffect(() => {
    if (welcome) {
      setTimeout(() => {
        setMessage("안녕하세요. 챗봇입니다");
        setWelcome(false);
        setStyle({ display: "block" });
      }, 1000);
    }
  }, [welcome]);


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
          <div className="chat-list">

            <div className="chat-AI" style={style}>
              {/* 챗봇 메시지를 화면에 표시 */}
              {message && <div>{message}</div>}
            </div>

              {/* map함수 :
              1) chat 갯수만큼 html생성
              2) 같은 글 따로따로 보이게끔 : 파라미터 */}
            <div className="chat-user-wrap" >
                {
                chat.map(function(a, i){
                  return (
                    <div className="chat-user">
                    { chat[i] }</div>
                  )
                })
              }
            </div>
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
              <button onClick={()=>{
                let copy = [...chat];
                copy.push(content);
                setChat(copy);
              }}>send</button>
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route path="/list" element={  } />
      </Routes> */}


  </div>
  );
}


<script>

</script>


export default App;