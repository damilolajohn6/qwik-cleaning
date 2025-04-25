import React from "react";
import StatisticItem from "./StatisticItem";

const StatisticsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <StatisticItem value="50" label="Cleaners" />
        <StatisticItem value="98" label="User Satisfaction" />
        <StatisticItem value="1000" label="Happy Homes" />
      </div>
    </section>
  );
};

export default StatisticsSection;
