"use client";

import Image from "next/image";
import { FaCalendarAlt, FaMobileAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarAlt className="text-red-500 text-2xl mb-2" />,
    title: "Book your Cleaner",
    description:
      "Choose the date, time, and type of service. Customize your cleaning to suit your needs.",
  },
  {
    icon: <FaMobileAlt className="text-red-500 text-2xl mb-2" />,
    title: "Customize",
    description:
      "Select your preferred cleaner, and let us know if there are any special instructions for your home.",
  },
  {
    icon: <FaCalendarAlt className="text-red-500 text-2xl mb-2" />,
    title: "Enjoy a Sparkling Clean Space",
    description:
      "Our trusted, background-checked cleaners will get to work, ensuring every corner is spotless.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-20 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Lorem ipsum arcu sit
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base mb-10">
        Getting your home in order has never been easier. Simply select the
        service you need, add property (e.g., Address, Apartment/Unit, Postal
        Code, Date), and we will match you with our cleaner.
      </p>

      {/* Image / Video Section */}
      <div className="relative mx-auto w-full aspect-video rounded-xl overflow-hidden mb-12">
        <Image
          src="/howitworks.jpg"
          alt="How it works video"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[50px] border-t-white opacity-80 cursor-pointer" />
        </div>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-start px-4">
            {step.icon}
            <h3 className="font-bold text-lg mb-1">{step.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
