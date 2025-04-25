"use client";

import { ChevronDown } from "lucide-react";
import Header from "./Header";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col bg-[url('/cleaner.jpg')] bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="mb-7">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="flex-grow flex items-center justify-center py-10">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div className="text-white space-y-6 p-4 sm:p-6 rounded-lg text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Where <em className="italic font-serif">Cleanliness</em>
                <br /> Meets <strong>Perfection.</strong>
              </h1>
              <p className="text-base sm:text-lg">
                We offer on-demand cleaning services to both residential and
                commercial spaces.
              </p>

              {/* Selector + Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
                <div className="relative w-full sm:w-72">
                  <select className="w-full appearance-none bg-white text-black p-4 rounded-md shadow-md pr-10 focus:outline-none">
                    <option>Choose the service you need</option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black pointer-events-none" />
                </div>
                <Button className="bg-blue-600 text-white w-full sm:w-auto px-6 py-4 rounded-md shadow-md font-semibold hover:bg-blue-700 transition">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Empty column for layout balance on desktop */}
            <div className="hidden md:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
