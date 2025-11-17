/* Hero.jsx – Real react-icons (no emojis) */
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-[#192F4A] mb-6 leading-tight animate-fade-in-up">
          Smart Parenting. Safe Kids. 
          <br />
          Your Digital Family Guardian.
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
          Empower your family with intelligent monitoring tools that keep your kids safe online while fostering trust and open communication. 
          <br />
          Real-time insights, customizable alerts, and family-friendly features—all in one secure app.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-1000">
          <a
            href="#app-store"
            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <FaApple className="w-6 h-6 mr-2" />
            Download on App Store
          </a>
          <a
            href="#google-play"
            className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          >
            <FaGooglePlay className="w-6 h-6 mr-2" />
            Get it on Google Play
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default HeroSection;