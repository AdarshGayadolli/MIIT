import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  BriefcaseBusiness,
  Wrench,
  Clock3,
  FolderKanban,
  Award,
  Building2,
  Megaphone,
  ArrowUpRight,
  ArrowRight,
  Download,
  Globe,
  Lightbulb,
  Microscope,
  Scale,
  HardHat,
  GraduationCap,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same teal as the Navbar. Change here to re-theme.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';

/* Hexagon (pointy top) and "house" pentagon clip paths */
const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

/* ─────────────────────────────────────────────────────────────
   COLLEGE-RELATED IMAGES (Unsplash placeholders).
   Replace with your own campus photos in /assets/images for the
   final site, e.g. import campus from '../assets/images/campus.jpg'
   ───────────────────────────────────────────────────────────── */
const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
  heroMain: u('photo-1503387762-592deb58ef4e', 900), // student drafting / blueprint
  heroSmall: u('photo-1523240795612-9a054b0db644', 500), // group of students
  about: u('photo-1541339907198-e08756dedf3f', 900), // university building
  aboutSmall: u('photo-1524178232363-1fb2b075b655', 500), // lecture hall
  bim: u('photo-1486406146926-c627a92ad1ab', 900), // modern building
  marketing: u('photo-1432888622747-4eb9a8efeb07', 900), // laptop / marketing
  campus1: u('photo-1522202176988-66273c2fd55f', 700), // students together
  campus2: u('photo-1562774053-701939374585', 700), // campus
  campus3: u('photo-1581091226825-a6a2a5aee158', 700), // lab / computers
  campus4: u('photo-1531482615713-2afd69097998', 700), // team discussion
  campus5: u('photo-1523050854058-8df90110c9f1', 700), // graduation
  cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

const STATS = [
  { value: '500+', label: 'Students Enrolled' },
  { value: '95%', label: 'Placement Rate' },
  { value: '50+', label: 'Industry Partners' },
  { value: '10+', label: 'Years of Excellence' },
];

const MISSION = [
  { icon: HardHat, text: 'Provide an advanced and outcome-based skill ecosystem for infrastructure and construction' },
  { icon: Globe, text: 'Contribute to the nation’s skill-training drive and sustainable socio-economic development initiatives' },
  { icon: Lightbulb, text: 'Inculcate and promote skill-oriented entrepreneurship' },
  { icon: Microscope, text: 'Foster research and innovation' },
  { icon: Scale, text: 'Promote and ensure ethical practices' },
];

const COURSES = [
  {
    icon: Building2,
    title: 'BIM for Construction',
    desc: 'Master Building Information Modeling and lead the future of smart construction.',
    link: '/departments/bim-construction',
    tag: 'In Demand',
    image: IMG.bim,
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Drive brand growth with SEO, paid ads, content strategy and data analytics.',
    link: '/departments/digital-marketing',
    tag: 'Top Rated',
    image: IMG.marketing,
  },
];

const FEATURES = [
  { icon: Users, title: 'Industry experts as faculty', desc: 'Learn directly from professionals who have worked at top companies and bring real-world insight to every class.' },
  { icon: BriefcaseBusiness, title: 'Dedicated placement cell', desc: 'A full-time team working on your behalf: resume building, mock interviews, employer connects and job referrals.' },
  { icon: Wrench, title: 'Hands-on lab training', desc: 'Access to licensed industry tools like Revit, Navisworks, Google Ads Manager and SEMrush from day one.' },
  { icon: Clock3, title: 'Flexible batch timings', desc: 'Morning and evening batches designed for both fresh graduates and working professionals.' },
  { icon: FolderKanban, title: 'Live project exposure', desc: 'Work on actual client briefs and real campaigns as part of your coursework, not simulations.' },
  { icon: Award, title: 'Globally recognized certificates', desc: 'Graduate with certificates from Google, Autodesk, Meta and HubSpot alongside your MIIT diploma.' },
];

const PARTNERS = ['Autodesk', 'Google', 'Meta', 'HubSpot', 'Bentley', 'Trimble', 'SEMrush', 'Ahrefs', 'Navisworks', 'Canva', 'Google', 'Trimble'];

/* ─────────────────────────────────────────────────────────────
   SMALL HELPERS
   ───────────────────────────────────────────────────────────── */

