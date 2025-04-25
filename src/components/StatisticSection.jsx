
import React from 'react';
import StatisticItem from './StatisticItem';

const StatisticsSection = () => {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <StatisticItem value="50+" label="Cleaners" />
        <StatisticItem value="15%" label="User Satisfaction" /> 
        <StatisticItem value="50+" label="Cleaners" /> 
      </div>
    </section>
  );
};

export default StatisticsSection;