import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Landmark,
    Users,
    Award,
    Target,
    CalendarCheck,
    BarChart3,
    Scale,
    Clock3,
    CalendarDays,
    FileText,
    BriefcaseBusiness,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const LINE = '#7cc4bc';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
    meeting: u('photo-1521737604893-d14cc237f11d', 900),
    team: u('photo-1522202176988-66273c2fd55f', 600),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const COMMITTEE_MEMBERS = [
    {
        name: 'Divya Pillai',
        role: 'Chair — Dean of Training & Placement',
        photo: u('photo-1580489944761-15a19d654956', 800),
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Placement Officer',
        photo: u('photo-1573497019940-1c28c88b4f3e', 500),
    },
    {
        name: 'Karthik Menon',
        role: 'Employer Relations Officer',
        photo: u('photo-1560250097-0b93528c311a', 500),
    },
    {
        name: 'Vikram Iyer',
        role: 'Faculty Representative, BIM',
        photo: u('photo-1519085360753-af0119f7cbe7', 500),
    },
    {
        name: 'Meera Pillai',
        role: 'Faculty Representative, Digital Marketing',
        photo: u('photo-1580489944761-15a19d654956', 500),
    },
];

const MANDATE = [
    {
        icon: Target,
        title: 'Employer matching',
        desc: 'Match each graduating batch to hiring partners based on skill fit, not just seniority or convenience.',
    },
    {
        icon: CalendarCheck,
        title: 'Drive scheduling',
        desc: "Plan and run on-campus and virtual placement drives so they don't clash with ongoing coursework.",
    },
    {
        icon: BarChart3,
        title: 'Outcome reporting',
        desc: 'Track and publish placement statistics per batch, honestly, every term — favorable or not.',
    },
    {
        icon: Scale,
        title: 'Grievance escalation',
        desc: 'Handle student complaints about the placement process itself and correct issues before the next drive.',
    },
];

const MEETING_CADENCE = [
    {
        icon: Clock3,
        freq: 'Weekly',
        desc: 'Internal sync on active drives, employer follow-ups, and student readiness.',
    },
    {
        icon: CalendarDays,
        freq: 'Monthly',
        desc: 'Full committee review of pipeline health and upcoming employer commitments.',
    },
    {
        icon: FileText,
        freq: 'Termly',
        desc: 'Outcome report compiled and published — see Placement Statistics for the latest.',
    },
];

