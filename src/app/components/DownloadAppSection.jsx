// components/DownloadAppSection.jsx
import React from "react";

const DownloadAppSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto bg-[#f6f4ff] rounded-2xl px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Get the Headout app, save up to{" "}
              <span className="text-[#4b0082]">80%</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Enjoy exclusive deals, offline access to your tickets & live booking updates.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <img src="https://cdn-imgix.headout.com/assets/images/badges/app-store/en.png?w=180&h=60&crop=faces&auto=compress%2Cformat&fit=min" alt="App Store" className="h-12" />
              <img src="https://cdn-imgix.headout.com/assets/images/badges/play-store/en.png?w=204&h=60&crop=faces&auto=compress%2Cformat&fit=min" alt="Google Play" className="h-12" />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn-imgix.headout.com/assets/images/app/English.png?w=960&h=600&crop=faces&auto=compress%2Cformat&fit=min"
              alt="App Preview"
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
