import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ChatHistory from "./ChatHistory";

function Navigation() {
  const customNavbarStyle = {
    height: "70px",
    borderBottom: "1px solid #ccc",
    // 다른 원하는 스타일 속성도 여기에 추가 가능
  };

  const toggleChatHistory = () => {
    // ChatHistory 컴포넌트에서 정의한 toggleChatHistory 함수 내용을 여기에 복사
    // 예: setIsVisible(!isVisible);
  };

  return (
    // 배경색 빼기 className="bg-body-tertiary"
    <Navbar
      expand="lg"
      style={{ ...customNavbarStyle, background: "transparent" }}
    >
      <Container fluid style={{ margin: "0 20px" }}>
        {/* fontawesome 아이콘가져와야함 */}
        {/* <FontAwesomeIcon icon={faBars} style={{ margin: "0 10px" }} /> */}
        <FontAwesomeIcon
          icon={faBars}
          style={{ margin: "0 10px", cursor: "pointer" }}
          onClick={ChatHistory.toggleChatHistory} // ChatHistory 컴포넌트의 toggleChatHistory 함수 사용
        />
        <Navbar.Brand href="#home">PickChat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* 여기서 margin을 설정 */}
          <Nav className="me-auto">
            <Nav.Link href="#home">채팅</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>

          <Nav className="profile">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">계정 정보</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">쿠폰</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">히스토리</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
