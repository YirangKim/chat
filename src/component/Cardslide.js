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
          text="영상편집용 200만원대 노트북 5개를 추천해 드립니다."
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
                style={{ width: "410px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  1. 삼성전자 갤럭시북 프로 NT930XDB-KC59S
                </Card.Title>
                <Card.Text>
                  <p>
                    화면사이즈 : <span>39.6cm</span>
                  </p>
                  <br />
                  <p>
                    무게 : <span>1.98cm</span>
                  </p>
                  <br />
                  <p>
                    CPU : <span>코어i5</span>
                  </p>
                  <br />
                  <p>
                    배터리 : <span>RTX4050</span>
                  </p>
                  <br />
                  <p>
                    가격 : <span>1,047,990원</span>
                  </p>
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Img
                variant="top"
                src="/laptop01.jpg"
                style={{ width: "410px", height: "auto" }}
              />
              <Card.Body>
                <Card.Title>
                  1. 삼성전자 갤럭시북 프로 NT930XDB-KC59S
                </Card.Title>
                <Card.Text>
                  <p>
                    화면사이즈 : <span>39.6cm</span>
                  </p>
                  <br />
                  <p>
                    무게 : <span>1.98cm</span>
                  </p>
                  <br />
                  <p>
                    CPU : <span>코어i5</span>
                  </p>
                  <br />
                  <p>
                    배터리 : <span>RTX4050</span>
                  </p>
                  <br />
                  <p>
                    가격 : <span>1,047,990원</span>
                  </p>
                  <br />
                </Card.Text>
              </Card.Body>
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
