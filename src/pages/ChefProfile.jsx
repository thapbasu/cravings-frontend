import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ChefProfile = () => {
  const { id } = useParams();
  const chefs = [
    {
      id: 1,
      name: 'John Smith',
      image: '/assets/chefs/1.png',
      experience: '10 years',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Romeo Judith',
      image: '/assets/chefs/2.png',
      experience: '8 years',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Hanks Brocoli',
      image: '/assets/chefs/3.png',
      experience: '12 years',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Carel Brigerner',
      image: '/assets/chefs/4.png',
      experience: '6 years',
      rating: 4.0,
    },
    {
      id: 5,
      name: 'Daryl Brigerstone',
      image: '/assets/chefs/5.png',
      experience: '15 years',
      rating: 4.9,
    },
    {
      id: 6,
      name: 'Dante Grumsome',
      image: '/assets/chefs/6.png',
      experience: '7 years',
      rating: 4.3,
    },
  ];

  const chefDetails = chefs.find((chef) => chef.id === parseInt(id));
  return (
    <Layout>
      <div className="w-full lg:w-1/2 shadow-lg h-auto mx-auto my-16 rounded-lg">
        <img
          src={chefDetails.image}
          className="w-full h-[30vh] lg:h-[50vh]"
          alt=""
        />
        <div className="px-3 md:px-8 py-2">
          <h2 className="text-xl font-semibold my-4">{chefDetails.name}</h2>
          <p className="text-gray-700 text-justify mb-4">{`
Chef ${chefDetails.name}
  culinary artistry transcends borders, weaving together flavors from around the globe with a touch of his Nepalese heritage. Renowned for his innovative creations and commitment to sustainability, Chef Thapa delights diners with each meticulously crafted dish. His passion for food is not only evident in the exquisite flavors he presents but also in his dedication to supporting charitable causes and nurturing culinary talent worldwide.
          `}</p>
          <p className="text-yellowColor-0 text-lg mb-2">
            Experience:{' '}
            <span className="font-medium text-gray-700">
              {chefDetails.experience}
            </span>
          </p>
          <div className=" text-yellowColor-0 flex items-center mb-3">
            Rating:{' '}
            <span className="text-black ml-1">{chefDetails.rating}</span>
            <span className="text-yellowColor-0">
              <FaStar className="ml-1" />
            </span>
          </div>
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
