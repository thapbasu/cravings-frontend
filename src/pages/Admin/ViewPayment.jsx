import React, { useState } from 'react';
import Layout from '../../components/admin/Layout';

const ViewPayment = () => {
  const data = [
    {
      id: 1,
      title: 'Butter Chicken',
      image: '/assets/food/lunch1.jpg',
      purchasedBy: 'John',
      amount: '15',
      date: '2024-03-17',
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      image: '/assets/food/lunch2.jpg',
      purchasedBy: 'Anna',
      amount: '12',
      date: '2023-02-17',
    },
    {
      id: 3,

      title: 'Vegetable Stir-Fry',
      image: '/assets/food/breakfast2.png',
      purchasedBy: 'David',
      amount: '10',
      date: '2024-03-10',
    },
    {
      id: 4,

      title: 'Chocolate Cake',
      image: '/assets/food/lunch3.jpg',
      purchasedBy: 'Emily',
      amount: '20',
      date: '2024-01-12',
    },
  ];

  return (
    <Layout>
      <div className="my-16 shadow-lg  max-w-6xl w-full h-auto mx-auto">
        <div className="flex flex-col items-center justify-center h-full shadow-lg overflow-x-auto">
          <h1 className="text-yellowColor-0 text-3xl font-semibold my-8">
            Payment Lists
          </h1>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  S.N
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Recipe Title
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Recipe Image
                </th>

                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Purchased By
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Amount
                </th>
                <th className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                  Date
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
                    {list.title}{' '}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <div className="flex items-center justify-center">
                      <img src={list.image} className="w-12 h-12" alt="" />
                    </div>
                  </td>

                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.purchasedBy}{' '}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    <span>Rs.</span>
                    {list.amount}
                  </td>
                  <td className="border border-gray-200 px-0 py-0 md:px-4 md:py-2">
                    {list.date}{' '}
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

export default ViewPayment;
