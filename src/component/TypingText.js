import React, { useEffect, useState } from "react";

// useState :  displayText, currentIndex 두 가지 상태 세팅
// displayText는 화면에 표시할 텍스트를 저장
// 타이핑 효과를 통해 텍스트를 하나씩 표시
// currentIndex는 현재까지 타이핑된 글자 수
// 현재 어떤 글자를 표시할지를 추적
// text 외부에서 전달된 텍스트, 화면에 타이핑되는 텍스트
// interval 글자가 화면에 추가되는 시간 간격, 매개변수
function TypingText({ text, interval }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        // text 문자열에서 현재 currentIndex까지의 문자들을 선택
        setDisplayText(displayText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, interval);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, interval]);

  return <span>{displayText}</span>;
}

export default TypingText;
