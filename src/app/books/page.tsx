import { getBooksCollection } from "@/api/apiMethods";
import BookCard from "./components/BookCard";

const Books = async () => {
  const books = await getBooksCollection();
  return books.map((book: any) => (
    <BookCard
      title={book.title}
      id={book._id}
      author={book.author}
      description={book.description}
    />
  ));
};

export default Books;