const FACTS = [
    { value: String(COMMITTEE_MEMBERS.length), label: 'Committee members' },
    { value: 'Weekly', label: 'Internal sync cadence' },
    { value: '2', label: 'Program areas represented' },
    { value: 'Termly', label: 'Public outcome report' },
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
const PlacementCommittee = () => {
    const [chair, ...members] = COMMITTEE_MEMBERS;

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes pc-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .pc-float { animation: pc-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .pc-float { animation: none; } }
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
                                <Link to="/training-placement/about" className="hover:underline" style={{ color: BRAND }}>
                                    Training & Placement
                                </Link>
                                <ChevronRight size={14} />
                                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                                    Placement Committee
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <Landmark size={14} /> Training & Placement
                            </span>

                            <h1
                                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                The people running placements.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                A standing committee of placement staff and faculty representatives, accountable for matching
                                every graduating batch to real employer demand — not just running a job board.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#members"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Meet the committee
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <Link
                                    to="/training-placement/process"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    Placement process
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden pc-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Students and staff together" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.meeting} alt="Placement committee in discussion" />
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
                                <BriefcaseBusiness size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Placement-first committee</span>
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

            {/* ══════════ COMMITTEE MEMBERS ══════════ */}
            <section id="members" className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Membership" title="Who's on the committee" center />
                </Reveal>

                {/* Chair spotlight */}
                <Reveal delay={100}>
                    <div
                        className="relative mt-14 overflow-hidden rounded-[2rem] px-6 py-10 md:px-12 md:py-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center shadow-2xl shadow-teal-900/15"
                        style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
                    >
                        <div
                            className="hidden sm:block absolute -right-16 -top-16 w-64 h-72 bg-white/10"
                            style={{ clipPath: HEX }}
                            aria-hidden="true"
                        />
                        <div
                            className="hidden sm:block absolute right-40 -bottom-20 w-40 h-46 bg-white/10"
                            style={{ clipPath: HEX, height: 184 }}
                            aria-hidden="true"
                        />

                        <div className="relative mx-auto w-[210px] h-[243px] sm:w-[250px] sm:h-[289px]">
                            <div className="absolute inset-0 bg-white" style={{ clipPath: HEX }} />
                            <div className="absolute inset-[6px] overflow-hidden" style={{ clipPath: HEX, background: TINT }}>
                                <Img src={chair.photo} alt={chair.name} />
                            </div>
                        </div>

                        <div className="relative text-center md:text-left">
                            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-white/15 text-white">
                                <Award size={14} /> Committee Chair
                            </span>
                            <h3 className="mt-4 text-[30px] md:text-[40px] font-extrabold text-white leading-tight tracking-tight">
                                {chair.name}
                            </h3>
                            <p className="mt-1.5 text-[16px] font-semibold text-white/85">Dean of Training & Placement</p>
                            <p className="mt-4 text-[15px] leading-8 text-white/85 max-w-xl mx-auto md:mx-0">
                                Leads the committee, owns the relationship with hiring partners and signs off on every published
                                placement report.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* Other members */}
                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
                    {members.map(({ name, role, photo }, i) => (
                        <Reveal key={name} delay={(i % 4) * 100}>
                            <div className="group text-center">
                                <div className="relative mx-auto w-[170px] h-[196px]">
                                    <div
                                        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                                        style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                                    />
                                    <div
                                        className="absolute inset-[5px] overflow-hidden transition-transform duration-500 group-hover:scale-105"
                                        style={{ clipPath: HEX, background: TINT }}
                                    >
                                        <Img src={photo} alt={name} className="grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                                    {name}
                                </h3>
                                <p
                                    className="mt-2 inline-block text-[11.5px] font-bold leading-snug px-3 py-1 rounded-full"
                                    style={{ background: TINT, color: BRAND_DARK }}
                                >
                                    {role}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ══════════ MANDATE ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Mandate" title="What the committee is accountable for" center />
                    </Reveal>

                    <div className="mt-14 grid sm:grid-cols-2 gap-6">
                        {MANDATE.map(({ icon, title, desc }, i) => (
                            <Reveal key={title} delay={(i % 2) * 100}>
                                <div className="group relative h-full flex items-start gap-5 bg-white rounded-3xl p-7 border border-neutral-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                    <span
                                        className="absolute top-3 right-5 text-[44px] font-extrabold leading-none select-none"
                                        style={{ color: `${BRAND}1f` }}
                                        aria-hidden="true"
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <HexIcon icon={icon} size={72} filled />
                                    <div>
                                        <h3 className="text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                                            {title}
                                        </h3>
                                        <p className="mt-1.5 text-[14px] leading-7 text-neutral-600">{desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ MEETING CADENCE ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="How it operates" title="Meeting cadence" center />
                </Reveal>

                <div className="relative mt-16 grid md:grid-cols-3 gap-10 md:gap-6">
                    {/* connecting line (desktop) */}
                    <span
                        className="hidden md:block absolute top-[46px] left-[16%] right-[16%] h-[2px]"
                        style={{ background: `linear-gradient(90deg, ${LINE}, ${BRAND}, ${LINE})` }}
                        aria-hidden="true"
                    />

                    {MEETING_CADENCE.map(({ icon, freq, desc }, i) => (
                        <Reveal key={freq} delay={i * 130}>
                            <div className="group relative text-center px-2">
                                <div className="mx-auto w-[92px] h-[92px] relative">
                                    <HexIcon icon={icon} size={92} filled />
                                </div>
                                <p className="mt-6 text-[22px] font-extrabold" style={{ color: BRAND }}>
                                    {freq}
                                </p>
                                <p className="mt-2 mx-auto max-w-xs text-[14px] leading-7 text-neutral-600">{desc}</p>
                                <Link
                                    to={i === 2 ? '/training-placement/statistics' : '/training-placement/process'}
                                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                    style={{ color: BRAND }}
                                >
                                    {i === 2 ? 'See statistics' : 'See the process'} <ArrowRight size={14} />
                                </Link>
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
                            Have a concern about the placement process?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Reach out directly, or see how the full process works end to end.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                                style={{ color: BRAND_DARK }}
                            >
                                Contact us
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                                    <ArrowRight size={16} strokeWidth={2.6} />
                                </span>
                            </Link>
                            <Link
                                to="/training-placement/process"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Training & placement process
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default PlacementCommittee;