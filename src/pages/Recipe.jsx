import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { CiSearch } from 'react-icons/ci';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const [foodRecipe, setFoodRecipe] = useState('All');
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [allRecipe, setAllRecipe] = useState([]);
  const LatestRecipe = [
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
  const popularRecipe = [
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
      premium: true,
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
  const mostViewedRecipe = [
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
  const BreakfastRecipes = [
    {
      id: 10,
      name: 'Scrambled Eggs',
      time: 10,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/food/breakfast1.jpg',
    },
    {
      id: 11,
      name: 'Avocado Toast',
      time: 5,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/food/breakfast2.png',
    },
    {
      id: 12,
      name: 'Blueberry Pancakes',
      time: 20,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/food/breakfast3.png',
    },
  ];
  const LunchRecipes = [
    {
      id: 13,
      name: 'Grilled Chicken Sandwich',
      time: 20,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/food/lunch1.jpg',
    },
    {
      id: 14,
      name: 'Caesar Salad',
      time: 15,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/food/lunch2.jpg',
    },
    {
      id: 15,
      name: 'Vegetable Stir-Fry',
      time: 25,
      serving: 3,
      difficulty: 'medium',
      image: '/assets/food/lunch3.jpg',
    },
  ];
  const DinnerRecipes = [
    {
      id: 16,
      name: 'Spaghetti Bolognese',
      time: 30,
      serving: 4,
      difficulty: 'medium',
      image: '/assets/food/dinner1.jpg',
    },
    {
      id: 17,
      name: 'Grilled Salmon',
      time: 25,
      serving: 2,
      difficulty: 'medium',
      image: '/assets/food/dinner2.jpg',
    },
    {
      id: 18,
      name: 'Vegetarian Pizza',
      time: 20,
      serving: 3,
      difficulty: 'easy',
      image: '/assets/food/dinner3.jpg',
    },
  ];

  const DessertRecipes = [
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
  ];
  useEffect(() => {
    const handleRecipe = () => {
      setFilteredRecipe([
        ...LatestRecipe,
        ...popularRecipe,
        ...mostViewedRecipe,
        ...BreakfastRecipes,
        ...LunchRecipes,
        ...DinnerRecipes,
        ...DessertRecipes,
      ]);
    };
    setAllRecipe([
      ...LatestRecipe,
      ...popularRecipe,
      ...mostViewedRecipe,
      ...BreakfastRecipes,
      ...LunchRecipes,
      ...DinnerRecipes,
      ...DessertRecipes,
    ]);
    handleRecipe();
  }, []);

  return (
    <Layout>
      <div className=" mt-20">
        <div className="text-center w-2/3 flex gap-y-6 flex-col mx-auto mb-16">
          <div className="font-semibold text-xl">CRAVINGS &gt; RECIPES</div>
          <h1 className="font-bold text-3xl">Recipes</h1>
          <p>
            Discover mouthwatering recipes that'll make you a kitchen magician!
            From cozy comfort foods to gourmet delights, find your next favorite
            dish here. Let's cook up some delicious memories together!
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
          <h2 className="text-yellowColor-0 font-semibold text-3xl mb-4 text-center">
            Explore Recipes
          </h2>
          <ul className="flex gap-x-6 justify-end ">
            <li
              onClick={() => setFoodRecipe('All')}
              className={`cursor-pointer ${
                foodRecipe === 'All' ? 'text-yellow-500' : ''
              }`}
            >
              All
            </li>
            <li
              onClick={() => setFoodRecipe('breakfast')}
              className={`cursor-pointer ${
                foodRecipe === 'breakfast' ? 'text-yellow-500' : ''
              }`}
            >
              Breakfast
            </li>
            <li
              onClick={() => setFoodRecipe('lunch')}
              className={`cursor-pointer ${
                foodRecipe === 'lunch' ? 'text-yellow-500' : ''
              }`}
            >
              Lunch
            </li>
            <li
              onClick={() => setFoodRecipe('dinner')}
              className={`cursor-pointer ${
                foodRecipe === 'dinner' ? 'text-yellow-500' : ''
              }`}
            >
              Dinner
            </li>
            <li
              onClick={() => setFoodRecipe('desert')}
              className={`cursor-pointer ${
                foodRecipe === 'desert' ? 'text-yellow-500' : ''
              }`}
            >
              Desert
            </li>
          </ul>
          {foodRecipe === 'All' && (
            <>
              <div className=" mt-14 md:mt-10 mb-10">
                <h3 className="text-2xl font-bold mb-6">Latest Recipes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                  {LatestRecipe.map((item) => (
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
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">Popular Recipes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                  {popularRecipe.map((item) => (
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
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">Most Viewed Recipes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                  {mostViewedRecipe.map((item) => (
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
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6">All Recipes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                  {filteredRecipe.map((item) => (
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
            </>
          )}
          {foodRecipe === 'breakfast' && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Breakfast Recipe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                {BreakfastRecipes.map((item) => (
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
          )}
          {foodRecipe === 'lunch' && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Lunch Recipes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                {LunchRecipes.map((item) => (
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
          )}
          {foodRecipe === 'dinner' && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Dinner Recipes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                {DinnerRecipes.map((item) => (
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
          )}
          {foodRecipe === 'desert' && (
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">Desert Recipes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
                {DessertRecipes.map((item) => (
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Recipe;
