import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
type BookProps = {
  title: string;
  author: string;
  id: string;
  description: string;
};
type CardProps = React.ComponentProps<typeof Card> & BookProps;
const BookCard = ({
  className,
  title,
  id,
  author,
  description,
  ...props
}: CardProps) => {
  return (
    <div key={id}>
      <Card
        className={cn(
          "max-w-[380px] h-[220px] bg-gradient-to-t from-red-700 via-rose-500 to-pink-500 flex flex-col justify-between hover:cursor-pointer",
          className
        )}
        {...props}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter
          className={cn(
            "flex justify-center items-center border-t rounded-t-[35%] bg-white font-semibold",
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
