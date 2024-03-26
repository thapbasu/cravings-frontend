import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';

const RecipePremiumPopup = ({ setShowPopup }) => {
  return (
    <div className=" z-50 max-w-9xl w-full h-[100vh] fixed ">
      <div className="w-full md:w-1/2 lg:w-2/5 h-[40vh] rounded-lg bg-lime-300 shadow-lg flex flex-col gap-y-6 justify-center  px-6 py-4 opacity-90 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p
          className="cursor-pointer inline-block"
          onClick={() => {
            setShowPopup(false);
          }}
        >
          <IoCloseSharp className="w-9 h-9 float-end" />
        </p>
        <h1 className="text-2xl font-bold text-center">
          This Feature is Premium
        </h1>
        <div className="flex items-center justify-center">
          <FaCrown className="w-16 h-16 text-yellowColor-0" />
        </div>
        <div className="flex justify-center">
          <Link to="/payment">
            <button className="uppercase text-white bg-yellowColor-0 px-6 py-2 rounded-md font-semibold">
              Join now
            </button>
          </Link>
        </div>{' '}
      </div>
    </div>
  );
};

export default RecipePremiumPopup;
