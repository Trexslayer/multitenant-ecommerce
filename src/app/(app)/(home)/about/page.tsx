import React from 'react';

const Page = () => {
  return (
    <div className="about-page p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="space-y-6">

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="text-gray-700 mb-2">
            We are a leading multivendor e-commerce platform that connects buyers with a diverse range of sellers across the globe.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Founded with the mission to empower small and large businesses</li>
            <li>Built by a team passionate about technology and commerce</li>
            <li>Trusted by thousands of customers and vendors</li>
          </ul>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 mb-2">
            To create a thriving digital marketplace where sellers succeed and customers enjoy seamless shopping experiences.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Offer tools for vendor growth and sustainability</li>
            <li>Deliver a fast, secure, and enjoyable shopping experience</li>
            <li>Foster innovation and continuous improvement</li>
          </ul>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">What Sets Us Apart</h2>
          <p className="text-gray-700 mb-2">
            Our platform offers powerful features and unmatched support for both vendors and customers.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Intuitive vendor dashboards and tools</li>
            <li>24/7 customer and seller support</li>
            <li>Secure transactions with multiple payment options</li>
            <li>Fast and reliable order fulfillment</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Page;
