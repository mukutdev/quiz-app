import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container mx-auto mt-20">
        <div className="flex items-center gap-32 mx-auto justify-center">
          <div className="w-2/5">
            <h1 className="text-5xl font-bold">Test your Skills</h1>
            <p className="mt-8 text-base font-medium">
              We have created a platform for you. Lest make it happen
            </p>
            <Link to={"/topics"}>
              <button className="btn btn-primary mt-8">Get Started</button>
            </Link>
          </div>
          <div className="hero-img w-2/5">
            <img
              className="h-3/4 rounded"
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
