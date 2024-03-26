import React, { useState } from 'react';
import Layout from '../../components/chef/Layout';
import EditRecipe from '../../components/chef/EditRecipe';

const ViewRecipe = () => {
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

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };
  const [editRecipeId, setEditRecipeId] = useState(null); // State to store the ID of the recipe being edited

  const showEditRecipe = (id) => {
    setEditRecipeId(id); // Set the ID of the recipe being edited
  };
  return (
    <Layout>
      <div className="my-16 shadow-lg  max-w-4xl w-full h-[65vh] mx-auto">
        <div className="flex flex-col items-center justify-center h-full shadow-lg">
          <h1 className="text-yellowColor-0 text-3xl font-semibold my-8">
            Recipes
          </h1>
          <table className="w-[90%] border-collapse border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  S.N
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Recipe
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Image
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr
                  className="w-full border border-gray-200 text-center"
                  key={recipe.id}
                >
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {recipe.id}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {recipe.name}{' '}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <div className="flex items-center justify-center">
                      <img src={recipe.image} className="w-12 h-12" alt="" />
                    </div>
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <span
                      className="text-blue-500 mr-2 cursor-pointer"
                      onClick={() => showEditRecipe(recipe.id)} // Pass the ID of the recipe being edited
                    >
                      Edit
                    </span>

                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(recipe.id)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
              {/* Render EditRecipe component if editRecipeId is not null */}
              {editRecipeId && (
                <EditRecipe id={editRecipeId} showEditRecipe={showEditRecipe} />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ViewRecipe;
