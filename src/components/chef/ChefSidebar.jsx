import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ChefSidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
  return (
    <div>
      <div className="border border-gray-300  shadow-lg h-[110vh] w-56">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-3xl mb-9 font-bold text-greenColor-0 text-center">
            CRAVINGS
          </h1>
          <ul className="flex flex-col justify-center font-semibold gap-y-5 items-center text-lg">
            <li>
              <Link
                to="/chef/dashboard"
                className={`${
                  activeItem === '/chef/dashboard' && 'text-yellowColor-0'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/chef/view-recipes"
                className={`${
                  activeItem === '/chef/view-recipes' && 'text-yellowColor-0'
                }`}
              >
                My Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/chef/add-recipe"
                className={`${
                  activeItem === '/chef/add-recipe' && 'text-yellowColor-0'
                }`}
              >
                Add Recipes
              </Link>
            </li>
          </ul>{' '}
        </div>
      </div>
    </div>
  );
};

export default ChefSidebar;
