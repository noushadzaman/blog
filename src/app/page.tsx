import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/blogs"
          rel="noopener noreferrer"
        >
          Blogs →
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/form/add"
          rel="noopener noreferrer"
        >
          Add Blog →
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/bookmarks"
          rel="noopener noreferrer"
        >
          BookMarks →
        </Link>
      </footer>
    </div>
  );
}
