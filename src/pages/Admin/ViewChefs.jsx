import React, { useState } from 'react';
import Layout from '../../components/admin/Layout';
import { FaStar } from 'react-icons/fa';
import EditChef from '../../components/admin/EditChef';

const ViewChefs = () => {
  const [editChef, setEditChef] = useState(false);
  const data = [
    {
      id: 1,
      name: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet asd aswdasd',
      rating: 4.5,
      recipes: 10,
      image: '/assets/food/lunch1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      bio: 'Consectetur adipiscing elit asd ae3was ',
      rating: 4.2,
      recipes: 15,
      image: '/assets/food/lunch2.jpg',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      bio: 'Sed do eiusmod tempor incididunt',
      rating: 4.8,
      recipes: 20,
      image: '/assets/food/lunch3.jpg',
    },
  ];
  return (
    <Layout>
      {editChef && <EditChef setEditChef={setEditChef} />}
      <div className="my-16 shadow-lg  max-w-6xl w-full h-auto mx-auto">
        <div className="flex flex-col items-center justify-center h-full shadow-lg overflow-x-auto">
          <h1 className="text-yellowColor-0 text-3xl font-semibold my-8">
            Chef Lists
          </h1>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  S.N
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Name
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Image
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Bio
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Rating
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Recipes
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((list) => (
                <tr
                  className="w-full border border-gray-200 text-center"
                  key={list.id}
                >
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.id}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.name}{' '}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <div className="flex items-center justify-center">
                      <img src={list.image} className="w-12 h-12" alt="" />
                    </div>
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.bio}{' '}
                  </td>
                  <td className="flex items-center justify-center gap-x-1 px-0 py-0 md:px-4 md:py-2 md:ml-2 md:mt-2">
                    {list.rating} <FaStar className="text-yellowColor-0" />
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.recipes}{' '}
                  </td>
                  <td className=" justify-center items-center border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <span
                      className="block md:inline-block text-blue-500 mr-2 cursor-pointer"
                      onClick={() => setEditChef(true)}
                    >
                      Edit
                    </span>

                    <span className="text-red-500 cursor-pointer">Delete</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ViewChefs;
