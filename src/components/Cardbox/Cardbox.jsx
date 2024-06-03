import React from "react";
import "./Cardbox.css";
const Cardbox = ({item}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={item.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge-new">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">$ {item.price}</div>
            <div className="badge buynow">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardbox;
