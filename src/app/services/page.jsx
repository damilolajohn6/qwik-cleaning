import React from 'react'
import ServiceHero from '@/components/ServiceHero'
import IndoorCleaningSection from '@/components/IndoorCleaningSection'
import GetQuoteForm from '@/components/GetQuoteForm'

const ServicesPage = () => {
  return (
    <div>
        <ServiceHero />
        <IndoorCleaningSection />
        <GetQuoteForm />
    </div>
  )
}

export default ServicesPage