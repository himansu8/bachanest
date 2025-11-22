/* Contact.jsx – FINAL VERSION (Country List Opens Perfectly!) */
import React, { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhoneChange = (value) =>
    setFormData({ ...formData, phone: value || "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) return alert("Please enter a phone number");
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-bold text-[#192F4A] font-poppins mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Have questions or suggestions? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              {[
                { Icon: HiMail, title: "Email Us", value: "support@BachaNest.com" },
                { Icon: HiPhone, title: "Call Us", value: "+1 (555) 123-4567" },
                { Icon: HiLocationMarker, title: "Visit Us", value: "123 Family Street, Safety City, SC 12345" },
              ].map(({ Icon, title, value }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E89A38]/10 to-[#E89A38]/20 flex items-center justify-center">
                    <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-[#E89A38]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold text-gray-900 mb-5">Follow Us</h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FAD058] to-[#E89A38] text-white flex items-center justify-center hover:scale-110 transition"
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side – Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-7">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* PHONE INPUT – FULLY WORKING + BEAUTIFUL */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-xs font-normal text-gray-500">(with country code)</span>
                  </label>

                  <div className="relative">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter phone number"
                      className="custom-phone-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-5 text-white text-lg font-bold rounded-xl hover:shadow-2xl transition"
                  style={{ background: "linear-gradient(to right, #FAD058, #E89A38)" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CLEAN & PERFECT STYLING – COUNTRY LIST OPENS ON CLICK */}
      <style jsx global>{`
        .custom-phone-input {
          position: relative;
        }

        /* Input */
        .custom-phone-input .PhoneInputInput {
          height: 56px !important;
          padding: 0 16px 0 100px !important;
          border-radius: 12px !important;
          border: 1px solid #d1d5db !important;
          background: #f9fafb !important;
          font-size: 1rem !important;
          outline: none !important;
          transition: all 0.3s ease !important;
        }

        .custom-phone-input .PhoneInputInput:focus {
          border-color: #E89A38 !important;
          box-shadow: 0 0 0 4px rgba(232, 154, 56, 0.2) !important;
          background: white !important;
        }

        /* Country Selector – Make entire area clickable */
        .custom-phone-input .PhoneInputCountry {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 80px;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          pointer-events: auto !important;
        }

        /* Flag */
        .custom-phone-input .PhoneInputCountryIcon {
          width: 32px !important;
          height: 32px !important;
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }

        /* Hide default tiny arrow */
        .custom-phone-input .PhoneInputCountrySelectArrow {
          display: none !important;
        }

        /* Beautiful Custom Arrow – Always Visible */
        .custom-phone-input::after {
          content: "";
          position: absolute;
          left: 74px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E") center/16px no-repeat;
          pointer-events: none;
          z-index: 11;
          transition: all 0.2s ease;
        }

        .custom-phone-input:hover::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23E89A38'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Contact;