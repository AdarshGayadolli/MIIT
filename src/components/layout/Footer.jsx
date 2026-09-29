import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { MapPin, Phone, Mail, ArrowUp, ArrowRight, ChevronRight, Clock3 } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar & pages. Change here to re-theme.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const DEEP = '#00332e';
const DEEPER = '#00201d';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

const SOCIALS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
  { label: 'YouTube', href: 'https://youtube.com', icon: FaYoutube },
];

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about/management', label: 'About Us' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/administration/organization-chart', label: 'Administration' },
  { to: '/training-placement/about', label: 'Training & Placement' },
  { to: '/contact', label: 'Contact Us' },
];

const ACADEMICS = [
  { to: '/departments/bim-construction', label: 'BIM for Construction' },
  { to: '/departments/digital-marketing', label: 'Digital Marketing' },
  { to: '/training-placement/roadmap', label: 'Training Roadmap' },
  { to: '/training-placement/process', label: 'Placement Process' },
  { to: '/training-placement/statistics', label: 'Placement Statistics' },
  { to: '/about/quality-policy', label: 'Quality Policy' },
];

const LEGAL = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
];

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 hover:text-white transition-colors"
    >
      <ChevronRight
        size={14}
        className="-ml-1 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
        style={{ color: '#4db6ac' }}
      />
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">{children}</span>
    </Link>
  </li>
);

const ColumnTitle = ({ children }) => (
  <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-white">
    {children}
    <span className="block mt-2 w-8 h-[3px] rounded-full" style={{ background: '#4db6ac' }} />
  </h3>
);

const ContactRow = ({ icon: Icon, children, href }) => {
  const inner = (
    <>
      <span
        className="shrink-0 w-10 h-[46px] flex items-center justify-center text-white"
        style={{ clipPath: HEX, background: 'rgba(255,255,255,0.1)' }}
      >
        <Icon size={16} strokeWidth={1.9} />
      </span>
      <span className="text-[14px] leading-6 text-white/75 group-hover:text-white transition-colors">{children}</span>
    </>
  );
  return href ? (
    <a href={href} className="group flex items-center gap-3">
      {inner}
    </a>
  ) : (
    <div className="group flex items-center gap-3">{inner}</div>
  );
};

const Footer = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: `linear-gradient(160deg, ${DEEP} 0%, ${DEEPER} 100%)` }}>
      {/* decorative hexagons */}
      <div
        className="hidden lg:block absolute -top-24 -right-20 w-80 h-[370px] opacity-[0.06] bg-white"
        style={{ clipPath: HEX }}
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute bottom-10 -left-24 w-64 h-72 opacity-[0.05] bg-white"
        style={{ clipPath: HEX }}
        aria-hidden="true"
      />

      {/* ══════════ ENQUIRY BANNER ══════════ */}
      <div className="relative max-w-[1300px] mx-auto px-6 pt-14">
        <div
          className="relative overflow-hidden rounded-3xl px-7 py-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-2xl shadow-black/30"
          style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
        >
          <div
            className="hidden sm:block absolute -right-10 -top-10 w-44 h-52 bg-white/10"
            style={{ clipPath: HEX }}
            aria-hidden="true"
          />
          <div
            className="hidden sm:block absolute right-32 -bottom-12 w-28 h-32 bg-white/10"
            style={{ clipPath: HEX }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-[24px] md:text-[32px] font-extrabold leading-tight tracking-tight">
              Ready to start your career journey?
            </h2>
            <p className="mt-2 text-[14.5px] text-white/85 max-w-xl leading-7">
              Admissions are open for the 2026–27 batches. Talk to our team and find the right program for you.
            </p>
          </div>
          <div className="relative flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-6 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
              style={{ color: BRAND_DARK }}
            >
              Apply for Admission
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5" style={{ background: BRAND }}>
                <ArrowRight size={16} strokeWidth={2.6} />
              </span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-6 py-2.5 rounded-full transition-colors"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════ MAIN FOOTER ══════════ */}
      <div className="relative max-w-[1300px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] gap-12 lg:gap-10">
          {/* College info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="MIIT home">
              <span
                className="w-[58px] h-[66px] bg-white flex items-center justify-center p-3.5"
                style={{ clipPath: HEX }}
              >
                <img src={logo} alt="MIIT Logo" className="w-full h-full object-contain" />
              </span>
              <span>
                <span className="block text-[20px] font-extrabold tracking-wide leading-tight">MIIT College</span>
                <span className="block text-[12px] text-white/60 mt-0.5">Education • Innovation • Excellence</span>
              </span>
            </Link>

            <p className="mt-5 text-[14px] leading-7 text-white/70 max-w-sm">
              Medini Institute of Integrated Technology empowers students with industry-aligned training, live
              projects and placement support, so every graduate is job-ready from day one.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-[50px] flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:text-[#00332e]"
                  style={{ clipPath: HEX, background: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#4db6ac')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="mt-6 space-y-3">
              {QUICK_LINKS.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <ColumnTitle>Academics</ColumnTitle>
            <ul className="mt-6 space-y-3">
              {ACADEMICS.map((l) => (
                <FooterLink key={l.label} to={l.to}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColumnTitle>Contact Us</ColumnTitle>
            <div className="mt-6 space-y-4">
              <ContactRow icon={MapPin}>
                MIIT College, Bengaluru,
                <br />
                Karnataka, India
              </ContactRow>
              <ContactRow icon={Phone} href="tel:+919876543210">
                +91 98765 43210
              </ContactRow>
              <ContactRow icon={Mail} href="mailto:info@miit.ac.in">
                info@miit.ac.in
              </ContactRow>
              <ContactRow icon={Clock3}>Mon – Sat, 9:00 AM – 5:30 PM</ContactRow>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-14 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />

        {/* bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="text-[13px] text-white/65">© {new Date().getFullYear()} MIIT College. All Rights Reserved.</p>
            <p className="text-[12px] text-white/40 mt-1">Bengaluru, Karnataka, India</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-white/55">
            {LEGAL.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={handleScrollTop}
            aria-label="Back to top"
            className="w-12 h-14 flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            style={{ clipPath: HEX, background: BRAND }}
          >
            <ArrowUp size={18} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;