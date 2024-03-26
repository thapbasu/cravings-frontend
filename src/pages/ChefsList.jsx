import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const ChefsList = () => {
  const chefs = [
    { id: 1, name: 'John Smith', image: '/assets/chefs/1.png' },
    { id: 2, name: 'Romeo Judith', image: '/assets/chefs/2.png' },
    { id: 3, name: 'Hanks Brocoli', image: '/assets/chefs/3.png' },
    { id: 4, name: 'Carel Brigerner', image: '/assets/chefs/4.png' },
    { id: 5, name: 'Daryl Brigerstone', image: '/assets/chefs/5.png' },
    { id: 6, name: 'Dante Grumsome', image: '/assets/chefs/6.png' },
  ];
  return (
    <Layout>
      <div className="my-16">
        <h1 className="text-3xl font-semibold mb-10 text-yellowColor-0">
          Out Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {chefs.map((chef) => (
            <div key={chef.id} className="w-100 h-100 shadow-lg rounded-lg">
              <Link to={`/chefs/${chef.id}`}>
                <img
                  src={chef.image}
                  className="w-full h-[40vh] rounded-lg object-cover"
                  alt=""
                />
              </Link>
              <div className="px-6 py-4">
                <Link to={`/chefs/${chef.id}`}>
                  <h2 className="inline-block font-semibold text-lg cursor-pointer">
                    {chef.name}
                  </h2>
                </Link>
                <Link to="/recipe">
                  <p className="text-yellowColor-0 underline underline-yellowColor-0">
                    View Recipe
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ChefsList;