/* Image that falls back to a teal gradient if the URL fails */
const Img = ({ src, alt = '', className = '', style }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    onError={(e) => {
      e.currentTarget.style.opacity = 0;
    }}
    className={`w-full h-full object-cover ${className}`}
    style={style}
  />
);

/* Fade / slide up when scrolled into view */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${className}`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* Hexagon icon tile */
const HexIcon = ({ icon: Icon, size = 64, filled = false }) => (
  <span
    className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
    style={{
      width: size,
      height: size,
      clipPath: HEX,
      background: filled ? BRAND : 'linear-gradient(145deg,#f4f8f8,#dcebe9)',
      color: filled ? '#fff' : BRAND,
    }}
  >
    <Icon size={size * 0.38} strokeWidth={1.7} />
  </span>
);

/* Section eyebrow + title */
const Heading = ({ eyebrow, title, center = false }) => (
  <div className={center ? 'text-center' : ''}>
    <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
      <span className="w-6 h-[2px]" style={{ background: BRAND }} />
      {eyebrow}
    </span>
    <h2 className="mt-2 text-3xl md:text-[40px] font-bold leading-tight tracking-tight" style={{ color: INK }}>
      {title}
    </h2>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const Home = () => {
  const marqueeRef = useRef(null);
  const lastScrollY = useRef(0);
  const marqueePosition = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-driven partner marquee + light parallax
  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY.current;
      setScrollY(current);

      const marquee = marqueeRef.current;
      if (marquee) {
        marqueePosition.current -= delta * 1.2;
        const halfWidth = marquee.scrollWidth / 2;
        if (marqueePosition.current <= -halfWidth) marqueePosition.current += halfWidth;
        if (marqueePosition.current >= 0) marqueePosition.current -= halfWidth;
        marquee.style.transform = `translate3d(${marqueePosition.current}px, 0, 0)`;
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const float = (factor, max) => ({ transform: `translateY(${Math.min(scrollY * factor, max)}px)` });

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes home-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .home-float { animation: home-float 5s ease-in-out infinite; }
        @keyframes home-pulse-ring { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.5); opacity: 0; } }
        .home-pulse-ring { animation: home-pulse-ring 2.4s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .home-float, .home-pulse-ring { animation: none; } }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section
        id="main-content"
        className="relative"
        style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 45%, #f3faf9 100%)` }}
      >
        {/* decorative hexagons */}
        <div
          className="hidden lg:block absolute -top-24 -left-24 w-72 h-80 opacity-[0.12]"
          style={{ clipPath: HEX, background: BRAND }}
          aria-hidden="true"
        />
        <div
          className="hidden lg:block absolute bottom-0 right-1/3 w-40 h-44 opacity-[0.08]"
          style={{ clipPath: HEX, background: BRAND_DARK }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24 grid lg:grid-cols-[1.05fr_1fr_0.85fr] gap-10 lg:gap-6 items-center">
          {/* LEFT: headline + intro */}
          <Reveal>
            <div>
              <span
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: TINT, color: BRAND_DARK }}
              >
                <GraduationCap size={14} /> Admissions open 2026–27
              </span>
              <h1
                className="text-[44px] sm:text-[56px] xl:text-[68px] leading-[1.04] font-extrabold tracking-tight"
                style={{ color: BRAND }}
              >
                Medini Institute of Integrated Technology
              </h1>
              <p className="mt-7 text-[15px] leading-8 text-neutral-800 text-justify max-w-xl">
                MIIT is a distinguished centre for skill development, bridging the gap for aspiring youth and
                empowering working professionals to advance their careers. Our programs combine classroom learning
                with real industry tools, live projects and a placement cell that stays with you until you’re hired.
                Co-designed with leading employers, every course is aligned to industry standards so each graduate is
                job-ready from day one.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/admissions"
                  className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                  style={{ background: BRAND }}
                >
                  Apply now
                  <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={16} strokeWidth={2.6} />
                  </span>
                </Link>
                <Link
                  to="/departments/bim-construction"
                  className="text-[14px] font-semibold pb-0.5 border-b-2 transition-colors"
                  style={{ color: BRAND, borderColor: `${BRAND}55` }}
                >
                  View programs
                </Link>
              </div>
            </div>
          </Reveal>

          {/* CENTER: hexagon collage */}
          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[440px] h-[460px] sm:h-[540px]">
              {/* small house-shaped photo (top) */}
              <div
                className="absolute top-0 right-8 w-[150px] h-[130px] sm:w-[170px] sm:h-[150px] overflow-hidden home-float"
                style={{ clipPath: HOUSE, background: BRAND }}
              >
                <Img src={IMG.heroSmall} alt="Students on campus" />
              </div>

              {/* big hexagon photo */}
              <div
                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[350px] sm:h-[404px] overflow-hidden"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
              >
                <Img src={IMG.heroMain} alt="Student working on a design drawing" style={float(0.03, 14)} className="scale-110" />
              </div>

              {/* teal outline hex accent */}
              <div
                className="absolute top-16 left-0 w-16 h-[74px] opacity-90"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, #4db6ac)` }}
                aria-hidden="true"
              />

              {/* Download brochure hex */}
              <a
                href="/brochure.pdf"
                download
                aria-label="Download latest brochure"
                className="group absolute bottom-6 right-0 w-[128px] h-[148px] sm:w-[150px] sm:h-[173px]"
              >
                <span className="absolute inset-0 home-pulse-ring" style={{ clipPath: HEX, background: BRAND }} aria-hidden="true" />
                <span
                  className="relative flex flex-col items-center justify-center gap-2 w-full h-full text-white text-center transition-transform duration-300 group-hover:scale-105"
                  style={{ clipPath: HEX, background: BRAND }}
                >
                  <Download size={30} strokeWidth={1.6} />
                  <span className="text-[12px] font-bold leading-tight px-4">
                    Download
                    <br />
                    Latest Brochure
                  </span>
                </span>
              </a>
            </div>
          </Reveal>

          {/* RIGHT: vision + mission */}
          <Reveal delay={300}>
            <div className="lg:pl-4">
              <h2 className="text-[30px] font-bold tracking-tight" style={{ color: BRAND }}>
                Our Vision
              </h2>
              <p className="mt-3 text-[16px] leading-7 text-neutral-900">
                To be a leading skill development institution contributing to nation-building.
              </p>

              <h2 className="mt-8 text-[30px] font-bold tracking-tight" style={{ color: BRAND }}>
                Our Mission
              </h2>
              <ul className="mt-4 space-y-4">
                {MISSION.map(({ icon, text }) => (
                  <li key={text} className="group flex items-center gap-4">
                    <HexIcon icon={icon} size={58} />
                    <span className="text-[14.5px] leading-6 text-neutral-900">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══════════ ABOUT ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
        {/* image composition */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[500px] h-[420px] sm:h-[500px]">
            <div
              className="absolute top-0 left-0 w-[300px] h-[346px] sm:w-[360px] sm:h-[416px] overflow-hidden"
              style={{ clipPath: HEX, background: BRAND }}
            >
              <Img src={IMG.about} alt="MIIT campus building" />
            </div>
            <div
              className="absolute bottom-0 right-0 w-[200px] h-[231px] sm:w-[230px] sm:h-[266px] overflow-hidden"
              style={{ clipPath: HEX, background: BRAND_DARK }}
            >
              <Img src={IMG.aboutSmall} alt="Lecture in progress" />
            </div>
            <div
              className="absolute bottom-10 left-2 bg-white rounded-2xl px-5 py-4 shadow-xl border border-neutral-100"
            >
              <p className="text-3xl font-extrabold" style={{ color: BRAND }}>95%</p>
              <p className="text-[12px] text-neutral-500 mt-0.5 max-w-[150px]">Graduates placed within 3 months</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <Heading eyebrow="Who we are" title="Empowering the next generation of innovators" />
            <p className="mt-5 text-[15.5px] leading-8 text-neutral-700">
              MIIT is a forward-thinking institute dedicated to bridging the gap between education and industry. Our
              programs are co-designed with top employers so that every learner graduates with practical skills,
              recognised certificates and the confidence to start working right away.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
              {[
                { icon: GraduationCap, text: 'Industry-aligned curriculum' },
                { icon: FolderKanban, text: 'Live project experience' },
                { icon: Award, text: 'Certified by Google & Autodesk' },
                { icon: BriefcaseBusiness, text: '100% placement support' },
              ].map(({ icon, text }) => (
                <div key={text} className="group flex items-center gap-3">
                  <HexIcon icon={icon} size={48} />
                  <p className="text-[14px] font-semibold" style={{ color: INK }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/about/management"
              className="inline-flex items-center gap-2 mt-9 text-[14px] font-bold group"
              style={{ color: BRAND }}
            >
              Learn more about us
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ══════════ DEPARTMENTS ══════════ */}
      <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <Heading eyebrow="Programs" title="Our departments" />
            <Link to="/admissions" className="inline-flex items-center gap-2 text-[14px] font-bold" style={{ color: BRAND }}>
              View all programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map(({ icon: Icon, title, desc, link, tag, image }, i) => (
              <Reveal key={title} delay={i * 120}>
                <Link
                  to={link}
                  className="group block bg-white rounded-3xl overflow-hidden border border-neutral-100 hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden" style={{ background: BRAND }}>
                    <Img src={image} alt={title} className="transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span
                      className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-white"
                      style={{ color: BRAND_DARK }}
                    >
                      {tag}
                    </span>
                    <div className="absolute -bottom-7 left-6">
                      <HexIcon icon={Icon} size={72} filled />
                    </div>
                  </div>
                  <div className="p-7 pt-12">
                    <h3 className="text-[21px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                      {title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-7 text-neutral-600">{desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold" style={{ color: BRAND }}>
                      Explore program
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2.2}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CAMPUS LIFE (hex gallery) ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Campus life" title="Learning by doing, together" center />
        </Reveal>
        <div className="mt-14 flex flex-wrap justify-center items-center gap-x-2 gap-y-0">
          {[
            { src: IMG.campus1, label: 'Collaborative learning', offset: 'mt-0' },
            { src: IMG.campus3, label: 'Hands-on labs', offset: 'md:mt-16' },
            { src: IMG.campus2, label: 'Modern campus', offset: 'mt-0' },
            { src: IMG.campus4, label: 'Team projects', offset: 'md:mt-16' },
            { src: IMG.campus5, label: 'Celebrating success', offset: 'mt-0' },
          ].map(({ src, label, offset }, i) => (
            <Reveal key={label} delay={i * 100} className={offset}>
              <div className="group relative w-[220px] h-[254px] sm:w-[230px] sm:h-[266px] overflow-hidden" style={{ clipPath: HEX, background: BRAND }}>
                <Img src={src} alt={label} className="transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end justify-center pb-10 bg-gradient-to-t from-[#00332e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-[13px] font-semibold">{label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ PARTNERS MARQUEE ══════════ */}
      <section className="py-12 border-y border-neutral-100 overflow-hidden">
        <p className="text-center text-[11.5px] tracking-[0.18em] uppercase text-neutral-400 font-semibold mb-7 px-6">
          Tools & partners our students work with
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div ref={marqueeRef} className="flex items-center w-max gap-14 px-20 will-change-transform">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-[18px] font-bold tracking-wide transition-colors"
                style={{ color: `${BRAND}80` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRAND)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${BRAND}80`)}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* ══════════ WHY MIIT ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Why choose us" title="Built for real careers" center />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
          {FEATURES.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="group flex items-start gap-5 py-7 border-b border-neutral-200">
                <HexIcon icon={icon} size={66} />
                <div>
                  <h3 className="text-[16.5px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-6 text-neutral-500">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Img src={IMG.cta} alt="" />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${BRAND_DARK}f2, ${BRAND}d9)` }} />
        <div
          className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/10"
          style={{ clipPath: HEX }}
          aria-hidden="true"
        />
        <div
          className="hidden md:block absolute -left-10 -bottom-10 w-44 h-52 bg-white/10"
          style={{ clipPath: HEX }}
          aria-hidden="true"
        />

        <Reveal>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-[44px] font-extrabold text-white leading-tight tracking-tight">
              Ready to start your career journey?
            </h2>
            <p className="mt-4 text-white/85 text-[16px] leading-8">
              Join hundreds of students who chose MIIT and landed roles at top companies. Limited seats are available
              for the next batch.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                style={{ color: BRAND_DARK }}
              >
                Apply now
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                  <ArrowRight size={16} strokeWidth={2.6} />
                </span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;