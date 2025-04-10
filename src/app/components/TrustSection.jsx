import React from "react";

const TrustSection = () => {
  const FullStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118l-3.39-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  );

  const HalfStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2c.3 0 .566.188.666.474l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-.5-.165V2z" />
    </svg>
  );

  const TrustpilotLogo = () => (
    <div className="flex items-center gap-1 mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00b67a">
        <path d="M6.913 15.984l2.634-8.33 2.634 8.33h8.746l-7.076 5.142 2.634 8.33-7.075-5.142-7.076 5.142 2.634-8.33L1 15.984h5.913z" />
      </svg>
      <span className="text-lg font-semibold text-black">Trustpilot</span>
    </div>
  );

  const TechCrunchLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" className="h-6" fill="currentColor">
      <rect width="600" height="200" fill="none" />
      <text x="0" y="150" fontSize="140" fontWeight="bold" fill="#04D160">TC</text>
    </svg>
  );

  const AppleLogo = () => (
    <svg className="h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.365 1.43c0 1.14-.42 2.15-1.18 2.94-.79.83-2.02 1.45-3.14 1.36-.13-1.13.39-2.3 1.19-3.09.74-.77 2.01-1.32 3.13-1.21zm3.34 17.49c-.41.93-.88 1.83-1.45 2.68-.73 1.07-1.33 1.82-2.21 1.82-.84 0-1.19-.53-2.21-.53-1.01 0-1.43.52-2.22.54-.91 0-1.6-.99-2.32-2.07-1.26-1.87-2.23-4.95-.92-7.11.63-1.1 1.74-1.8 2.96-1.82.91 0 1.77.61 2.21.61.45 0 1.38-.74 2.32-.63.4.02 1.54.17 2.26 1.3-1.13.69-1.9 2.02-1.63 3.33.23 1.13 1.05 2.05 2.19 2.48z" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-start">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
          We've served <span className="font-bold">36 million+</span> guests and we are here for you
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start justify-center text-left">
          {/* Trustpilot */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <TrustpilotLogo />
            <div className="flex gap-1 mb-1">
              {[...Array(4)].map((_, i) => (
                <FullStar key={i} />
              ))}
              <HalfStar />
            </div>
            <p className="text-sm text-gray-700">
              TrustScore <strong>4.3</strong> | <strong>37,023</strong> reviews
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Real reviews of real experiences. Trusted by explorers everywhere.
            </p>
          </div>

          {/* 36 million+ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl mb-2">😘</div>
            <h3 className="text-lg font-semibold text-black">36 million+</h3>
            <p className="text-sm text-gray-600">Happy customers across 10,000+ experiences</p>
          </div>

          {/* Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex gap-3 mb-2">
              <TechCrunchLogo />
              <AppleLogo />
            </div>
            <h3 className="text-lg font-semibold text-black">In the media</h3>
            <p className="text-sm text-gray-600">
              Featured and recommended by the best brands
            </p>
          </div>

          {/* Help Center */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-3xl mb-2">🎧</div>
            <h3 className="text-lg font-semibold text-black">24 x 7 help center</h3>
            <p className="text-sm text-gray-600">
              Have a question? Live chat with local experts anywhere, anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
