import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import Link from "next/link";

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
  //
  useEffect(() => {
    getTrendingBooks();
  }, []);
  //

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    rows: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative pb-[80px]">
      <Slider {...settings}>
        {trendingBooks.map((book, index) => (
          <div key={index}>
            <div className="m-4 shadow-lg ">
              <div className="flex justify-center items-cente h-[320px] relative max-w-full">
                <Image
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg?default=false`}
                  width={600}
                  height={240}
                  className="object-cover rounded-t-md"
                  alt={book.title}
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center h-full text-center">
                <h4 className="text-lg font-bold leading-tight">
                  {book.title}
                </h4>
                <h4 className="text-neutral-400 leading-tight">
                  {book.author_name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingBook;
