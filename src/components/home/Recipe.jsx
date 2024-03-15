import React from 'react';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const recipe = [
    {
      id: 1,
      name: 'Creamy Salad',
      time: 10,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/recipe/1.png',
    },
    {
      id: 2,
      name: 'Tofu Tomatoes Soup',
      time: 15,
      serving: 3,
      difficulty: 'easy',
      image: '/assets/recipe/2.png',
    },
    {
      id: 3,
      name: 'Crunchy Potatoes',
      time: 10,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/recipe/3.png',
    },
    {
      id: 4,
      name: 'Mushroom Soup',
      time: 25,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/recipe/4.png',
    },
    {
      id: 5,
      name: 'Raspberry Pancake',
      time: 30,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/recipe/5.png',
    },
    {
      id: 6,
      name: 'Beef Teriyaki',
      time: 20,
      serving: 1,
      difficulty: 'medium',
      image: '/assets/recipe/6.png',
    },
  ];
  return (
    <div className="my-12">
      <h2 className="font-bold text-3xl">Discover, Create and Share</h2>
      <div className="flex justify-between items-center flex-wrap mb-10">
        <p className="text-gray-500 text-base my-4">
          Check our most popular recipes of this week
        </p>
        <button className=" bg-yellowColor-0 px-6 py-2 text-white font-semibold rounded-xl">
          See All{' '}
        </button>{' '}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
        {recipe.map((item) => (
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
                </div>
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
  );
};

export default Recipe;
