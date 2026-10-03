import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Landmark,
  Building2,
  Boxes,
  GitMerge,
  CalendarClock,
  Calculator,
  ClipboardList,
  Radar,
  HardHat,
  Ruler,
  Network,
  Wrench,
  Award,
  Clock3,
  BadgeCheck,
  Layers,
  GraduationCap,
  Users,
  BriefcaseBusiness,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
  hero: u('photo-1503387762-592deb58ef4e', 900),
  heroSmall: u('photo-1504307651254-35680f356dfd', 600),
  overview: u('photo-1558618666-fcd25c85cd64', 900),
  overviewSmall: u('photo-1486406146926-c627a92ad1ab', 600),
  cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const OUTCOMES = [
  { value: '90%+', label: 'Placement rate maintained yearly' },
  { value: '6 months', label: 'Program duration' },
  { value: '4', label: 'Core software tools' },
  { value: 'ISO 19650', label: 'Standards-aligned curriculum' },
];

const MODULES = [
  {
    icon: Boxes,
    number: '01',
    title: '3D Architectural & Structural Modeling',
    desc: 'Build parametric building models in Autodesk Revit — walls, structural elements, families, and construction documents that stay linked to a single data source.',
    tools: ['Autodesk Revit'],
  },
  {
    icon: GitMerge,
    number: '02',
    title: 'Model Federation & Clash Detection',
    desc: 'Combine architectural, structural, and MEP models in Navisworks, run clash tests, generate reports, and resolve conflicts before they reach the site.',
    tools: ['Navisworks Manage'],
  },
  {
    icon: CalendarClock,
    number: '03',
    title: '4D Scheduling & Sequencing',
    desc: 'Link Revit models to MS Project schedules, build 4D construction sequences in Navisworks, and simulate phasing and materials planning.',
    tools: ['Navisworks Manage', 'MS Project'],
  },
  {
    icon: Calculator,
    number: '04',
    title: 'Quantity Takeoff & Cost Estimation',
    desc: 'Extract accurate quantity takeoffs directly from the model and connect them to conceptual and detailed cost estimates (5D BIM).',
    tools: ['Autodesk Revit'],
  },
  {
    icon: ClipboardList,
    number: '05',
    title: 'BIM Execution Planning',
    desc: 'Draft Employer Information Requirements (EIR) and BIM Execution Plans (BEP), and structure model data and naming conventions to ISO 19650.',
    tools: ['BIM 360 / ACC'],
  },
  {
    icon: Radar,
    number: '06',
    title: 'Point Cloud & As-Built Coordination',
    desc: 'Work with laser-scanned point cloud data and LIDAR captures to model existing conditions and verify as-built accuracy against design intent.',
    tools: ['Autodesk Revit', 'Navisworks Manage'],
  },
];

const TOOLS = ['Autodesk Revit', 'Navisworks Manage', 'AutoCAD', 'BIM 360 / ACC', 'MS Project'];

const CAREERS = [
  { icon: Boxes, role: 'BIM Modeler', desc: 'Builds and maintains discipline models (architectural, structural, MEP) in Revit.' },
  { icon: Network, role: 'BIM Coordinator', desc: 'Runs clash detection across federated models and manages the coordination process between teams.' },
  { icon: CalendarClock, role: 'Construction Planner', desc: 'Links models to schedules for 4D sequencing and site logistics planning.' },
  { icon: Calculator, role: 'Quantity Surveyor (BIM)', desc: 'Extracts takeoffs from models to support cost estimation and tendering.' },
];

const GALLERY = [
  { url: u('photo-1503387762-592deb58ef4e', 700), caption: 'High-rise coordination model' },
  { url: u('photo-1486325212027-8081e485255e', 700), caption: 'Structural clash detection review' },
  { url: u('photo-1541888946425-d81bb19240f5', 700), caption: 'On-site digital twin application' },
];

const AUDIENCE = [
  { icon: GraduationCap, title: 'Civil & architecture graduates', desc: 'Add the digital workflows employers now expect on day one.' },
  { icon: HardHat, title: 'Site & project engineers', desc: 'Move from site execution into coordination and planning roles.' },
  { icon: Ruler, title: 'Draftspeople & CAD users', desc: 'Step up from 2D drawings to data-rich parametric models.' },
];

