"use client";
import React from "react";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const logoutUser = () => {
    Cookies.remove("token");
    router.replace("/login");
  };
  return (
    <Button variant={"destructive"} onClick={() => logoutUser()}>
      Logout
    </Button>
  );
};

export default LogoutButton;
