import Books from "./books/page";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center py-12 px-4">
      <Books />
    </main>
  );
}
