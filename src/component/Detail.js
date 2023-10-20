import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./LineChart.js";

function Detail() {
  return (
    <div className="detailWrap">
      <div className="detailLeft">
        <img
          className="chat-image"
          style={{ width: "300px" }}
          src="/pick.jpg"
          alt="노트북"
        />
      </div>
      <div className="detailMedium">
        {/* <div>
          <span>픽챗이 추천하는 노트북</span>
        </div> */}
        <div>
          <h5 style={{ fontFamily: "bold" }}>MSI GF시리즈 Thin GF63</h5>
        </div>
        <div>
          <p>제조사 MSI l 브랜드 MSI l 등록일 2023.02</p>
        </div>
        <div>
          <span>
            CPU 점수: 100000ㅣ GPU 점수: 1102 <br />
            화면 크기: 14인치 ㅣ 화면 밝기: 270 <br />
            파워: 배터리: 53Wh / 어댑터: 90W <br />
            충전단자: DC ㅣ 무게: 0.99kg
          </span>
        </div>
        <div>
          <h4>최저 1,464,990원</h4>
        </div>
      </div>
      <div className="detailRight" style={{ marginLeft: "20px" }}>
        <p>가격 추이</p>
        <LineChart />
      </div>
    </div>
  );
}

export default Detail;
