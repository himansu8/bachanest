/* AppStructure.jsx – Fixed: No HiOutlineTrophy (use HiOutlineGift instead) */
import React from 'react';
import {
  HiOutlineLockClosed,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineGift, // Replacement for HiOutlineTrophy (gift for contests/donations)
  HiOutlineShoppingBag,
  HiOutlineBookOpen,
  HiOutlineChat,
  HiOutlineCog,
} from 'react-icons/hi';

const AppStructure = () => {
  const modules = [
    // {
    //   Icon: HiOutlineLockClosed,
    //   title: 'Authentication & Profiles',
    //   description: 'Secure login with custom family profiles',
    // },
    {
      Icon: HiOutlineHome,
      title: 'Home + Notifications + Lost & Found',
      description: 'Central hub with alerts and recovery',
    },
    {
      Icon: HiOutlineLocationMarker,
      title: 'Nearby (Businesses)',
      description: 'Local discovery with smart filters',
    },
    {
      Icon: HiOutlineChatAlt2,
      title: 'Social Feed & Engagement',
      description: 'Safe community interactions',
    },
    {
      Icon: HiOutlineGift,
      title: 'Contest + Donation',
      description: 'Community engagement features',
    },
    {
      Icon: HiOutlineShoppingBag,
      title: 'E-commerce Shop + Catalog',
      description: 'Safe family shopping experience',
    },
    {
      Icon: HiOutlineBookOpen,
      title: 'KidsPedia',
      description: 'Educational content library',
    },
    // {
    //   Icon: HiOutlineChat,
    //   title: 'Parental-Controlled Chat',
    //   description: 'Monitored secure messaging',
    // },
    // {
    //   Icon: HiOutlineCog,
    //   title: 'Admin Portal (Web)',
    //   description: 'Complete management dashboard',
    // },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              App Structure Overview
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blueprint of our family-first platform. Every module is designed with safety and user experience in mind.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-soft hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  {/* SVG Icon */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <module.Icon className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Module Number Badge */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to experience the complete ecosystem?
          </p>
          <button className="px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppStructure;