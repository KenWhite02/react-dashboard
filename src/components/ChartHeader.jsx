import React from 'react';

const ChartHeader = ({ category, title }) => {
  return (
    <div className="mb-10 mt-14 md:mt-0">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extralight -tracking-tight text-slate-900 dark:text-white">
        {title}
      </p>
    </div>
  );
};

export default ChartHeader;
