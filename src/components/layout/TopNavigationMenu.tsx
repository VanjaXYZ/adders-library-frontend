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

const TopNavigationMenu = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="italic text-white">LOGO</div>
      <h3 className="text-white uppercase text-2xl tracking-widest">
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
