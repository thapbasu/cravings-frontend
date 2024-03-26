import React, { useState } from 'react';
import Layout from '../../components/chef/Layout';

const AddRecipe = () => {
  const [image, setImage] = useState(null);

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
      <div className="max-h-[100vh] ">
        <h1 className="text-2xl font-bold text-yellowColor-0 px-4 py-4 mb-2">
          Add Recipes
        </h1>
        <form onSubmit={handleSubmit} className="">
          <div className="max-w-4xl pb-4 w-full flex flex-col gap-y-2 bg-white shadow-lg px-6 ">
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
