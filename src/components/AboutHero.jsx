"use client";
import Header from "./Header";

const AboutHero = () => {
  return (
    <div>
      <section className="relative h-[70vh] flex flex-col px-6 md:px-20 bg-[url('/ab-hero.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="mb-7">
          <Header />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 flex-grow">
          <div className="text-white space-y-6  p-6 rounded-lg">
            <div>
              <div className="text-4xl text-white mb-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
