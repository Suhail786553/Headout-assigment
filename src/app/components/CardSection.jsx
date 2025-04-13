"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaBolt } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const destinations = [
    {
        location: 'Madrid',
        title: 'Royal Palace of Madrid Skip-the-Line Tickets',
        rating: 4.4,
        reviews: 8703,
        price: 1507,
        images: [
            'https://cdn-imgix.headout.com/media/images/4e049dabecdab23a46b04bf6e559228a-royalpalacemadrid-44.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/65a28b0ae738eb6c75dac44c508e83c8-23089-madrid-combo--save-2----royal-palace-of-madrid---liria-palace-skip-the-line-tickets-04.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/a964c0aeb7ac959d7415c13dc02c54a5-royalpalacemadrid-14.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
        ],
        instantConfirmation: true,
    },
    {
        location: 'Athens',
        title: 'Acropolis Parthenon Tickets with Audio Guide',
        rating: 4.4,
        reviews: 33047,
        price: 3390,
        images: [
            'https://cdn-imgix.headout.com/media/images/dcfbf731d7991f91d41640ffd032610f-d2cfb372cf3a129c5ee7d6d3945d0580-AdobeStock-129050920copy.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/dcfbf731d7991f91d41640ffd032610f-d2cfb372cf3a129c5ee7d6d3945d0580-AdobeStock-129050920copy.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/a964c0aeb7ac959d7415c13dc02c54a5-royalpalacemadrid-14.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
        ],
    },
    {
        location: 'London',
        title: 'From London: Harry Potter\u2122 Warner Bros. Studio Tickets with Coach Transfers',
        rating: 4.4,
        reviews: 8685,
        price: 11381,
        images: [
            'https://cdn-imgix.headout.com/media/images/9d4f1cfb7cd6370ef09dadef62ea02f8-28225-london-from-london---early-access-harry-potter-warner-bros.-studio-tour-04.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/668919c2a133b96af6fee8c290b4409b-22971-london-from-london--harry-potter-warner-bros-studio-tour-tickets-with-london-film-locations-walking-tour-01.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/a964c0aeb7ac959d7415c13dc02c54a5-royalpalacemadrid-14.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
        ],
        instantConfirmation: true,
    },
    {
        location: 'Interlaken',
        title: 'From Interlaken: Jungfraujoch Top of Europe Round-Trip Train Tickets',
        rating: 4.5,
        reviews: 3025,
        price: 23515,
        images: [
            'https://cdn-imgix.headout.com/media/images/fe75db7953e6637bc0db1d1b57e728fa-14852---Interlaken---From-Interlaken--Round-Trip-Train-Tickets-to-Jungfraujoch-Top-of-Europe--21.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/65a28b0ae738eb6c75dac44c508e83c8-23089-madrid-combo--save-2----royal-palace-of-madrid---liria-palace-skip-the-line-tickets-04.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
            'https://cdn-imgix.headout.com/media/images/a964c0aeb7ac959d7415c13dc02c54a5-royalpalacemadrid-14.jpg?w=686.7&h=428.40000000000003&crop=faces&auto=compress%2Cformat&fit=min',
        ],
        tag: 'Free cancellation'
    },
];

const Card = ({ item }) => {
    const [imgIndex, setImgIndex] = useState(0);

    const nextImg = () => setImgIndex((imgIndex + 1) % item.images.length);
    const prevImg = () => setImgIndex((imgIndex - 1 + item.images.length) % item.images.length);

    return (
        <div className="relative w-[280px] sm:w-[320px] h-[400px] bg-white rounded-lg shadow-md p-2 mx-1 sm:mx-2 flex-shrink-0">
            <div className="relative rounded-lg overflow-hidden h-[150px] sm:h-[180px] w-full cursor-pointer shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group">
                <Image
                    src={item.images[imgIndex]}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300"
                />
                {item.images.length > 1 && (
                    <>
                        <button onClick={prevImg} className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-sm">
                            <IoIosArrowBack />
                        </button>
                        <button onClick={nextImg} className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1 rounded-full text-sm">
                            <IoIosArrowForward />
                        </button>
                    </>
                )}
                {item.tag && <span className="absolute text-black top-2 left-2 bg-white text-xs px-2 py-1 rounded-md font-semibold">{item.tag}</span>}
            </div>
            <div className="mt-3 px-1">
                <p className="text-xs sm:text-sm font-medium text-gray-600">{item.location}</p>
                <div className="flex items-center gap-1 text-pink-600 text-xs sm:text-sm font-semibold">
                    <FaStar className="text-pink-600" />
                    {item.rating} <span className="text-gray-500 font-normal">({item.reviews.toLocaleString()})</span>
                </div>
                <p className="font-semibold text-sm sm:text-base text-black leading-snug mt-1">{item.title}</p>
                {item.instantConfirmation && (
                    <div className="flex items-center text-xs sm:text-sm text-gray-600 mt-1">
                        <FaBolt className="mr-1 text-gray-500" /> Instant confirmation
                    </div>
                )}
                <p className="text-xs sm:text-sm text-gray-500 mt-2">from</p>
                <p className="font-semibold text-black text-base sm:text-lg">₹{item.price.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default function Recommendations() {
    const [scrollRef, setScrollRef] = useState(null);

    const scroll = (direction) => {
        if (!scrollRef) return;
        const scrollAmount = window.innerWidth > 640 ? 320 : 280;
        scrollRef.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };

    return (
        <div className="p-4 sm:p-6 lg:pr-32 lg:pl-32 bg-white">
            <style jsx global>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">Headout’s top recommendations</h2>
                <div className="flex space-x-2 sm:hidden">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 bg-white shadow rounded-full hidden md:block"
                    >
                        <IoIosArrowBack className="text-black text-sm" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 bg-white shadow rounded-full hidden md:block"
                    >
                        <IoIosArrowForward className="text-black text-sm" />
                    </button>
                </div>
            </div>

            <div className="relative">
                {/* Desktop buttons */}
                <div className="absolute -top-8 right-0 z-10 hidden sm:flex space-x-2 ">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 bg-white shadow rounded-full "
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

                {/* Scrollable Cards */}
                <div
                    ref={(ref) => setScrollRef(ref)}
                    className="flex overflow-x-auto space-x-2 sm:space-x-4 hide-scrollbar pb-2"
                >
                    {destinations.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}