import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen pt-10 mx-10">
      <div className="w-full flex border border-gray-400 shadow-lg h-[90vh]  rounded-lg">
        <div className="w-2/4 hidden md:block">
          <img src="assets/register.png" className="w-full h-[90vh]" alt="" />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="border flex flex-col justify-center border-gray-400  my-10 rounded-md w-[90%] h-[80%] md:h-[70%]  mx-auto  gap-y-3 p-6">
            <h1 className="text-xl font-bold md:text-4xl font-heading text-greenColor-0">
              CRAVINGS
            </h1>{' '}
            <p className="text-gray-600 mb-10 ">Let's get you signed in!</p>
            <form onSubmit={handleSubmit}>
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
              <Link to="/user/profile" className="inline-block">
                <div>
                  <button
                    type="submit"
                    className="bg-yellowColor-0 px-8 py-3 text-white font-semibold rounded-md mb-2 inline-block"
                  >
                    Login{' '}
                  </button>
                </div>
              </Link>
              <p>
                Don't have an Account?{' '}
                <Link to="/register">
                  <span className="text-yellowColor-0 underline">Sign up</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
