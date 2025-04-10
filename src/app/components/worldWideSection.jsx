"use client"
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const destinations = [
    {
        img: 'https://cdn-imgix.headout.com/media/images/a525b125dc142a7610cb19978606c446-167-london-london-theatre-tickets-01.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'London Theatre Tickets',
        country: 'London',
    },
    {
        img: 'https://cdn-imgix.headout.com/media/images/172edb62da5a1c64649787dd47cb0f7a-Dubai-Desert-Safari-card.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'Dubai Deserts Safari Tours',
        country: 'Dubai',
    },
    {
        img: 'https://cdn-imgix.headout.com/media/images/17dd253f930f2829c696d6a215123158-Vatican-Museums-card.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'Vatican Museums',
        country: 'Rome',
    },
    {
        img: 'https://cdn-imgix.headout.com/media/images/7bfaf86c4653c1ad58e0f494720e84ef-disneyland%20paris%20card.png?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'DisneyLand Paris Ticket',
        country: 'Italy',
    },
    {
        img: 'https://cdn-imgix.headout.com/media/images/19eaf0171b10d3d3047c5caa84a518bb-sydney%20CI.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'Sydnea Opera House Tours',
        country: 'Sydney',
    },
    {
        img: 'https://cdn-imgix.headout.com/media/images/c0f46d3425e3d434cdcce9c2291b47a1-243-paris-%23004-003-paris-%7C-eiffel-tower-02.jpg?w=378&h=504&crop=faces&auto=compress%2Cformat&fit=min',
        title: 'Eiffel Tower Tickets',
        country: 'Paris',
    },
];

export default function worldWideSection() {
    return (
        <section className="px-4 md:px-12 py-10 bg-[#f8f8f8] lg:pl-32 lg:pr-32 pb-4 pt-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-black mt-4">Top things to do worldwide
                </h2>
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
                            height={240}
                            className="w-full h-52 object-cover"
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