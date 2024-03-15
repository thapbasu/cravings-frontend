import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="h-[60vh] my-20 relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/assets/about-bg.png')" }}
    >
      <div className="hidden lg:flex absolute bottom-20 left-20 px-2 py-1 text-greenColor-0  justify-center items-center opacity-95 bg-white shadow-lg rounded-lg w-56 text-center h-20">
        <p>50+ Quick Food Recipes That Easy To Do! </p>
      </div>
      <div className=" absolute lg:top-20 px-2 py-3 md:px-10 md:py-6 gap-y-6 lg:right-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:-translate-x-0 lg:-translate-y-0 flex-col  flex justify-center items-center opacity-95 bg-white shadow-lg rounded-lg w-72 min-h-28  md:w-96  md:min-h-60">
        <h2 className="text-3xl font-bold ">About us</h2>
        <p className="text-greenColor-0 text-justify">
          Our recipes are the heart and soul of our culinary community, and they
          reflect our commitment to providing you with memorable and delightful
          dining experiences.{' '}
        </p>
        <Link to="/about" className="w-full">
          <button className="bg-yellowColor-0 px-5 py-2 w-1/2 text-white font-semibold rounded-xl">
            Learn More!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
