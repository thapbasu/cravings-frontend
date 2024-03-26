import React from 'react';
import Layout from '../../components/chef/Layout';
import TotalViewsGraph from '../../components/chef/TotalViewsGraph ';

const Dashboard = () => {
  const totalViewsData = [
    { month: 'January', views: 1000 },
    { month: 'February', views: 1500 },
    { month: 'March', views: 1200 },
    { month: 'April', views: 1800 },
    { month: 'May', views: 2000 },
    { month: 'June', views: 2500 },
    { month: 'July', views: 2200 },
    { month: 'August', views: 2300 },
    { month: 'September', views: 2700 },
    { month: 'October', views: 3000 },
    { month: 'November', views: 2800 },
    { month: 'December', views: 3200 },
  ];
  return (
    <Layout>
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center">
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Recipes
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Saves
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Reviews
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
        </div>
        <div className="">
          <TotalViewsGraph data={totalViewsData} />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
