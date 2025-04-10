// components/PartnersSection.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const logosTop = [
  "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
  "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
];

const logosBottom = [
    "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
    "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
  ];

const PartnersSection = () => {
  return (
    <div className="w-full bg-white py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        We have the best partners
      </h2>

      <div className="space-y-6">
        <Marquee gradient={false} speed={50}>
          {[...logosTop, ...logosTop].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="mx-6 h-24 object-contain"
            />
          ))}
        </Marquee>

        <Marquee gradient={false} speed={50} direction="right">
          {[...logosBottom, ...logosBottom].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="mx-6 h-16 object-contain"
            />
          ))}
        </Marquee>
      </div>

      {/* Themes section */}
      <div className="mt-16 px-6 md:px-24">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">Browse by themes</h3>
        <div className="flex flex-wrap gap-6 text-gray-700">
          <span>🎟️ Tickets</span>
          <span>🎮 Tours</span>
          <span>🚗 Transportation</span>
          <span>🧳 Travel Services</span>
          <span>🚢 Cruises</span>
          <span>🍽️ Food & Drink</span>
          <span>🎭 Entertainment</span>
          <span>🏞️ Adventure</span>
          <span>🪂 Aerial Sightseeing</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-8 text-black underline">
          <span>🏁 Formula 1</span>
          <span>⚽ Football</span>
          <span>🥊 Muay Thai</span>
          <span>⚾ Baseball</span>
          <span>View all Sports</span>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
