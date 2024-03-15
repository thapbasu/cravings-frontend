import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IoStarSharp } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import Recipe from '../components/home/Recipe';
import About from '../components/home/About';
import Community from '../components/home/Community';
import PopularMenu from '../components/home/PopularMenu';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heart, setHeart] = useState(false);
  const [heart2, setHeart2] = useState(false);
  const heartHandler = () => {
    setHeart(!heart);
  };
  const heartHandler2 = () => {
    setHeart2(!heart2);
  };
  return (
    <Layout>
      {/* Hero Section */}
      <div className=" hero-section flex justify-around items-center pt-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Cooking Made Fun and Easy: Unleash Your Inner Chef.
          </h1>
          <p className="text-gray-500 text-base mb-10">
            Discover more than{' '}
            <span className="text-yellowColor-0">10,000 recipes </span>
            in your hand with the best recipe. Help you to find the easiest way
            to cook.
          </p>
          <Link to="/recipe">
            <button className="bg-yellowColor-0 px-5 py-4 text-white font-semibold rounded-xl">
              Explore Recipes
            </button>
          </Link>
        </div>
        <div className="relative">
          <img
            src="/assets/hero.png"
            alt=""
            className=" hidden md:block md:w-[1000px]"
          />
          <div className="hidden lg:block w-56 h-52 rounded-lg bg-white shadow-lg absolute top-60 right-20">
            <div className="bg-gray-300 rounded-lg mx-4 px-3 py-1 mt-4">
              <div className="flex gap-x-1 my-2 text-yellow-500">
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
              </div>
              <p>
                “I've discovered a treasure trove of meatless recipes that have
                made my meals”.
              </p>
            </div>
            <div className="flex items-center mx-4 mt-1 justify-between">
              <div className="flex items-center gap-x-3">
                <img
                  src="/assets/hero.png"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p>Farellon J.</p>
              </div>
              {heart ? (
                <FaHeart
                  className="w-9 h-9 text-red-500 text-semibold transition-colors duration-300"
                  onClick={heartHandler}
                />
              ) : (
                <CiHeart
                  className="w-9 h-9 text-semibold transition-colors duration-300"
                  onClick={heartHandler}
                />
              )}
            </div>
          </div>
          <div className="hidden lg:block w-56 h-52 rounded-lg bg-white shadow-lg absolute bottom-5 left-10">
            <div className="bg-gray-300 h-32 rounded-lg mx-4 px-3 py-1 mt-4">
              <div className="flex gap-x-1 my-2 text-yellow-500">
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
                <IoStarSharp className="w-5 h-5" />
              </div>
              <p>
                "The recipes here are not only delicious but also easy to
                follow”.
              </p>
            </div>
            <div className="flex items-center mx-4 mt-1 justify-between">
              <div className="flex items-center gap-x-3">
                <img
                  src="/assets/hero.png"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p>Sarah M.</p>
              </div>
              {heart2 ? (
                <FaHeart
                  className="w-9 h-9 text-red-500 text-semibold transition-colors duration-300"
                  onClick={heartHandler2}
                />
              ) : (
                <CiHeart
                  className="w-9 h-9 text-semibold transition-colors duration-300"
                  onClick={heartHandler2}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Recipe */}
      <Recipe />
      {/* About */}
      <About />
      {/* Community */}
      <Community />
      {/* Popular Menu */}
      <PopularMenu />
    </Layout>
  );
};

export default Home;
