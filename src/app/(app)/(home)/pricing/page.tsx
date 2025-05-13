import React from 'react';

const Page = () => {
  return (
    <div className="pricing-page p-4">
      <h1 className="text-2xl font-bold mb-4">Pricing Plans</h1>
      <div className="space-y-6">

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Basic Plan</h2>
          <p className="text-gray-700 mb-2">
            Ideal for new sellers just getting started on our platform.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Free to join</li>
            <li>Up to 20 product listings</li>
            <li>5% transaction fee</li>
            <li>Email support</li>
          </ul>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pro Plan</h2>
          <p className="text-gray-700 mb-2">
            Designed for growing vendors who need more tools and reach.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>$29/month</li>
            <li>Unlimited product listings</li>
            <li>3% transaction fee</li>
            <li>Priority customer support</li>
            <li>Access to advanced analytics</li>
          </ul>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Enterprise Plan</h2>
          <p className="text-gray-700 mb-2">
            Perfect for high-volume sellers and large businesses.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Custom pricing</li>
            <li>Dedicated account manager</li>
            <li>Lower transaction fees</li>
            <li>Custom integrations and APIs</li>
            <li>24/7 priority support</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Page;
