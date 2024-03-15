import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div className="my-12">
        <h1 className="font-bold text-3xl text-center">About Cravings</h1>
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-10">
            <img
              src="/assets/recipe/2.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/recipe/1.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/recipe/3.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/recipe/4.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/recipe/5.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/recipe/6.png"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/food/dinner2.jpg"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/food/dinner3.jpg"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/food/dinner1.jpg"
              alt=""
              className="w-[400px] h-[20vh]"
            />
            <img
              src="/assets/food/lunch1.jpg"
              alt=""
              className="w-[400px] h-[20vh]"
            />
          </div>
          <div className="text-justify flex flex-col gap-y-6 text-gray-700">
            <p>
              Welcome to Cravings, your ultimate destination for culinary
              inspiration and delicious recipes! At Cravings, we believe that
              food has the power to bring people together, evoke memories, and
              ignite passion in the kitchen. Whether you're a seasoned chef or a
              home cook looking to explore new flavors, our platform offers a
              diverse array of recipes to satisfy every palate and craving.
            </p>
            <p>
              Founded with a passion for cooking and a dedication to sharing
              culinary expertise, Cravings is more than just a food recipe
              website – it's a vibrant community where food enthusiasts from
              around the globe come together to celebrate the art of cooking.
              Our mission is simple: to inspire creativity in the kitchen,
              empower aspiring chefs, and foster a love for all things food.
            </p>
            <p>
              Behind the scenes, our team works tirelessly to curate a
              collection of mouthwatering recipes, sourced from talented chefs
              and culinary experts. From comforting classics to innovative
              creations, each recipe is carefully crafted to deliver an
              unforgettable dining experience.
            </p>
            <p>
              At Cravings, we understand that every chef has a unique story to
              tell and a distinct culinary style. That's why we've created a
              platform that caters to the needs of both seasoned professionals
              and budding cooks alike. Whether you're a chef looking to showcase
              your signature dishes or a food enthusiast eager to explore new
              recipes, Cravings provides the tools and resources you need to
              unleash your culinary creativity.
            </p>{' '}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-3xl text-center uppercase">
            Contact Us
          </h2>

          <div
            id="contact"
            className="bg-[#F1F3F7] w-full lg:w-1/2 h-[85vh] md:h-[80vh] mx-auto px-8 py-6 lg:px-16 lg:py-16 rounded-lg shadow-lg my-12"
          >
            <form
              onSubmit={handleSubmit}
              className="flex justify-center h-full flex-col"
            >
              <div className="flex justify-between flex-col lg:flex-row mb-6 gap-x-0 lg:gap-x-4 ">
                <div className="flex flex-col mb-6 lg:mb-0">
                  <label
                    for="first"
                    className="text-yellowColor-0 font-bold text-lg"
                  >
                    First Name:
                  </label>
                  <input
                    id="first"
                    type="text"
                    className="px-4 py-2 mt-2 w-full rounded-md border border-gray-400 outline-black "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for="last"
                    className="text-yellowColor-0 font-bold text-lg"
                  >
                    Last Name:
                  </label>
                  <input
                    id="last"
                    type="text"
                    className="px-4 py-2 mt-2 w-full rounded-md border border-gray-400 outline-black"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="text-yellowColor-0 font-bold text-lg"
                >
                  Email:{' '}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full lg:w-2/3 rounded-md px-4 py-2 mt-2 border border-gray-400 outline-black"
                />
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="message"
                  className="text-yellowColor-0 font-bold text-lg"
                >
                  Message:{' '}
                </label>
                <textarea
                  id="message"
                  className="w-full lg:w-2/3 rounded-md px-4 py-2 mt-2 border border-gray-400 outline-black resize-none h-[20vh] "
                />
              </div>
              <button
                type="submit"
                className="md:w-fit bg-yellowColor-0 px-10 py-2 text-white font-semibold rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
