import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Courses from "../components/Courses/Courses";
const Course = () => {
  return (
    <>
      <Navbar />
      <div className="Courses" style={{ min_height: "100vh" }}>
        <Courses />
      </div>
      <Footer />
    </>
  );
};

export default Course;
