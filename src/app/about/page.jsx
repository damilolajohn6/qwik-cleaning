import React from 'react'
import AboutSection from '@/components/AboutSection'
import MissionVisionSection from '@/components/MissionVisionSection'
import AboutHero from '@/components/AboutHero';
import StatisticsSection from '@/components/StatisticSection';
import HireCleanerSection from '@/components/HireCleanerSection';
import GetQuoteForm from '@/components/GetQuoteForm';

const AboutPage = () => {
  return (
    <div>
        <AboutHero />
      <section className="container mx-auto max-w-4xl py-8 px-4 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          We are here to help you Handle all your Cleaning with our Top
          Professionals
        </h2>
      </section>
      <AboutSection />
      <MissionVisionSection />
      <StatisticsSection />
      <HireCleanerSection />
      <GetQuoteForm />
    </div>
  );
}

export default AboutPage