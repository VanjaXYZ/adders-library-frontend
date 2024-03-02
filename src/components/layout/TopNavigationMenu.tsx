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

const TopNavigationMenu = () => {
  const pathname = usePathname();
  return (
    <>
      <div>
        <Image src={ADDER_LOGO} alt="adder_logo" width={25} height={25} />
      </div>
      <h3 className="text-white uppercase text-2xl tracking-widest hidden sm:flex">
        Adder's Library
      </h3>
      <NavigationMenu>
        <NavigationMenuList className={cn("flex gap-10")}>
          <NavigationMenuLink
            className={cn(
              `hover:text-green-200 text-white ${
                pathname === "/" ? "text-green-400" : ""
              }`
            )}
            href="/"
          >
            Library
          </NavigationMenuLink>
          <NavigationMenuLink
            className={cn(
              `hover:text-green-200 text-white ${
                pathname === "/wishlist" ? "text-green-400" : ""
              }`
            )}
            href="/wishlist"
          >
            Wishlist
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default TopNavigationMenu;
