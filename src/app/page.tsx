import { getBooksCollection } from "@/api/apiMethods";
import { CreateBookModal } from "@/components/layout/CreateBookModal";
import Books from "./books/Books";
import { Book } from "./books/interfaces";

export default async function Home() {
  const books: Book = await getBooksCollection();
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center place-items-center pb-12 pt-4 px-4">
        <CreateBookModal />
        <Books books={books} />
      </section>
    </main>
  );
}
