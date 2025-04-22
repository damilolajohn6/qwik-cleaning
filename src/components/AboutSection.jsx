"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Who we are</h2>
          <p className="text-gray-700 leading-relaxed">
            At Qwikclean we bridge the gap between customers and professional
            cleaners, offering an easy, reliable, and on-demand platform that
            connects people who need cleaning services with experienced,
            independent cleaners.
            <br />
            We believe in making cleanliness convenient, accessible, and
            hassle-free for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our aim is to act as the middleman, ensuring that customers find
            trustworthy, skilled cleaners when they need them most, while
            providing cleaners with a steady stream of opportunities to
            showcase their expertise. Whether it's a one-time deep clean or a
            regular schedule, we’re committed to matching each customer with
            the perfect cleaner, ensuring top-quality service and peace of
            mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We’re passionate about building a community where both customers and
            cleaners thrive, creating a space where trust, reliability, and
            satisfaction are the cornerstones of every interaction.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/ab1.jpg"
              alt="Cleaner with tools"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/ab2.jpg"
              alt="Cleaning a table"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/ab2.jpg"
              alt="Cleaning close up"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/ab1.jpg"
              alt="Cleaner with tools smile"
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
