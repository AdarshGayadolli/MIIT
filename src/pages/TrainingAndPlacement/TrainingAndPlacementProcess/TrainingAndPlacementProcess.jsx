import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    ChevronDown,
    Home,
    Workflow,
    CalendarDays,
    ClipboardCheck,
    Mic,
    BriefcaseBusiness,
    GraduationCap,
    Award,
    Users,
    Building2,
    CheckCircle2,
    Mail,
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

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const FACTS = [
    { value: '2', label: 'Placement phases' },
    { value: 'Jul–Jun', label: 'Season length' },
    { value: '100+', label: 'Companies invited' },
    { value: '1 office', label: 'Single window for recruiters' },
];

const STEPS = [
    {
        title: 'The season opens',
        timing: 'July – August',
        icon: CalendarDays,
        desc: 'The placement season begins at the start of the academic year. Students are briefed on how the year will run and what recruiters expect.',
        owner: 'Placement Office',
        outputs: ['Season calendar shared', 'Mock test schedule begins'],
    },
    {
        title: 'Tests and group discussions',
        timing: 'Through the year',
        icon: ClipboardCheck,
        desc: 'Mock aptitude tests and simulated group discussions run alongside regular classes, so students are used to the formats companies use.',
        owner: 'Placement Office with faculty',
        outputs: ['Practice test results', 'GD feedback'],
    },
    {
        title: 'Interviews and personality development',
        timing: 'Through the year',
        icon: Mic,
        desc: 'Mock interviews and personality development courses build communication, confidence and the professional habits employers notice first.',
        owner: 'Placement Office with industry mentors',
        outputs: ['Interview practice', 'Communication coaching'],
    },
    {
        title: 'Internship',
        timing: 'After year one (two-year programmes)',
        icon: Building2,
        desc: 'Students on two-year programmes complete a mandatory internship that exposes them to functional areas inside a company. The placement office assists in securing it.',
        owner: 'Student, supported by Placement Office',
        outputs: ['Site or office experience', 'Employer exposure before drives'],
    },
    {
        title: 'Phase 1 drives',
        timing: 'Pre-final semester',
        icon: BriefcaseBusiness,
        desc: 'The first round of campus placements takes place before the final semester, with companies from the CRIP sector visiting campus.',
        owner: 'Placement Office and recruiters',
        outputs: ['First round of offers'],
    },
    {
        title: 'Phase 2 drives',
        timing: 'Final semester · closes May – June',
        icon: GraduationCap,
        desc: 'The second round is held for graduating students. It brings in national and international companies and closes the season.',
        owner: 'Placement Office and recruiters',
        outputs: ['Remaining offers', 'Season closes'],
    },
];

const ROLES = [
    {
        party: 'Students',
        icon: Users,
        items: [
            'Attend mock tests, group discussions and mock interviews',
            'Secure and complete the internship (two-year programmes)',
            'Prepare for both placement phases',
        ],
    },
    {
        party: 'Placement Office',
        icon: BriefcaseBusiness,
        items: [
            'Act as the single window for company communication',
            'Run preparation sessions through the year',
            'Invite recruiters and coordinate both phases',
        ],
    },
    {
        party: 'Recruiters',
        icon: Building2,
        items: [
            'Contact the placement office to register for the season',
            'Share role details and hiring timelines',
            'Use campus facilities to run tests and interviews',
        ],
    },
];

