import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  const [sliderKey, setSliderKey] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          "https://bookstoreapp-backend-fhug.onrender.com/book"
        );
        const data = res.data.filter((data) => data.category === "free");
        console.log(data);
        setBook(data);
        setSliderKey((prev) => prev + 1); // Force slider re-render
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // Updated to 1 for proper alignment
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
      <div>
        <h1 className="pb-2 text-xl font-semibold">Free Offered Courses</h1>
        <p>
          Explore our Free Books section and dive into a world of stories
          without spending a dime! Discover a curated collection of free eBooks
          across various genres. Start reading and enjoy unlimited access to
          knowledge and entertainment at no cost!
        </p>
      </div>

      <div className="overflow-hidden">
        <Slider {...settings} key={sliderKey} ref={sliderRef}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
