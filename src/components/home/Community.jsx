import React, { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { AiOutlineLike } from 'react-icons/ai';
import { CiShare2 } from 'react-icons/ci';
import Pagination from '../Pagination';

const Community = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of posts to display per page

  const posts = [
    {
      id: '1',
      user: '/assets/user/1.png',
      item: 'Spaghetti Bolognesse',
      name: 'Lady Rudy',
      comment:
        'I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I have always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home',
      image: '/assets/community/1.png',
      likes: 2,
    },
    {
      id: '2',
      user: '/assets/user/2.png',
      item: 'Roasted Chicken',
      name: 'Emily Rose',
      comment:
        'I have always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow',
      image: '/assets/community/2.png',
      likes: 5,
    },
    {
      id: '3',
      user: '/assets/user/3.png',
      item: 'Vegetable Pot Pie',
      name: 'Susan H',
      comment:
        'I have always been a fan of hearty comfort food, and theUltimate Vegetable Pot Pie recipe on this platform completely exceeded my expectations.',
      image: '/assets/community/3.png',
      likes: 3,
    },
    {
      id: '4',
      user: '/assets/user/4.png',
      item: 'Fresh Garden Salad',
      name: 'Lilac Laura',
      comment:
        'Ive always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.',
      image: '/assets/community/4.png',
      likes: 1,
    },
    {
      id: '5',
      user: '/assets/user/1.png',
      item: 'Classic Pancakes',
      name: 'John Smith',
      comment:
        'Your Classic Pancakes recipe is simply the best! I have tried many recipes before, but none of them came close to yours. Thanks for sharing!',
      image: '/assets/community/4.png',
      likes: 4,
    },
    {
      id: '6',
      user: '/assets/user/2.png',
      item: 'Homemade Pizza',
      name: 'Jessica Lee',
      comment:
        'I never thought I could make pizza at home until I tried your Homemade Pizza recipe. It turned out amazing, and now it has become a regular dish in our household.',
      image: '/assets/community/3.png',
      likes: 7,
    },
    {
      id: '7',
      user: '/assets/user/3.png',
      item: 'Chocolate Brownies',
      name: 'Michael Johnson',
      comment:
        'Your Chocolate Brownies recipe is a game-changer! The brownies turned out moist and decadent, just the way I like them. Thanks for the amazing recipe!',
      image: '/assets/community/2.png',
      likes: 6,
    },
    {
      id: '8',
      user: '/assets/user/4.png',
      item: 'Avocado Toast',
      name: 'Sophia Williams',
      comment:
        'I absolutely love your Avocado Toast recipe! It’s my go-to breakfast option now. So simple yet so delicious!',
      image: '/assets/community/1.png',
      likes: 3,
    },
    {
      id: '9',
      user: '/assets/user/1.png',
      item: 'Grilled Salmon',
      name: 'James Smith',
      comment:
        'Your Grilled Salmon recipe is fantastic! It has become a regular dish in my household. Thank you for sharing!',
      image: '/assets/community/2.png',
      likes: 4,
    },
    {
      id: '10',
      user: '/assets/user/2.png',
      item: 'Mushroom Risotto',
      name: 'Sophia Johnson',
      comment:
        'As a vegetarian, finding good recipes can be challenging, but your Mushroom Risotto recipe is absolutely delicious! I can’t get enough of it.',
      image: '/assets/community/1.png',
      likes: 7,
    },
    {
      id: '11',
      user: '/assets/user/3.png',
      item: 'Chocolate Lava Cake',
      name: 'Ethan Williams',
      comment:
        'Your Chocolate Lava Cake recipe is a game-changer! I made it for a dinner party, and everyone was blown away. Thanks for sharing your talent!',
      image: '/assets/community/3.png',
      likes: 10,
    },
    {
      id: '12',
      user: '/assets/user/2.png',
      item: 'Crispy Fried Chicken',
      name: 'Olivia Brown',
      comment:
        'I’ve tried many fried chicken recipes before, but yours is hands down the best! The chicken is perfectly crispy and flavorful. Can’t wait to make it again.',
      image: '/assets/community/4.png',
      likes: 3,
    },
  ];

  // Logic to paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle pagination
  const handlePagination = (direction) => {
    if (direction === 'prev') {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    } else {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.ceil(posts.length / postsPerPage))
      );
    }
  };
  // Total number of items and items per page
  const totalItems = posts.length; // Total number of items in your posts array
  const itemsPerPage = 4; // Number of items to display per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <h2 className="text-center font-semibold text-4xl mb-10">
        From Our Community
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16">
        {currentPosts.map((post) => (
          <div className="shadow-lg w-full lg:h-[70vh] px-8 py-8" key={post.id}>
            <div className="flex gap-x-8 mb-6">
              <img src={post.user} className="w-12 h-12 rounded-full" alt="" />
              <div>
                <h3 className="font-semibold text-lg"> {post.item}</h3>
                <p className="text-gray-500">{post.name}</p>
              </div>
            </div>
            <div className="flex gap-x-1 my-2 text-yellow-400">
              <IoStarSharp className="w-5 h-5" />
              <IoStarSharp className="w-5 h-5" />
              <IoStarSharp className="w-5 h-5" />
              <IoStarSharp className="w-5 h-5" />
              <IoStarSharp className="w-5 h-5" />
            </div>
            <p>{post.comment}</p>
            <img src={post.image} className=" rounded-lg my-4" alt="" />
            <div className="flex gap-x-6">
              <div className="flex items-center gap-x-1 text-lg">
                <div className="flex items-center gap-x-1 text-lg cursor-pointer">
                  <AiOutlineLike />
                  <span>like</span>
                </div>
              </div>
              <div className="flex items-center gap-x-1 text-lg cursor-pointer">
                <CiShare2 />
                <span>share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Community;