const FAQS = [
    {
        q: 'When does the placement season run?',
        a: 'It runs year-round, starting in July–August and ending in May–June.',
    },
    {
        q: 'How many placement phases are there?',
        a: 'Two. Phase 1 happens in the pre-final semester, and Phase 2 in the final semester for graduating students.',
    },
    {
        q: 'Is the internship compulsory?',
        a: 'Yes, for students on two-year programmes. It takes place after the first year, and the placement office helps students find one.',
    },
    {
        q: 'How can a company take part in campus placements?',
        a: 'Write to the placement office at placement.hyd@nicmar.ac.in or call 040 6735 9509. It coordinates all communication between companies and the university.',
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
const PlacementProcess = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes pp-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .pp-float { animation: pp-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .pp-float { animation: none; } }
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
                                <Link to="/placements" className="hover:underline" style={{ color: BRAND }}>
                                    Placements
                                </Link>
                                <ChevronRight size={14} />
                                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                                    Process
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <Workflow size={14} /> Placement process
                            </span>

                            <h1
                                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                One year of preparation, two rounds of offers.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                Here is how a placement season runs from the first mock test to the last offer, and who is
                                responsible at each step.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#steps"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    View the steps
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <Link
                                    to="/placements"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    Placement results
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden pp-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Students in a group discussion" />
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
                                <CalendarDays size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">July to June, every year</span>
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

            {/* ══════════ TIMELINE ══════════ */}
            <section id="steps" className="max-w-[1000px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="The process" title="Six steps through the season" center />
                </Reveal>

                <div className="relative mt-14">
                    <div
                        className="absolute left-[29px] md:left-[35px] top-6 bottom-6 w-[2px]"
                        style={{ background: `linear-gradient(${BRAND}, #b8dcd7)` }}
                        aria-hidden="true"
                    />
                    <ol className="space-y-8">
                        {STEPS.map(({ title, timing, icon, desc, owner, outputs }, i) => (
                            <li key={title} className="relative flex gap-5 md:gap-8">
                                <div className="relative z-10 shrink-0 bg-white py-1">
                                    <HexIcon icon={icon} size={56} iconSize={22} />
                                </div>
                                <Reveal className="flex-1 min-w-0">
                                    <div className="bg-white rounded-3xl border border-neutral-100 p-7 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                                        <div className="flex flex-wrap items-center gap-2.5">
                                            <span
                                                className="text-[10.5px] tracking-[0.12em] uppercase font-bold px-3 py-1 rounded-full"
                                                style={{ background: TINT, color: BRAND_DARK }}
                                            >
                                                Step {i + 1}
                                            </span>
                                            <span className="text-[13px] font-semibold text-neutral-500">{timing}</span>
                                        </div>
                                        <h3 className="mt-3 text-[20px] font-bold" style={{ color: INK }}>
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-[14.5px] leading-7 text-neutral-600">{desc}</p>

                                        <ul className="mt-4 flex flex-wrap gap-2">
                                            {outputs.map((o) => (
                                                <li
                                                    key={o}
                                                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold rounded-full px-3 py-1.5"
                                                    style={{ background: TINT, color: BRAND_DARK }}
                                                >
                                                    <CheckCircle2 size={13} strokeWidth={2.2} />
                                                    {o}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-4 text-[13px] text-neutral-500">
                                            <b style={{ color: INK }}>Led by:</b> {owner}
                                        </p>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ══════════ ROLES ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f3faf9' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Who does what" title="Responsibilities at a glance" center />
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {ROLES.map(({ party, icon, items }, i) => (
                            <Reveal key={party} delay={i * 100}>
                                <div className="h-full bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300">
                                    <HexIcon icon={icon} size={50} iconSize={20} />
                                    <h3 className="mt-5 text-[19px] font-bold" style={{ color: INK }}>
                                        {party}
                                    </h3>
                                    <ul className="mt-4 space-y-3">
                                        {items.map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-[14px] leading-6 text-neutral-600">
                                                <CheckCircle2 size={16} strokeWidth={2.2} className="mt-1 shrink-0" style={{ color: BRAND }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ FAQ ══════════ */}
            <section className="max-w-[860px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Questions" title="About the process" center />
                </Reveal>
                <div className="mt-12 space-y-3">
                    {FAQS.map(({ q, a }, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <div
                                key={q}
                                className="rounded-2xl border-2 overflow-hidden transition-colors"
                                style={{ borderColor: isOpen ? BRAND : '#d6e9e6' }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
                                    style={{ outlineColor: BRAND }}
                                >
                                    <span className="text-[15px] font-bold" style={{ color: INK }}>
                                        {q}
                                    </span>
                                    <span
                                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                        style={{ background: isOpen ? BRAND : TINT, color: isOpen ? '#fff' : BRAND_DARK }}
                                    >
                                        <ChevronDown size={16} strokeWidth={2.6} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-5">
                                        <p className="text-[14.5px] leading-7 text-neutral-600">{a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
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
                            Want to join the next season?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Recruiters can register with the placement office. Students can see how past batches did.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:placement.hyd@nicmar.ac.in"
                                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                                style={{ color: BRAND_DARK }}
                            >
                                <Mail size={16} />
                                Email the placement office
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                                    <ArrowRight size={16} strokeWidth={2.6} />
                                </span>
                            </a>
                            <Link
                                to="/placements"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Placement results
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default PlacementProcess;