const FAQS = [
  {
    q: 'How long is the program?',
    a: 'The BIM for Construction program runs for 6 months, with placement counselling starting in month one.',
  },
  {
    q: 'Which software will I learn?',
    a: 'Autodesk Revit, Navisworks Manage, AutoCAD, BIM 360 / ACC and MS Project are all used across the modules.',
  },
  {
    q: 'Is the curriculum aligned to a standard?',
    a: 'Yes. Model data and naming conventions are structured to ISO 19650, and the program is aligned with Autodesk workflows.',
  },
  {
    q: 'What roles can I apply for after the program?',
    a: 'Graduates are prepared for BIM Modeler, BIM Coordinator, Construction Planner and Quantity Surveyor (BIM) roles.',
  },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
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
export default function BIM() {
  const [activeTool, setActiveTool] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);

  const toolFilters = ['All', ...TOOLS.filter((t) => MODULES.some((m) => m.tools.includes(t)))];
  const visibleModules = MODULES.filter((m) => activeTool === 'All' || m.tools.includes(activeTool));

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes bim-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .bim-float { animation: bim-float 5s ease-in-out infinite; }
        @keyframes bim-pop { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .bim-pop { animation: bim-pop 380ms ease-out both; }
        @media (prefers-reduced-motion: reduce) { .bim-float, .bim-pop { animation: none; } }
      `}</style>

      {/* ══════════ PAGE HERO ══════════ */}
      <section
        id="main-content"
        className="relative"
        style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 55%, #f3faf9 100%)` }}
      >
        <div
          className="hidden lg:block absolute -top-24 -left-24 w-72 h-80 opacity-[0.12]"
          style={{ clipPath: HEX, background: BRAND }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1300px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <div>
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-500 mb-7">
                <Link to="/" className="inline-flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
                  <Home size={14} /> Home
                </Link>
                <ChevronRight size={14} />
                <span>Departments</span>
                <ChevronRight size={14} />
                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                  BIM for Construction
                </span>
              </nav>

              <span
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: TINT, color: BRAND_DARK }}
              >
                <Landmark size={14} /> Department of BIM
              </span>

              <h1
                className="text-[42px] sm:text-[54px] xl:text-[64px] leading-[1.06] font-extrabold tracking-tight"
                style={{ color: BRAND }}
              >
                BIM for Construction.
              </h1>
              <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                Master the digital construction workflows reshaping how buildings are designed, coordinated, and
                delivered — from parametric modeling to clash detection and 4D scheduling.
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
                  to="/contact"
                  className="text-[14px] font-semibold pb-0.5 border-b-2"
                  style={{ color: BRAND, borderColor: `${BRAND}55` }}
                >
                  Talk to an advisor
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
              <div
                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden bim-float"
                style={{ clipPath: HOUSE, background: BRAND }}
              >
                <Img src={IMG.heroSmall} alt="BIM coordination on a construction site" />
              </div>
              <div
                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
              >
                <Img src={IMG.hero} alt="Student working on a building design drawing" />
              </div>
              <div
                className="absolute top-14 left-0 w-14 h-16"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, #4db6ac)` }}
                aria-hidden="true"
              />
              <div
                className="absolute bottom-6 right-0 w-[124px] h-[143px] sm:w-[146px] sm:h-[168px] flex flex-col items-center justify-center text-white text-center"
                style={{ clipPath: HEX, background: BRAND }}
              >
                <Building2 size={30} strokeWidth={1.6} />
                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">6-month program</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ OUTCOMES BAR ══════════ */}
      <section style={{ background: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND})` }}>
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {OUTCOMES.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="text-center px-4 md:border-r md:last:border-r-0 border-white/20">
                <p className="text-3xl md:text-4xl font-extrabold text-white">{value}</p>
                <p className="mt-1 text-[11.5px] text-white/75 uppercase tracking-[0.15em]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ OVERVIEW ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[500px] h-[420px] sm:h-[500px]">
            <div
              className="absolute top-0 left-0 w-[300px] h-[346px] sm:w-[360px] sm:h-[416px] overflow-hidden"
              style={{ clipPath: HEX, background: BRAND }}
            >
              <Img src={IMG.overview} alt="BIM 3D model on screen" />
            </div>
            <div
              className="absolute bottom-0 right-0 w-[190px] h-[220px] sm:w-[220px] sm:h-[254px] overflow-hidden"
              style={{ clipPath: HEX, background: BRAND_DARK }}
            >
              <Img src={IMG.overviewSmall} alt="Modern building exterior" />
            </div>
            <div className="absolute bottom-10 left-2 bg-white rounded-2xl px-5 py-4 shadow-xl border border-neutral-100">
              <p className="text-[11px] text-neutral-400 uppercase tracking-wide">Certification</p>
              <p className="text-[14px] font-bold mt-0.5" style={{ color: INK }}>
                Autodesk & ISO 19650 aligned
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <Heading eyebrow="Overview" title="Where digital precision meets construction reality" />
            <p className="mt-5 text-[15.5px] leading-8 text-neutral-700">
              Building Information Modeling is no longer a niche skill — it's the backbone of modern construction
              management. This program builds the technical fluency to lead BIM adoption across architectural
              firms, contractors, and infrastructure agencies.
            </p>
            <p className="mt-4 text-[15.5px] leading-8 text-neutral-700">
              From clash detection to 5D cost modeling, you'll graduate ready to work on projects that demand
              precision, cross-team coordination, and digital leadership.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="text-[12.5px] font-bold px-4 py-1.5 rounded-full border"
                  style={{ background: TINT, color: BRAND_DARK, borderColor: '#cfe5e2' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════ WHO IT'S FOR ══════════ */}
      <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Who it's for" title="Built for people moving into digital construction" center />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-3 gap-x-8 gap-y-12">
            {AUDIENCE.map(({ icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 110}>
                <div className="group text-center">
                  <div className="mx-auto w-[92px] h-[92px]">
                    <HexIcon icon={icon} size={92} />
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-neutral-600">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CURRICULUM ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Curriculum" title="Core modules" center />
          <p className="mt-4 text-center text-[13.5px] text-neutral-500">
            Filter the modules by the software you want to learn.
          </p>
        </Reveal>

        {/* tool filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter modules by tool">
          {toolFilters.map((t) => {
            const active = activeTool === t;
            return (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTool(t)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold border-2 transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  background: active ? BRAND : '#fff',
                  borderColor: active ? BRAND : '#d6e9e6',
                  color: active ? '#fff' : BRAND_DARK,
                  outlineColor: BRAND,
                }}
              >
                {t === 'All' ? <Layers size={14} /> : <Wrench size={14} />}
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleModules.map(({ icon, number, title, desc, tools }, i) => (
            <div
              key={`${activeTool}-${number}`}
              className="bim-pop group relative flex flex-col bg-white rounded-3xl border border-neutral-100 p-7 overflow-hidden hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${(i % 3) * 70}ms` }}
            >
              <span
                className="absolute top-3 right-5 text-[44px] font-extrabold leading-none select-none"
                style={{ color: `${BRAND}1f` }}
                aria-hidden="true"
              >
                {number}
              </span>
              <HexIcon icon={icon} size={68} filled />
              <h3 className="mt-5 text-[17px] font-bold leading-snug transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-neutral-600 flex-1">{desc}</p>
              <div className="mt-5 pt-4 border-t border-dashed flex flex-wrap gap-2" style={{ borderColor: '#bfdcd8' }}>
                {tools.map((t) => (
                  <span
                    key={t}
                    className="text-[11.5px] font-bold px-3 py-1 rounded-full"
                    style={{ background: TINT, color: BRAND_DARK }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CAREER OUTCOMES ══════════ */}
      <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Where graduates go" title="Roles this program prepares you for" center />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {CAREERS.map(({ icon, role, desc }, i) => (
              <Reveal key={role} delay={(i % 2) * 100}>
                <div className="group h-full flex items-start gap-5 bg-white rounded-3xl p-7 border border-neutral-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                  <HexIcon icon={icon} size={72} filled />
                  <div>
                    <h3 className="text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                      {role}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-7 text-neutral-600">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
              <span className="inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: BRAND_DARK }}>
                <BriefcaseBusiness size={18} /> See how placements work
              </span>
              <Link
                to="/training-placement/roadmap"
                className="inline-flex items-center gap-1.5 text-[14px] font-bold"
                style={{ color: BRAND }}
              >
                View the training roadmap <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ GALLERY ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="In practice" title="Real projects, real impact" center />
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center items-start gap-x-3 gap-y-8">
          {GALLERY.map(({ url, caption }, i) => (
            <Reveal key={caption} delay={i * 110} className={i === 1 ? 'md:mt-14' : ''}>
              <div className="text-center">
                <div
                  className="group relative w-[260px] h-[300px] sm:w-[280px] sm:h-[323px] overflow-hidden mx-auto"
                  style={{ clipPath: HEX, background: BRAND }}
                >
                  <Img src={url} alt={caption} className="transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00332e]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="mt-4 text-[14px] font-bold max-w-[240px] mx-auto" style={{ color: INK }}>
                  {caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 md:py-28" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Good to know" title="Program questions, answered" center />
          </Reveal>

          <div className="mt-12 space-y-4">
            {FAQS.map(({ q, a }, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={q} delay={i * 80}>
                  <div
                    className="rounded-2xl border bg-white transition-shadow duration-300"
                    style={{
                      borderColor: open ? BRAND : '#d6e9e6',
                      boxShadow: open ? '0 14px 30px -18px rgba(0,150,136,.5)' : undefined,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ outlineColor: BRAND }}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="shrink-0 w-9 h-[41px] flex items-center justify-center text-[12px] font-extrabold"
                          style={{
                            clipPath: HEX,
                            background: open ? BRAND : TINT,
                            color: open ? '#fff' : BRAND_DARK,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[15.5px] font-bold leading-snug" style={{ color: INK }}>
                          {q}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        style={{ color: BRAND }}
                      />
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-[76px] text-[14.5px] leading-7 text-neutral-600">{a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
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
            <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              Ready to build smarter?
            </h2>
            <p className="mt-4 text-white/85 text-[16px] leading-8">
              Join the next batch of BIM professionals. Seats are limited per intake.
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
}