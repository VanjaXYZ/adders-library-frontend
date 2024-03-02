"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ADDER_LOGO from "@/app/assets/adder-logo.png";
import ADDER_TITLE from "@/app/assets/title-logo.png";
import RightNavigationMenu from "./RightNavigationMenu";

const TopNavigationMenu = () => {
  const pathname = usePathname();
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
      <div className="hidden 2xl:flex">
        <NavigationMenu>
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
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default TopNavigationMenu;
