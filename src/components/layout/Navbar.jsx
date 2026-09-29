import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

/* ─────────────────────────────────────────────────────────────
   BRAND COLOURS — change these two values to re-theme everything
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';

/* ─────────────────────────────────────────────────────────────
   ICONS (inline SVG paths, 24x24 outline)
   ───────────────────────────────────────────────────────────── */
const ICONS = {
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  user: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  cap: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
  award: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
  chart: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  doc: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  route: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  grid: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
  cube: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  megaphone: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  clipboard: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
};

const Icon = ({ name, className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={ICONS[name] || ICONS.doc} />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   NAVIGATION DATA
   - Items with `mega` open the big panel (image + text + link grid)
   - Items with only `to` are plain links
   Swap the `image` URLs for your own files in /assets/images.
   ───────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'About Us',
    mega: {
      title: 'About Us',
      description:
        'MIIT is a distinguished centre for skill development, bridging the gap for aspiring youth and empowering working professionals to advance their careers with industry-aligned training and guidance from experienced mentors.',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=70',
      cta: { to: '/about/management', label: 'Read More' },
      items: [
        { to: '/about/management', label: 'About Management', desc: 'People who steer the institute', icon: 'users' },
        { to: '/about/principal-director', label: 'Principal & Director', desc: 'Leadership message & profile', icon: 'user' },
        { to: '/about/vision-mission', label: 'Vision & Mission', desc: 'Where we aspire to go', icon: 'eye' },
        { to: '/about/quality-policy', label: 'Quality Policy & Core Values', desc: 'What we stand for, always', icon: 'shield' },
      ],
    },
  },
  {
    label: 'Administration',
    mega: {
      title: 'Administration',
      description:
        'A transparent and well-structured administration keeps every department aligned, so learners get a smooth, student-first experience from admission to placement.',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=70',
      cta: { to: '/administration/organization-chart', label: 'Read More' },
      items: [
        { to: '/administration/organization-chart', label: 'Organization Chart', desc: 'How our teams are structured', icon: 'grid' },
        { to: '/administration/administrative-staff', label: 'Administrative Staff', desc: 'Meet the people behind the desk', icon: 'users' },
      ],
    },
  },
  {
    label: 'Departments',
    mega: {
      title: 'Departments',
      description:
        'Industry-driven departments with hands-on labs and expert faculty, designed to make you job-ready in the fastest-growing fields.',
      image:
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=70',
      cta: { to: '/departments/bim-construction', label: 'Read More' },
      items: [
        { to: '/departments/bim-construction', label: 'BIM for Construction', desc: 'Digital modelling for modern builds', icon: 'cube' },
        { to: '/departments/digital-marketing', label: 'Digital Marketing', desc: 'SEO, ads, social & analytics', icon: 'megaphone' },
      ],
    },
  },
  { to: '/admissions', label: 'Admissions' },
  {
    label: 'Training & Placement',
    mega: {
      title: 'Training & Placement',
      description:
        'Our placement cell trains, mentors and connects learners with leading employers through structured preparation, mock interviews and a clear career roadmap.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=70',
      cta: { to: '/training-placement/about', label: 'Read More' },
      items: [
        { to: '/training-placement/about', label: 'About Training & Placement', desc: 'Our approach to careers', icon: 'briefcase' },
        { to: '/training-placement/committee', label: 'Placement Committee', desc: 'Faculty & industry members', icon: 'users' },
        { to: '/training-placement/process', label: 'Training & Placement Process', desc: 'From enrolment to offer letter', icon: 'clipboard' },
        { to: '/training-placement/roadmap', label: 'Training Roadmap', desc: 'Step-by-step skill journey', icon: 'route' },
        { to: '/training-placement/statistics', label: 'Placement Statistics', desc: 'Numbers that speak for us', icon: 'chart' },
      ],
    },
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

/* Scrolling announcement bars shown under the header */
const ANNOUNCEMENTS_PRIMARY = [
  'Managerial and supervisory programs curated as per industry needs',
  'Admissions open for 2026–27 batches',
  'Placement assistance for every enrolled learner',
];
const ANNOUNCEMENTS_SECONDARY = [
  { text: 'Click here to download the 2026–27 admission notification', to: '/admissions' },
  { text: 'Book a free counselling session with our team', to: '/contact' },
  { text: 'View our latest placement statistics', to: '/training-placement/statistics' },
];

const HEX_CLIP = 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';

/* Pill button with the circular chevron, like the screenshots */
const PillButton = ({ to, children, onClick, className = '' }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`group inline-flex items-center gap-3 rounded-full text-white text-[13px] font-semibold tracking-wide pl-5 pr-1.5 py-1.5 transition-all duration-200 hover:shadow-lg hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    style={{ background: BRAND, outlineColor: BRAND }}
  >
    {children}
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
      style={{ background: 'rgba(0,0,0,0.35)' }}
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </span>
  </Link>
);

/* Hexagon icon tile used in the mega-menu list */
const HexIcon = ({ name, size = 64 }) => (
  <span
    className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
    style={{
      width: size,
      height: size,
      clipPath: HEX_CLIP,
      background: 'linear-gradient(145deg,#f4f6f7,#e6ecee)',
      color: BRAND,
    }}
  >
    <Icon name={name} className="w-6 h-6" />
  </span>
);

const Marquee = ({ children, className = '', duration = 40 }) => (
  <div className={`overflow-hidden whitespace-nowrap ${className}`}>
    <div className="navbar-marquee inline-flex" style={{ animationDuration: `${duration}s` }}>
      {children}
      {children}
    </div>
  </div>
);

/**
 * Navbar
 * - Fixed header (logo bar + nav row + announcement bars) with a measured spacer.
 * - Desktop: hover / click mega-menu with hex image, intro text and icon grid.
 * - Mobile: slide-in drawer with accordion sections.
 */
const Navbar = () => {
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  // Keep the spacer exactly as tall as the fixed header
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Click outside / Escape closes the mega menu
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
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
  const keepOpen = () => clearTimeout(closeTimer.current);
  const closeOnHoverOut = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };
  const toggleMobileExpanded = (label) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  const isGroupActive = (item) => item.mega?.items.some((d) => pathname === d.to);
  const activeMenu = NAV_LINKS.find((n) => n.label === openDropdown && n.mega);

  const linkBase =
    'relative px-3.5 h-full flex items-center text-[15px] font-semibold text-neutral-900 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]';

  return (
    <header>
      {/* Component-scoped keyframes */}
      <style>{`
        @keyframes navbar-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .navbar-marquee { animation: navbar-marquee linear infinite; }
        .navbar-marquee:hover { animation-play-state: paused; }
        @keyframes navbar-mega-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .navbar-mega-in { animation: navbar-mega-in 180ms ease-out both; }
        @keyframes navbar-drawer-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .navbar-drawer-in { animation: navbar-drawer-in 240ms ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .navbar-marquee, .navbar-mega-in, .navbar-drawer-in { animation: none; }
        }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-neutral-900 focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg text-[13px] font-medium"
      >
        Skip to main content
      </a>

      {/* ── FIXED HEADER ─────────────────────────────────────────── */}
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        {/* Main bar (logo + nav + CTA). Mega panel anchors to this. */}
        <div
          ref={navRef}
          onMouseEnter={keepOpen}
          onMouseLeave={closeOnHoverOut}
          className={`relative bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}
        >
          <div className="max-w-[1500px] mx-auto px-4 md:px-8 h-[68px] lg:h-[84px] flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0" aria-label="MIIT home">
              <img src={logo} alt="MIIT Logo" className="h-11 lg:h-14 w-auto object-contain" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-stretch h-full" aria-label="Primary">
              {NAV_LINKS.map((item) => {
                if (item.mega) {
                  const isOpen = openDropdown === item.label;
                  const isActive = isGroupActive(item);
                  const highlighted = isOpen || isActive;
                  return (
                    <div
                      key={item.label}
                      className="h-full"
                      onMouseEnter={() => openOnHover(item.label)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        className={linkBase}
                        style={{ color: highlighted ? BRAND : undefined, outlineColor: BRAND }}
                      >
                        {item.label}
                        <span
                          className="absolute left-3.5 right-3.5 bottom-[22px] h-[3px] rounded-full origin-left transition-transform duration-200"
                          style={{
                            background: BRAND,
                            transform: highlighted ? 'scaleX(1)' : 'scaleX(0)',
                          }}
                        />
                      </button>
                    </div>
                  );
                }
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onMouseEnter={() => openOnHover(null)}
                    className={linkBase}
                    style={{ color: active ? BRAND : undefined, outlineColor: BRAND }}
                  >
                    {item.label}
                    <span
                      className="absolute left-3.5 right-3.5 bottom-[22px] h-[3px] rounded-full origin-left transition-transform duration-200"
                      style={{ background: BRAND, transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right side: CTA + menu button */}
            <div className="flex items-center gap-3">
              <PillButton to="/admissions" className="hidden sm:inline-flex">
                ENQUIRE NOW
              </PillButton>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-md hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2"
                style={{ outlineColor: BRAND }}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu-panel"
              >
                <span className="w-6 h-[3px] rounded bg-neutral-400" />
                <span className="w-6 h-[3px] rounded bg-neutral-400" />
                <span className="w-6 h-[3px] rounded bg-neutral-400" />
              </button>
            </div>
          </div>

          {/* ── MEGA MENU (desktop) ─────────────────────────────── */}
          {activeMenu && (
            <div className="hidden lg:block absolute left-0 right-0 top-full z-50">
              <div
                key={activeMenu.label}
                role="menu"
                className="navbar-mega-in max-w-[1380px] mx-auto bg-white shadow-2xl shadow-black/15 border-t border-neutral-100"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1.25fr)] gap-0 px-8 py-10">
                  {/* Left: hex image + intro */}
                  <div className="flex items-center gap-8 pr-10">
                    <div
                      className="shrink-0 w-[250px] h-[290px] overflow-hidden"
                      style={{
                        clipPath: HEX_CLIP,
                        background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})`,
                      }}
                    >
                      <img
                        src={activeMenu.mega.image}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-[32px] leading-tight font-bold tracking-tight"
                        style={{ color: BRAND }}
                      >
                        {activeMenu.mega.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-7 text-neutral-800 line-clamp-6">
                        {activeMenu.mega.description}
                      </p>
                      <div className="mt-5">
                        <PillButton
                          to={activeMenu.mega.cta.to}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {activeMenu.mega.cta.label}
                        </PillButton>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="bg-neutral-200" />

                  {/* Right: link grid */}
                  <div className="pl-10 grid grid-cols-2 gap-x-10 content-start">
                    {activeMenu.mega.items.map((sub) => {
                      const active = pathname === sub.to;
                      return (
                        <Link
                          key={sub.to}
                          role="menuitem"
                          to={sub.to}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-center gap-4 py-3.5 border-b border-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          style={{ outlineColor: BRAND }}
                        >
                          <HexIcon name={sub.icon} />
                          <span className="min-w-0">
                            <span
                              className="block text-[15px] font-semibold leading-snug transition-colors"
                              style={{ color: BRAND }}
                            >
                              {sub.label}
                              <span
                                className="inline-block ml-1 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                aria-hidden="true"
                              >
                                →
                              </span>
                            </span>
                            <span className="block mt-0.5 text-[13.5px] leading-snug text-neutral-500">
                              {sub.desc}
                            </span>
                            {active && (
                              <span
                                className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                                style={{ background: BRAND }}
                              >
                                You are here
                              </span>
                            )}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom strip: socials + contact (creative extra) */}
                <div
                  className="flex items-center justify-between px-8 py-3 text-[12.5px]"
                  style={{ background: '#f2f8f7' }}
                >
                  <div className="flex items-center gap-6 text-neutral-600">
                    <a href="tel:+919876543210" className="hover:underline">
                      Hotline: <b className="text-neutral-900">+91 98765 43210</b>
                    </a>
                    <a href="mailto:info@miit.ac.in" className="hover:underline">
                      Email: <b className="text-neutral-900">info@miit.ac.in</b>
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {SOCIALS.map(({ href, label, path }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                        style={{ background: BRAND }}
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d={path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── ANNOUNCEMENT BARS ───────────────────────────────────── */}
        <Marquee className="relative z-10 text-white" duration={45}>
          <div className="inline-flex items-center h-11 lg:h-14 text-[17px] lg:text-[22px] font-bold" style={{ background: BRAND }}>
            {ANNOUNCEMENTS_PRIMARY.map((t) => (
              <span key={t} className="px-10 inline-flex items-center gap-10">
                {t}
                <span className="w-2 h-2 rotate-45 bg-white/70" />
              </span>
            ))}
          </div>
        </Marquee>
        <div style={{ background: BRAND }} className="hidden" />
        <Marquee className="relative z-10 bg-neutral-100 border-b border-neutral-200" duration={55}>
          <div className="inline-flex items-center h-9 lg:h-11 text-[14px] lg:text-[18px] font-semibold">
            {ANNOUNCEMENTS_SECONDARY.map((a) => (
              <Link
                key={a.text}
                to={a.to}
                className="px-10 inline-flex items-center gap-10 hover:underline"
                style={{ color: BRAND }}
              >
                {a.text}
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
              </Link>
            ))}
          </div>
        </Marquee>
      </div>

      {/* ── MOBILE DRAWER ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <div
            id="mobile-menu-panel"
            className="navbar-drawer-in absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-[68px] border-b border-neutral-200 shrink-0">
              <img src={logo} alt="MIIT Logo" className="h-20 w-auto object-contain" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: BRAND }}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <nav className="py-2" aria-label="Mobile">
                {NAV_LINKS.map((item) => {
                  if (item.mega) {
                    const isExpanded = mobileExpanded === item.label;
                    const isActive = isGroupActive(item);
                    return (
                      <div key={item.label} className="border-b border-neutral-100">
                        <button
                          type="button"
                          onClick={() => toggleMobileExpanded(item.label)}
                          aria-expanded={isExpanded}
                          className="w-full flex items-center justify-between px-5 py-4 text-[15px] font-semibold"
                          style={{ color: isActive || isExpanded ? BRAND : '#171717' }}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {isExpanded && (
                          <div className="pb-2" style={{ background: '#f2f8f7' }}>
                            {item.mega.items.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                className="flex items-center gap-3 px-5 py-3"
                              >
                                <HexIcon name={sub.icon} size={44} />
                                <span className="min-w-0">
                                  <span
                                    className="block text-[14px] font-semibold"
                                    style={{ color: pathname === sub.to ? BRAND_DARK : BRAND }}
                                  >
                                    {sub.label}
                                  </span>
                                  <span className="block text-[12px] text-neutral-500">{sub.desc}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  const active = pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center px-5 py-4 text-[15px] font-semibold border-b border-neutral-100"
                      style={{ color: active ? BRAND : '#171717' }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="shrink-0 border-t border-neutral-200 p-5 space-y-4">
              <PillButton to="/admissions" className="w-full justify-between">
                ENQUIRE NOW
              </PillButton>
              <div className="flex items-center justify-between text-[12px] text-neutral-600">
                <a href="tel:+919876543210" className="font-semibold text-neutral-900">
                  +91 98765 43210
                </a>
                <a href="mailto:info@miit.ac.in" className="font-semibold text-neutral-900">
                  info@miit.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                    style={{ background: BRAND }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer — reserves the fixed header's height in the document flow */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </header>
  );
};

export default Navbar;