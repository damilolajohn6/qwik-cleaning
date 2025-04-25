"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    spaceSize: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);
    alert("Thank you for your quote request! We will contact you shortly.");
    setFormData({
      serviceType: "",
      spaceSize: "",
      name: "",
      email: "",
      phone: "",
      details: "",
    });
  };

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 md:px-12">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Request a Free Quote
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Service Type */}
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
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g., Indoor Cleaning, Office Cleaning"
              required
            />
          </div>

          {/* Space Size */}
          <div className="mb-4">
            <label
              htmlFor="spaceSize"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Size of Space (e.g., sq ft, # bedrooms/bathrooms)
            </label>
            <input
              type="text"
              id="spaceSize"
              name="spaceSize"
              value={formData.spaceSize}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="e.g., 1200 sq ft, 3 bed/2 bath"
              required
            />
          </div>

          {/* Your Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Additional Details or Specific Needs
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Tell us more about what you need..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            >
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetQuoteForm;
