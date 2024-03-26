import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefNavbar = ({ handleToggleSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="py-1 shadow-lg px-4 w-full flex items-center justify-end">
        {/* Navbar content */}
        <div className="navbar">
          <div className=" hidden md:block flex-1">
            <CiMenuBurger
              className="w-6 h-6 cursor-pointer "
              onClick={() => {
                handleToggleSidebar();
              }}
            />{' '}
          </div>
          <div className="flex justify-end w-full  flex-none gap-x-4">
            <div className="dropdown  dropdown-end">
              <div>
                <p className="font-semibold">Hello Chef</p>
              </div>
            </div>
            <div className=" dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:bg-yellow-500"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <div className="">
                  <FaUser className=" w-6 h-6" />
                </div>
              </div>
              {showMenu && (
                <ul
                  tabIndex={0}
                  className=" menu menu-sm dropdown-content mt-3 z-[1] bg-yellow-200 p-2 shadow-md rounded-box w-52"
                >
                  <li className="nav-link flex justify-center h-10 bg-gray-100 rounded-lg my-2">
                    <Link to="/chef/profile">
                      <a className="justify-between">Profile</a>
                    </Link>
                  </li>

                  <li className="flex md:hidden nav-link  justify-center h-10 bg-gray-100 rounded-lg my-2">
                    <Link to="/chef/dashboard">
                      <a className="justify-between">Dashboard</a>
                    </Link>
                  </li>
                  <li className="flex md:hidden nav-link  justify-center h-10 bg-gray-100 rounded-lg my-2">
                    <Link to="/chef/view-recipes">
                      <a className="justify-between">My Recipes</a>
                    </Link>
                  </li>
                  <li className="flex md:hidden nav-link  justify-center h-10 bg-gray-100 rounded-lg my-2">
                    <Link to="/chef/add-recipe">
                      <a className="justify-between">Add Recipe</a>
                    </Link>
                  </li>
                  <li className="nav-link flex justify-center h-10 bg-gray-100 rounded-lg mb-2">
                    <Link to="/">
                      <a>Logout</a>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefNavbar;
