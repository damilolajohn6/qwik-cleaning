"use client";

import Image from "next/image";
import { FaStar, FaChevronDown } from "react-icons/fa";

const cleaners = [
  {
    name: "Sarah",
    image: "/cleaner1.jpg",
    description:
      "With over 5 years of experience in residential and commercial cleaning, Sarah is known for her attention to detail and thoroughness. She takes pride in leaving every space spotless",
    rating: 4,
  },
  {
    name: "Sarah",
    image: "/cleaner2.jpg",
    description:
      "With over 5 years of experience in residential and commercial cleaning, Sarah is known for her attention to detail and thoroughness. She takes pride in leaving every space spotless",
    rating: 4,
  },
  {
    name: "Sarah",
    image: "/cleaner3.jpg",
    description:
      "With over 5 years of experience in residential and commercial cleaning, Sarah is known for her attention to detail and thoroughness. She takes pride in leaving every space spotless",
    rating: 4,
  },
];

const MeetOurCleaners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Meet Our Cleaners</h2>
      <p className="text-gray-600 max-w-3xl mb-10 text-sm sm:text-base">
        From laundry to dishes; from garage cleaning to car washing, and your
        garden in between – we’ve got you covered! They’re experienced, vetted,
        and rated – ready to take care of your home.
      </p>

      {/* Cleaners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {cleaners.map((cleaner, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={cleaner.image}
                alt={cleaner.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-md mb-2">
                Meet {cleaner.name}, your dedicated cleaner
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {cleaner.description}
              </p>
              <div className="flex justify-center text-yellow-500">
                {Array.from({ length: cleaner.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking UI */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-100 p-4 rounded-lg max-w-2xl mx-auto w-full">
        <div className="relative w-full sm:w-2/3">
          <select className="appearance-none w-full p-3 rounded-md bg-white border border-gray-300 pr-10 text-sm sm:text-base">
            <option>Choose the service you need</option>
            <option>Commercial Cleaning</option>
            <option>Residential Cleaning</option>
            <option>Deep Cleaning</option>
          </select>
          <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-gray-500">
            <FaChevronDown />
          </div>
        </div>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition text-sm sm:text-base">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default MeetOurCleaners;
