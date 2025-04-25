import Image from "next/image";
import React from "react";

const HireCleanerSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hire a Cleaner Today
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-md">
            We provide seamless access to simplify and expedite your cleaning
            needs. Cleandail ensures you get the best service, connecting you
            with top-quality cleaners on demand!
          </p>
          <button className="bg-white border border-gray-300 text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300 ease-in-out">
            Book Now in 60 seconds
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/s1.jpg"
            alt="Cleaner working"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HireCleanerSection;
