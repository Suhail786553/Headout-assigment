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

export default function FeaturesAndDestinations() {
  return (
    <section className="px-4 md:px-12 py-10 bg-white lg:pr-32 lg:pl-32">
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, idx) => (
          <div key={idx} className="space-y-2 text-left">
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>


      {/* Destinations Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-black">Explore world&apos;s top destinations</h2>
        <div className="flex items-center gap-4 text-sm text-blue-600">
          <a href="#" className="underline">See all</a>
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-white shadow rounded-full"
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

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {destinations.map((item, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden  cursor-pointer shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group">
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
