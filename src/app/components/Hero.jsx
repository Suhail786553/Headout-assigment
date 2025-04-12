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
      <div className="absolute inset-0 bg-opacity-30 z-10" />

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
        <div className="hidden md:flex items-center gap-5 text-sm">
          <div className="flex-grow">
            <div className="flex items-center bg-white text-black rounded-md border border-gray-300 px-4 py-2 w-full max-w-sm max-h-96 shadow-sm">
              <input
                type="text"
                placeholder="Search for Paris"
                className="flex-grow bg-transparent outline-none text-sm"
              />
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 016.65 14.15z"
                />
              </svg>
            </div>
          </div>

          <button title="Language" className="font">English / INR</button>
          <button title="Help" className="flex items-center gap-1"><span>❓</span> Help</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition duration-200 text-sm">Sign in</button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4 text-sm">
          <button className="text-lg">🔍</button>
          <button className="flex items-center gap-1">🌐 <span>EN ₹INR</span></button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full pt-32 px-4 md:px-32 text-white">
        <h1 className="text-2xl md:text-5xl font-bold max-w-2xl mb-6 leading-tight">
          The world's best experiences <br /> curated just for you
        </h1>

        {/* Hero Search Box */}
        <div className="w-full md:w-1/2 max-w-sm max-h-96">
          <div className="flex items-center bg-white text-black rounded-md border border-gray-300 px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Search for Paris"
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 016.65 14.15z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
