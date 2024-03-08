import React from "react";
import ADDER_LOGO from "../../app/assets/adder-logo.png";
import Image from "next/image";

const MainLoading = () => {
  return (
    <div className="flex justify-center p-20">
      <Image
        src={ADDER_LOGO}
        width={250}
        height={250}
        alt="adder_logo"
        className="animate-pulse"
      />
    </div>
  );
};

export default MainLoading;
