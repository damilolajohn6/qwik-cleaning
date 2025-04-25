import Image from "next/image";

const IndoorCleaningSection = () => {
  return (
    <div className="container mx-auto my-4">
      <section className="bg-blue-800 container mx-auto my-4 text-white py-12 px-4 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Indoor cleaning
            </h2>

            <p className="text-base leading-relaxed">
              No matter the size of your space or the level of cleaning you
              need, we have a plan that’s right for you. Transparent pricing, no
              hidden fees.
            </p>
          </div>

          <div className="md:w-1/2 w-full relative h-64 md:h-70 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hand.jpg"
              alt="Hand holding a cleaning product"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8 px-4 md:px-12 text-gray-700 leading-relaxed">
        {/* First Paragraph */}
        <p className="mb-6">
          We understand the challenges of keeping up with indoor cleaning,
          especially when life gets hectic. That's why we offer a wide range of
          services designed to fit your needs and schedule, so you don't have to
          feel overwhelmed by the mess.
        </p>

        {/* Second Paragraph */}
        <p className="mb-6">
          At Qwikclean, we understand that maintaining a clean and organized
          indoor environment is essential for your health, comfort, and peace of
          mind. Whether it's your home or your workplace, a clean space not only
          improves aesthetics but also promotes productivity and overall
          well-being. That's why we offer comprehensive Indoor Cleaning
          Services, tailored to meet the specific needs of each customer.
        </p>

        {/* Third Paragraph */}
        <p className="mb-6">
          Indoor cleaning is a cleaning that you do everyday, it is the process
          of thoroughly cleaning and maintaining the interior spaces of homes,
          offices, or other indoor environments. It involves a variety of tasks
          aimed at removing dirt, dust, clutter, and germs from floors,
          surfaces, furniture, and appliances, ensuring that the indoor space is
          tidy, hygienic, and pleasant to live or work in.
        </p>

        {/* Fourth Paragraph */}
        <p className="mb-6">
          Cleaning your home is crucial for maintaining a healthy environment,
          as it helps reduce allergens, prevent the spread of germs, and improve
          air quality. It's an essential service for both residential and
          commercial spaces, ensuring that people feel comfortable, productive,
          and safe indoors, and determine how people perceives you. We have the
          finest of Cleaners that pay attentions to the tiniest details and
          apply techniques from the scrubbing to dusting touching every corner
          of the space that needs cleaning. When you choose our indoor cleaning
          services, you're choosing more than just a clean home—you're choosing
          peace of mind. You'll find more time to enjoy your space without the
          stress of cleaning it yourself.
        </p>
      </section>
    </div>
  );
};

export default IndoorCleaningSection;
