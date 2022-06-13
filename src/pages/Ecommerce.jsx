import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="m-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 md:h-60 rounded-xl w-full p-8 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$8723.56</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 mt-3">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
