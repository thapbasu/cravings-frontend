import React, { useState } from 'react';
import Layout from '../../components/admin/Layout';
import EditCategory from '../../components/admin/EditCategory';

const CategoryList = () => {
  const [categories, setCategories] = useState([
    'South Indian',
    'Chinese',
    'North Indian',
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(false);
  // Function to handle adding a new category
  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <Layout>
      {editCategory && <EditCategory setEditCategory={setEditCategory} />}
      {/* Input field to add a new category */}
      <div className="max-w-5xl mt-10 mx-auto shadow-lg rounded-lg">
        <div className="flex">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter category name"
            className="w-full px-3 py-1 rounded-lg outline-black border border-gray-400"
          />
          <button
            onClick={handleAddCategory}
            className=" bg-yellowColor-0 text-white px-3 py-1 rounded-lg"
          >
            Add Category
          </button>
        </div>

        {/* List of categories */}
        <ul className=" px-6 py-4 divide-y divide-gray-400">
          <h2 className="text-3xl text-center my-6 font-semibold">
            Category List
          </h2>
          {categories.map((category, index) => (
            <li key={index} className="py-2 flex justify-between items-center">
              <span>{category}</span>
              <div className="flex gap-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-md"
                  onClick={() => setEditCategory(true)}
                >
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CategoryList;
