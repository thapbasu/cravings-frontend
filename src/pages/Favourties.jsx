import React from 'react';
import Layout from '../components/Layout';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Favourties = () => {
  const favorites = [
    {
      id: 7,
      name: 'Creamy Salad',
      time: 10,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/recipe/1.png',
      premium: true,
    },
    {
      id: 8,
      name: 'Tofu Tomatoes Soup',
      time: 15,
      serving: 3,
      difficulty: 'easy',
      image: '/assets/recipe/2.png',
    },
    {
      id: 9,
      name: 'Raspberry Pancake',
      time: 30,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/recipe/5.png',
    },
  ];
  return (
    <Layout>
      <div className="my-16">
        <div className="mb-10">
          <h2 className="font-bold text-3xl text-center text-yellowColor-0">
            Favourites
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
          {favorites.map((item) => (
            <div key={item.id} className="shadow-lg border ">
              <div>
                <figure>
                  <div
                    className="w-full h-[40vh] relative no-repeat bg-cover"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {/* Absolutely positioned container */}
                    <div className="absolute bottom-0 flex justify-between items-center p-2 px-1 md:px-6 opacity-75 bg-gray-50 w-full text-greenColor-0 font-semibold capitalize">
                      <p className="flex items-center">
                        <MdAccessTimeFilled className="mr-1" />
                        <span>{item.time} Mins</span>
                      </p>
                      <p className="flex items-center">
                        <FaUser className="mr-1" />
                        <span>{item.serving} Servings</span>
                      </p>
                      <p className="flex items-center">
                        <BsBarChartFill className="mr-1" />
                        <span>{item.difficulty}</span>
                      </p>
                    </div>
                  </div>
                </figure>

                {/* Content below the image */}
                <div className="bg-white px-6 rounded-lg pb-4 pt-6">
                  <div className="flex justify-between">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    {item.premium && (
                      <FaCrown className="text-yellowColor-0 w-8 h-8" />
                    )}
                  </div>{' '}
                  <Link to={`/recipe/${item.id}`}>
                    <p className="text-yellowColor-0 underline underline-yellow-0 cursor-pointer">
                      View Recipe
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>{' '}
      </div>
    </Layout>
  );
};

export default Favourties;
