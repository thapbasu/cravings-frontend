import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div className="w-full flex border border-gray-400 max-w-4xl shadow-lg mx-auto h-[80vh] my-16 rounded-lg">
        <div className="hidden md:block w-1/2">
          <img src="assets/register.png" className="w-full h-full" alt="" />
        </div>
        <div className="w-full md:w-2/3 flex justify-center items-center">
          <div className="border border-gray-400  my-10 rounded-md w-[90%] h-[90%] mx-auto flex flex-col gap-y-3 p-6">
            <h1 className="text-xl font-bold md:text-4xl mb-6 font-heading text-greenColor-0">
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
              <div>
                <button
                  type="submit"
                  className="bg-yellowColor-0 px-8 py-3 text-white font-semibold rounded-md mb-1"
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
    </Layout>
  );
};

export default Register;
