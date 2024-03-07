import ADDER_LOGO from "@/app/assets/adder-logo.png";
import ADDER_TITLE from "@/app/assets/title-logo.png";
import Image from "next/image";
import RightNavigationMenu from "./RightNavigationMenu";

const TopNavigationMenu = () => {
  return (
    <>
      <div>
        <Image src={ADDER_LOGO} alt="adder_logo" width={25} height={25} />
      </div>

      <div>
        <Image src={ADDER_TITLE} alt="adder_logo" width={225} height={25} />
      </div>

      <RightNavigationMenu />
    </>
  );
};

export default TopNavigationMenu;
