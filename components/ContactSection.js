'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // State for loading status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation checks
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = 'Email must be valid';
    if (!formData.message) validationErrors.message = 'Message is required';

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Set loading state to true while sending email

      // If no errors, submit form data using the backend API endpoint
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false); // Set loading state to false after email is sent

      if (response.ok) {
        console.log('Email sent successfully:', data);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Error sending email:', data);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-8 md:px-14 pt-28">
      <div className="">
        <h2 className="border-l-4 border-green-400 pl-2 font-mono font-bold text-xl">
          5. Contact Me
        </h2>
        <p className="font-mono mt-4 max-w-xl leading-relaxed">
          If you’d like to collaborate, ask a question, or just want to say hello, feel free to reach out!
        </p>
      </div>

      <div className="lg:flex justify-between gap-8 mt-12">
        {/* Contact Details */}
        <div className="lg:w-1/2 space-y-6">
          <p className="border-l-4 border-green-400 pl-2 font-mono font-semibold text-xl">Contact Details</p>
          <div className="space-y-4 pt-2">
            <p><span className="text-green-400 font-mono">&gt; Full Name:</span> Akkana Sanjeev</p>
            <p><span className="text-green-400 font-mono">&gt; Role:</span> Full-Stack Developer</p>
            <p><span className="text-green-400 font-mono">&gt; City:</span> Ongole, India</p>

            <p><span className="text-green-400 font-mono">&gt; Email:</span> 
              <a href="mailto:akkanasanjeev@gmail.com" className="hover:text-green-300 underline">akkanasanjeev@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 space-y-6 mt-8 lg:mt-0">
          <p className="border-l-4 border-green-400 pl-2 font-mono font-semibold text-xl">Send me a message</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="font-mono">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="font-mono">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="font-mono">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* Display Loading State */}
            {loading ? (
              <div className="text-center text-green-400 font-mono">Sending message...</div>
            ) : (
              <button
                type="submit"
                className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-mono font-semibold rounded"
              >
                Send Message
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
