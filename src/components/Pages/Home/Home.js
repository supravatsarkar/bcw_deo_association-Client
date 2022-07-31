import React from "react";
import Carousel from "../../Carousel/Carousel";
import Count from "../../Count/Count";
import Footer from "../../Footer/Footer";
import MessageUs from "../../MessageUs/MessageUs";
import Navbar from "../../Navbar/Navbar";
import OurActivity from "../../OurActivity/OurActivity";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-xxl p-0">
      {/* <Navbar></Navbar> */}

      <div>
        <Carousel></Carousel>
      </div>
      <div className="bg-info text-light p-2">
        <div className="container-lg">
          <h3>Who are we?</h3>
          <p className="text-start fs-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            delectus eum ut iusto eius, obcaecati tempora minima animi quaerat
            adipisci accusamus inventore minus reprehenderit sapiente quis
            ducimus rerum libero numquam cum ipsam accusantium. Impedit
            similique ab et molestias tempore quos dignissimos sunt error,
            aperiam architecto voluptatem eligendi consectetur expedita quidem.
          </p>
          <NavLink to="/about">
            <button className="btn btn-outline-secondary btn-sm">
              Read More
            </button>{" "}
          </NavLink>
        </div>
      </div>
      <OurActivity></OurActivity>
      <Count></Count>
      <MessageUs></MessageUs>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
