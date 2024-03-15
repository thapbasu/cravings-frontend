import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link, useParams } from 'react-router-dom';

const ChefProfile = () => {
  const { id } = useParams();
  const chefs = [
    { id: 1, name: 'John Smith', image: '/assets/chefs/1.png' },
    { id: 2, name: 'Romeo Judith', image: '/assets/chefs/2.png' },
    { id: 3, name: 'Hanks Brocoli', image: '/assets/chefs/3.png' },
    { id: 4, name: 'Carel Brigerner', image: '/assets/chefs/4.png' },
    { id: 5, name: 'Daryl Brigerstone', image: '/assets/chefs/5.png' },
    { id: 6, name: 'Dante Grumsome', image: '/assets/chefs/6.png' },
  ];

  const chefDetails = chefs.find((chef) => chef.id === parseInt(id));
  return (
    <Layout>
      <div className="w-full lg:w-1/2 shadow-lg h-[90vh] mx-auto my-16 rounded-lg">
        <img
          src={chefDetails.image}
          className="w-full h-[40vh] lg:h-[50vh]"
          alt=""
        />
        <div className="px-8 py-2">
          <h2 className="text-xl font-semibold my-4">{chefDetails.name}</h2>
          <p className="text-gray-700 text-justify mb-4">{`
Chef ${chefDetails.name}
  culinary artistry transcends borders, weaving together flavors from around the globe with a touch of his Nepalese heritage. Renowned for his innovative creations and commitment to sustainability, Chef Thapa delights diners with each meticulously crafted dish. His passion for food is not only evident in the exquisite flavors he presents but also in his dedication to supporting charitable causes and nurturing culinary talent worldwide.
          `}</p>
          <Link to="/recipe">
            <button className="bg-yellowColor-0 px-6 py-3 rounded-lg">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ChefProfile;
