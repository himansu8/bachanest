/* HowItWorks.jsx – Adjusted text sizes and colors to match Features */
import React from 'react';
import {
  HiOutlineDeviceMobile,
  HiOutlineSearch,
  HiOutlineLockClosed,
} from 'react-icons/hi';

const HowItWorks = () => {
  const steps = [
    {
      Icon: HiOutlineDeviceMobile,
      title: 'Register with OTP',
      description: 'Secure mobile verification. Create family profiles instantly.',
    },
    {
      Icon: HiOutlineSearch,
      title: 'Explore & Discover',
      description: 'Access Nearby, Feed, KidsPedia, and Lost & Found features.',
    },
    {
      Icon: HiOutlineLockClosed,
      title: 'Connect & Protect',
      description: 'Chat securely, shop safely, learn, and manage parental controls.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#192F4A] font-poppins text-[50px]">
              How It Works
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Three powerful steps to keep your family <span className="text-[#E89A38] font-medium">safe</span>,{' '}
            <span className="text-[#E89A38] font-medium">connected</span>, and{' '}
            <span className="text-[#E89A38] font-medium">thriving</span>.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Desktop Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 pointer-events-none">
            <div className="h-full  via-primary/20 to-transparent" 
            style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}
            />
            <div className="absolute inset-0 h-full bg-gradient-to-r from-primary to-secondary w-0 animate-expand-line" style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}/>
          </div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Step Number (Animated Reveal) */}
              <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-xl font-bold text-[#E89A38] border-4 border-white z-10 animate-reveal-number">
                {'0' + (idx + 1)}
              </div>

              {/* Icon with Gradient Background */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#E89A38]/10 via-[#E89A38]/20 to-[#E89A38]/10 p-1 group-hover:from-[#E89A38]/20 group-hover:to-[#E89A38]/30 transition-all duration-300">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center text-[#E89A38] group-hover:scale-110 transition-transform duration-300">
                  <step.Icon className="w-10 h-10" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins font-semibold text-center mb-4 text-foreground group-hover:text-[#E89A38] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base font-inter text-muted-foreground text-center leading-relaxed">
                {step.description}
              </p>

              {/* Bottom Gradient Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5  rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }

        @keyframes expandLine {
          from { width: 0; }
          to   { width: 100%; }
        }
        .animate-expand-line {
          animation: expandLine 1.5s ease-out forwards;
        }

        @keyframes revealNumber {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-reveal-number {
          animation: revealNumber 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;