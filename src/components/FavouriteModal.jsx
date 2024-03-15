import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const FavouriteModal = ({ handleFavoriteModal }) => {
  return (
    <div className=" w-full h-[100vh] fixed flex justify-center  items-center">
      <div className=" border border-black max-w-lg lg:max-w-2xl -ml-20  h-[50vh] lg:h-[30vh] rounded-lg shadow-lg flex flex-col justify-center px-16 lg:px-8 py-8 bg-white">
        <div className="relative">
          <h1 className="flex justify-center  font-bold text-center text-2xl mb-6">
            Join{' '}
            <span className="text-greenColor-0 ml-1 uppercase">Cravings</span>
          </h1>
          <IoCloseSharp
            className="absolute top-0 -mr-5 lg:-mr-0 right-0 w-8 h-8 font-bold cursor-pointer"
            onClick={() => handleFavoriteModal(false)}
          />
        </div>
        <p className="text-gray-700 text-center text-lg mb-6">
          Maxed out your favorites? Elevate your access with CRAVINGS by being a
          member.
        </p>
        <div className="flex justify-center">
          <button className="uppercase text-white bg-yellowColor-0 px-6 py-2 rounded-md font-semibold">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteModal;
