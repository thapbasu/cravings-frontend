import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import Layout from '../../components/Layout';
const Chinese = () => {
  const Chinese = [
    {
      id: 19,
      name: 'Chocolate Lava Cake',
      time: 35,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/food/desert1.jpg',
    },
    {
      id: 20,
      name: 'Strawberry Cheesecake',
      time: 40,
      serving: 4,
      difficulty: 'hard',
      image: '/assets/food/desser2.jpg',
    },
    {
      id: 21,
      name: 'Banoffee Pie',
      time: 45,
      serving: 6,
      difficulty: 'hard',
      image: '/assets/food/dessert3.jpg',
    },
    {
      id: 1,
      name: 'Creamy Salad',
      time: 10,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/recipe/1.png',
      premium: true,
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
      premium: true,
    },
  ];
  return (
    <Layout>
      <div className=" mt-20">
        <div className="text-center w-2/3 flex gap-y-6 flex-col mx-auto mb-16">
          <div className="font-semibold text-xl">CRAVINGS &gt; CATEGORY</div>
          <h1 className="font-bold text-3xl">CATEGORY</h1>
          <p>
            Dive into the flavors of Chinese cuisines all on one page. Explore a
            diverse range of recipes that celebrate the rich culinary traditions
            of these regions.
          </p>
        </div>
        <div className="relative mb-6">
          {' '}
          <input
            type="text"
            placeholder="Search By Keyword"
            className="w-full border border-gray-500 outline-black px-4 pl-16 py-4 rounded-md"
          />
          <CiSearch className="absolute top-1/2 left-4 w-6 h-6 transform font-bold -translate-y-1/2 cursor-pointer" />
        </div>
        <div>
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Chinese</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                {Chinese.map((item) => (
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
                          <h3 className="text-2xl font-semibold">
                            {item.name}
                          </h3>
                          {item.premium && (
                            <FaCrown className="text-yellowColor-0 w-8 h-8" />
                          )}
                        </div>
                        <p className="text-yellowColor-0 underline underline-yellow-0 cursor-pointer">
                          View Recipe
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>{' '}
            </div>
          </div>
        </div>{' '}
      </div>
    </Layout>
  );
};

export default Chinese;
