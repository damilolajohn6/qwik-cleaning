import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurService from "@/components/OurService";
import MeetOurCleaners from "@/components/MeetOurCleaners";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCard from "@/components/TestimonialCard";
import StatisticsSection from "@/components/StatisticSection";
import HireCleanerSection from "@/components/HireCleanerSection";

export default function Home() {
  const testimonialData = {
    testimonial:
      "Cleandail transformed my home! The cleaner was punctual, professional and left everything sparkling.",
    name: "Michael Smith",
    title: "Business man",
    imageUrl: "/avatar.png",
  };
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurService />
      <HowItWorks />
      <MeetOurCleaners />
      <StatisticsSection />
      <div className="bg-gray-50 px-6 md:px-20">
        <div className="py-16 px-6 md:px-20 mx-auto  justify-center items-center max-w-7xl">
          <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard {...testimonialData} />
            <TestimonialCard {...testimonialData} />
            <TestimonialCard {...testimonialData} />
          </div>
        </div>
      </div>
      <HireCleanerSection />
    </div>
  );
}
