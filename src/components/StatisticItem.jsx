import React from "react";

const StatisticItem = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {value}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default StatisticItem;
