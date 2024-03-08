"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Book } from "../interfaces";
import DeleteBookButton from "@/components/layout/DeleteBookButton";
import { deleteBook } from "@/api/apiMethods";

type CardProps = React.ComponentProps<typeof Card> & Book;
const BookCard = ({
  className,
  title,
  _id,
  author,
  description,
  ...props
}: CardProps) => {
  const deleteBookRef = useRef();
  return (
    <div key={_id}>
      <Card
        className={cn(
          " max-w-[380px] m-auto text-center h-[220px] bg-gradient-to-r from-emerald-500 to-emerald-900 text-white flex flex-col justify-between hover:shadow-lg hover:shadow-teal-500 relative",
          className
        )}
        {...props}
      >
        <CardHeader>
          <form action={deleteBook}>
            <input type="hidden" name="id" value={_id} />{" "}
            <DeleteBookButton ref={deleteBookRef} />
          </form>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-white">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter
          className={cn(
            "flex justify-center items-center border-t rounded-t-[35%] bg-white text-black font-semibold",
            className
          )}
        >
          {author}
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
