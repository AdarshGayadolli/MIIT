import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Home,
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
  Building2,
  HardHat,
  Quote,
  Award,
  TrendingUp,
  Globe,
  Presentation,
  Laptop,
  DoorOpen,
  MessagesSquare,
  Armchair,
  BedDouble,
  Coffee,
  Users,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Mic,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & AdministrativeStaff.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
  office: u('photo-1521737604893-d14cc237f11d', 900),
  team: u('photo-1522202176988-66273c2fd55f', 600),
  cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

const S3 = 'https://s3.ap-south-1.amazonaws.com/cfn.nicmar.ac.in/site/v1/resources/images';

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const FACTS = [
  { value: '99.22%', label: 'MBA placement rate, 2024–26' },
  { value: '25.27 LPA', label: 'Highest CTC (international)' },
  { value: '100+', label: 'Recruiters every year' },
  { value: '33 yrs', label: 'Serving the CRIP industry' },
];

const PROGRAMS = [
  {
    key: 'mba',
    tab: 'MBA · ACM & APM',
    title: 'MBA in Advanced Construction Management & Advanced Project Management',
    batch: 'Batch 2024–2026',
    split: [
      { label: 'ACM', value: '99.04%' },
      { label: 'APM', value: '100%' },
    ],
    combined: [
      { label: 'Placement rate', value: '99.22%', icon: TrendingUp },
      { label: 'Median CTC', value: '8.00 LPA', icon: Award },
      { label: 'Mean CTC, overall', value: '9.94 LPA', icon: Users },
      { label: 'Mean CTC, top 20%', value: '17.95 LPA', icon: TrendingUp },
    ],
    highest: { value: '25.27 LPA', by: 'Azizi Developments LLC, Dubai', tag: 'International offer' },
  },
  {
    key: 'pgd',
    tab: 'PGD · QSCM & HSEM',
    title: 'PGD in Quantity Surveying & Contract Management and Health, Safety & Environment Management',
    batch: 'Batch 2025–2026',
    split: [
      { label: 'QSCM', value: '97.26%' },
      { label: 'HSEM', value: '100%' },
    ],
    combined: [
      { label: 'Placement rate', value: '97.61%', icon: TrendingUp },
      { label: 'Median CTC', value: '7.15 LPA', icon: Award },
      { label: 'Mean CTC, overall', value: '8.02 LPA', icon: Users },
      { label: 'Mean CTC, top 20%', value: '12.34 LPA', icon: TrendingUp },
    ],
    highest: { value: '10.00 LPA', by: 'Birla Estates', tag: 'Highest offer' },
  },
];

const SEASON = [
  {
    when: 'July – August',
    title: 'The season opens',
    desc: 'Mock tests and simulated group discussions begin, and run alongside classes through the year.',
    icon: CalendarDays,
  },
  {
    when: 'All year',
    title: 'Interview and personality training',
    desc: 'Mock interviews and personality development courses build the habits recruiters look for.',
    icon: Mic,
  },
  {
    when: 'After year one',
    title: 'Internship',
    desc: 'Two-year programme students complete a mandatory internship. The placement office helps secure it.',
    icon: ClipboardCheck,
  },
  {
    when: 'Pre-final semester',
    title: 'Phase 1 drives',
    desc: 'The first round of campus placements, run before the final semester begins.',
    icon: BriefcaseBusiness,
  },
  {
    when: 'Final semester',
    title: 'Phase 2 drives',
    desc: 'The second round for graduating students, with companies from across India and overseas.',
    icon: GraduationCap,
  },
  {
    when: 'May – June',
    title: 'The season closes',
    desc: 'Offers are finalised and students move into onboarding with their employers.',
    icon: Award,
  },
];

const RECRUITERS = [
  'L&T Construction',
  'Shapoorji Pallonji Group',
  'TATA Projects',
  'Gulf Contracting Company',
  'Azizi Developments',
  'Birla Estates',
];

const SECTORS = ['Construction', 'Real estate', 'Infrastructure', 'Project management', 'Consulting'];

