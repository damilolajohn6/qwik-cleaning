import React from "react";
import { FaStar } from "react-icons/fa"; 

const BookingProgress = () => {
  const steps = [
    { name: "Details", current: true }, 
    { name: "Workers", current: false },
    { name: "Payment", current: false },
  ];

  return (
    <div className="w-full bg-gray-100 py-4 px-6 md:px-12 border-b border-gray-200">
      <div className="container mx-auto flex justify-center md:justify-start items-center space-x-8">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center space-x-2">
            {step.current && (
              <FaStar className="text-yellow-500 h-5 w-5" />
            )}
            <span
              className={`text-lg font-semibold ${
                step.current ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <div className="h-px w-8 bg-gray-300 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingProgress;
