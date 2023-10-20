//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Intro() {
  return (
    <div className="IntroWrap">
      <div>
        <h5>더 똑똑하게 찾아주는 AI 픽챗</h5>
        <img src="/logo.png" style={{ width: "400px" }} alt="로고" />
      </div>
      <div>
        <div className="intro-txt">
          <FontAwesomeIcon
            icon={faCommentDots}
            style={{ color: "#294ad3" }}
            size="lg"
          />
          <p>이런 걸 물어볼 수 있어요</p>
        </div>
        <div>
          <div className="introBtn">
            <button className="introBtn-txt">속도빠른 노트북 알려줘</button>
            <button className="introBtn-txt">큰 화면 노트북 알려줘</button>
            <button className="introBtn-txt">가벼운 노트북 알려줘</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
