import Image from "next/image";
import React from "react";

const MissionVisionSection = () => {

  return (
    <section className="container mx-auto py-12 px-4 md:px-12 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/cleaning.jpg"
            alt="Cleaner working"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-3">Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
