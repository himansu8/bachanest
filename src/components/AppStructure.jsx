/* AppStructure.jsx → Opens EXACT SAME Contact Form in Modal (Zero UI Change) */
import React, { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineGift,
  HiOutlineShoppingBag,
  HiOutlineBookOpen,
} from "react-icons/hi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const AppStructure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePhoneChange = (value) => setFormData({ ...formData, phone: value || "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) return alert("Please enter phone number");
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsModalOpen(false);
  };

  const modules = [
    { Icon: HiOutlineHome, title: "Home + Notifications + Lost & Found", description: "Central hub with alerts and recovery" },
    { Icon: HiOutlineLocationMarker, title: "Nearby (Businesses)", description: "Local discovery with smart filters" },
    { Icon: HiOutlineChatAlt2, title: "Social Feed & Engagement", description: "Safe community interactions" },
    { Icon: HiOutlineGift, title: "Contest + Donation", description: "Community engagement features" },
    { Icon: HiOutlineShoppingBag, title: "E-commerce Shop + Catalog", description: "Safe family shopping experience" },
    { Icon: HiOutlineBookOpen, title: "KidsPedia", description: "Educational content library" },
  ];

  return (
    <>
      {/* Your Original AppStructure (unchanged) */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#192F4A] font-poppins mb-6">
              App Structure Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A comprehensive blueprint of our family-first platform. Every module is designed with safety and user experience in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
            {modules.map((m, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 border border-[#E89A38] shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E89A38]/10 to-[#E89A38]/20 flex items-center justify-center">
                    <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-[#E89A38]">
                      <m.Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{m.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{m.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E89A38]/10 text-[#E89A38] font-bold text-xs flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 text-xl font-bold text-white rounded-full shadow-lg hover:scale-105 transition-all"
              style={{ background: "linear-gradient(to right, #FAD058, #E89A38)" }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* MODAL → EXACT COPY OF YOUR ORIGINAL CONTACT FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            {/* Close × */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-[#FAD058] transition"
            >
              ×
            </button>

            {/* 100% ORIGINAL CONTACT FORM (copy-pasted from your working file) */}
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-7">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

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
                    {/* Your original custom arrow */}
                    <div
                      className="absolute inset-y-0 left-16 flex items-center z-50 cursor-pointer pointer-events-auto"
                      onClick={() => {
                        const select = document.querySelector(".PhoneInputCountry select");
                        if (select) select.click();
                      }}
                    >
                      {/* <svg className="w-6 h-6 text-gray-600 hover:text-[#E89A38] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg> */}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:border-[#E89A38] focus:ring-4 focus:ring-[#E89A38]/20 outline-none transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

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
      )}

      {/* EXACT SAME STYLING FROM YOUR ORIGINAL CONTACT.JSX */}
      <style jsx global>{`
        .custom-phone-input .PhoneInputInput {
          width: 100% !important;
          padding: 16px 16px 16px 100px !important;
          border-radius: 12px !important;
          border: 1px solid #d1d5db !important;
          background-color: #f9fafb !important;
          height: 56px !important;
          font-size: 1rem !important;
          outline: none !important;
          transition: all 0.3s ease !important;
        }
        .custom-phone-input .PhoneInputInput:focus {
          border-color: #E89A38 !important;
          box-shadow: 0 0 0 4px rgba(232,154,56,0.2) !important;
          background-color: white !important;
        }
        .custom-phone-input .PhoneInputCountry {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }
        .custom-phone-input .PhoneInputCountryIcon {
          width: 32px !important;
          height: 32px !important;
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .custom-phone-input .PhoneInputCountrySelectArrow { display: none !important; }
      `}</style>
    </>
  );
};

export default AppStructure;