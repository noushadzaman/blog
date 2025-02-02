"use client";

import { useEffect, useState } from "react";

const BookMarkPage = () => {
  const [bookMarks, setBookMarks] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (storedBookmarks !== null) {
      const object = JSON.parse(storedBookmarks);
      setBookMarks(object);
    }
  }, []);
  console.log(bookMarks);

  return (
    <div className="flex gap-2">
      {Object.keys(bookMarks).map((key, index) => (
        <div
          key={index}
          className="rounded-lg cursor-pointer p-5 hover:bg-gray-500 size-[200px] border border-violet-200"
        >
          <p className="text-xl font-semibold">{key}</p>
          <p>{bookMarks[key].length} blogs available</p>
        </div>
      ))}
    </div>
  );
};

export default BookMarkPage;
