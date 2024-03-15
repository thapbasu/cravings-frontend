import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from 'react-icons/io5';
import { PiStarFourFill } from 'react-icons/pi';
import { IoIosStar } from 'react-icons/io';
import FavouriteModal from '../components/FavouriteModal';

const RecipeDetails = () => {
  const { id } = useParams();
  const [allRecipe, setAllRecipe] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const [rating, setRating] = useState(0);
  const [showFavoriteModal, setShowFavouriteModal] = useState(false);
  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const handleModal = () => {
    setShowFavouriteModal(!showFavoriteModal);
  };
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
  const recipe = allRecipe.find((recipe) => recipe.id === parseInt(id)); // Assuming ids are integers

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Layout>
      {showFavoriteModal && (
        <FavouriteModal handleFavoriteModal={handleModal} />
      )}
      <div className={`my-12 flex flex-col gap-y-3`}>
        <h1 className="font-bold text-2xl uppercase">{recipe.name}</h1>
        <div className="flex gap-x-1 items-center my-2 text-yellow-400">
          <IoStarSharp className="w-5 h-5" />
          <IoStarSharp className="w-5 h-5" />
          <IoStarSharp className="w-5 h-5" />
          <IoStarSharp className="w-5 h-5" />
          <IoStarSharp className="w-5 h-5" />
          <p className="text-gray-700">
            5.0 <span>( 10 )</span>
          </p>
        </div>
        <p className="w-full md:w-1/2 ml-0  md:ml-10">
          Butter Chicken, also known as Murgh Makhani, is a popular North Indian
          dish known for its rich and creamy tomato-based sauce. Tender pieces
          of chicken are cooked in a flavorful mixture of butter, tomatoes,
          cream, and various spices, resulting in a delicious and indulgent
          curry.
        </p>
        <h3 className="mb-6">
          By <span className="underline">Vrishruti Thapa</span>
        </h3>
        <div className="flex cursor-pointer mb-6">
          <a
            className="w-[80px] text-center h-auto py-2 text-white bg-yellowColor-0"
            onClick={handleModal}
          >
            Save
          </a>
          <a
            href="#rating"
            className="w-[80px] text-center h-auto py-2 shadow-lg"
          >
            Rate
          </a>
          <a className="w-[80px] text-center h-auto py-2 shadow-lg">Share</a>
        </div>
        <div className="mb-6">
          <img
            src={recipe.image}
            alt=""
            className="w-full h-[50vh] md:h-[70vh]"
          />
        </div>
        <div>
          <h3 className="font-semibold text-xl uppercase mb-6">Ingredients</h3>
          <ul className="flex flex-col gap-y-2 text-lg">
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>500g boneless chicken, cut into bite-sized pieces</p>
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>1 large onion, finely chopped</p>
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>2 teaspoons ginger-garlic paste</p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>1/2 cup heavy cream</p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>1 teaspoon turmeric powder</p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>Salt to taste</p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <PiStarFourFill className="min-w-4 h-4" />
              <p>Fresh coriander leaves for garnish</p>{' '}
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[40%] h-[30vh] mt-6 shadow-lg mb-10">
          <div className="w-full py-2 bg-greenColor-0 rounded-lg "></div>
          <div className="px-3 py-3 font-semibold grid grid-cols-3 gap-y-5">
            <div className="font-semibold">
              <h4>Marination Time</h4>
              <p className="text-gray-700">30 mins</p>
            </div>
            <div className="font-semibold">
              <h4>Cooking Time</h4>
              <p className="text-gray-700">40 mins</p>
            </div>
            <div className="font-semibold">
              <h4>Total Time</h4>
              <p className="text-gray-700">70 mins</p>
            </div>

            <div className="font-semibold">
              <h4>Serving</h4>
              <p className="text-gray-700">4</p>
            </div>
          </div>{' '}
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-xl uppercase mb-6">Steps</h3>
          <ul className="flex flex-col gap-y-2 text-lg">
            <li className="flex items-center gap-x-2 gap-y-4 md:gap-y-2 lg:gap-y-0">
              <span className="font-semibold text-center">Step 1: </span>{' '}
              <p>
                Mix chicken with ginger-garlic paste, chili powder, turmeric,
                salt and marinate for 30 minutes.
              </p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <span className="font-semibold text-center">Step 2: </span>{' '}
              <p>
                {' '}
                Heat butter in a pan, cook marinated chicken until browned and
                cooked through; set aside.
              </p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <span className="font-semibold text-center">Step 3: </span>{' '}
              <p>
                {' '}
                In the pan, sauté onions in butter until golden, then add
                remaining ginger-garlic paste and tomato puree, cooking until
                oil separates.
              </p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <span className="font-semibold text-center">Step 4: </span>{' '}
              <p>
                {' '}
                Stir chili powder, turmeric, cumin, garam masala, and salt into
                the sauce, then add heavy cream, mixing until smooth.
              </p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <span className="font-semibold text-center">Step 5: </span>{' '}
              <p>
                Combine cooked chicken with sauce, ensuring even coating, then
                simmer on low for 10-15 minutes to meld flavors.
              </p>{' '}
            </li>
            <li className="flex items-center gap-x-2">
              <span className="font-semibold text-center">Step 6: </span>{' '}
              <p>
                Garnish with fresh coriander leaves and serve hot with naan,
                rice, or preferred bread.
              </p>{' '}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold uppercase mb-6">
            Nutrition Facts
          </h2>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-black uppercase tracking-wider"
                        >
                          Calories
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-black uppercase tracking-wider"
                        >
                          Fat
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-black uppercase tracking-wider"
                        >
                          Protein
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md font-medium text-black uppercase tracking-wider"
                        >
                          CARBOHYDRATES
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-md font-medium text-gray-900">
                            400{' '}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-md font-medium text-gray-900">
                            25g{' '}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-md font-medium text-gray-900">
                            20g{' '}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-md font-medium text-gray-900">
                            15g{' '}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
        <div className="my-6">
          <h2 className="text-2xl font-semibold uppercase mb-6">Reviews</h2>
          <div
            id="rating"
            className=" flex flex-col gap-y-2 shadow-lg w-full md:w-1/2 h-[40vh] px-6 py-3"
          >
            <h3 className="text-xl font-semibold uppercase">{recipe.name}</h3>
            <p>Your Rating</p>
            <div className="flex gap-x-1 my-2 ">
              {[...Array(5)].map((_, index) => (
                <IoIosStar
                  key={index}
                  className={`w-7 h-7 cursor-pointer ${
                    index < rating ? 'text-yellow-500' : ''
                  }`}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>
            <p> Your Review</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="border border-gray-400 resize-none rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;
