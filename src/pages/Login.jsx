import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div className="w-full flex border border-gray-400 max-w-4xl shadow-lg mx-auto h-[85vh] my-16 rounded-lg">
        <div className="w-2/4 hidden md:block">
          <img src="assets/register.png" className="w-full h-[85vh]" alt="" />
        </div>
        <div className="w-full  md:w-2/3  flex justify-center items-center">
          <div className="border border-gray-400  my-10 rounded-md w-[90%] h-[70%] mx-auto flex flex-col gap-y-3 p-6">
            <h1 className="text-xl font-bold md:text-4xl font-heading text-greenColor-0">
              CRAVINGS
            </h1>{' '}
            <p className="text-gray-600 mb-10">Let's get you signed in!</p>
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
              <Link to="/profile">
                <div>
                  <button
                    type="submit"
                    className="bg-yellowColor-0 px-8 py-3 text-white font-semibold rounded-md mb-1"
                  >
                    Login{' '}
                  </button>
                </div>
              </Link>
              <p>
                Don't have an Account?{' '}
                <Link to="/register">
                  <span className="text-yellowColor-0 underline">Sign in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
