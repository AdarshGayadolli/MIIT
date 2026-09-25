import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1E3D47] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* College Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center p-1.5">
                <img
                  src={logo}
                  alt="MIIT College Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-wide">
                  MIIT College
                </h2>
                <p className="text-xs text-white/60">
                  Education • Innovation • Excellence
                </p>
              </div>
            </Link>

            <p className="text-sm leading-6 text-white/65 max-w-sm">
              Empowering students with quality education, practical knowledge,
              innovation, and the skills required to build a successful future.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7AAFC0] hover:text-[#1E3D47] transition-all duration-200"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7AAFC0] hover:text-[#1E3D47] transition-all duration-200"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7AAFC0] hover:text-[#1E3D47] transition-all duration-200"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7AAFC0] hover:text-[#1E3D47] transition-all duration-200"
              >
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/admissions"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>

              <li>
                <Link
                  to="/departments/bim-construction"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/administration/organization-chart"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Campus & Facilities
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Academics
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/departments/bim-construction"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Departments
                </Link>
              </li>

              <li>
                <Link
                  to="/departments/bim-construction"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Academic Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/departments/bim-construction"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Faculty
                </Link>
              </li>

              <li>
                <Link
                  to="/examinations"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Examinations
                </Link>
              </li>

              <li>
                <Link
                  to="/results"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Results
                </Link>
              </li>

              <li>
                <Link
                  to="/notice-board"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Notice Board
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#7AAFC0] mt-0.5 shrink-0"
                />

                <p className="text-white/65 leading-5">
                  MIIT College
                  <br />
                  Bengaluru, Karnataka
                  <br />
                  India
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors"
              >
                <Phone
                  size={17}
                  className="text-[#7AAFC0] shrink-0"
                />
                <span>+91 00000 00000</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@miitcollege.edu"
                className="flex items-center gap-3 text-white/65 hover:text-white transition-colors"
              >
                <Mail
                  size={17}
                  className="text-[#7AAFC0] shrink-0"
                />
                <span>info@miitcollege.ac.in</span>
              </a>
            </div>

            {/* Admission Button */}
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center mt-6 px-5 py-2.5 rounded-lg bg-[#7AAFC0] text-[#1E3D47] text-sm font-semibold hover:bg-white transition-all duration-200"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-12 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center md:text-left">
            <p className="text-sm text-white/60">
              © 2026 MIIT College. All Rights Reserved.
            </p>

            <p className="text-xs text-white/40 mt-1">
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/refund-policy"
              className="hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
          </div>

          {/* Back To Top */}
          <button
            onClick={handleScrollTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7AAFC0] hover:text-[#1E3D47] transition-all duration-200"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;