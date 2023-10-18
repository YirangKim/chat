import React from "react";
import { BeatLoader } from "react-spinners";
import TypingText from "./TypingText";

const Loading = () => {
  return (
    <div>
      <BeatLoader color="#466fff" />
      <TypingText
        text="픽챗이 당신에게 적합한 상품을 추천합니다."
        interval={40}
      />
    </div>
  );
};

export default Loading;
