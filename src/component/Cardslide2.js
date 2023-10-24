import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";
import TypingText from "./TypingText";
import "bootstrap/dist/css/bootstrap.min.css";

function Cardslide2() {
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
        <TypingText text="성능좋은 카메라를 추천합니다." interval={30} />
      </div>

      {showCarousel && (
        <Carousel style={{ width: "410px" }}>
          <Carousel.Item>
            <Card>
              <Card.Img
                className="chat-image"
                style={{ width: "300px" }}
                src="/camera.jpg"
                alt=""
              />
              <Card.Body>
                <Card.Title>SONY 알파 A7C R</Card.Title>
                <Card.Text>
                  <p>화소 : 6100만화소</p>
                  <p>
                    디스플레이 : 7.62cm(3인치) / 터치스크린 / 전자식뷰파인더 /
                    236만화소
                  </p>
                  <p>사진/동영상 : 최고ISO51200 / 셔터:1/4000초</p>
                  <p>촬영기능 : 5축 손떨림보정 / 안티플리커 / HDR</p>
                  <p>가격 : 3,544,900원</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default Cardslide2;
