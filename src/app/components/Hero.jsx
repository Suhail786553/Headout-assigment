'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 520);
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
          <button title="Help" className="flex items-center gap-1"><span> 
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="16" height="14"><g><circle cx="8.00004" cy="8.00001" r="6.66667" stroke="currentColor"></circle><path d="M6.66675 6.00002C6.66675 5.26364 7.2637 4.66669 8.00008 4.66669C8.73646 4.66669 9.33341 5.26364 9.33341 6.00002C9.33341 6.26545 9.25585 6.51277 9.12216 6.72055C8.72369 7.3398 8.00008 7.93031 8.00008 8.66669V9.00002" stroke="currentColor" stroke-linecap="round"></path><path d="M7.99474 11.3333H8.00073" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></span> Help</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition duration-200 text-sm">Sign in</button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4 text-sm">
          <button className="text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="search-helper-icon"><path stroke="#444" stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path></svg>
          </button>
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
            <button className="p-2 pr-4 text-gray-600 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="search-helper-icon"><path stroke="#444" stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path></svg>
            </button>
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
              <button className="p-2 pr-4 text-gray-600 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="search-helper-icon"><path stroke="#444" stroke-linecap="round" stroke-linejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path></svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}