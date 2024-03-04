import { CreateBookModal } from "@/components/layout/CreateBookModal";
import Books from "./books/Books";
import { FilterBooks } from "@/components/layout/FilterBooks";
import { getBooksCollection } from "@/api/apiMethods";
import { Book } from "./books/interfaces";

export default async function Home() {
  const books: Book = await getBooksCollection();
  return (
    <main>
      <div className="w-full flex justify-center">
        <FilterBooks books={books} />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center place-items-center pb-12 pt-4 px-4">
        <CreateBookModal />
        <Books books={books} />
      </section>
    </main>
  );
}
