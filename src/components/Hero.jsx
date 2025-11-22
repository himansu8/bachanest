/* Hero.jsx – Final Version with Your Exact Colors #192F4A & #E89A38 */
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Subtle warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 my-20">
        {/* Welcome To Comnet – Gradient Text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black  mb-4 font-poppins">
          <span className="bg-gradient-to-r from-gray-900 via-[#192F4A] to-slate-700 bg-clip-text text-transparent px-2">
            Welcome To
          </span>{" "}
          <span className="bg-gradient-to-r from-[#E89A38] to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
            BachaNest
          </span>
        </h2>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mt-4 mb-6 leading-tight font-inter ">
          <span className="text-[#192F4A]">Smart Parenting.</span>{" "}
          <span className="text-[#E89A38]">Safe Kids.</span>
          <br className="hidden md:block" />
          <span className="text-[#192F4A]">Your Digital Family Guardian.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
          Real-time protection • Smart alerts • Built on trust
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Monitor screen time, block harmful content, and stay connected with your kids —
          all with an app designed for modern parents who value both safety and privacy.
        </p>

        {/* Download Buttons – Using your orange accent */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-10">
          <a
            href="#app-store"
            className="flex items-center bg-[#192F4A] text-white px-9 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaApple className="w-8 h-8 mr-3" />
            Download on App Store
          </a>
          <a
            href="#google-play"
            className="flex items-center bg-[#E89A38] text-white px-9 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FaGooglePlay className="w-8 h-8 mr-3" />
            Get it on Google Play
          </a>
        </div>

        {/* Signature Pill Badge – Warm & Premium */}
        <div className="flex justify-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-amber-100 text-[#192F4A] px-12 py-3 rounded-full font-bold text-lg border-2 border-[#E89A38]/30 shadow-xl">
            Trusted by 150,000+ Families • 4.9/5 Average Rating
          </div>
        </div>
      </div>

      {/* Smooth fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        h2, h1, p, a, .inline-block {
          opacity: 0;
          animation: fadeInUp 1s ease-out forwards;
        }
        h2 { animation-delay: 0.2s; }
        h1 { animation-delay: 0.5s; }
        p:nth-of-type(1) { animation-delay: 0.7s; }
        p:nth-of-type(2) { animation-delay: 0.9s; }
        .flex { animation-delay: 1.1s; }
        .inline-block { animation-delay: 1.4s; }
      `}</style>
    </section>
  );
};

export default HeroSection;