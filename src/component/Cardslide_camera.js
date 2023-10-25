import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";
import TypingText from "./TypingText";
import "bootstrap/dist/css/bootstrap.min.css";

function Cardslide_camera() {
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
        <Carousel style={{ width: "460px" }}>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최고 인기순</p>
                <h3 className="name">
                  <span>SONY</span>
                  소니 알파 A7C R
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img
                  src="./camera.jpg"
                  alt="SONY 알파 A7C R"
                  style={{ width: "370px" }}
                />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화소</div>
                  <div className="info--list-txt">6100만화소</div>
                </li>
                <li>
                  <div className="info--list-tit">디스플레이</div>
                  <div className="info--list-txt">
                    7.62cm(3인치) &#124; 236만화소
                  </div>
                </li>
                <li>
                  <div className="info--list-tit">사진/동영상</div>
                  <div className="info--list-txt">
                    ISO51200 &#124; 셔터 1/4000초
                  </div>
                </li>
                <li>
                  <div className="info--list-tit">촬영기능</div>

                  <div className="info--list-txt option">
                    <p> 5축 손떨림보정 </p>
                    <p> 안티플리커 </p>
                    <p> HDR </p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    3,500,100
                    <span> 원</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
}

export default Cardslide_camera;
