import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

const DeleteBookButton = forwardRef((props, ref) => {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      className={cn("bg-transparent absolute top-0 right-0")}
      aria-disabled={pending}
    >
      {pending ? "Removing..." : "❌"}
    </Button>
  );
});

DeleteBookButton.displayName = "DeleteBookButton";

export default DeleteBookButton;
