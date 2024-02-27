"use client";
import React, { forwardRef } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const SubmitFormButton = forwardRef((props, ref) => {
  const { pending } = useFormStatus();

  return (
    <Button
      {...props}
      type="submit"
      className="bg-emerald-500 hover:brightness-90 text-white"
      aria-disabled={pending}
    >
      {pending ? "Dodavanje u toku..." : "Dodaj"}
    </Button>
  );
});

export default SubmitFormButton;
