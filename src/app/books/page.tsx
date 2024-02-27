import { getBooksCollection } from "@/api/apiMethods";
import BookCard from "./components/BookCard";
import { Book } from "./interfaces";

const Books = async () => {
  const books = await getBooksCollection();
  return books?.map((book: Book) => (
    <div className="w-full">
      <BookCard
        title={book.title}
        id={book._id}
        author={book.author}
        description={book.description}
      />
    </div>
  ));
};

export default Books;
