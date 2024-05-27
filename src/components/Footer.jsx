import React from "react";
import img1 from "../assets/image-about-dark.jpg";
import img2 from "../assets/image-about-light.jpg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-3/12">
        <img className="object-cover w-full h-60" src={img1} alt="" />
      </div>
      <div className="w-full md:w-6/12 flex flex-col gap-4 p-8 py-10 md:p-4 md:py-8">
        <h2 className="text-2xl uppercase font-bold tracking-widest text-veryDarkGray">
          About our furniture
        </h2>
        <p className="text-darkGray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="w-full md:w-3/12">
        <img className="object-cover w-full h-60" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Footer;
