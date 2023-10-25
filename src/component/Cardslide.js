import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// Link 컴포넌트를 가져옵니다.
import { Link } from "react-router-dom";
import TypingText from "./TypingText";

function Cardslide({ cardData }) {
  // 외부 웹 페이지 URL
  let shopUrl =
    "https://prod.danawa.com/info/?pcode=20239928&cate=112758&adinflow=Y";

  const model1 = "Model1";
  // 상태를 추가하여 Carousel이 보여질지 여부를 관리
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    // 1초 (1000 밀리초) 후에 Carousel을 보여줌
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 7000); // 이 부분을 1000으로 변경하여 1초로 설정합니다.

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <TypingText
          text="영상 편집을 위한 노트북을 찾으시는군요. 영상 편집은 고성능의 CPU와 GPU, 그리고 충분한 저장 공간이 필요합니다. 또한, 디스플레이의 화질도 중요한 요소입니다. 이러한 요소들을 고려하여 추천해드릴게요."
          interval={50}
        />
      </div>

      {showCarousel && (
        <Carousel style={{ width: "460px" }}>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">인기상품</p>
                <h3 className="name">
                  <span>MSI</span>
                  GP시리즈 Vector GP66 12UH-i9
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img src="./note01.jpg" style={{ width: "390px" }} />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화면</div>
                  <div className="info--list-txt">15.6인치</div>
                </li>
                <li>
                  <div className="info--list-tit">무게</div>
                  <div className="info--list-txt">2.38kg</div>
                </li>
                <li>
                  <div className="info--list-tit">특징</div>

                  <div className="info--list-txt option">
                    <p> 인텔 코어i9-12세대 CPU </p>
                    <p> 외장그래픽 RTX3070 Ti </p>
                    <p> 램 16GB </p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    1,739,910
                    <span> 원</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최대 판매량</p>
                <h3 className="name">
                  <span>에이서</span>
                  프레데터 Helios 300 PH315-55-97B2
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img
                  src="./note02.jpg"
                  alt="6인승 시그니처 그래비티 4WD A/T"
                  style={{ width: "390px" }}
                />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화면</div>
                  <div className="info--list-txt">15.6인치</div>
                </li>
                <li>
                  <div className="info--list-tit">무게</div>
                  <div className="info--list-txt">2.6kg</div>
                </li>
                <li>
                  <div className="info--list-tit">특징</div>

                  <div className="info--list-txt option">
                    <p> 인텔 코어i9-12세대 CPU </p>
                    <p> 외장그래픽 RTX3070 Ti</p>
                    <p> 램 16GB </p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    2,299,000
                    <span> 원</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최대 판매량</p>
                <h3 className="name">
                  <span>ASUS</span>
                  ROG 제피러스 G14 GA402XI-N2042
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img src="./note03.jpg" style={{ width: "390px" }} />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화면</div>
                  <div className="info--list-txt">14인치</div>
                </li>
                <li>
                  <div className="info--list-tit">무게</div>
                  <div className="info--list-txt">1.65kg</div>
                </li>
                <li>
                  <div className="info--list-tit">특징</div>

                  <div className="info--list-txt option">
                    <p> AMD 라이젠9(Zen4) CPU </p>
                    <p> 외장그래픽 RTX4070</p>
                    <p> 램 16GB</p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    2,398,660
                    <span> 원</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최대 판매량</p>
                <h3 className="name">
                  <span>DELL</span>
                  G시리즈 G15 DG5520-UB06KR WIN11
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img src="./note04.jpg" style={{ width: "390px" }} />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화면</div>
                  <div className="info--list-txt">15.6인치</div>
                </li>
                <li>
                  <div className="info--list-tit">무게</div>
                  <div className="info--list-txt">2.67kg</div>
                </li>
                <li>
                  <div className="info--list-tit">특징</div>

                  <div className="info--list-txt option">
                    <p> 인텔 코어i9-12세대 CPU </p>
                    <p> 외장그래픽 RTX3070 </p>
                    <p> 램 32GB</p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    2,712,800
                    <span> 원</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="swiper-slide best-model__item"
              style={{ width: "432px" }}
            >
              <div className="best-model__item--title">
                <p className="label-txt ">최대 판매량</p>
                <h3 className="name">
                  <span>LG전자</span>
                  그램15 15ZD90R-GX56K
                </h3>
              </div>
              <div className="best-model__item--photo">
                <img src="./note05.jpg" style={{ width: "390px" }} />
              </div>
              <ul className="best-seller__info--list">
                <li>
                  <div className="info--list-tit">화면</div>
                  <div className="info--list-txt">15.6인치</div>
                </li>
                <li>
                  <div className="info--list-tit">무게</div>
                  <div className="info--list-txt">1.14kg</div>
                </li>
                <li>
                  <div className="info--list-tit">특징</div>

                  <div className="info--list-txt option">
                    <p> 인텔 코어i5-13세대 </p>
                    <p> 내장그래픽 Iris Xe </p>
                    <p> 램 16GB</p>
                  </div>
                </li>
              </ul>

              <div className="bottm_area">
                <div className="best-model__item--price">
                  <p className="price--title">최저가</p>
                  <div>
                    1,359,000
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

export default Cardslide;
