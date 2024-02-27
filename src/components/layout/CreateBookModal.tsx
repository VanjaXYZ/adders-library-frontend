// "use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from "./Form";

export function CreateBookModal() {
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
        <Form />
      </DialogContent>
    </Dialog>
  );
}
