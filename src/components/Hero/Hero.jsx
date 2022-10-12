import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container mx-auto md:mt-20 mt-10">
        <div className="flex md:flex-row  flex-col-reverse items-center md:gap-32  gap-7 md:mx-auto justify-center">
          <div className="md:w-2/5 md:mx-0 mx-5 ">
            <h1 className="md:text-5xl text-3xl font-bold">Test your Skills</h1>
            <p className="mt-8 text-base font-medium">
              We have created a platform for you. Lest make it happen
            </p>
            <Link to={"/topics"}>
              <button className="btn btn-primary mt-8">Get Started</button>
            </Link>
          </div>
          <div className="hero-img md:w-2/5 md:mx-0 mx-5">
            <img
              className="h-3/4 rounded "
              src="https://placeimg.com/1000/800/arch"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
