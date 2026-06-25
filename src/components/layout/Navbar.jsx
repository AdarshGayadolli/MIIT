import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'About Us',
    dropdown: [
      { to: '/about/management', label: 'About Management' },
      { to: '/about/principal-director', label: 'Principal & Director' },
      { to: '/about/vision-mission', label: 'Vision & Mission' },
      { to: '/about/quality-policy', label: 'Quality Policy & Core Values' },
    ],
  },
  {
    label: 'Administration',
    dropdown: [
      { to: '/administration/organization-chart', label: 'Organization Chart' },
      { to: '/administration/best-practices', label: 'Best Practices' },
      { to: '/administration/administrative-staff', label: 'Administrative Staff' },
    ],
  },
  {
    label: 'Departments',
    dropdown: [
      { to: '/departments/bim-construction', label: 'BIM for Construction' },
      { to: '/departments/digital-marketing', label: 'Digital Marketing' },
    ],
  },
  { to: '/admissions', label: 'Admissions' },
  {
    label: 'Training & Placement',
    dropdown: [
      { to: '/training-placement/about', label: 'About Training & Placement' },
      { to: '/training-placement/committee', label: 'Placement Committee' },
      { to: '/training-placement/process', label: 'Training & Placement Process' },
      { to: '/training-placement/roadmap', label: 'Training Roadmap' },
      { to: '/training-placement/partners', label: 'Placement Partners' },
      { to: '/training-placement/events', label: 'Events' },
      { to: '/training-placement/statistics', label: 'Placement Statistics' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header>
      {/* ── Top Bar ── */}
      <div className="bg-white border-b border-[#d0e4e9]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-[36px] h-[36px] bg-[#356575] rounded-[9px] flex items-center justify-center text-white font-semibold text-[14px]">
              M
            </div>
            <div>
              <p className="text-[#1E3D47] font-semibold text-[16px] tracking-wide leading-none">MIIT</p>
              <p className="text-[#7AAFC0] text-[10px] tracking-wide mt-0.5">Institute of Technology</p>
            </div>
          </div>

          {/* Desktop enquiry */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div>
                <p className="text-[#7AAFC0] text-[10px]">Enquiry hotline</p>
                <p className="text-[#1E3D47] text-[13px] font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="w-px h-7 bg-[#d0e4e9]" />

            <div className="flex items-center gap-2">
              <div>
                <p className="text-[#7AAFC0] text-[10px]">Email us</p>
                <p className="text-[#1E3D47] text-[13px] font-medium">info@miit.edu.in</p>
              </div>
            </div>

            <div className="w-px h-7 bg-[#d0e4e9]" />

            <button className="bg-[#356575] hover:bg-[#2A5161] text-white text-[13px] font-medium px-[18px] py-2 rounded-lg transition-colors">
              Enquire now
            </button>
          </div>

          {/* Mobile: enquire + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button className="bg-[#356575] text-white text-[12px] font-medium px-4 py-1.5 rounded-lg">
              Enquire
            </button>
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-md bg-[#eaf4f7] text-[#356575]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <span className="w-5 h-[2px] bg-[#356575] rounded" />
                  <span className="w-5 h-[2px] bg-[#356575] rounded" />
                  <span className="w-5 h-[2px] bg-[#356575] rounded" />
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ── Desktop Nav Bar ── */}
      <div className="bg-[#356575] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[52px] hidden lg:flex items-center justify-between">

          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map((item) => {
              if (item.dropdown) {
                const isActive = item.dropdown.some((d) => pathname === d.to);
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-[12px] py-[6px] rounded-md text-[13.5px] font-medium transition-all duration-150
                        ${isActive
                          ? 'bg-white/15 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-150 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl border border-[#d0e4e9] overflow-hidden shadow-lg z-50">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-[13px] transition-colors border-b border-[#eaf4f7] last:border-0
                              ${pathname === sub.to
                                ? 'bg-[#eaf4f7] text-[#356575] font-semibold'
                                : 'text-[#1E3D47] hover:bg-[#eaf4f7] hover:text-[#356575]'
                              }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#356575] opacity-60 shrink-0" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-[12px] py-[6px] rounded-md text-[13.5px] font-medium transition-all duration-150
                    ${pathname === item.to
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            {[
              { href: 'https://facebook.com', label: 'F' },
              { href: 'https://instagram.com', label: 'IN' },
              { href: 'https://youtube.com', label: 'YT' },
            ].map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="w-[28px] h-[28px] bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center text-white/70 hover:text-white transition-colors text-[12px] font-medium">
                {label}
              </a>
            ))}
          </div>

        </div>

        {/* ── Mobile Menu Panel ── */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#d0e4e9] max-h-[80vh] overflow-y-auto">

            {/* Mobile contact info */}
            <div className="flex items-center justify-around py-3 px-4 bg-[#eaf4f7] border-b border-[#d0e4e9]">
              <div className="text-center">
                <p className="text-[10px] text-[#7AAFC0]">Hotline</p>
                <p className="text-[12px] font-medium text-[#1E3D47]">+91 98765 43210</p>
              </div>
              <div className="w-px h-8 bg-[#d0e4e9]" />
              <div className="text-center">
                <p className="text-[10px] text-[#7AAFC0]">Email</p>
                <p className="text-[12px] font-medium text-[#1E3D47]">info@miit.edu.in</p>
              </div>
            </div>

            {/* Mobile nav links */}
            <nav className="py-2">
              {NAV_LINKS.map((item) => {
                if (item.dropdown) {
                  const isExpanded = mobileExpanded === item.label;
                  const isActive = item.dropdown.some((d) => pathname === d.to);
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleMobileExpanded(item.label)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-medium transition-colors
                          ${isActive ? 'text-[#356575]' : 'text-[#1E3D47]'}`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 text-[#356575] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="bg-[#f7fbfc] border-t border-b border-[#eaf4f7]">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                              className={`flex items-center gap-3 pl-8 pr-5 py-3 text-[13px] border-b border-[#eaf4f7] last:border-0 transition-colors
                                ${pathname === sub.to
                                  ? 'text-[#356575] font-semibold bg-[#eaf4f7]'
                                  : 'text-[#356575]/80 hover:text-[#356575] hover:bg-[#eaf4f7]'
                                }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#356575] opacity-50 shrink-0" />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-5 py-3.5 text-[14px] font-medium border-b border-[#f0f0f0] transition-colors
                      ${pathname === item.to
                        ? 'text-[#356575] bg-[#eaf4f7]'
                        : 'text-[#1E3D47] hover:text-[#356575] hover:bg-[#f7fbfc]'
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile social */}
            <div className="flex items-center gap-3 px-5 py-4 border-t border-[#d0e4e9]">
              {[
                { href: 'https://facebook.com', label: 'Facebook' },
                { href: 'https://instagram.com', label: 'Instagram' },
                { href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="px-4 py-1.5 bg-[#eaf4f7] text-[#356575] text-[12px] font-medium rounded-md hover:bg-[#356575] hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;