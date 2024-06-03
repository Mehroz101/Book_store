import React from "react";
import "./Card.css";
import listdata from "../../Assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cardbox from "../Cardbox/Cardbox";
const Card = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1123,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const filterData = listdata.filter((data) => data.category === "free");
  //   console.log(filterData);

  return (
    <>
      <div className="card-container">
        <div className="text">
          <h1>Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            reprehenderit ducimus impedit atque suscipit ipsa quasi quaerat,
            nobis, est blanditiis, neque ratione tempore veritatis voluptate
            facere rerum quisquam incidunt nihil!
          </p>
        </div>
        <div className="slider">
          <div className="slider-container">
            <Slider {...settings}>
              {filterData.map((items) => {
                return (
                  <div>
                    <Cardbox item={items} key={items.id} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
