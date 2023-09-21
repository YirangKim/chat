//useState가 정의되어 있지 않음 오류 : 최상단에 넣기 
import React, { useEffect, useState } from "react"
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  //채팅 내용
  let [ 채팅, 채팅변경 ] = useState(['노트북 추천해줘', '화면사이즈 알려줘']);
  let [ 첫인사, 첫인사변경 ] = useState(true);
  // input 저장
  let [ 입력값, 입력값변경 ] = useState('');


  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
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
        <div className="left-box">
          <ul>
            <li>채팅목록</li>
            <li>영상편집 노트북 추천해줘</li>
            <li>사무용 노트북 추천해줘</li>
          </ul>
        </div>
    
        <div className="right-content">
          <div className="chat-list">

            <div className="chat-admin">
              <div>안녕하세요. 챗봇입니다 </div>
            </div>

              {/* map함수 :
              1) 채팅 갯수만큼 html생성
              2) 같은 글 따로따로 보이게끔 : 파라미터 */}
            <div className="chat-user-wrap" >

                {
                채팅.map(function(a, i){
                  return (
                    <div className="chat-user">
                    { 채팅[i] }</div>
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
              onChange={(e)=>{ 입력값변경(e.target.value);
              }} />

            {/* button누르면 채팅 추가
            <div>생성x, state에 글 추가 */}
              <button onClick={()=>{
                let copy = [...채팅];
                copy.unshift(입력값);
                채팅변경(copy);
              }}>send</button>
          </div>
        </div>
      </div>


    </div>
  );
}

<script>

</script>

export default App;