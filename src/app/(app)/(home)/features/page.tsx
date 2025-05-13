import React from 'react';

const Page = () => {

  return (
    <div className="features-page p-4">
      <h1 className="text-2xl font-bold mb-4">Features</h1>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Vendor Dashboard</h2>
          <p className="text-gray-700 mb-2">
            A dedicated dashboard for each vendor to manage their activities and monitor performance.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Product listing and inventory control</li>
            <li>Order management with status updates</li>
            <li>Sales analytics and performance tracking</li>
            <li>Earnings overview and payout requests</li>
          </ul>
        </li>

        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Customer Review & Rating System</h2>
          <p className="text-gray-700 mb-2">
            Allows customers to share feedback and rate both products and vendors.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Verified purchase reviews</li>
            <li>Average rating display on product and vendor pages</li>
            <li>Vendor replies to reviews</li>
            <li>Content moderation tools</li>
          </ul>
        </li>

        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Advanced Search & Filtering</h2>
          <p className="text-gray-700 mb-2">
            Helps users discover products efficiently with rich filtering options.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Keyword search with autosuggestions</li>
            <li>Filter by category, price, rating, vendor, and more</li>
            <li>Sorting options like popularity or newest arrivals</li>
            <li>Responsive design for desktop and mobile</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Page;