const VENUES = [
  { label: 'Auditorium', desc: 'Seats 300 students for pre-placement talks', icon: Presentation },
  { label: 'Interview rooms', desc: 'Private rooms for one-to-one rounds', icon: DoorOpen },
  { label: 'GD rooms', desc: 'Set up for group discussion rounds', icon: MessagesSquare },
  { label: 'Computer labs', desc: 'For online and offline aptitude tests', icon: Laptop },
  { label: 'Conference rooms', desc: 'For employer briefings and panels', icon: Building2 },
  { label: 'Waiting areas', desc: 'Comfortable seating for candidates', icon: Armchair },
  { label: 'Lodging for officials', desc: 'On-campus stay for visiting recruiters', icon: BedDouble },
  { label: 'Cafeteria', desc: 'Meals for recruiters and students on drive days', icon: Coffee },
];

const VOICES = [
  {
    name: 'Rahul Babu',
    batch: 'PGP ACM, 2018–20',
    text: 'Being on the placement committee was the best part of my NICMAR journey. Working under the Dean and his team taught me multitasking, management and soft skills that shaped my career.',
  },
  {
    name: 'Brijit Gupta',
    batch: 'PGP QSCM, 2020–21',
    text: 'My mentors in the placement office were always there, opening up opportunities for the whole batch. The industry relationships I built there are what I still grow on.',
  },
  {
    name: 'Hari Rohit',
    batch: 'PGP PEM, 2020–22',
    text: 'The placement office changed how we saw the construction industry. During the pandemic hiring freeze, they kept finding placement support for students.',
  },
];

const TEAM = [
  {
    name: 'Dr. Sarbesh Mishra',
    role: 'Dean, Executive Education, Placements & Industry Engagements',
    phone: '040 67359 509',
    phoneHref: 'tel:+914067359509',
    email: 'sarbeshmishra@nicmar.ac.in',
    photo: `${S3}/DR.%20SARBESH.jpg`,
    initials: 'SM',
  },
  {
    name: 'Mr. Pradeep Ojha',
    role: 'Assistant Director, Placements',
    phone: '040 67359 543 · 99668 08440',
    phoneHref: 'tel:+914067359543',
    email: 'placement.hyd@nicmar.ac.in',
    photo: `${S3}/MR.%20PRADEP%20OJHA%20(PLACEMENTS).jpg`,
    initials: 'PO',
  },
];

