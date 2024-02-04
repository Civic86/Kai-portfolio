import React from 'react';

const ArrowInCircle: React.FC = () => {
  return (
    <div className="w-32 h-32 relative">
      <div className="rounded-full w-full h-full bg-blue-500 flex items-center justify-center">
        <svg
          className="text-white w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14m0 0l-4-4m4 4l4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default ArrowInCircle;
