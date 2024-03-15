import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when a menu item is clicked
  };
  const handleToggleMenu = () => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  };

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="navbar bg-base-100 px-2 md:px-16 shadow-lg sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="nav-link btn btn-ghost lg:hidden z-10"
              onClick={handleToggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" nav-link h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm bg-blue-200 dropdown-content mt-2 z-[1] p-2  md:p-4 shadow rounded-box w-52 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <li className="mb-4 ">
                <Link to="/" className="nav-link font-semibold text-lg">
                  Home
                </Link>
              </li>

              <li className="mb-4">
                <Link to="/recipe" className="nav-link font-semibold text-lg">
                  Recipe
                </Link>{' '}
              </li>
              <li className="mb-4">
                <details className="">
                  <summary className="font-semibold nav-link text-lg">
                    Category
                  </summary>
                  <ul className="p-2 w-40">
                    <li>
                      <NavLink
                        to="/categories/north-indian"
                        className={`nav-link font-medium  text-lg `}
                      >
                        <a>North Indian</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories/south-indian"
                        className={` nav-link font-medium  text-lg `}
                      >
                        <a>South Indian</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/categories/chinese"
                        className={` nav-link font-semibold text-lg  `}
                      >
                        <a>Chinese</a>
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="mb-4">
                <Link to="/chefs" className="nav-link font-semibold text-lg">
                  Chefs{' '}
                </Link>{' '}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl ml-[-6px] md:ml-0 tracking-normal md:tracking-wide font-heading mt-1 text-greenColor-0">
            <Link to="/">CRAVINGS</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-base">
            <li>
              <NavLink
                to="/"
                className={`nav-link font-bold  ${isActive('/') && 'active'}`}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/recipe"
                className={`nav-link font-bold  ${
                  isActive('/recipe') && 'active'
                }`}
              >
                Recipe
              </NavLink>
            </li>
            <li>
              <details>
                <summary className="font-bold nav-link">Category</summary>
                <ul className="p-2 w-40 flex items-center flex-col">
                  <li>
                    <NavLink
                      to="/categories/north-indian" // Corrected path
                      className={`nav-link font-bold  ${
                        isActive('/north-indian') && 'active'
                      }`}
                    >
                      <a>North Indian</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/categories/south-indian" // Corrected path
                      className={` nav-link font-bold  ${
                        isActive('/south-indian') && 'active'
                      }`}
                    >
                      <a>South Indian</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/categories/chinese" // Corrected path
                      className={` nav-link font-bold  ${
                        isActive('/chinese') && 'active'
                      }`}
                    >
                      <a>Chinese</a>
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to="/chefs"
                className={`nav-link font-bold ${
                  isActive('/chefs') && 'active'
                }`}
              >
                Chefs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <input
            type="text"
            className={`  px-4 py-2 w-[200px] md:w-[300px] lg:w-full outline-gray-700 border border-black rounded-md ${
              searchToggle ? 'block' : 'hidden'
            } `}
            placeholder="Looking for a recipe?"
          />
          <button
            className="nav-link btn btn-ghost btn-circle"
            onClick={() => setSearchToggle(!searchToggle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" nav-link-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="nav-link"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <Link to="/login">
            <button className="nav-link btn btn-ghost btn-circle ml-2">
              {isLoggedIn ? (
                <div className="nav-link indicator text-lg font-semibold border border-b-2  border-greenColor-0 border-x-0 border-t-0">
                  <FaUser className="nav-link w-5 h-5" />
                </div>
              ) : (
                <div className="nav-link indicator text-lg font-semibold border border-b-2  border-greenColor-0 border-x-0 border-t-0">
                  {/* <FaUser className="nav-link w-5 h-5" /> */}
                  Login
                </div>
              )}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
