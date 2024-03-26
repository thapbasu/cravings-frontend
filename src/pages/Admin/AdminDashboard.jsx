import React from 'react';
import Layout from '../../components/admin/Layout';
import AdminStatistics from '../../components/admin/AdminStatistics';

const AdminDashboard = () => {
  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Total Users',
        backgroundColor: 'rgba(255, 0, 0, 0.2)', // Red
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [
          500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
        ],
      },
      {
        label: 'Total Chefs',
        backgroundColor: 'rgba(30, 144, 255, 0.2)', // Blue
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
      },
      {
        label: 'Total Recipes',
        backgroundColor: 'rgba(255, 255, 0, 0.2)', // Yellow
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750],
      },
    ],
  };

  return (
    <Layout>
      <div className="">
        <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-items-center">
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Chefs
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Recipes
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
          <div className="w-full md:w-80 h-40 shadow-lg relative">
            <h2 className="ml-6 mt-4 text-yellowColor-0 text-2xl font-semibold">
              Total Users
            </h2>
            <p className="absolute bottom-6 right-6 text-xl font-medium">4</p>
          </div>
        </div>
        <div className="">
          <AdminStatistics data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
