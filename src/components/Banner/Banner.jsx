import React from "react";
import "./Banner.css";
import Banner_img from "../../Assets/banner_img.png"
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="left">
          <div className="text">
            <h1>
              Hello, Welcome here to learn something{" "}
              <span className="headtext"> new everyday</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              consectetur dicta quos quam ea fugiat. Expedita fuga tempora
              repellat debitis non numquam nulla harum quisquam.
            </p>
          </div>
          <div className="email_box">
            <div className="email">
                <input type="email" placeholder="subscribe us" />
            </div>
            <button>subscribe</button>
          </div>
        </div>
        <div className="right">
            <img src={Banner_img}  alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
