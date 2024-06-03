import React from "react";
import list from "../../Assets/list.json";
import "./Courses.css"
import Cardbox from "../Cardbox/Cardbox";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <>
      <div className="courses_section">
      <div className="course_inner">
      <h1>We're delighted to have you <span> here :)</span></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          alias, numquam atque quas odio sit tempore ipsa, iusto distinctio unde
          quasi, deserunt nobis voluptatum ullam nemo similique itaque!
          Reiciendis, officia.
        </p>
        <Link to="/">

        <button className="back">Back</button>
        </Link>
      </div>
       <div className="courses_box">
        {
            list.map((item)=>{
            return(
            <Cardbox item={item} key={item}/>
            )
            })
        }
       </div>
      </div>
    </>
  );
}

export default Courses;
