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
          text="영상편집용 가벼운 200만원대 노트북 5개를 추천해 드립니다."
          interval={30}
        />
      </div>
      {showCarousel && (
        <Carousel style={{ width: "410px" }}>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/list01.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              <Card.Body>
                {/* <Card.Title>
                  1. 삼성전자 갤럭시북 프로 NT930XDB-KC59S
                </Card.Title>
                <Card.Text>
                  가격 : 1,049,000원 <br />
                  무게 : 0.87kg <br />
                  추천이유 : CPU 점수가 9917, GPU 점수가 1102로 성능이 좋습니다.
                  또한, 화면의 밝기가 250, 화면의 주사율이 60으로 시각적인
                  만족도가 높습니다.
                </Card.Text> */}
                {/* 버튼 외부 링크  */}
                {/* <div>
                  <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">제품 보러가기</Button>
                  </Link>
                </div> */}
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/list02.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              {/* <Card.Body>
                <Card.Title>
                  2 에이서 스위프트 엣지 16 OLED SFE16-43-R8ZU (SSD 512GB)
                </Card.Title>
                <Card.Text>
                  가격 : 1,510,000원 <br></br>
                  무게 : 1kg
                </Card.Text>
                <div>
                  <Link to={shopUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">제품 보러가기</Button>
                  </Link>
                </div>
              </Card.Body> */}
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/list03.jpg"
                style={{ width: "410px", height: "auto" }}
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/list04.jpg"
                style={{ width: "410px", height: "auto" }}
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/list05.jpg"
                style={{ width: "410px", height: "auto" }}
              />
            </Card>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default Cardslide;
