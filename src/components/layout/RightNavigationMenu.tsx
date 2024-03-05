"use client";
import ADDER_TITLE from "@/app/assets/title-logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconContext } from "react-icons";
import { CiMenuFries } from "react-icons/ci";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import LogoutButton from "./LogoutButton";
import Cookies from "js-cookie";

const RightNavigationMenu = () => {
  const pathname = usePathname();
  const token = Cookies.get("token");
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
        </SheetHeader>

        {token ? (
          <>
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
            <div className="text-center mt-8">
              <LogoutButton />
            </div>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default RightNavigationMenu;
