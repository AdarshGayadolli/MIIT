import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Landmark,
    Network,
    Users,
    GraduationCap,
    BriefcaseBusiness,
    ClipboardCheck,
    Scale,
    Layers,
    UserCheck,
    Eye,
    MessagesSquare,
    Building2,
    BookOpenCheck,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const DEEP = '#00332e';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const LINE = '#7cc4bc';

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
const GOVERNING_BODY = [
    { name: 'Rajeev Menon', role: 'Chairman' },
    { name: 'Ananya Krishnan', role: 'Managing Director' },
];

const LEADERSHIP_TIER = [
    { name: 'Suresh Bhatt', role: 'Principal', reportsTo: 'Chairman & MD' },
    { name: 'Divya Pillai', role: 'Dean of Training & Placement', reportsTo: 'Chairman & MD' },
];

const DEPARTMENTS = [
    {
        icon: BookOpenCheck,
        head: 'Head of Academics',
        reportsTo: 'Principal',
        units: ['BIM for Construction faculty', 'Digital Marketing faculty', 'Academic review committee'],
    },
    {
        icon: Building2,
        head: 'Head of Administration',
        reportsTo: 'Principal',
        units: ['Admissions office', 'Finance & accounts', 'Student support & grievance cell'],
    },
    {
        icon: BriefcaseBusiness,
        head: 'Head of Training & Placement',
        reportsTo: 'Dean of Training & Placement',
        units: ['Placement committee', 'Employer relations', 'Career counselling'],
    },
];

const COMMITTEES = [
    {
        icon: GraduationCap,
        title: 'Academic Review Committee',
        desc: 'Chaired by the Principal. Reviews and approves curriculum changes each term against current employer requirements.',
        chair: 'Suresh Bhatt, Principal',
    },
    {
        icon: BriefcaseBusiness,
        title: 'Placement Committee',
        desc: 'Oversees the training-to-placement pipeline and reports batch-level outcomes to the Dean of Training & Placement.',
        chair: 'Divya Pillai, Dean of Training & Placement',
    },
    {
        icon: Scale,
        title: 'Grievance Redressal Committee',
        desc: 'Handles student and staff complaints, with a mandated response within 48 hours of filing.',
        chair: 'Ananya Krishnan, Managing Director',
    },
];

const PRINCIPLES = [
    { icon: Layers, title: 'Short reporting lines', desc: 'No more than three levels between any staff member and the Chairman, so issues reach decision-makers fast.' },
    { icon: UserCheck, title: 'Defined ownership', desc: 'Every department has one named head accountable for its outcomes — no shared or ambiguous ownership.' },
    { icon: MessagesSquare, title: 'Committee oversight', desc: 'Cross-functional decisions (curriculum, placement, grievances) run through standing committees, not ad hoc calls.' },
    { icon: Eye, title: 'Published structure', desc: 'This chart is kept current and public, so students and staff always know who owns what.' },
];

