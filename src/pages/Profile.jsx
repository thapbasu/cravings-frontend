import React, { useState } from 'react';
import Layout from '../components/Layout';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [bio, setBio] = useState('');
  const [editBio, setEditBio] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const favorites = [
    {
      id: 7,
      name: 'Creamy Salad',
      time: 10,
      serving: 2,
      difficulty: 'easy',
      image: '/assets/recipe/1.png',
      premium: true,
    },
    {
      id: 8,
      name: 'Tofu Tomatoes Soup',
      time: 15,
      serving: 3,
      difficulty: 'easy',
      image: '/assets/recipe/2.png',
    },
    {
      id: 9,
      name: 'Raspberry Pancake',
      time: 30,
      serving: 1,
      difficulty: 'easy',
      image: '/assets/recipe/5.png',
    },
  ];
  return (
    <Layout>
      <div className="my-16">
        <div className="flex flex-col">
          <div className="flex gap-x-10 md:gap-x-20 items-center">
            <div className="">
              <label htmlFor="fileInput">
                <div className="w-20 h-20 md:w-32 md:h-32 flex items-center cursor-pointer justify-center bg-gray-300 rounded-full overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="">
                      {' '}
                      <FaUser className="w-10 h-10" />
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="w-full">
              <h3 className="mb-4">Vrishruti Thapa</h3>
              <div className="relative w-full md:w-1/2 lg:w-1/3">
                <textarea
                  id="bioInput"
                  disabled={!editBio}
                  value={bio}
                  onChange={handleBioChange}
                  className="w-full h-12 px-4 py-2 mt-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Tell us about yourself..."
                />

                <MdOutlineModeEdit
                  onClick={() => {
                    setEditBio(true);
                  }}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2   w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className=" mt-6 ml-0 md:ml-4">
            <Link to="/">
              {' '}
              <button className="bg-yellowColor-0 px-5 py-2 text-white rounded-md">
                Logout
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-semibold text-2xl">My Favourites</h2>
            <Link to="/profile/favourites">
              <button className="px-6 py-2 bg-yellowColor-0 text-white rounded-md">
                View All
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-8 md:gap-6 lg:gap-10">
            {favorites.map((item) => (
              <div key={item.id} className="shadow-lg border ">
                <div>
                  <figure>
                    <div
                      className="w-full h-[40vh] relative no-repeat bg-cover"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {/* Absolutely positioned container */}
                      <div className="absolute bottom-0 flex justify-between items-center p-2 px-1 md:px-6 opacity-75 bg-gray-50 w-full text-greenColor-0 font-semibold capitalize">
                        <p className="flex items-center">
                          <MdAccessTimeFilled className="mr-1" />
                          <span>{item.time} Mins</span>
                        </p>
                        <p className="flex items-center">
                          <FaUser className="mr-1" />
                          <span>{item.serving} Servings</span>
                        </p>
                        <p className="flex items-center">
                          <BsBarChartFill className="mr-1" />
                          <span>{item.difficulty}</span>
                        </p>
                      </div>
                    </div>
                  </figure>

                  {/* Content below the image */}
                  <div className="bg-white px-6 rounded-lg pb-4 pt-6">
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      {item.premium && (
                        <FaCrown className="text-yellowColor-0 w-8 h-8" />
                      )}
                    </div>{' '}
                    <Link to={`/recipe/${item.id}`}>
                      <p className="text-yellowColor-0 underline underline-yellow-0 cursor-pointer">
                        View Recipe
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>{' '}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
