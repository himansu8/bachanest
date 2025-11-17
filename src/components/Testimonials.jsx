/* Testimonials.jsx – Real react-icons (no emojis) */
import React from "react";
import { HiStar, HiLockClosed, HiCheckCircle, HiUsers, HiChatAlt2 } from "react-icons/hi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      avatar: <HiUsers className="w-6 h-6 text-white" />,
      rating: 5,
      review: "FamilyGuard has transformed how I monitor my kids online activities. The parental controls are intuitive and give me peace of mind knowing my children are safe.",
    },
    {
      name: "Mike Chen",
      role: "Business Owner",
      avatar: <HiChatAlt2 className="w-6 h-6 text-white" />,
      rating: 5,
      review: "As a local business owner, the Nearby feature has helped us connect with families in our community. It's a great platform for verified businesses to reach parents.",
    },
    {
      name: "Emma Davis",
      role: "Teacher & Parent",
      avatar: <HiStar className="w-6 h-6 text-white" />,
      rating: 5,
      review: "The KidsPedia section is incredible! My kids love the educational content, and I appreciate the safe, age-appropriate learning environment. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Families Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied families who trust FamilyGuard to keep their loved ones safe and connected.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-soft transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl shadow-lg">
                <HiChatAlt2 className="w-6 h-6" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <HiLockClosed className="w-6 h-6" />
            <span className="text-sm font-medium">Secure & Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCheckCircle className="w-6 h-6" />
            <span className="text-sm font-medium">Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <HiUsers className="w-6 h-6" />
            <span className="text-sm font-medium">10K+ Families</span>
          </div>
          <div className="flex items-center gap-2">
            <HiStar className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">4.9 Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;