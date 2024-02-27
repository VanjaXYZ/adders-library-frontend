"use client";
import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogFooter, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { addBook } from "@/api/apiMethods";
import SubmitFormButton from "./SubmitFormButton";

const Form = () => {
  const submitRef = useRef();
  return (
    <form action={addBook} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">
          Naslov
        </Label>
        <Input
          id="title"
          name="title"
          maxLength={60}
          placeholder="Max. 60 karaktera"
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="author" className="text-right">
          Autor
        </Label>
        <Input
          id="author"
          name="author"
          maxLength={30}
          placeholder="Max. 30 karaktera"
          className="col-span-3"
          required
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right self-start">
          Opis
        </Label>
        <Textarea
          id="description"
          name="description"
          maxLength={100}
          placeholder="Max. 100 karaktera"
          className="col-span-3 resize-none"
        />
      </div>
      <DialogFooter>
        <DialogTrigger asChild>
          <SubmitFormButton ref={submitRef} />
        </DialogTrigger>
      </DialogFooter>
    </form>
  );
};

export default Form;
