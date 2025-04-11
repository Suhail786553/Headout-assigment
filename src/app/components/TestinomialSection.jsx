"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    name: "Tannu",
    country: "UAE",
    rating: 5,
    image:
      "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/10750901/b15fdae65a69e9decb270298767bcc30-37ebc4f4cab7?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review:
      "The atmosphere created with the authentic set pieces on the real film location made you believe that you really have been in Hogwarts. Headout was very helpful in helping me book despite my disability. My carer and I had a fan...",
    link:
      "Warner Bros. Studio Harry Potter Tour with Premium Transfers from London",
  },
  {
    name: "Szász",
    country: "Romania",
    rating: 5,
    image:
      "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/10796431/c530a5837de95f4d60db8f7df9a3666e-9b9be9595150?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review:
      "Disneyland was my childhood dream, and I was very exited to visit it . I waited for 10 years and it was amazing! A lot of experience, a lot of fun. In this place you can be child for a day again:)",
    link: "Skip the Line Tickets to Royal Palace of Madrid",
  },
  {
    name: "Chirag",
    country: "Australia",
    rating: 5,
    image:
      "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/9199735/875ea23f7099cb5bf7a00311572caa19-0a86c2778ea4?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review:
      "The ticketing experience through Headout was very good as we got a significant discount on the tickets. Customer support is extremely well managed.❣️ The FantaSea show was awesome!👌 We would highly recommend it to whoever is...",
    link: "Singapore Cable Car Sky Pass: Round Trip",
  },
  {
    name: "Maria",
    country: "Spain",
    rating: 5,
    image:
      "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/11379170/7fc1f96dfbc62685b48ebf0b0ff820d6-ac9038f2dfe0?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review: "Definitely was one the most incredible shows I ever seen 👏. I highly recommended to everyone to come and see it! Amazing performance.",
    link: "Sky Views Observatory Tickets",
  },
  {
    name: "Jade",
    country: "USA",
    rating: 5,
    image: "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/10875070/1da0ff3966524ccd7c099540e205d798-a99e0372b73d?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review: "Amazing and magical experience! Everything was smooth from booking to end.",
    link: "Disneyland Paris Entry Tickets",
  },
  {
    name: "Ali",
    country: "UAE",
    rating: 5,
    image: "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/11177251/d002cef6ac2322b75176f6b282047894-5eea73b3aef9?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review: "Perfect way to see the city — highly recommend the night cruise!",
    link: "Dubai Marina Dhow Cruise",
  },
  {
    name: "Sofia",
    country: "Italy",
    rating: 5,
    image: "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/9914788/640677d53748901e63956a8a0ff494d0-51694006c4c6?w=576&h=546&crop=faces&auto=enhance&fit=min",
    avatar: "",
    review: "Unforgettable journey. Will cherish this forever!",
    link: "Rome Vatican Guided Tour",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 340; // Adjusted for card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#130d1a] to-[#220b36] text-white px-6 py-12 ">
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-5xl font-bold mb-6 leading-tight text-left lg:text-left lg:pl-28">
            Millions love <br /> heading  out with us <span>💖</span>
          </h2>
          <div className="flex gap-4 justify-center lg:justify-start lg:pl-28">
            <button
              onClick={() => scroll("left")}
              className="bg-[#2c153a] p-3 rounded-full hidden cursor-pointer  md:block"
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-[#2c153a] p-3 rounded-full cursor-pointer hidden md:block"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex flex-1 gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-1"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-start cursor-pointer min-w-[380px] max-w-[320px] h-[520px] bg-[#2c153a] rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
            >
              <img
                src={t.image}
                alt="review"
                className="w-full h-74 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-bold">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-semibold">{t.name}</h3>
                      <p className="text-xs opacity-70">{t.country}</p>
                    </div>
                  </div>
                  <div className="text-pink-400 font-semibold text-lg whitespace-nowrap">
                    {'★'.repeat(t.rating)} <span className="text-white">{t.rating}/5</span>
                  </div>
                </div>
                <p className="text-sm mb-2">{t.review}</p>
                <a href="#" className="text-xs underline text-white/70">
                  {t.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
