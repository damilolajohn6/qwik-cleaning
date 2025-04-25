"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Who we are
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            At Qwikclean, we bridge the gap between customers and professional
            cleaners, offering an easy, reliable, and on-demand platform that
            connects people who need cleaning services with experienced,
            independent cleaners. <br />
            We believe in making cleanliness convenient, accessible, and
            hassle-free for everyone.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Our aim is to act as the middleman, ensuring that customers find
            trustworthy, skilled cleaners when they need them most, while
            providing cleaners with a steady stream of opportunities to showcase
            their expertise. Whether it's a one-time deep clean or a regular
            schedule, we’re committed to matching each customer with the perfect
            cleaner.
          </p>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
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
          {["/ab1.jpg", "/ab2.jpg", "/ab2.jpg", "/ab1.jpg"].map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden aspect-square relative"
            >
              <Image
                src={src}
                alt={`About image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
