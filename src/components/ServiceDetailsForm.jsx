"use client";
import React from "react";

const ServiceDetailsForm = () => {

  //manage form state here or lift it up to the parent component

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Details Form Submitted");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Tell us what kind of service you need
      </h3>

      <div className="mb-4">
        <label
          htmlFor="serviceType"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Service Type
        </label>
        <input
          type="text"
          id="serviceType"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., Indoors Cleaning"
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Indoors Cleaning
        </h4>

        {/* Your Tasks Location Input */}
        <div className="mb-4">
          <label
            htmlFor="tasksLocation"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Tasks Location
          </label>
          <input
            type="text"
            id="tasksLocation"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter location details"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="roomNumbers"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Room Numbers
          </label>
          <input
            type="text"
            id="roomNumbers"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="e.g., 2 bedrooms, 1 bathroom"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailsForm;
