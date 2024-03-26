import React, { useState } from 'react';
import Layout from '../../components/chef/Layout';

const AddRecipe = () => {
  const [image, setImage] = useState(null);
  const [premiumStatus, setPremiumStatus] = useState('notPremium');

  const handlePremiumChange = (e) => {
    setPremiumStatus(e.target.value);
  };

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
    console.log('form submmited');
  };

  return (
    <Layout>
      <div className="h-auto">
        <h1 className="text-2xl font-bold text-yellowColor-0 px-4 py-4 mb-1">
          Add Recipes
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className="max-w-4xl pb-4 w-full flex flex-col gap-y-1 bg-white shadow-lg px-6 ">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title">Recipe Title</label>
              <input
                type="text"
                id="title"
                className="rounded-lg w-full md:w-1/3 px-4 py-2 border border-gray-400 outline-black"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="desc">Recipe Description</label>
              <textarea
                id="desc"
                className="resize-none rounded-lg w-full md:w-2/3 px-4 py-2 border border-gray-400 outline-black"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="desc">Steps</label>
              <textarea
                id="steps"
                className="resize-none rounded-lg w-full lg:w-2/3
              h-24 px-4 py-2 border border-gray-400 outline-black"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="title">Ingredients</label>
              <input
                type="text"
                id="Ingredients"
                className="rounded-lg w-full lg:w-2/5 px-4 py-2 border border-gray-400 outline-black"
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-4 w-fit">
              <label htmlFor="fileInput">Image</label>

              <label htmlFor="fileInput">
                <div className="w-20 h-20 flex items-center cursor-pointer justify-center border border-black rounded-lg overflow-hidden">
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
            <div className="mb-2">
              <label
                htmlFor="premium"
                className="block text-sm font-medium text-gray-700"
              >
                Premium Recipe
              </label>
              <div className="mt-1 relative">
                <select
                  id="premium"
                  name="premium"
                  value={premiumStatus}
                  onChange={handlePremiumChange}
                  className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="notPremium">Not Premium</option>
                  <option value="premium">Premium</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12l-8-8 1.5-1.5L10 9.8 16.5 3.5 18 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button
              type="Submit"
              className="text-white bg-yellowColor-0 px-6 py-2 rounded-lg w-fit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddRecipe;
