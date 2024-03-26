import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const EditCategory = ({ setEditCategory }) => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-gray-200 bg-opacity-50 flex py-10 justify-center z-50">
      <div className="w-full max-w-3xl h-auto">
        <div className="w-full  bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Category</h2>
            <IoCloseSharp
              className="w-9 h-9 cursor-pointer"
              onClick={() => setEditCategory(false)}
            />
          </div>
          <form onSubmit={handleForm}>
            <div className="flex flex-col gap-y-1 mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 outline-black border border-gray-400 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-yellowColor-0 text-white rounded-lg mt-3"
              onClick={() => setEditCategory(false)}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
