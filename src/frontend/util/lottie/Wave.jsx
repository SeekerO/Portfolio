import React from "react";
import Lottie from "react-lottie";
import animationData from "./WaveAnimation.json";

const WaveAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute z-0">
      <Lottie height={1000} options={defaultOptions} isClickToPauseDisabled />
    </div>
  );
};

export default WaveAnimation;
