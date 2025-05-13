import React from 'react';

const Page = () => {
  return (
    <div className="contact-page p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <section className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-gray-700 mb-2">
          We'd love to hear from you! Reach out with questions, feedback, or partnership opportunities.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Email: support@yourmarketplace.com</li>
          <li>Phone: +1 (800) 123-4567</li>
          <li>Address: 123 Commerce Lane, Tech City, USA</li>
          <li>Support Hours: Mon – Fri, 9:00 AM – 6:00 PM (EST)</li>
        </ul>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
