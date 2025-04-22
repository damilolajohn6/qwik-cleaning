"use client";

import { ChevronDown } from "lucide-react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div>
      <section
        className="relative min-h-screen flex flex-col px-6 md:px-20 bg-[url('/cleaner.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="mb-7">
          <Header />
        </div>

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 flex-grow">
          {/* Text Content */}
          <div className="text-white space-y-6  p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Where <em className="italic font-serif">Cleanliness</em>
              <br /> Meets <strong>Perfection.</strong>
            </h1>
            <p className="text-lg">
              We offer on demand cleaning services to both residential and
              commercial spaces.
            </p>

            {/* Service Selector */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="relative w-full sm:w-80">
                <select className="w-full appearance-none bg-white text-black p-4 rounded-md shadow-md pr-10 focus:outline-none">
                  <option>Choose the service you need</option>
                  <option>Home Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
              </div>
              <button className="bg-blue-600 text-white px-6 py-4 rounded-md shadow-md font-semibold hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Empty column for layout balance on desktop */}
          <div className="hidden md:block" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
