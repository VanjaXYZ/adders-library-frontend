import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { deleteBook } from "@/api/apiMethods";

const DeleteBookButton = ({ id }: { id: string | undefined }) => {
  return (
    <form action={deleteBook}>
      <input type="hidden" name="id" value={id} />
      <Button className={cn("bg-transparent absolute top-0 right-0")}>
        ❌
      </Button>
    </form>
  );
};

export default DeleteBookButton;
