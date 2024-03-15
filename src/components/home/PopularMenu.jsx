import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const menu = [
    {
      id: 1,
      name: 'Mushroom Soup',
      time: 25,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/recipe/4.png',
    },
    {
      id: 2,
      name: 'Raspberry Pancake',
      time: 30,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/recipe/5.png',
    },
    {
      id: 3,
      name: 'Beef Teriyaki',
      time: 20,
      serving: 1,
      difficulty: 'medium',
      image: '/assets/recipe/6.png',
    },
  ];
  return (
    <div className="my-12">
      <div className="flex justify-between items-center flex-wrap mb-10">
        <h2 className="font-bold text-3xl">Popular Menu</h2>
        <button className=" bg-yellowColor-0 px-6 py-2 text-white font-semibold rounded-xl">
          See All{' '}
        </button>{' '}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
        {menu.map((item) => (
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
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <Link to={`/recipe/${item.id}`}>
                  <p className="text-yellowColor-0 underline underline-yellow-0 cursor-pointer">
                    View Recipe
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
