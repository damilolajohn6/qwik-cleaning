import React from "react";
import Link from "next/link"; 
import { Button } from "./ui/button";


const GetQuoteSection = () => {
  return (
    <section className="bg-blue-600 text-white py-12 px-4 md:px-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a sparkling clean space?
        </h2>

        <p className="text-lg mb-8">
          Get a personalized quote for your cleaning needs today!
        </p>

        <Link href="/booking">
          <Button className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-md shadow hover:bg-gray-100 transition duration-300 ease-in-out">
            Get Your Free Quote
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GetQuoteSection;
