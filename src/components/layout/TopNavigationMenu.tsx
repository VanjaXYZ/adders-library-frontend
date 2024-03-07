"use client";
import ADDER_LOGO from "@/app/assets/adder-logo.png";
import ADDER_TITLE from "@/app/assets/title-logo.png";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import RightNavigationMenu from "./RightNavigationMenu";
import { useEffect, useState } from "react";

const TopNavigationMenu = () => {
  const pathname = usePathname();
  const [token, setToken] = useState<boolean>(false);
  // let getToken = Cookies.get("token");

  useEffect(() => {
    let getToken = Cookies.get("token");
    if (getToken) {
      setToken(true);
    }
  }, []);

  return (
    <>
      <div>
        <Image src={ADDER_LOGO} alt="adder_logo" width={25} height={25} />
      </div>

      <div>
        <Image src={ADDER_TITLE} alt="adder_logo" width={225} height={25} />
      </div>
      <div className="2xl:hidden">
        <RightNavigationMenu />
      </div>
      {token ? (
        <NavigationMenu className="hidden 2xl:flex">
          <NavigationMenuList className={cn("flex gap-10")}>
            <NavigationMenuLink
              className={cn(
                `hover:text-white text-black ${
                  pathname === "/" ? "text-white " : ""
                }`
              )}
              href="/"
            >
              Library
            </NavigationMenuLink>
            <NavigationMenuLink
              className={cn(
                `hover:text-white text-black ${
                  pathname === "/wishlist" ? "text-white" : ""
                }`
              )}
              href="/wishlist"
            >
              Wishlist
            </NavigationMenuLink>
            <LogoutButton />
          </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </>
  );
};

export default TopNavigationMenu;
