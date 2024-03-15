import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="mx-4 md:mx-20 border border-t-2">
        <h1 className="text-3xl tracking-wide mb-3 mt-1  font-semi text-greenColor-0 ">
          Cravings
        </h1>
        <div className=" flex flex-wrap justify-around pb-4">
          <div>
            <ul className="flex flex-col gap-y-2">
              <Link to="/recipe">
                <li>Recipe</li>
              </Link>
              <Link to="/categories/south-indian">
                <li>Category</li>
              </Link>
              <Link to="/chefs">
                <li>Chefs</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-2">
              <Link to="/about">
                <li>About us</li>
              </Link>
              <Link to="/about#contact">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold mb-[8px]">Follow us on:</h2>
            <div className="flex gap-x-3">
              <img
                src="/assets/facebook.png"
                alt=""
                className="w-6 h-6 lg:w-10 lg:h-10"
              />
              <img
                src="/assets/instagram.png"
                alt=""
                className="w-6 h-6 lg:w-10 lg:h-10"
              />
              <img
                src="/assets/twitter.png"
                alt=""
                className="w-6 h-6 lg:w-10 lg:h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
