import React from "react";
import { useState,useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
function freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getBook();
  }, []);

  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20 ">
        <div>
          <h1 className="pb-2 text-xl font-semibold">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum deleniti similique obcaecati, qui ea excepturi animi sint
            magnam quod neque, nam molestias illum vero numquam harum sequi
            sunt! Reiciendis.
          </p>
        </div>

        <div >
          <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default freebook;
