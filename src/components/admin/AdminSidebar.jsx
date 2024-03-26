import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
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
                to="/admin/dashboard"
                className={`${
                  activeItem === '/admin/dashboard' && 'text-yellowColor-0'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/chefs"
                className={`${
                  activeItem === '/admin/chefs' && 'text-yellowColor-0'
                }`}
              >
                Chefs
              </Link>
            </li>
            <li>
              <Link
                to="/admin/recipes"
                className={`${
                  activeItem === '/admin/recipes' && 'text-yellowColor-0'
                }`}
              >
                Recipes
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className={`${
                  activeItem === '/admin/users' && 'text-yellowColor-0'
                }`}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/admin/category"
                className={`${
                  activeItem === '/admin/category' && 'text-yellowColor-0'
                }`}
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/admin/payments"
                className={`${
                  activeItem === '/admin/payments' && 'text-yellowColor-0'
                }`}
              >
                Payments
              </Link>
            </li>
          </ul>{' '}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
