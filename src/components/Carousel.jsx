import React, { useState } from "react";
import img1 from "../assets/desktop-image-hero-1.jpg";
import img2 from "../assets/desktop-image-hero-2.jpg";
import img3 from "../assets/desktop-image-hero-3.jpg";

import left from "../assets/icon-angle-left.svg";
import right from "../assets/icon-angle-right.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "./Navbar";

const Carousel = () => {
  const MAXSLIDES = 3;
  const [slide, setSlide] = useState(1);
  const [animation, setAnimation] = useState();
  const prevSlide = () => {
    let next = slide - 1;
    if (next < 1) {
      next = MAXSLIDES;
    }
    setSlide(next);
    setAnimation("slide-in-from-right-48");
  };
  const nextSlide = () => {
    let next = slide + 1;
    if (next > MAXSLIDES) {
      next = 1;
    }
    setSlide(next);
    setAnimation("slide-in-from-left-48");
  };
  return (
    <div className="w-full flex flex-col md:flex-row">
      <img className="hidden" src={img1} alt="" />
      <img className="hidden" src={img2} alt="" />
      <img className="hidden" src={img3} alt="" />
      <div className="md:w-7/12 relative">
        {slide === 1 ? (
          <img
            className={`w-full object-cover animate-in ${animation} duration-300`}
            src={img1}
            alt=""
          />
        ) : null}

        {slide === 2 ? (
          <img
            className={`w-full object-cover animate-in ${animation} duration-300`}
            src={img2}
            alt=""
          />
        ) : null}
        {slide === 3 ? (
          <img
            className={`w-full object-cover animate-in ${animation} duration-300`}
            src={img3}
            alt=""
          />
        ) : null}
        <div className="w-full absolute top-2 md:top-10 md:left-10">
          <Navbar />
        </div>
        <div className="absolute bottom-0 right-0 flex md:hidden flex-row">
          <div
            onClick={prevSlide}
            className="bg-black p-4 hover:bg-veryDarkGray cursor-pointer"
          >
            <img src={left} alt="" />
          </div>
          <div
            onClick={nextSlide}
            className="bg-black p-4 hover:bg-veryDarkGray cursor-pointer"
          >
            <img src={right} alt="" />
          </div>
        </div>
      </div>
      <div className="md:w-5/12 flex flex-col justify-between">
        <div className="p-8 py-10 md:p-40 md:py-36 flex flex-col gap-6">
          {slide === 1 ? (
            <h1 className="text-4xl md:text-5xl font-bold text-veryDarkGray">
              Discover innovative ways to decorate
            </h1>
          ) : null}
          {slide === 2 ? (
            <h1 className="text-4xl md:text-5xl font-bold text-veryDarkGray">
              We are available all across the globe
            </h1>
          ) : null}
          {slide === 3 ? (
            <h1 className="text-4xl md:text-5xl font-bold text-veryDarkGray">
              Manufactured with the best materials
            </h1>
          ) : null}

          {slide === 1 ? (
            <p className="text-darkGray">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
          ) : null}
          {slide === 2 ? (
            <p className="text-darkGray">
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we're in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
          ) : null}
          {slide === 3 ? (
            <p className="text-darkGray">
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
          ) : null}

          <div className="flex flex-row items-center gap-4 hover:text-darkGray cursor-pointer">
            <p className="uppercase text-2xl tracking-widest">Shop now</p>
            <FaArrowRightLong size={24} />
          </div>
        </div>
        <div className="hidden md:flex flex-row">
          <div
            onClick={prevSlide}
            className="bg-black p-10 hover:bg-veryDarkGray cursor-pointer"
          >
            <img src={left} alt="" />
          </div>
          <div
            onClick={nextSlide}
            className="bg-black p-10 hover:bg-veryDarkGray cursor-pointer"
          >
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
