'use client';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const features = [
  {
    icon: '💎',
    title: 'Only the finest',
    description: 'At Headout, you only find the best. We do the hard work so you don’t have to.',
  },
  {
    icon: '💵',
    title: 'Greed is good',
    description: 'With quality, you also get lowest prices, last-minute availability and 24x7 support.',
  },
  {
    icon: '💖',
    title: 'Experience every flavour',
    description: 'Offbeat or mainstream, a tour or a show, a game or a museum – we have ‘em all.',
  },
  {
    icon: '😎',
    title: 'No pain, only gain',
    description: 'Didn’t love it? We’ll give you your money back. Not cocky, just confident.',
  },
];

const destinations = [
  {
    img: 'https://cdn-imgix.headout.com/media/images/ee075882083344be170ed38c8c76b4a1-new-york-city-01.jpeg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in New York',
    country: 'United States',
  },
  {
    img: 'https://cdn-imgix.headout.com/media/images/216f669b473d05d53f723407d894d886-london-city-01.jpg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in London',
    country: 'United Kingdom',
  },
  {
    img: 'https://cdn-imgix.headout.com/media/images/7ceacca12e93245d25c59e5743b6c5d9-dubai-city-01.jpg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in Dubai',
    country: 'United Arab Emirates',
  },
  {
    img: 'https://cdn-imgix.headout.com/media/images/ab5da216cafc19ededc74c982286819d-rome-city-01.jpg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in Rome',
    country: 'Italy',
  },
  {
    img: 'https://cdn-imgix.headout.com/media/images/f7b072bc94b9463b8569722257845789-Paris-city-01.jpg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in Paris',
    country: 'France',
  },
  {
    img: 'https://cdn-imgix.headout.com/media/images/4e36c59eb78d7e6a11486bc94c5fea17-singapore-city-01.jpg?w=378&h=378&crop=faces&auto=compress%2Cformat&fit=min',
    title: 'Things to do in Singapore',
    country: 'Singapore',
  },
];
const gradientBackgrounds = [
  'radial-gradient(circle at center, #d4f0ff 20%, transparent 60%)', // Deeper blue
  'radial-gradient(circle at center, #e9fef2 20%, transparent 60%)', // Deeper green
  'radial-gradient(circle at center, #ffe4e4 20%, transparent 60%)', // Deeper pink
  'radial-gradient(circle at center, #fff0d4 20%, transparent 60%)', // Deeper orange
  'radial-gradient(circle at center, #eaeaff 30%, transparent 80%)', // Deeper violet
  'radial-gradient(circle at center, #e4fdf7 30%, transparent 80%)', // Deeper aqua
  'radial-gradient(circle at center, #fff1e4 30%, transparent 80%)', // Deeper cream
  'radial-gradient(circle at center, #e5e7eb 30%, transparent 80%)', // Slightly darker gray
];



export default function FeaturesAndDestinations() {
  return (
    <section className="px-4 md:px-12 py-10 bg-white lg:pr-32 lg:pl-32">
    <style jsx global>{`
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  
    {/* Features Section */}
    <div className="mb-16">
  <div className="flex gap-2 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 hide-scrollbar pb-2">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="w-[220px] sm:w-auto sm:min-w-0 space-y-2 text-left flex-shrink-0 p-4 rounded-xl"
        style={{
          backgroundImage: gradientBackgrounds[idx % gradientBackgrounds.length],
          backgroundColor: '#fff', // base white bg for contrast
        }}
      >
        <div className="text-4xl">{feature.icon}</div>
        <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{feature.description}</p>
      </div>
    ))}
  </div>
</div>
  
    {/* Destinations Section */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-600">Explore world&apos;s top destinations</h2>
      <div className=" flex items-center gap-4 text-sm text-gray-600 text-bold">
        <a href="#" className=" whitespace-nowrap">See all</a>
        <button
          onClick={() => scroll('left')}
          className="p-2 bg-white shadow rounded-full hidden md:block"
        >
          <IoIosArrowBack className="text-black" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2 bg-white shadow rounded-full"
        >
          <IoIosArrowForward className="text-black" />
        </button>
      </div>
    </div>   
  
    {/* Destination Cards - Scrollable on mobile */}
    <div className="flex gap-4 hide-scrollbar overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-6 pb-2">
      {destinations.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[220px] md:min-w-0 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group flex-shrink-0"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-3">
            <h4 className="font-semibold text-sm text-black">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.country}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  

  );
}
