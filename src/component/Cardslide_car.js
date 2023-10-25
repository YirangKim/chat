import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";
import TypingText from "./TypingText";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Cardslide_car() {
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
        <TypingText text="판매량 많은 자동차를 추천합니다." interval={30} />
      </div>

      {showCarousel && (
        <Carousel style={{ width: "460px" }}>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최대 판매량</p>
                <h3 className="name">
                  <span>KIA</span>
                  The new Sorento
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img
                  src="./sorento.png"
                  alt="6인승 시그니처 그래비티 4WD A/T"
                  style={{ width: "390px" }}
                />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">차종 정보</div>
                  <div className="info--list-txt">중형 SUV</div>
                </li>
                <li>
                  <div className="info--list-tit">연료</div>
                  <div className="info--list-txt">
                    가솔린, 가솔린+전기, 디젤
                  </div>
                </li>
                <li>
                  <div className="info--list-tit">연비/배기량</div>

                  <div className="info--list-txt option">
                    <p> 9.3~15.7㎞/ℓ </p>
                    <p> 1,598~2,497cc </p>
                    {/* <p> HUD + 빌트인 캠 2 등 </p> */}
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    54,720,000
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

export default Cardslide_car;
