import React from "react";
import list from "../../public/list.json";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
function freebook() {
  const filterData = list.filter((data) => data.category === "free");
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
          {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default freebook;
