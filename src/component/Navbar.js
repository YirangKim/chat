import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ChatHistory from "./ChatHistory";
import React, { useState } from "react";

function Navigation() {
  const [isShow, setShow] = useState(false);

  const customNavbarStyle = {
    height: "70px",
    borderBottom: "1px solid #ccc",
    // 다른 원하는 스타일 속성도 여기에 추가 가능
  };

  const toggleChatHistory = () => {
    setShow(!isShow);
  };

  return (
    // 배경색 빼기 className="bg-body-tertiary"
    <Navbar
      expand="lg"
      style={{ ...customNavbarStyle, background: "transparent" }}
    >
      <Container fluid style={{ margin: "0 20px" }}>
        <div className="navbar-content">
          <FontAwesomeIcon
            icon={faBars}
            style={{ cursor: "pointer", color: "#333" }}
            onClick={toggleChatHistory}
          />
          <div className="brand-content">
            {/* <Navbar.Brand href="#home">PickChat</Navbar.Brand> */}
            <img
              src="/logo.png"
              alt="로고"
              style={{ width: "130px", marginLeft: "20px" }}
            />
          </div>
        </div>
        {isShow && (
          <div className="chatHistory">
            <p>채팅목록</p>
            <p>영상편집 노트북 추천해줘</p>
            <p>사무용 노트북 추천해줘</p>
            <p>사무용 노트북 추천해줘</p>
          </div>
        )}

        {/* <Navbar.Brand href="#home">PickChat</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 여기서 margin을 설정 */}
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">채팅</Nav.Link> */}
          </Nav>

          <Nav className="profile">
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">계정 정보</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">쿠폰</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">히스토리</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
