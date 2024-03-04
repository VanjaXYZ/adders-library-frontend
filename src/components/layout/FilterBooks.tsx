"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function FilterBooks({ books }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between  mt-2 text-white"
        >
          {value
            ? books.find((book: any) => book.title === value)?.title
            : "Select book..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-emerald-400">
        <Command>
          <CommandInput placeholder="Search library..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {books.map((book: any) => (
              <CommandItem
                key={book._id}
                value={book}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  console.log(currentValue, value, book);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === book.title ? "opacity-100" : "opacity-0"
                  )}
                />
                {book.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
