/* Features.jsx – Clean hover effect only (no border) */
import React from 'react';
import {
  HiOutlineLockClosed,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineChatAlt2,
  HiOutlineGift,
  HiOutlineShoppingBag,
  HiOutlineBookOpen,
  HiOutlineShieldCheck,
} from 'react-icons/hi';

const Features = () => {
  const features = [
    // { Icon: HiOutlineLockClosed, title: 'Authentication & Profiles', description: 'Secure OTP-based registration with custom profiles for parents, kids, and businesses.' },
    { Icon: HiOutlineHome, title: 'Home + Notifications + Lost & Found', description: 'Central dashboard with real-time alerts and community-driven lost item recovery system.' },
    { Icon: HiOutlineMap, title: 'Nearby (Businesses)', description: 'Discover local services, verified businesses, schools, and family-friendly spots with smart filters.' },
    { Icon: HiOutlineChatAlt2, title: 'Social Feed & Engagement', description: 'Safe social networking with content moderation, likes, comments, and family-friendly interactions.' },
    { Icon: HiOutlineGift, title: 'Contest + Donation ', description: 'Participate in community contests, support causes.' },
    { Icon: HiOutlineShoppingBag, title: 'E-commerce Shop Catalog', description: 'Browse and shop from verified family-oriented products with built-in safety ratings.' },
    { Icon: HiOutlineBookOpen, title: 'KidsPedia', description: 'Educational content library with age-appropriate learning materials and interactive resources.' },
    // { Icon: HiOutlineShieldCheck, title: 'Parental-Controlled Chat', description: 'Secure messaging with parental oversight, content filtering, and time-based restrictions.' },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Discover Our Core Features</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-foreground">for Modern Families</span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to keep your family safe, connected, and thriving in the digital age.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map(({ Icon, title, description }, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        [style] { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Features;