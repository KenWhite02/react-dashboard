import React from 'react';
import { ChartHeader, LineChart } from '../../components';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeader category="Chart" title="Inflation Rate" />
      <div className="w-11/12">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
