import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen pt-10 mx-10">
      <div className="w-full flex border border-gray-400  shadow-lg mx-auto h-[90vh]  rounded-lg">
        <div className="w-2/5 hidden md:block">
          <img src="assets/register.png" className="w-full h-[90vh]" alt="" />
        </div>
        <div className="w-full md:w-3/4 flex justify-center items-center">
          <div className="border border-gray-400  my-10 rounded-md w-[90%] h-[90%] md:h-[80%] mx-auto flex flex-col justify-between gap-y-3 p-6">
            <h1 className="text-xl font-bold md:text-4xl font-heading text-greenColor-0">
              CRAVINGS
            </h1>{' '}
            <form onSubmit={handleForm}>
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-500 w-full rounded-lg outline-black px-4 py-3 shadow-md mb-8"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-500 w-full rounded-lg outline-black px-4 py-3 shadow-md mb-8"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-500 w-full rounded-lg outline-black px-4 py-3 shadow-md mb-8"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-500 w-full rounded-lg outline-black px-4 py-3 shadow-md mb-6"
              />
              <div className="inline-block">
                <button
                  type="submit"
                  className="bg-yellowColor-0 px-8 py-3 text-white font-semibold rounded-md"
                >
                  Register{' '}
                </button>
              </div>
            </form>
            <p>
              Don't have an Account?{' '}
              <Link to="/login">
                <span className="text-yellowColor-0 underline">Login now</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
