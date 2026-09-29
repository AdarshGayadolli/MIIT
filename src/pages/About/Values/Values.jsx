import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Landmark,
    ShieldCheck,
    Quote,
    RefreshCcw,
    BarChart3,
    ScrollText,
    MessagesSquare,
    TrendingUp,
    BookOpenCheck,
    BadgeCheck,
    Timer,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Management & Principal page.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
    lab: u('photo-1581091226825-a6a2a5aee158', 900),
    students: u('photo-1522202176988-66273c2fd55f', 600),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

const QUALITY_OBJECTIVES = [
    {
        icon: TrendingUp,
        metric: '≥ 90%',
        title: 'Placement rate maintained yearly',
        desc: 'Tracked per batch and published publicly, not averaged across multiple years to hide a weak batch.',
    },
    {
        icon: BookOpenCheck,
        metric: '2×',
        title: 'Curriculum reviewed per year',
        desc: 'Every course is checked against current employer requirements at the start and midpoint of each academic year.',
    },
    {
        icon: BadgeCheck,
        metric: '100%',
        title: 'Faculty holding current industry certification',
        desc: "No instructor teaches a tool or platform they aren't currently certified or actively working with.",
    },
    {
        icon: Timer,
        metric: '< 48 hrs',
        title: 'Student grievance response time',
        desc: 'Academic or administrative complaints receive an initial response within two working days.',
    },
];

const CORE_VALUES = [
    {
        icon: RefreshCcw,
        title: 'Continuous improvement',
        desc: 'Every process — admissions, teaching, placement — is reviewed on a fixed schedule, not only when something breaks.',
    },
    {
        icon: BarChart3,
        title: 'Measurable outcomes',
        desc: 'We track results we can show, not intentions we can only describe.',
    },
    {
        icon: ScrollText,
        title: 'Compliance with standards',
        desc: 'Programs are built to meet recognized industry certification requirements, not just internal expectations.',
    },
    {
        icon: MessagesSquare,
        title: 'Stakeholder feedback',
        desc: 'Students, faculty, and hiring partners are formally surveyed each term, and that feedback shapes the next one.',
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
const Values = () => {
    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes vl-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .vl-float { animation: vl-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .vl-float { animation: none; } }
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
                            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-neutral-500 mb-7">
                                <Link to="/" className="inline-flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
                                    <Home size={14} /> Home
                                </Link>
                                <ChevronRight size={14} />
                                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                                    Quality Policy & Core Values
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <Landmark size={14} /> About us
                            </span>

                            <h1
                                className="text-[42px] sm:text-[54px] xl:text-[64px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                Quality policy & core values.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                How MIIT defines, measures, and holds itself to a standard of quality — not just as a statement,
                                but as targets we report against.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/training-placement/statistics"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    View placement statistics
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </Link>
                                <Link
                                    to="/about/vision-mission"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    Vision & Mission
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden vl-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.students} alt="Students learning together" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.lab} alt="Students in a training lab" />
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
                                <ShieldCheck size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Quality you can verify</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ QUALITY POLICY STATEMENT ══════════ */}
            <section
                className="relative py-20 md:py-24 overflow-hidden"
                style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
            >
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
                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                        <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-bold text-white/80">
                            <Quote size={16} /> Quality policy statement
                        </span>
                        <p className="mt-6 text-[24px] md:text-[34px] leading-[1.35] font-bold text-white tracking-tight">
                            MIIT is committed to delivering technical education that meets current industry standards, is
                            reviewed on a fixed schedule, and is measured by graduate employment outcomes — reported honestly,
                            whether or not the numbers are favorable.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ══════════ QUALITY OBJECTIVES ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Quality objectives" title="What we measure ourselves against" center />
                </Reveal>

                <div className="mt-14 grid sm:grid-cols-2 gap-6">
                    {QUALITY_OBJECTIVES.map(({ icon, metric, title, desc }, i) => (
                        <Reveal key={title} delay={(i % 2) * 100}>
                            <div className="group h-full flex items-start gap-5 bg-white rounded-3xl p-7 border border-neutral-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                                <HexIcon icon={icon} size={72} filled />
                                <div>
                                    <p className="text-[32px] font-extrabold leading-none" style={{ color: BRAND }}>
                                        {metric}
                                    </p>
                                    <h3 className="mt-3 text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                                        {title}
                                    </h3>
                                    <p className="mt-1.5 text-[14px] leading-7 text-neutral-600">{desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ══════════ CORE VALUES ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Core values" title="The standards behind the policy" center />
                    </Reveal>

                    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {CORE_VALUES.map(({ icon, title, desc }, i) => (
                            <Reveal key={title} delay={(i % 4) * 100}>
                                <div className="group text-center">
                                    <div className="mx-auto w-[92px] h-[106px]">
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
                            Want the numbers behind our placement claims?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Our full placement statistics are published and updated every term.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/training-placement/statistics"
                                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                                style={{ color: BRAND_DARK }}
                            >
                                View placement statistics
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                                    <ArrowRight size={16} strokeWidth={2.6} />
                                </span>
                            </Link>
                            <Link
                                to="/about/vision-mission"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Vision & mission
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Values;