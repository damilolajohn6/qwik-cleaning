"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    title: "Commercial Cleaning",
    image: "/s1.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
  {
    title: "Residential Cleaning",
    image: "/s2.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
  {
    title: "Deep Cleaning",
    image: "/s3.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
  {
    title: "Move In/Out Cleaning",
    image: "/s4.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
  {
    title: "Move In/Out Cleaning",
    image: "/s4.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
  {
    title: "Commercial Cleaning",
    image: "/s1.jpg",
    desc: "We Understand That A Clean Workspace Boosts Productivity And Leaves A Lasting Impression On Clients.",
  },
];

const OurService = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Service</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
              <div className="flex justify-end">
                <FiArrowUpRight className="text-xl text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
