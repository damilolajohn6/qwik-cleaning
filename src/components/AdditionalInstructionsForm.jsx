"use client";
import React from "react";

const AdditionalInstructionsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Additional Instructions Form Submitted");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Add Specific Instruction
      </h3>

      <div className="mb-4">
        <label
          htmlFor="additionalService"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          If you have Additional Service Include
        </label>
        <input
          type="text"
          id="additionalService"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., Clean inside oven"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="additionalRoomNumbers"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Room Numbers
        </label>
        <input
          type="text"
          id="additionalRoomNumbers"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., Specify rooms for additional service"
        />
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

export default AdditionalInstructionsForm;
