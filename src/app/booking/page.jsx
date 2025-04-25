import React from "react";
import Navbar from "@/components/Navbar";
import BookingProgress from "@/components/BookingProgress";
import ServiceDetailsForm from "@/components/ServiceDetailsForm";
import AdditionalInstructionsForm from "@/components/AdditionalInstructionsForm";

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> 
      <BookingProgress />

      <main className="container mx-auto py-8 px-4 md:px-12">
        <ServiceDetailsForm />
        <AdditionalInstructionsForm />
      </main>
    </div>
  );
};

export default BookingPage;
