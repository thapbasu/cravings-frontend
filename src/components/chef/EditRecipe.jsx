import React, { useEffect, useState } from 'react';
import Layout from '../../components/chef/Layout';
import { IoCloseSharp } from 'react-icons/io5';

const EditRecipe = ({ id, showEditRecipe }) => {
  console.log('test', id);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Butter Chicken',
      description:
        'A rich and flavorful Indian chicken dish made with aromatic spices and a creamy tomato-based sauce.',
      steps: [
        'Marinate chicken pieces in yogurt and spices.',
        'Cook marinated chicken in a tomato-based sauce until tender.',
        'Finish with cream and garnish with fresh cilantro before serving.',
      ],
      ingredients: [
        '500g chicken thighs, cut into pieces',
        '1 cup plain yogurt',
        '2 tablespoons garam masala',
        '1 tablespoon ground turmeric',
        '1 tablespoon ground cumin',
        '1 tablespoon ground coriander',
        '1 tablespoon chili powder',
        '2 tablespoons vegetable oil',
        '1 large onion, finely chopped',
        '4 cloves garlic, minced',
        '1-inch piece of ginger, grated',
        '1 can (400g) diced tomatoes',
        '1/2 cup heavy cream',
        'Salt and pepper to taste',
        'Fresh cilantro for garnish',
      ],
      image: '/assets/food/lunch2.jpg',
    },
    {
      id: 2,
      name: 'Pasta Carbonara',
      description:
        'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
      steps: [
        'Cook pasta according to package instructions.',
        'In a separate pan, cook pancetta until crispy.',
        'Whisk together eggs, cheese, and black pepper in a bowl.',
        'Toss cooked pasta with egg mixture and pancetta.',
        'Serve immediately with additional cheese and black pepper.',
      ],
      ingredients: [
        '300g spaghetti or fettuccine',
        '150g pancetta or bacon, diced',
        '3 large eggs',
        '1 cup grated Parmesan cheese',
        'Salt and black pepper to taste',
      ],
      image: '/assets/food/lunch3.jpg',
    },
    {
      id: 3,
      name: 'Vegetable Stir-Fry',
      description:
        'A quick and healthy stir-fry made with a variety of fresh vegetables and a flavorful sauce.',
      steps: [
        'Prepare vegetables by chopping them into bite-sized pieces.',
        'Heat oil in a pan or wok over high heat.',
        'Add vegetables and stir-fry until crisp-tender.',
        'Add sauce and cook for an additional minute.',
        'Serve hot over rice or noodles.',
      ],
      ingredients: [
        '2 cups mixed vegetables (such as bell peppers, broccoli, carrots, snow peas)',
        '2 tablespoons vegetable oil',
        '2 cloves garlic, minced',
        '1-inch piece of ginger, grated',
        '1/4 cup soy sauce',
        '2 tablespoons oyster sauce',
        '1 tablespoon rice vinegar',
        '1 tablespoon honey or brown sugar',
        '1 tablespoon cornstarch mixed with 2 tablespoons water',
      ],
      image: '/assets/food/breakfast2.png',
    },
    {
      id: 4,
      name: 'Chocolate Cake',
      description:
        'A moist and decadent chocolate cake that is perfect for any occasion.',
      steps: [
        'Preheat oven to 350°F (175°C) and grease and flour two 9-inch cake pans.',
        'In a large bowl, whisk together flour, cocoa powder, baking soda, and salt.',
        'In another bowl, beat together butter and sugar until light and fluffy.',
        'Add eggs one at a time, beating well after each addition.',
        'Stir in vanilla extract.',
        'Gradually add dry ingredients to wet ingredients, alternating with buttermilk.',
        'Divide batter evenly between prepared cake pans and bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.',
        'Cool cakes in pans for 10 minutes before transferring to wire racks to cool completely.',
        'Frost with your favorite chocolate frosting.',
      ],
      ingredients: [
        '2 cups all-purpose flour',
        '3/4 cup unsweetened cocoa powder',
        '1 1/2 teaspoons baking soda',
        '1 teaspoon salt',
        '3/4 cup unsalted butter, softened',
        '2 cups granulated sugar',
        '3 large eggs',
        '2 teaspoons vanilla extract',
        '1 1/2 cups buttermilk',
        'Your favorite chocolate frosting',
      ],
      image: '/assets/food/lunch1.jpg',
    },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  const recipeDetails = recipes.find((recipe) => recipe.id === parseInt(id));
  const [image, setImage] = useState(recipeDetails.image);

  return (
    <div className="absolute  top-0 left-0 w-full h-[110vh] flex-col flex justify-center items-center bg-black bg-opacity-50">
      <h1 className="text-2xl ml-6 mt-6 font-bold text-yellowColor-0 mb-8">
        Edit Recipes
      </h1>
      <form onSubmit={handleSubmit} className=" w-[85%] h-[85vh]">
        <div className="w-[100%]  overflow-hidden flex flex-col gap-y-1 h-full justify-center  bg-white px-10 py-10 rounded-lg ">
          <div className="w-full flex justify-end">
            <p
              className="w-fit h-fit cursor-pointer"
              onClick={() => {
                showEditRecipe(false);
              }}
            >
              <IoCloseSharp className=" mt-7 w-9 h-9 " />
            </p>
          </div>

          <div className="flex flex-col gap-y-1 ">
            <label htmlFor="title">Recipe Title</label>
            <input
              type="text"
              id="title"
              value={recipeDetails.name}
              className="rounded-lg w-full md:w-1/3 px-4 py-1 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="desc">Recipe Description</label>
            <textarea
              id="desc"
              value={recipeDetails.description}
              className="resize-none rounded-lg w-full md:w-2/3 px-4 py-1 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="desc">Steps</label>
            <textarea
              id="steps"
              value={recipeDetails.steps}
              className="resize-none rounded-lg w-full lg:w-2/3
              h-20 px-4 py-2 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Ingredients</label>
            <input
              type="text"
              value={recipeDetails.ingredients}
              id="Ingredients"
              className="rounded-lg w-full lg:w-2/5 px-4 py-2 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-4 ">
            <label htmlFor="fileInput">Image</label>

            <label htmlFor="fileInput">
              <div className="w-20 h-20 md:w-32 md:h-32 flex items-center cursor-pointer justify-center border border-black rounded-lg overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className=""> Image</div>
                )}
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <button
            type="Submit"
            className="text-white bg-yellowColor-0 px-6 py-2 rounded-lg w-fit mb-10"
            onClick={() => {
              showEditRecipe(false);
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
