import React, { useState } from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaStar, FaUser } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Layout from '../../components/chef/Layout';
import { BiSolidHide, BiSolidShow } from 'react-icons/bi';

const ChefOwnProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
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

  const [role, setRole] = useState('Chef');
  const [bio, setBio] = useState('Sample bio');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('Krishna Kumar');
  const [email, setEmail] = useState('chef@chef.com');
  const [password, setPassword] = useState('12345');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };
  return (
    <Layout>
      <div className="overflow-hidden">
        <div className=" max-w-lg lg:max-w-4xl h-auto px-10  py-6 w-full mx-auto shadow-lg flex flex-col items-center mb-2">
          <div className="flex gap-x-10 md:gap-x-2 items-center">
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
              <div className="text-center mt-2 flex items-center gap-x-1 flex-col">
                <p> Your Rating:</p>{' '}
                <span className="text-yellowColor-0 flex items-center">
                  <span className="text-black ml-1">4.8</span>{' '}
                  <FaStar className="ml-1" />
                </span>
              </div>
              <div className=" mt-3 ml-0 md:ml-4">
                <Link to="/">
                  {' '}
                  <button className="bg-yellowColor-0 px-5 py-2 text-white rounded-md">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="my-2 text-2xl font-semibold text-yellowColor-0">
              Your Info
            </h2>
            <div className="flex flex-col gap-y-2 mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="border border-gray-400 outline-black px-4 py-2 rounded-md"
                disabled={!editProfile}
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-400 outline-black px-4 py-2 rounded-md"
                disabled={!editProfile}
              />
            </div>
            <div className="flex flex-col gap-y-2 mb-2">
              <label htmlFor="email">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="border w-full border-gray-400 outline-black px-4 py-2 rounded-md"
                  disabled={!editProfile}
                />
                {showPassword ? (
                  <span>
                    <BiSolidHide
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
                      onClick={() => setShowPassword(false)}
                    />
                  </span>
                ) : (
                  <span>
                    <BiSolidShow
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
                      onClick={() => setShowPassword(true)}
                    />
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-2 mb-2">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                value={role}
                className="border border-gray-400 outline-black px-4 py-2 rounded-md"
                disabled
              />
            </div>

            <div className="flex justify-around items-center flex-col md:flex-row  ">
              <button
                className={`mt-6 px-4 lg:px-6 py-2 rounded-md w-full md:w-fit text-white ${
                  editProfile ? 'bg-red-600' : 'bg-yellowColor-0 '
                }`}
                onClick={() => setEditProfile(!editProfile)}
              >
                {editProfile ? 'Cancel' : 'Edit Profile'}
              </button>
              <button
                className={`mt-6 ${
                  editProfile
                    ? 'bg-greenColor-0 text-white'
                    : 'bg-gray-300 text-black'
                } px-4 lg:px-6 py-2  rounded-md w-full md:w-fit`}
                onClick={() => {
                  setEditProfile(!editProfile);
                }}
                disabled={!editProfile}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChefOwnProfile;
