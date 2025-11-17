/* Footer.jsx – Real react-icons (no emojis) */
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import bachanest from '../assets/bachanest4.png'; // Example image import

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={bachanest} alt="FamilyGuard Logo" className=" w-40" />
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted digital family guardian. Keeping families safe, connected, and thriving in the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="text-sm text-background/70 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm text-background/70 hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4">Get Started</h4>
            <p className="text-sm text-background/70 mb-4">
              Download FamilyGuard today and experience safer digital parenting.
            </p>
            <button className="w-full px-6 py-3 bg-gradient-primary text-white rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
              Download App
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © {currentYear} FamilyGuard. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <FaTwitter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <FaInstagram className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;