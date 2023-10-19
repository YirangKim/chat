import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";
import TypingText from "./TypingText";

function Cardslide() {
  // 외부 웹 페이지 URL
  let shopUrl =
    "https://prod.danawa.com/info/?pcode=20239928&cate=112758&adinflow=Y";

  // 상태를 추가하여 Carousel이 보여질지 여부를 관리
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    // 1초 (1000 밀리초) 후에 Carousel을 보여줌
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 2000); // 이 부분을 1000으로 변경하여 1초로 설정합니다.

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <TypingText
          text=" 가장 가볍고 가성비가 좋은 노트북 5개를 찾을 수 있습니다. "
          interval={30}
        />
      </div>
      {showCarousel && (
        <Carousel style={{ width: "410px" }}>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/laptop01.jpg"
                style={{ width: "300px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  1 에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)
                </Card.Title>
                <Card.Text>
                  가격 : 1,510,000원 <br></br>
                  무게 : 1kg
                </Card.Text>
                {/* 버튼 외부 링크  */}
                <div>
                  <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">제품 보러가기</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/laptop01.jpg"
                style={{ width: "300px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  2 에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)
                </Card.Title>
                <Card.Text>
                  가격 : 1,510,000원 <br></br>
                  무게 : 1kg
                </Card.Text>
                {/* 버튼 외부 링크  */}
                <div>
                  <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">제품 보러가기</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/laptop01.jpg"
                style={{ width: "300px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  3 에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)
                </Card.Title>
                <Card.Text>
                  가격 : 1,510,000원 <br></br>
                  무게 : 1kg
                </Card.Text>
                <Button variant="primary">제품 보러가기</Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default Cardslide;
