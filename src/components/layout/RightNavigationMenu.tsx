"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import ADDER_TITLE from "@/app/assets/title-logo.png";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";

const RightNavigationMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <IconContext.Provider value={{ color: "black" }}>
            <CiMenuFries />
          </IconContext.Provider>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-r from-emerald-500 to-emerald-900">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Image
              src={ADDER_TITLE}
              alt="adder_logo"
              width={250}
              height={250}
              priority={true}
            />
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Adder" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" variant={"outline"}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter> */}
        <div className="w-full">
          <NavigationMenu className="w-full m-auto mt-10">
            <NavigationMenuList
              className={cn(
                "flex flex-col justify-center items-center w-full m-auto gap-10"
              )}
            >
              <NavigationMenuLink
                className={cn(
                  `hover:text-white text-black text-2xl ${
                    pathname === "/" ? "text-white " : ""
                  }`
                )}
                href="/"
              >
                Library
              </NavigationMenuLink>
              <NavigationMenuLink
                className={cn(
                  `hover:text-white text-black text-2xl ${
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
      </SheetContent>
    </Sheet>
  );
};

export default RightNavigationMenu;
