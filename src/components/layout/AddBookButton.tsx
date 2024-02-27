"use client";
import { Button } from "@/components/ui/button";

export function AddBookButton() {
  return (
    <Button
      variant="destructive"
      size="lg"
      className="bg-gradient-to-r from-emerald-500 to-emerald-700 my-5 uppercase font-bold text-white hover:brightness-110 "
    >
      Dodaj
    </Button>
  );
}
