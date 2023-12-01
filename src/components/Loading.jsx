import React from "react";
import logoVision from "../assets/img/ojo-abierto.png";

const Loading = () => {
  return (
    <div className="bg-wh dark:bg-bg h-screen flex justify-center items-center">
      <img src={logoVision} alt="Logo" className="w-52 h-28" />
    </div>
  );
}

export default Loading;