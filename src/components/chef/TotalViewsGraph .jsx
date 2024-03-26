import React from 'react';
import Chart from 'chart.js/auto';

const TotalViewsGraph = ({ data }) => {
  React.useEffect(() => {
    const ctx = document.getElementById('totalViewsChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map((entry) => entry.month), // Assuming data is an array of objects with 'month' and 'views' properties
        datasets: [
          {
            label: 'Total Views',
            data: data.map((entry) => entry.views),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Total Views',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="w-full lg:w-2/3 h-auto mx-auto shadow-lg mt-10">
      <h2 className="mb-6 text-2xl font-semibold text-center">Total Views</h2>
      <canvas id="totalViewsChart" className="w-full h-full"></canvas>
    </div>
  );
};

export default TotalViewsGraph;
