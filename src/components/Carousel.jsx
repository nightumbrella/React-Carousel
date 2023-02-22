import React from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Carousel = () => {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 1100;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 1100;
    }


  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">Carousel</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-hidden scroll-smooth  scrollbar-hide ">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
