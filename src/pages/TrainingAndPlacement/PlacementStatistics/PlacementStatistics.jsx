import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    BarChart3,
    TrendingUp,
    Award,
    Globe,
    HardHat,
    GraduationCap,
    Info,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & AdministrativeStaff.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const BRAND_LIGHT = '#80cbc4';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
    office: u('photo-1521737604893-d14cc237f11d', 900),
    team: u('photo-1522202176988-66273c2fd55f', 600),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA (CTC in lakhs per annum)
   ───────────────────────────────────────────────────────────── */
const BATCHES = [
    {
        key: 'mba',
        short: 'MBA',
        label: 'MBA · ACM & APM',
        title: 'MBA in Advanced Construction Management and Advanced Project Management',
        batch: '2024–2026',
        rows: [
            { group: 'ACM', rate: 99.04 },
            { group: 'APM', rate: 100 },
            { group: 'Combined', rate: 99.22, total: true },
        ],
        ctc: { median: 8.0, mean: 9.94, top20: 17.95, highest: 25.27 },
        highestBy: 'Azizi Developments LLC, Dubai (international)',
    },
    {
        key: 'pgd',
        short: 'PGD',
        label: 'PGD · QSCM & HSEM',
        title: 'PGD in Quantity Surveying & Contract Management and Health, Safety & Environment Management',
        batch: '2025–2026',
        rows: [
            { group: 'QSCM', rate: 97.26 },
            { group: 'HSEM', rate: 100 },
            { group: 'Combined', rate: 97.61, total: true },
        ],
        ctc: { median: 7.15, mean: 8.02, top20: 12.34, highest: 10.0 },
        highestBy: 'Birla Estates',
    },
];

const CTC_METRICS = [
    { key: 'median', label: 'Median CTC' },
    { key: 'mean', label: 'Mean CTC, overall' },
    { key: 'top20', label: 'Mean CTC, top 20%' },
    { key: 'highest', label: 'Highest CTC' },
];

const FACTS = [
    { value: '99.22%', label: 'MBA placed, 2024–26' },
    { value: '97.61%', label: 'PGD placed, 2025–26' },
    { value: '25.27 LPA', label: 'Highest CTC' },
    { value: '100+', label: 'Recruiters every year' },
];

const RECRUITERS = [
    'L&T Construction',
    'Shapoorji Pallonji Group',
    'TATA Projects',
    'Gulf Contracting Company',
    'Azizi Developments',
    'Birla Estates',
];

const READING_NOTES = [
    'CTC figures are in lakhs per annum (LPA).',
    'Accommodation and subsidised food are provided in addition to the fixed monetary component.',
    'The median is the typical offer. The top 20% mean shows what the strongest offers look like.',
    'Placement rates are reported per specialisation and combined for each programme.',
];

