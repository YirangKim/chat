import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./LineChart.js";

function Detail() {
  return (
    <div className="detailWrap">
      <div className="detailLeft">
        <img className="chat-image" src="/laptop07.jpg" alt="노트북" />
      </div>
      <div className="detailMedium">
        <div>
          <span>픽챗이 추천하는 노트북</span>
        </div>
        <div>
          <h5>MSI GF시리즈 Thin GF63 12VE</h5>
        </div>
        <div>
          <p>제조사 MSI l 브랜드 MSI l 등록일 2023.02</p>
        </div>
        <div>
          <span>
            화면크기 : 43.94cm(17.3인치)ㅣ 무게 : 2.6kg ㅣ 종류 : 코어i7
            13세대ㅣ 출시OS : 미포함(FreeDos) ㅣ 코어종류 : 10코어(6P+4E)ㅣ
            NVIDIA GPU : 지포스 RTX4060ㅣ 램 : 16GBㅣ SSD : 512GB
          </span>
        </div>
        <div>
          <h4>최저 1,464,990원</h4>
        </div>
      </div>
      <div className="detailRight">
        <p>가격 추이</p>
        <LineChart />
      </div>
    </div>
  );
}

export default Detail;
