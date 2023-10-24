import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

import ChatHistory from "./ChatHistory";
import React, { useState } from "react";

function Navigation() {
  const navigate = useNavigate();

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
    <Navbar
      expand="lg"
      style={{ ...customNavbarStyle, background: "transparent" }}
    >
      <Container fluid style={{ margin: "0 30px" }}>
        <div className="navbar-content">
          <FontAwesomeIcon
            icon={faBars}
            style={{ cursor: "pointer", color: "#8f8f8f" }}
            size="lg"
            onClick={toggleChatHistory}
          />
          <div className="brand-content">
            {/* <Navbar.Brand href="#home">PickChat</Navbar.Brand> */}
            <img
              onClick={() => navigate("/")}
              src="/logo.png"
              alt="로고"
              style={{ width: "130px", marginLeft: "20px" }}
            />
          </div>
          <div>
            <img
              onClick={() => navigate("/AI")}
              src="/Cplus.png"
              alt="로고"
              style={{ width: "70px", marginLeft: "10px" }}
            />
          </div>
        </div>
        {isShow && <ChatHistory />}

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
