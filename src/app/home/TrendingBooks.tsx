import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";

const TrendingBook = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  async function getTrendingBooks() {
    try {
      const res = await fetch(`https://openlibrary.org/trending/daily.json`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data.works);
      setTrendingBooks(data.works);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTrendingBooks();
  }, []);
  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {trendingBooks.map((book, index) => (
          <div
            className="text-center items-center flex flex-col  border rounded-md shadow-lg hover:scale-105 hover:border-neutral-400"
            key={index}
          >
            <div className="flex justify-center items-cente h-[320px] relative max-w-full">
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg?default=false`}
                width={600}
                height={240}
                className="object-cover rounded-t-md"
                alt={book.title}
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center h-full">
              <h4 className="text-lg font-bold leading-tight">{book.title}</h4>
              <h4 className="text-neutral-400 leading-tight">
                {book.author_name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBook;
