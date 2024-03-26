import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="border border-t-2 border-l-0 border-r-0 border-b-0 py-2">
        <a className="ml-20 btb-ghost font-bold text-xl md:text-2xl tracking-normal md:tracking-wide font-heading pt-4 text-greenColor-0">
          <Link to="/">CRAVINGS</Link>
        </a>
        <div className=" flex flex-wrap justify-around pb-4">
          <div>
            <ul className="flex flex-col gap-y-2 font-semibold">
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
            <ul className="flex flex-col gap-y-2 font-semibold">
              <Link to="/about#aboutPart">
                <li>About us</li>
              </Link>
              <li>
                <Link to="/about#contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-lg font-semibold mb-[8px]">Follow us on:</h2>
            <div className="flex gap-x-3">
              <Link to="https://www.facebook.com/" target="_blank">
                <img
                  src="/assets/facebook.png"
                  alt=""
                  className="w-6 h-6 lg:w-10 lg:h-10"
                />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <img
                  src="/assets/instagram.png"
                  alt=""
                  className="w-6 h-6 lg:w-10 lg:h-10"
                />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <img
                  src="/assets/twitter.png"
                  alt=""
                  className="w-6 h-6 lg:w-10 lg:h-10"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-greenColor-0 text-white px-10 py-4 text-center">
          <p>&copy; 2024 Cravings. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