const FACTS = [
    { value: '3', label: 'Reporting levels max' },
    { value: '3', label: 'Department heads' },
    { value: '3', label: 'Standing committees' },
    { value: 'Termly', label: 'Structure review cycle' },
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

const initials = (name) =>
    name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('');

/* ── Chart pieces ───────────────────────────────────────────── */

/* Person card with hexagon initials avatar */
const PersonNode = ({ name, role, tone = 'light' }) => {
    const styles = {
        dark: { card: `linear-gradient(120deg, ${DEEP}, ${BRAND_DARK})`, name: '#fff', role: 'rgba(255,255,255,0.75)', hex: 'rgba(255,255,255,0.15)', hexText: '#fff', border: 'transparent' },
        accent: { card: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})`, name: '#fff', role: 'rgba(255,255,255,0.8)', hex: 'rgba(255,255,255,0.2)', hexText: '#fff', border: 'transparent' },
        light: { card: '#fff', name: INK, role: BRAND_DARK, hex: TINT, hexText: BRAND_DARK, border: '#d6e9e6' },
    }[tone];

    return (
        <div
            className="group flex items-center gap-3.5 rounded-2xl px-4 py-3.5 min-w-[236px] border shadow-lg shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: styles.card, borderColor: styles.border }}
        >
            <span
                className="shrink-0 w-[48px] h-[55px] flex items-center justify-center text-[15px] font-extrabold transition-transform duration-300 group-hover:scale-110"
                style={{ clipPath: HEX, background: styles.hex, color: styles.hexText }}
            >
                {initials(name)}
            </span>
            <span className="min-w-0">
                <span className="block text-[14.5px] font-bold leading-tight" style={{ color: styles.name }}>
                    {name}
                </span>
                <span className="block mt-1 text-[12px] font-medium leading-tight" style={{ color: styles.role }}>
                    {role}
                </span>
            </span>
        </div>
    );
};

/* Vertical connector with a small diamond at the bottom */
const VLine = ({ height = 36 }) => (
    <div className="relative flex justify-center" style={{ height }} aria-hidden="true">
        <span className="w-[2px] h-full" style={{ background: `linear-gradient(${LINE}, ${BRAND})` }} />
        <span
            className="absolute -bottom-1 w-2.5 h-2.5 rotate-45"
            style={{ background: BRAND }}
        />
    </div>
);

/* Horizontal link between two sibling nodes */
const HLink = () => (
    <span className="hidden sm:block self-center w-8 h-[2px]" style={{ background: LINE }} aria-hidden="true" />
);

const TierLabel = ({ children }) => (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: BRAND_DARK }}>
        {children}
    </p>
);

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const OrganizationChart = () => {
    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes oc-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .oc-float { animation: oc-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .oc-float { animation: none; } }
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
                                <span>Administration</span>
                                <ChevronRight size={14} />
                                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                                    Organization Chart
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <Landmark size={14} /> Administration
                            </span>

                            <h1
                                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                Who reports to whom, and why it stays simple.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                MIIT is kept deliberately flat. Every role below has a named owner, a short reporting line, and a
                                committee where cross-team decisions actually get made.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#chart"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    View the chart
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <Link
                                    to="/administration/administrative-staff"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    Administrative staff
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden oc-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Team discussion" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.office} alt="MIIT administration team at work" />
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
                                <Network size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Max 3 reporting levels</span>
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

            {/* ══════════ ORG CHART ══════════ */}
            <section id="chart" className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Structure" title="The reporting chart" center />
                </Reveal>

                <Reveal delay={120}>
                    <div
                        className="relative mt-14 rounded-[2rem] border overflow-hidden"
                        style={{ borderColor: '#d6e9e6', background: 'linear-gradient(160deg,#f6fbfa 0%,#ffffff 60%,#f1f9f8 100%)' }}
                    >
                        {/* subtle hex watermarks */}
                        <div
                            className="hidden md:block absolute -top-16 -right-16 w-64 h-72 opacity-[0.07]"
                            style={{ clipPath: HEX, background: BRAND }}
                            aria-hidden="true"
                        />
                        <div
                            className="hidden md:block absolute -bottom-20 -left-16 w-56 h-64 opacity-[0.06]"
                            style={{ clipPath: HEX, background: BRAND_DARK }}
                            aria-hidden="true"
                        />

                        <div className="relative overflow-x-auto px-6 py-12 md:py-16">
                            <div className="min-w-[860px] flex flex-col items-center">
                                {/* Tier 1 */}
                                <TierLabel>Governing body</TierLabel>
                                <div className="flex items-stretch gap-0">
                                    <PersonNode {...GOVERNING_BODY[0]} tone="dark" />
                                    <HLink />
                                    <PersonNode {...GOVERNING_BODY[1]} tone="dark" />
                                </div>

                                <VLine height={44} />

                                {/* Tier 2 */}
                                <TierLabel>Leadership</TierLabel>
                                <div className="flex items-stretch gap-0">
                                    <PersonNode {...LEADERSHIP_TIER[0]} tone="accent" />
                                    <HLink />
                                    <PersonNode {...LEADERSHIP_TIER[1]} tone="accent" />
                                </div>
                                <p className="mt-3 text-[12px] text-neutral-500">Both report to the Chairman &amp; MD</p>

                                <VLine height={44} />

                                {/* Tier 3 — branching bus */}
                                <TierLabel>Department heads</TierLabel>
                                <div className="grid grid-cols-3 w-full max-w-[920px]">
                                    {DEPARTMENTS.map((d, i) => (
                                        <div key={d.head} className="relative pt-9 px-3 flex flex-col items-center">
                                            {/* horizontal bus segment */}
                                            <span
                                                className="absolute top-0 h-[2px]"
                                                style={{
                                                    background: LINE,
                                                    left: i === 0 ? '50%' : 0,
                                                    right: i === DEPARTMENTS.length - 1 ? '50%' : 0,
                                                }}
                                                aria-hidden="true"
                                            />
                                            {/* vertical drop */}
                                            <span
                                                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-9"
                                                style={{ background: `linear-gradient(${LINE}, ${BRAND})` }}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="absolute top-[30px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45"
                                                style={{ background: BRAND }}
                                                aria-hidden="true"
                                            />

                                            <div className="group w-full bg-white rounded-3xl border p-5 shadow-lg shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: '#d6e9e6' }}>
                                                <div className="flex items-center gap-3">
                                                    <HexIcon icon={d.icon} size={52} filled />
                                                    <div className="min-w-0">
                                                        <p className="text-[14.5px] font-bold leading-tight" style={{ color: INK }}>
                                                            {d.head}
                                                        </p>
                                                        <p
                                                            className="mt-1.5 inline-block text-[10.5px] font-bold px-2 py-0.5 rounded-full"
                                                            style={{ background: TINT, color: BRAND_DARK }}
                                                        >
                                                            Reports to {d.reportsTo}
                                                        </p>
                                                    </div>
                                                </div>

                                                <ul className="mt-4 pt-4 border-t border-dashed space-y-2" style={{ borderColor: '#bfdcd8' }}>
                                                    {d.units.map((unit) => (
                                                        <li key={unit} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-neutral-600">
                                                            <span
                                                                className="mt-[3px] w-2.5 h-3 shrink-0"
                                                                style={{ clipPath: HEX, background: BRAND }}
                                                            />
                                                            {unit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <p className="mt-4 text-center text-[12.5px] text-neutral-400">
                    Scroll horizontally on smaller screens to view the full chart.
                </p>
            </section>

            {/* ══════════ STANDING COMMITTEES ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Cross-functional decisions" title="Standing committees" center />
                    </Reveal>

                    <div className="mt-14 grid md:grid-cols-3 gap-6">
                        {COMMITTEES.map(({ icon, title, desc, chair }, i) => (
                            <Reveal key={title} delay={i * 110}>
                                <div className="group h-full bg-white rounded-3xl p-7 border border-neutral-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                    <HexIcon icon={icon} size={72} filled />
                                    <h3 className="mt-5 text-[18px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-[14px] leading-7 text-neutral-600 flex-1">{desc}</p>
                                    <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3">
                                        <span
                                            className="shrink-0 w-9 h-[41px] flex items-center justify-center text-[11px] font-extrabold"
                                            style={{ clipPath: HEX, background: TINT, color: BRAND_DARK }}
                                        >
                                            {initials(chair.split(',')[0])}
                                        </span>
                                        <div>
                                            <p className="text-[10.5px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                                                Chair
                                            </p>
                                            <p className="text-[13px] font-semibold leading-tight" style={{ color: INK }}>
                                                {chair}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ DESIGN PRINCIPLES ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Design principles" title="Why the structure looks like this" center />
                </Reveal>

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {PRINCIPLES.map(({ icon, title, desc }, i) => (
                        <Reveal key={title} delay={(i % 4) * 100}>
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
                            Not sure who to reach out to?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Contact us and we'll route your query to the right department head.
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
                                to="/administration/administrative-staff"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Administrative staff
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default OrganizationChart;