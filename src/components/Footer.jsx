/* Footer.jsx – Fixed & Beautiful Version */
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import { motion } from "framer-motion";
import bachanest from "../assets/bachanest6.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "#features", label: "Features" },
    { to: "#about", label: "About Us" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-[#E89A38] to-orange-600 text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-6"
            >
              <img
                src={bachanest}
                alt="FamilyGuard Logo"
                className="w-64 drop-shadow-xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-lg leading-relaxed max-w-sm"
            >
              Your trusted digital family guardian. Keeping families safe,
              connected, and thriving in the modern world.
            </motion.p>

            <div className="flex gap-3 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium">
                <HiUsers className="inline mr-1" /> 50K+ Families Trust Us
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {link.to.startsWith("#") ? (
                    <a
                      href={link.to}
                      className="text-white/75 hover:text-white text-lg transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-amber-300 mr-3 transition-all duration-500" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-white/75 hover:text-white text-lg transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-amber-300 mr-3 transition-all duration-500" />
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Protect Your Family Today
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Join thousands of parents who trust FamilyGuard for peace of mind
              in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
              >
                <FaAppStoreIos className="text-2xl" />
                App Store
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-amber-400/40 transition-all duration-300"
              >
                <FaGooglePlay className="text-2xl" />
                Google Play
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/70 text-sm">
              © {currentYear}{" "}
              <span className="font-semibold text-white">FamilyGuard</span>.
              All rights reserved.
            </p>

            {/* Social Icons – FIXED PART */}
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-amber-400/50"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating glow orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl opacity-20 pointer-events-none" />
    </footer>
  );
};

export default Footer;