"use client"
import ContactHero from '@/components/ContactHero'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const ContactPage = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Contact Form Submitted:", formData);
      alert("Thank you for your message! We will get back to you shortly."); // Using alert for simplicity, consider a modal/message box
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
      });
    };

  return (
    <div>
      <ContactHero />
      <section className="container mx-auto py-8 px-4 md:px-12">
        <div className="max-w-2xl mx-auto">
          {" "}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Get In Touch with Us!
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            What you require dous modi priarring your{" "}
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Reason for Message
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., Service Inquiry, Support"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              {" "}
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
              >
                Send a Message
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 py-8 px-4 md:px-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
            Direct Contact Information:
          </h2>
          <div className="text-gray-700 text-lg space-y-2 text-center md:text-left">
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> hi@yourbusiness.com
            </p>
            <p>
              <strong>Address:</strong> 123 Evant Lane
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage