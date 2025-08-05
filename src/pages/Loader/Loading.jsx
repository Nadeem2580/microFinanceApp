import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";

export const Loading = () => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Lottie animationData={loaderAnimation} loop={true} autoplay />
    </div>
  );
};

export  default Loading



