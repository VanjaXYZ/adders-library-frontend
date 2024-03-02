import { getBooksCollection } from "@/api/apiMethods";
import BookCard from "./components/BookCard";
import { Book } from "./interfaces";

const Books = async () => {
  const books = await getBooksCollection();
  return books?.map((book: Book) => (
    <div className="w-full" key={book._id}>
      <BookCard
        title={book.title}
        _id={book._id}
        author={book.author}
        description={book.description}
      />
    </div>
  ));
};

export default Books;
