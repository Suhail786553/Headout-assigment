'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
        <div className="flex items-center gap-2 w-24 md:w-32">
          <Image
            src="https://cdn-imgix-open.headout.com/logo/svg/Headout_logo_purps.svg?w=229.5&h=36&fm=svg"
            alt="logo"
            width={110}
            height={36}
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <span className="cursor-pointer">English / INR</span>
          <span className="flex items-center gap-1 cursor-pointer">
            <span>❓</span> Help
          </span>
          <button className="px-5 py-1 border rounded-full hover:bg-black hover:text-white transition duration-200">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white text-black z-30 shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <span className="cursor-pointer">English / INR</span>
            <span className="flex items-center gap-1 cursor-pointer">
              <span>❓</span> Help
            </span>
            <button className="px-5 py-1 border rounded-full hover:bg-black hover:text-white transition duration-200">
              Sign in
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-start h-full pt-80 px-4 md:px-32 text-white">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mb-6 leading-tight">
          The world's best experiences <br /> curated just for you
        </h1>
        <div className="w-1/3 max-w-xl">
          <div className="flex items-center bg-white rounded-xl p-2 shadow-md">
            <input
              type="text"
              placeholder="Search for experiences and cities"
              className="flex-grow px-2 py-2 text-black rounded-xl outline-none"
            />
            <button className="p-2 pr-4 text-gray-600">🔍</button>
          </div>
        </div>
      </div>
    </section>
  );
}
