import React, { useEffect, useState } from 'react';
import Layout from '../../components/chef/Layout';
import { IoCloseSharp } from 'react-icons/io5';

const EditRecipe = ({ setEditRecipe }) => {
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
  const [image, setImage] = useState();

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-gray-200 bg-opacity-50 flex py-10 justify-center z-50">
      <div className="w-full max-w-3xl h-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Recipe</h2>
          <IoCloseSharp
            className="w-9 h-9 cursor-pointer"
            onClick={() => setEditRecipe(false)}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1 ">
            <label htmlFor="title">Recipe Title</label>
            <input
              type="text"
              id="title"
              className="rounded-lg w-full md:w-1/3 px-4 py-1 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="desc">Recipe Description</label>
            <textarea
              id="desc"
              className="resize-none rounded-lg w-full md:w-2/3 px-4 py-1 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="desc">Steps</label>
            <textarea
              id="steps"
              className="resize-none rounded-lg w-full lg:w-2/3
              h-20 px-4 py-2 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title">Ingredients</label>
            <input
              type="text"
              id="Ingredients"
              className="rounded-lg w-full lg:w-2/5 px-4 py-2 border border-gray-400 outline-black"
            />
          </div>
          <div className="flex flex-col gap-y-1 mb-8 ">
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
            className="text-white bg-yellowColor-0 px-6 py-2 rounded-lg w-fit "
            onClick={() => {
              setEditRecipe(false);
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
