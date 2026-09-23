import { useState, useRef, useEffect } from 'react';
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

const SOCIALS = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12',
  },
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.13s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76c-.5.5-1.1.9-1.76 1.15-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.13-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 0 1 5.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2m0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.72.36-1.03.67-.31.31-.5.61-.67 1.03-.12.31-.26.78-.3 1.65C4.26 8.55 4.25 8.87 4.25 12s.01 3.44.06 4.5c.04.86.18 1.33.3 1.64.16.42.36.72.67 1.03.31.31.61.5 1.03.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3a2.8 2.8 0 0 0 1.03-.67c.31-.31.5-.61.67-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.5s-.01-3.44-.06-4.5c-.04-.87-.18-1.34-.3-1.65a2.8 2.8 0 0 0-.67-1.03 2.8 2.8 0 0 0-1.03-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8m0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3m0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7m5.35-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0',
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    path: 'M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5M9.6 15.6V8.4l6.3 3.6z',
  },
];

const NAV_BAR_HEIGHT = 52;

const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpenDropdown(null); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const openOnHover = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeOnHoverOut = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };
  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#1E3D47] focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg text-[13px] font-medium"
      >
        Skip to main content
      </a>

      {/* Spacer FIRST — reserves space at the top of the page so the fixed
          bar below doesn't render on top of / hide the top info bar */}
      <div style={{ height: NAV_BAR_HEIGHT }} />

      <div className="bg-white border-b border-[#d0e4e9]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-[#356575] rounded-[9px] flex items-center justify-center text-white font-semibold text-[14px]">
              M
            </div>
            <div>
              <p className="text-[#1E3D47] font-semibold text-[16px] tracking-wide leading-none">MIIT</p>
              <p className="text-[#7AAFC0] text-[10px] tracking-wide mt-0.5">Institute of Technology</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 group">
              <div>
                <p className="text-[#7AAFC0] text-[10px]">Enquiry hotline</p>
                <p className="text-[#1E3D47] text-[13px] font-medium group-hover:text-[#356575] transition-colors">
                  +91 98765 43210
                </p>
              </div>
            </a>

            <div className="w-px h-7 bg-[#d0e4e9]" />

            <a href="mailto:info@miit.edu.in" className="flex items-center gap-2 group">
              <div>
                <p className="text-[#7AAFC0] text-[10px]">Email us</p>
                <p className="text-[#1E3D47] text-[13px] font-medium group-hover:text-[#356575] transition-colors">
                  info@miit.edu.in
                </p>
              </div>
            </a>

            <div className="w-px h-7 bg-[#d0e4e9]" />

            <Link
              to="/admissions"
              className="bg-[#356575] hover:bg-[#2A5161] text-white text-[13px] font-medium px-4.5 py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356575]"
            >
              Enquire now
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/admissions"
              className="bg-[#356575] text-white text-[12px] font-medium px-4 py-1.5 rounded-lg"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.25 rounded-md bg-[#eaf4f7] text-[#356575] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356575]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <span className="w-5 h-0.5 bg-[#356575] rounded" />
                  <span className="w-5 h-0.5 bg-[#356575] rounded" />
                  <span className="w-5 h-0.5 bg-[#356575] rounded" />
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      <div
        ref={navRef}
        style={{ height: NAV_BAR_HEIGHT }}
        className="bg-[#356575] fixed top-0 left-0 right-0 z-50 shadow-md shadow-black/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full hidden lg:flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2 mr-2 shrink-0">
            <div className="w-8 h-8 bg-white/15 rounded-[7px] flex items-center justify-center text-white font-semibold text-[13px]">
              M
            </div>
          </Link>

          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map((item) => {
              if (item.dropdown) {
                const isActive = item.dropdown.some((d) => pathname === d.to);
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openOnHover(item.label)}
                    onMouseLeave={closeOnHoverOut}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13.5px] font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                        ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      role="menu"
                      className={`absolute top-full left-0 mt-1.5 w-64 bg-white rounded-xl border border-[#d0e4e9] overflow-hidden shadow-lg z-50 origin-top transition-all duration-150
                        ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.to}
                          role="menuitem"
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
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-md text-[13.5px] font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                    ${pathname === item.to ? 'bg-white/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            {SOCIALS.map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-md flex items-center justify-center text-white/70 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
              </a>
            ))}
          </div>

        </div>

        <div className="flex lg:hidden items-center justify-between h-full px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/15 rounded-[7px] flex items-center justify-center text-white font-semibold text-[13px]">
              M
            </div>
            <p className="text-white font-semibold text-[14px]">MIIT</p>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/admissions" className="bg-white text-[#356575] text-[12px] font-medium px-4 py-1.5 rounded-lg">
              Enquire
            </Link>
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.25 rounded-md bg-white/15 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <>
                  <span className="w-5 h-0.5 bg-white rounded" />
                  <span className="w-5 h-0.5 bg-white rounded" />
                  <span className="w-5 h-0.5 bg-white rounded" />
                </>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu-panel"
            style={{ top: NAV_BAR_HEIGHT }}
            className="lg:hidden fixed left-0 right-0 bg-white border-t border-[#d0e4e9] max-h-[calc(100vh-52px)] overflow-y-auto"
          >
            <div className="flex items-center justify-around py-3 px-4 bg-[#eaf4f7] border-b border-[#d0e4e9]">
              <a href="tel:+919876543210" className="text-center">
                <p className="text-[10px] text-[#7AAFC0]">Hotline</p>
                <p className="text-[12px] font-medium text-[#1E3D47]">+91 98765 43210</p>
              </a>
              <div className="w-px h-8 bg-[#d0e4e9]" />
              <a href="mailto:info@miit.edu.in" className="text-center">
                <p className="text-[10px] text-[#7AAFC0]">Email</p>
                <p className="text-[12px] font-medium text-[#1E3D47]">info@miit.edu.in</p>
              </a>
            </div>

            <nav className="py-2">
              {NAV_LINKS.map((item) => {
                if (item.dropdown) {
                  const isExpanded = mobileExpanded === item.label;
                  const isActive = item.dropdown.some((d) => pathname === d.to);
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => toggleMobileExpanded(item.label)}
                        aria-expanded={isExpanded}
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

            <div className="flex items-center gap-3 px-5 py-4 border-t border-[#d0e4e9]">
              {SOCIALS.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-[#eaf4f7] text-[#356575] rounded-md flex items-center justify-center hover:bg-[#356575] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
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
