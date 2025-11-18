/* Contact.jsx – Updated to orange accent styling */
import { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-[#192F4A] font-poppins text-[50px]">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#E89A38]/10 via-[#E89A38]/20 to-[#E89A38]/10 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center text-[#E89A38]">
                    <HiMail className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground">support@familyguard.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#E89A38]/10 via-[#E89A38]/20 to-[#E89A38]/10 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center text-[#E89A38]">
                    <HiPhone className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#E89A38]/10 via-[#E89A38]/20 to-[#E89A38]/10 p-1 flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-white flex items-center justify-center text-[#E89A38]">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Family Street, Safety City, SC 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-bold text-xl font-inter text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full  text-white flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110" style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}>
                  <FaFacebookF className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full  text-white flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110" style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}>
                  <FaTwitter className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full  text-white flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110" style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}>
                  <FaInstagram className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full  text-white flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110" style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}>
                  <FaLinkedin className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-border shadow-soft">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-[#E89A38] focus:ring-2 focus:ring-[#E89A38]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-[#E89A38] focus:ring-2 focus:ring-[#E89A38]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-[#E89A38] focus:ring-2 focus:ring-[#E89A38]/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4  text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(to right, #FAD058, #E89A38)' }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;