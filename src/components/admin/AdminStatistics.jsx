import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AdminStatistics = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="w-full h-auto lg:max-w-5xl mx-auto shadow-lg mt-10">
      <canvas ref={chartContainer}></canvas>
    </div>
  );
};

export default AdminStatistics;
