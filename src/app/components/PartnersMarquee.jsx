// components/PartnersSection.jsx
"use client"
import React from "react";
import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useState } from "react";
import { ChevronRight } from "react-feather";

const logosTop = [
  "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
  "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
];

const logosBottom = [
    "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/parques-reunidos.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
    "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/dubai-parks-and-resorts.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/historic-royal-palaces.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min", "https://cdn-imgix-open.headout.com/partner-images/chateau-de-versailles.png?w=240&h=150&crop=faces&auto=compress%2Cformat&fit=min",
  ];
  const themes = [
    { name: "Tickets", icon: "🎟️", options: ["Museums", "Water Parks", "Observation Decks", "Theme Parks", "City Cards", "Aquariums", "Zoos", "Religious Sites", "Immersive Experiences", "Parks", "Landmarks", "View all Tickets"] },
    { name: "Tours", icon: "🎮", options: ["Walking Tours", "Private Tours", "Bike Tours"] },
    { name: "Transportation", icon: "🚗", options: ["Car Rental", "Train Tickets", "Airport Transfers"] },
    { name: "Travel Services", icon: "🧳", options: ["Travel Insurance", "SIM Cards"] },
    { name: "Cruises", icon: "🚢", options: ["River Cruises", "Dinner Cruises"] },
    { name: "Food & Drink", icon: "🍽️", options: ["Food Tours", "Wine Tastings"] },
    { name: "Entertainment", icon: "🎭", options: ["Concerts", "Theatre Shows"] },
    { name: "Adventure", icon: "🏞️", options: ["Zipline", "Skydiving"] },
    { name: "Aerial Sightseeing", icon: "🪂", options: ["Helicopter Rides", "Hot Air Balloons"] },
  ];
  
const PartnersSection = () => {
  const scrollRef = useRef(null);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="w-full bg-white py-12">
      <h2 className="text-left lg:text-left pl-4 lg:pl-32 text-xl lg:text-3xl font-bold text-gray-800 mb-8">
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
      <div className="mt-16 px-6 md:px-32">
      <h3 className="text-xl font-semibold text-gray-600 mb-4">Browse by themes</h3>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-2 pr-10 scrollbar-hide"
        >
          {themes.map((theme, index) => (
            <button
              key={index}
              className={`relative text-gray-700 pb-1 transition-colors cursor-pointer ${
                selectedTheme.name === theme.name
                  ? "text-blue-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-blue-600"
                  : "hover:text-blue-500"
              }`}
              onClick={() => setSelectedTheme(theme)}
            >
              {theme.icon} {theme.name}
            </button>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-1 shadow"
          onClick={scrollRight}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-800 underline">
        {selectedTheme.options.map((option, index) => (
          <span
            key={index}
            className="cursor-pointer hover:text-purple-600 transition-colors"
          >
            {option}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PartnersSection;
