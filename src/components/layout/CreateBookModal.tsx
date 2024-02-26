"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { createNewBook } from "@/api/apiMethods";
import { Book } from "@/app/books/interfaces";

export function CreateBookModal() {
  const [book, setBook] = useState<Book>({
    title: "",
    description: "",
    author: "",
  });

  const onCreateNewBook = async (book: any) => {
    try {
      const createBook = await createNewBook(book);
      if (createBook?.status === 200) {
        return createBook;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-emerald-600 text-white hover:brightness-110"
        >
          DODAJ
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-w-[320px] bg-white">
        <DialogHeader>
          <DialogTitle>Dodaj knjigu</DialogTitle>
          <DialogDescription>Unesi podatke za novu knjigu.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Naslov
            </Label>
            <Input
              id="title"
              maxLength={60}
              placeholder="Max. 60 karaktera"
              className="col-span-3"
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">
              Autor
            </Label>
            <Input
              id="author"
              maxLength={30}
              placeholder="Max. 30 karaktera"
              className="col-span-3"
              onChange={(e) => setBook({ ...book, author: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right self-start">
              Opis
            </Label>
            <Textarea
              id="description"
              maxLength={100}
              placeholder="Max. 100 karaktera"
              className="col-span-3 resize-none"
              onChange={(e) =>
                setBook({ ...book, description: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              type="submit"
              className="bg-emerald-500 hover:brightness-90 text-white"
              onClick={() => onCreateNewBook(book)}
            >
              Sačuvaj
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
