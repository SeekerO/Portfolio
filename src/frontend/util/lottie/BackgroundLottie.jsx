import React from "react";
import Lottie from "react-lottie";
import animationData from "./Animation - 1714628197981.json";
const BackgroundLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute">
      <Lottie
        options={defaultOptions}
        className="w-screen h-screen bg-black"
      />
    </div>
  );
};

export default BackgroundLottie;