const MAX_CTC = Math.max(...BATCHES.flatMap((b) => Object.values(b.ctc)));
const fmt = (n) => `${n.toFixed(2)}`;

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
const PlacementStatistics = () => {
    const [filter, setFilter] = useState('all');

    const tableBatches = filter === 'all' ? BATCHES : BATCHES.filter((b) => b.key === filter);

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes ps-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .ps-float { animation: ps-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ps-float { animation: none; } }
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
                                    Statistics
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <BarChart3 size={14} /> Placement statistics
                            </span>

                            <h1
                                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                The numbers behind every offer.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                Placement rates and salary figures for our latest MBA and PGD batches, broken down by
                                specialisation, so you can see what a typical outcome looks like and what the best ones reach.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#rates"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    See the results
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <Link
                                    to="/placements/process"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    How placements work
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden ps-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Students at a campus drive" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.office} alt="Placement office" />
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
                                <Award size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Up to 25.27 LPA</span>
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

            {/* ══════════ PLACEMENT RATES ══════════ */}
            <section id="rates" className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Placement rate" title="Share of students placed" center />
                </Reveal>

                <div className="mt-12 grid lg:grid-cols-2 gap-6">
                    {BATCHES.map((b, i) => (
                        <Reveal key={b.key} delay={i * 100}>
                            <div className="h-full bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <HexIcon icon={GraduationCap} size={48} iconSize={19} />
                                    <div>
                                        <p className="text-[12px] font-bold tracking-[0.12em] uppercase" style={{ color: BRAND }}>
                                            Batch {b.batch}
                                        </p>
                                        <h3 className="mt-1 text-[16px] font-bold leading-snug" style={{ color: INK }}>
                                            {b.title}
                                        </h3>
                                    </div>
                                </div>

                                <ul className="mt-7 space-y-5">
                                    {b.rows.map(({ group, rate, total }) => (
                                        <li key={group}>
                                            <div className="flex items-baseline justify-between">
                                                <span className={`text-[14px] ${total ? 'font-extrabold' : 'font-semibold'}`} style={{ color: INK }}>
                                                    {group}
                                                </span>
                                                <span className="text-[20px] font-extrabold" style={{ color: BRAND_DARK }}>
                                                    {rate}%
                                                </span>
                                            </div>
                                            <div className="mt-2 h-2.5 rounded-full" style={{ background: TINT }}>
                                                <div
                                                    className="h-2.5 rounded-full"
                                                    style={{ width: `${rate}%`, background: total ? BRAND_DARK : BRAND }}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ══════════ SALARY COMPARISON ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f3faf9' }}>
                <div className="max-w-[1100px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Compensation" title="CTC at a glance, in LPA" center />
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-[13px] font-semibold" style={{ color: INK }}>
                            <span className="inline-flex items-center gap-2">
                                <span className="w-3.5 h-3.5 rounded-full" style={{ background: BRAND_DARK }} /> MBA 2024–26
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span className="w-3.5 h-3.5 rounded-full" style={{ background: BRAND_LIGHT }} /> PGD 2025–26
                            </span>
                        </div>

                        <div className="mt-8 bg-white rounded-3xl border border-neutral-100 p-7 md:p-10 shadow-sm space-y-8">
                            {CTC_METRICS.map(({ key, label }) => (
                                <div key={key}>
                                    <p className="text-[14px] font-bold" style={{ color: INK }}>
                                        {label}
                                    </p>
                                    <div className="mt-3 space-y-2.5">
                                        {BATCHES.map((b, idx) => {
                                            const val = b.ctc[key];
                                            return (
                                                <div key={b.key} className="flex items-center gap-3">
                                                    <span className="w-10 shrink-0 text-[12px] font-semibold text-neutral-500">{b.short}</span>
                                                    <div className="flex-1 h-7 rounded-full" style={{ background: TINT }}>
                                                        <div
                                                            className="h-7 rounded-full"
                                                            style={{
                                                                width: `${(val / MAX_CTC) * 100}%`,
                                                                minWidth: '3rem',
                                                                background: idx === 0 ? BRAND_DARK : BRAND_LIGHT,
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="w-16 shrink-0 text-right text-[14px] font-extrabold" style={{ color: BRAND_DARK }}>
                                                        {fmt(val)}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        {BATCHES.map((b, i) => (
                            <Reveal key={b.key} delay={i * 100}>
                                <div
                                    className="relative overflow-hidden rounded-3xl p-8 text-white h-full"
                                    style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
                                >
                                    <div
                                        className="hidden sm:block absolute -right-10 -top-10 w-40 h-48 bg-white/10"
                                        style={{ clipPath: HEX }}
                                        aria-hidden="true"
                                    />
                                    <p className="relative text-[12px] font-bold tracking-[0.15em] uppercase text-white/75">
                                        Highest CTC, {b.short} {b.batch}
                                    </p>
                                    <p className="relative mt-2 text-[44px] font-extrabold leading-none">{fmt(b.ctc.highest)} LPA</p>
                                    <p className="relative mt-4 inline-flex items-center gap-2 text-[14px] text-white/90">
                                        {b.key === 'mba' ? <Globe size={15} /> : <Award size={15} />}
                                        {b.highestBy}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ DATA TABLE ══════════ */}
            <section className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Full data" title="Batch results table" center />
                </Reveal>

                <Reveal delay={100}>
                    <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter by programme">
                        {[{ key: 'all', label: 'All programmes' }, ...BATCHES.map((b) => ({ key: b.key, label: b.label }))].map(({ key, label }) => {
                            const active = filter === key;
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setFilter(key)}
                                    className="rounded-full px-5 py-2.5 text-[13px] font-bold border-2 transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={{
                                        background: active ? BRAND : '#fff',
                                        borderColor: active ? BRAND : '#d6e9e6',
                                        color: active ? '#fff' : BRAND_DARK,
                                        outlineColor: BRAND,
                                    }}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <div className="mt-8 overflow-x-auto rounded-3xl border border-neutral-100 shadow-sm">
                    <table className="w-full min-w-[640px] text-left border-collapse">
                        <thead>
                            <tr style={{ background: TINT }}>
                                {['Programme', 'Batch', 'Group', 'Placement rate'].map((h) => (
                                    <th key={h} className="px-6 py-4 text-[12px] tracking-[0.1em] uppercase font-bold" style={{ color: BRAND_DARK }}>
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableBatches.flatMap((b) =>
                                b.rows.map(({ group, rate, total }) => (
                                    <tr key={`${b.key}-${group}`} className="border-t border-neutral-100" style={total ? { background: '#f3faf9' } : undefined}>
                                        <td className="px-6 py-3.5 text-[14px] font-semibold" style={{ color: INK }}>
                                            {b.short}
                                        </td>
                                        <td className="px-6 py-3.5 text-[14px] text-neutral-600">{b.batch}</td>
                                        <td className={`px-6 py-3.5 text-[14px] ${total ? 'font-bold' : ''} text-neutral-700`}>{group}</td>
                                        <td className="px-6 py-3.5 text-[14px] font-extrabold" style={{ color: BRAND_DARK }}>
                                            {rate}%
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ══════════ RECRUITERS ══════════ */}
            <section className="py-20 md:py-24" style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 100%)` }}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Recruiters" title="Companies behind these offers" center />
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
                    </Reveal>
                </div>
            </section>

            {/* ══════════ HOW TO READ ══════════ */}
            <section className="max-w-[860px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Notes" title="How to read these numbers" center />
                </Reveal>
                <Reveal delay={100}>
                    <div
                        className="relative mt-10 overflow-hidden rounded-3xl p-8 md:p-10 text-white"
                        style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
                    >
                        <div
                            className="hidden sm:block absolute -right-12 -bottom-12 w-44 h-52 bg-white/10"
                            style={{ clipPath: HEX }}
                            aria-hidden="true"
                        />
                        <ul className="relative space-y-4">
                            {READING_NOTES.map((n) => (
                                <li key={n} className="flex items-start gap-3 text-[14.5px] leading-7 text-white/90">
                                    <Info size={17} className="mt-1 shrink-0" strokeWidth={2} />
                                    {n}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
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
                            Want to be in next year's numbers?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Start an admissions enquiry, or talk to the placement office about hiring from campus.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/admissions"
                                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                                style={{ color: BRAND_DARK }}
                            >
                                Start admissions enquiry
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                                    <ArrowRight size={16} strokeWidth={2.6} />
                                </span>
                            </Link>
                            <Link
                                to="/placements"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Placement overview
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default PlacementStatistics;