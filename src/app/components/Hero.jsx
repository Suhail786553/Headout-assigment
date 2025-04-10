'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
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

        {/* Navigation */}
        <div className="flex items-center gap-4 text-sm">
          <button title="Search" className="text-lg ">🔍</button>
          <button title="Language" className="flex items-center gap-1">🌐 <span className=" sm:inline">EN ₹INR</span></button>
          <button className=" hidden md:block px-3 py-1 md:px-4 md:py-2 border rounded-lg hover:bg-black hover:text-white transition duration-200 text-xs md:text-sm ">
            Sign in
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-start h-full pt-70 md:pt-90 px-4 md:px-32 text-white">
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
