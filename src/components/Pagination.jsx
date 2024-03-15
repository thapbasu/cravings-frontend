import React from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Calculate the width of the indicator based on the current page
  const indicatorWidth = (currentPage / totalPages) * 100 + '%';

  // Handle click event for previous page button
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  // Handle click event for next page button
  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Left side: Indicator */}
      <div className="flex items-center">
        {/* Indicator */}
        <div className="h-1 bg-gray-300 w-[60vw]">
          {/* Highlighted section */}

          <div
            className="h-full bg-greenColor-0"
            style={{ width: indicatorWidth }}
          ></div>
        </div>
      </div>
      {/* Right side: Prev and Next buttons */}
      <div>
        {/* Prev button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="text-gray-400 mr-2"
        >
          <GrFormPrevious className="w-8 h-8 border border-gray-500 rounded-lg " />
        </button>
        {/* Next button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="text-gray-400"
        >
          <GrFormNext className="w-8 h-8 border border-gray-500 rounded-lg" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