const CONTACT = [
  {
    label: 'Visit',
    icon: MapPin,
    lines: ['Placement Office, BRAHMAM Block', 'NICMAR University, #7-06, Jagganguda (V)', 'Shamirpet (M), Aliabad, Hyderabad 500101'],
  },
  {
    label: 'Call',
    icon: Phone,
    lines: ['040 6735 9509', '040 6735 9543', '040 6735 9532'],
    hrefs: ['tel:+914067359509', 'tel:+914067359543', 'tel:+914067359532'],
  },
  {
    label: 'Email',
    icon: Mail,
    lines: ['placement.hyd@nicmar.ac.in', 'placement.hyd1@nicmar.ac.in'],
    hrefs: ['mailto:placement.hyd@nicmar.ac.in', 'mailto:placement.hyd1@nicmar.ac.in'],
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

const HexIcon = ({ icon: Icon, size = 44, iconSize = 18 }) => (
  <span
    className="shrink-0 flex items-center justify-center text-white"
    style={{ width: size, height: size * 1.155, clipPath: HEX, background: BRAND }}
  >
    <Icon size={iconSize} strokeWidth={1.9} />
  </span>
);

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const AboutTrainingAndPlacement = () => {
  const [activeKey, setActiveKey] = useState(PROGRAMS[0].key);
  const program = PROGRAMS.find((p) => p.key === activeKey);

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes pl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .pl-float { animation: pl-float 5s ease-in-out infinite; }
        @keyframes pl-pop { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .pl-pop { animation: pl-pop 380ms ease-out both; }
        @media (prefers-reduced-motion: reduce) { .pl-float, .pl-pop { animation: none; } }
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
                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                  Placements
                </span>
              </nav>

              <span
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: TINT, color: BRAND_DARK }}
              >
                <BriefcaseBusiness size={14} /> Placements
              </span>

              <h1
                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                style={{ color: BRAND }}
              >
                Careers built with the people who build.
              </h1>
              <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                The placement office is the single window between recruiters and students across construction,
                real estate, infrastructure and project management. Every batch gets a full year of preparation
                before the first company walks in.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#outcomes"
                  className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                  style={{ background: BRAND }}
                >
                  See batch outcomes
                  <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={16} strokeWidth={2.6} />
                  </span>
                </a>
                <a
                  href="#recruit"
                  className="text-[14px] font-semibold pb-0.5 border-b-2"
                  style={{ color: BRAND, borderColor: `${BRAND}55` }}
                >
                  Hire from campus
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
              <div
                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden pl-float"
                style={{ clipPath: HOUSE, background: BRAND }}
              >
                <Img src={IMG.team} alt="Students preparing for a group discussion" />
              </div>
              <div
                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
              >
                <Img src={IMG.office} alt="Placement counselling session" />
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
                <TrendingUp size={30} strokeWidth={1.6} />
                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">99.22% placed, MBA 2024–26</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ QUICK FACTS ══════════ */}
      <section style={{ background: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND})` }}>
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {FACTS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="text-center px-4 md:border-r md:last:border-r-0 border-white/20">
                <p className="text-3xl md:text-4xl font-extrabold text-white">{value}</p>
                <p className="mt-1 text-[11.5px] text-white/75 uppercase tracking-[0.15em]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ OUTCOMES ══════════ */}
      <section id="outcomes" className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Outcomes" title="Placement results by programme" center />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Choose programme">
            {PROGRAMS.map(({ key, tab }) => {
              const active = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveKey(key)}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold border-2 transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    background: active ? BRAND : '#fff',
                    borderColor: active ? BRAND : '#d6e9e6',
                    color: active ? '#fff' : BRAND_DARK,
                    outlineColor: BRAND,
                  }}
                >
                  <GraduationCap size={15} strokeWidth={2} />
                  {tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={program.key} className="pl-pop mt-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[12px] font-bold tracking-[0.15em] uppercase" style={{ color: BRAND }}>
              {program.batch}
            </p>
            <h3 className="mt-2 text-[20px] md:text-[24px] font-bold leading-snug" style={{ color: INK }}>
              {program.title}
            </h3>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            {program.combined.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="group bg-white rounded-3xl border border-neutral-100 py-8 px-6 text-center shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="mx-auto w-fit">
                  <HexIcon icon={Icon} size={52} iconSize={20} />
                </div>
                <p className="mt-5 text-[30px] font-extrabold leading-none" style={{ color: BRAND_DARK }}>
                  {value}
                </p>
                <p className="mt-2 text-[13px] text-neutral-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-10 text-white"
              style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
            >
              <div
                className="hidden sm:block absolute -right-10 -top-10 w-44 h-52 bg-white/10"
                style={{ clipPath: HEX }}
                aria-hidden="true"
              />
              <p className="relative text-[12px] font-bold tracking-[0.15em] uppercase text-white/75">Highest CTC</p>
              <p className="relative mt-2 text-[44px] md:text-[56px] font-extrabold leading-none">{program.highest.value}</p>
              <p className="relative mt-4 text-[15px] text-white/90">{program.highest.by}</p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold">
                {program.highest.tag === 'International offer' ? <Globe size={13} /> : <Award size={13} />}
                {program.highest.tag}
              </span>
            </div>

            <div className="rounded-3xl border border-neutral-100 p-8 shadow-sm">
              <p className="text-[12px] font-bold tracking-[0.15em] uppercase" style={{ color: BRAND }}>
                Placement rate by specialisation
              </p>
              <ul className="mt-5 space-y-4">
                {program.split.map(({ label, value }) => (
                  <li key={label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[14px] font-semibold" style={{ color: INK }}>
                        {label}
                      </span>
                      <span className="text-[18px] font-extrabold" style={{ color: BRAND_DARK }}>
                        {value}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full" style={{ background: TINT }}>
                      <div className="h-2 rounded-full" style={{ width: value, background: BRAND }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-[13px] text-neutral-500">
            CTC is shown in lakhs per annum. Accommodation and subsidised food are provided in addition to the fixed
            monetary component.
          </p>
        </div>
      </section>

      {/* ══════════ DEAN'S MESSAGE ══════════ */}
      <section className="py-20 md:py-24" style={{ background: '#f3faf9' }}>
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto w-[200px] h-[231px]">
              <div className="absolute inset-0" style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }} />
              <div className="absolute inset-[6px] overflow-hidden flex items-center justify-center" style={{ clipPath: HEX, background: TINT }}>
                <span className="absolute text-[44px] font-extrabold" style={{ color: BRAND_DARK }}>
                  SM
                </span>
                <Img src={`${S3}/Dr.%20Sarbesh%20Mishra.png`} alt="Dr. Sarbesh Mishra" className="relative" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <Heading eyebrow="From the Dean" title="Why employers keep coming back" />
              <Quote size={28} className="mt-6" style={{ color: `${BRAND}88` }} aria-hidden="true" />
              <div className="mt-2 space-y-4 text-[15.5px] leading-8 text-neutral-800">
                <p>
                  Our job is to help students choose the right career and to meet the industry's need for people
                  who are energetic, communicate well and are ready for the site and the boardroom. Construction
                  managers are in steady demand, and our programmes combine technical education with management.
                </p>
                <p>
                  For more than three decades we have updated the syllabus with industry needs in mind, and we
                  are the only institute in India offering this specialised programme for that long. Our
                  recruiters return because our alumni perform. We guide every student with three values:
                  sincerity, hard work and ethics.
                </p>
              </div>
              <p className="mt-5 font-bold" style={{ color: INK }}>
                Dr. Sarbesh Mishra
              </p>
              <p className="text-[13px] text-neutral-500">Dean, Executive Education, Placements & Industry Engagements</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ PLACEMENT SEASON ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="How it works" title="A placement season that runs all year" center />
          <p className="mt-5 mx-auto max-w-2xl text-center text-[15.5px] leading-8 text-neutral-700">
            Placements run from July–August to May–June in two phases. Students practise for months before either
            phase begins.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {SEASON.map(({ when, title, desc, icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="h-full bg-white rounded-3xl border border-neutral-100 p-7 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <HexIcon icon={icon} />
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: BRAND }}>
                      Step {i + 1}
                    </p>
                    <p className="text-[13px] font-semibold text-neutral-500">{when}</p>
                  </div>
                </div>
                <h3 className="mt-5 text-[18px] font-bold" style={{ color: INK }}>
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-7 text-neutral-600">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ RECRUITERS ══════════ */}
      <section id="recruit" className="py-20 md:py-24" style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 100%)` }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Recruiters" title="Who hires from campus" center />
            <p className="mt-5 mx-auto max-w-2xl text-center text-[15.5px] leading-8 text-neutral-700">
              More than 100 companies from India and overseas visit each year for placements, internships and
              collaborations.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {RECRUITERS.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-white rounded-2xl border border-neutral-100 pl-3 pr-6 py-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <HexIcon icon={HardHat} size={36} iconSize={15} />
                  <span className="text-[14.5px] font-bold" style={{ color: INK }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[13px] text-neutral-500">
              Hiring across: {SECTORS.join(', ')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CAMPUS FACILITIES FOR DRIVES ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="For recruiters" title="Everything a drive needs, in one block" center />
          <p className="mt-5 mx-auto max-w-2xl text-center text-[15.5px] leading-8 text-neutral-700">
            The BRAHMAM Block is set up so companies can run talks, tests, group discussions and interviews on the
            same day without leaving the building.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {VENUES.map(({ label, desc, icon }, i) => (
            <Reveal key={label} delay={(i % 4) * 70}>
              <div className="h-full bg-white rounded-3xl border border-neutral-100 py-7 px-6 text-center shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="mx-auto w-fit">
                  <HexIcon icon={icon} size={54} iconSize={21} />
                </div>
                <h3 className="mt-5 text-[16px] font-bold" style={{ color: INK }}>
                  {label}
                </h3>
                <p className="mt-1.5 text-[13px] leading-6 text-neutral-500">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ ALUMNI VOICES ══════════ */}
      <section className="py-20 md:py-24" style={{ background: '#f3faf9' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Alumni" title="What graduates say" center />
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {VOICES.map(({ name, batch, text }, i) => (
              <Reveal key={name} delay={i * 100}>
                <figure className="h-full bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm flex flex-col">
                  <Quote size={26} style={{ color: `${BRAND}99` }} aria-hidden="true" />
                  <blockquote className="mt-3 flex-1 text-[14.5px] leading-7 text-neutral-700">{text}</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-neutral-100">
                    <p className="text-[15px] font-bold" style={{ color: INK }}>
                      {name}
                    </p>
                    <p className="text-[12.5px]" style={{ color: BRAND_DARK }}>
                      {batch}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TEAM ══════════ */}
      <section id="team" className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Placement office" title="Meet the team" center />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-8">
          {TEAM.map(({ name, role, phone, phoneHref, email, photo, initials }, i) => (
            <Reveal key={name} delay={i * 100}>
              <div className="group h-full bg-white rounded-3xl border border-neutral-100 pt-8 pb-6 px-6 text-center shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative mx-auto w-[150px] h-[173px]">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                  />
                  <div
                    className="absolute inset-[5px] overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{ clipPath: HEX, background: TINT }}
                  >
                    <span className="absolute text-[34px] font-extrabold" style={{ color: BRAND_DARK }}>
                      {initials}
                    </span>
                    <Img src={photo} alt={name} className="relative grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>

                <h3 className="mt-6 text-[18px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                  {name}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-neutral-500 min-h-[40px]">{role}</p>

                <a
                  href={phoneHref}
                  className="mt-4 flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-[#d7efec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ background: TINT, outlineColor: BRAND }}
                >
                  <HexIcon icon={Phone} size={32} iconSize={13} />
                  <span className="min-w-0 text-[12.5px] font-semibold leading-snug" style={{ color: BRAND_DARK }}>
                    {phone}
                  </span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="mt-2.5 flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-[#d7efec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ background: TINT, outlineColor: BRAND }}
                >
                  <HexIcon icon={Mail} size={32} iconSize={13} />
                  <span className="min-w-0 text-[12.5px] font-semibold break-all leading-snug" style={{ color: BRAND_DARK }}>
                    {email}
                  </span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ REACH US ══════════ */}
      <section id="reach" className="pb-20 md:pb-28 max-w-[1300px] mx-auto px-6">
        <Reveal>
          <Heading eyebrow="Contact" title="How to reach the placement office" center />
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {CONTACT.map(({ label, icon, lines, hrefs }, i) => (
            <Reveal key={label} delay={i * 90}>
              <div className="h-full rounded-3xl p-8" style={{ background: TINT }}>
                <HexIcon icon={icon} size={48} iconSize={19} />
                <h3 className="mt-5 text-[18px] font-bold" style={{ color: INK }}>
                  {label}
                </h3>
                <div className="mt-3 space-y-1.5 text-[14px] leading-6 text-neutral-700">
                  {lines.map((line, idx) =>
                    hrefs ? (
                      <a key={line} href={hrefs[idx]} className="block font-semibold break-all hover:underline" style={{ color: BRAND_DARK }}>
                        {line}
                      </a>
                    ) : (
                      <p key={line}>{line}</p>
                    )
                  )}
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
            <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              Hiring construction and project talent?
            </h2>
            <p className="mt-4 text-white/85 text-[16px] leading-8">
              Register your company for the next placement season, or start your own journey with an admissions
              enquiry.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:placement.hyd@nicmar.ac.in"
                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                style={{ color: BRAND_DARK }}
              >
                Register as a recruiter
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                  <ArrowRight size={16} strokeWidth={2.6} />
                </span>
              </a>
              <Link
                to="/admissions"
                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
              >
                Admissions enquiry
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutTrainingAndPlacement;