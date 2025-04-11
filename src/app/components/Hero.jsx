'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn-imgix.headout.com/media/videos/42bc24e61f0e32e3fbbefb0cbedbc961-Global%20Banner%20Video%20Desktop%20Version.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-30 z-10" />

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 md:px-32 py-4 transition-all duration-300 ${
          scrolled ? 'bg-white text-black shadow-md' : 'text-white'
        }`}
      >
        {/* Logo */}
        <div className="w-24 md:w-32">
          <Image
            src="https://cdn-imgix-open.headout.com/logo/svg/Headout_logo_purps.svg?w=229.5&h=36&fm=svg"
            alt="logo"
            width={110}
            height={36}
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <button title="Language" className="font-semibold">English / INR</button>
          <button title="Help" className="flex items-center gap-1"><span>❓</span> Help</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition duration-200 text-sm">Sign in</button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4 text-sm">
          <button className="text-lg">🔍</button>
          <button className="flex items-center gap-1">🌐 <span>EN ₹INR</span></button>
        </div>
      </div>

      {/* Search Bar Mid when scrolled */}
      {scrolled && (
        <div className="fixed top-20 md:top-2 left-1/2 transform -translate-x-1/2 z-30 w-1/3 md:w-1/4  max-w-xl px-4 hidden md:block">
          <div className="flex items-center bg-white rounded-xl p-1 shadow-lg border border-gray-400">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="flex-grow px-2 py-2 text-black rounded-xl outline-none text-sm md:text-base"
            />
            <button className="p-2 pr-4 text-gray-600 text-xl">🔍</button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      
        <div className="relative z-20 flex flex-col items-start justify-center h-full pt-32 px-4 md:px-32 text-white">
          <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mb-6 leading-tight">
            The world's best experiences <br /> curated just for you
          </h1>
          <div className="w-full md:w-1/2 max-w-xl md:max-w-md">
            <div className="flex items-center bg-white rounded-xl p-2 shadow-md">
              <input
                type="text"
                placeholder="Search for experiences and cities"
                className="flex-grow px-2 py-2 text-black rounded-xl outline-none text-sm md:text-base"
              />
              <button className="p-2 pr-4 text-gray-600 text-xl">🔍</button>
            </div>
          </div>
        </div>
    </section>
  );
}
