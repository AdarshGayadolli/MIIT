import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    ChevronDown,
    Home,
    Landmark,
    Send,
    MessagesSquare,
    FileCheck,
    BadgeCheck,
    Building2,
    Megaphone,
    Clock3,
    Users,
    GraduationCap,
    CalendarDays,
    Check,
    FileText,
    Phone,
    Mail,
    User,
    PartyPopper,
    ShieldCheck,
    Layers,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const LINE = '#cfe5e2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
    main: u('photo-1523240795612-9a054b0db644', 900),
    small: u('photo-1522202176988-66273c2fd55f', 600),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const QUICK_FACTS = [
    { value: '2', label: 'Programs offered' },
    { value: '≥ 90%', label: 'Placement rate' },
    { value: '3', label: 'Intakes per year' },
    { value: '< 48 hrs', label: 'Enquiry response time' },
];

const PROCESS_STEPS = [
    {
        icon: Send,
        title: 'Submit your enquiry',
        desc: 'Fill out the enquiry form below or call our hotline. A counsellor gets in touch within two working days.',
    },
    {
        icon: MessagesSquare,
        title: 'Counselling session',
        desc: 'A one-on-one session to walk through program fit, batch timings, fees, and career outcomes for your goals.',
    },
    {
        icon: FileCheck,
        title: 'Document verification',
        desc: 'Submit your academic records and ID proof for verification. Our team confirms eligibility for your chosen program.',
    },
    {
        icon: BadgeCheck,
        title: 'Seat confirmation',
        desc: 'Pay the admission fee to lock your seat in the next available batch and receive your onboarding schedule.',
    },
];

const PROGRAMS = [
    {
        icon: Building2,
        name: 'BIM for Construction',
        duration: '6 months',
        eligibility: 'Diploma or degree in Civil Engineering, Architecture, or a related field',
        intake: '30 seats per batch',
        highlights: [
            'Revit, Navisworks, and BIM 360 coverage',
            'Live client project in the final term',
            'Placement support with 50+ hiring partners',
        ],
        link: '/departments/bim-construction',
    },
    {
        icon: Megaphone,
        name: 'Digital Marketing',
        duration: '4 months',
        eligibility: 'Any graduate or final-year student, no prior marketing background required',
        intake: '30 seats per batch',
        highlights: [
            'Google Ads, SEMrush, and analytics tools',
            'Run a real campaign with a live budget',
            'Portfolio review before placement drives',
        ],
        link: '/departments/digital-marketing',
    },
];

const KEY_DATES = [
    { label: 'Winter intake enquiry deadline', month: 'Nov', day: '15', kind: 'deadline' },
    { label: 'Winter batch starts', month: 'Dec', day: '1', kind: 'start' },
    { label: 'Summer intake enquiry deadline', month: 'Mar', day: '15', kind: 'deadline' },
    { label: 'Summer batch starts', month: 'Apr', day: '1', kind: 'start' },
];

const DOCUMENTS = [
    'Government-issued photo ID (Aadhaar, PAN, or passport)',
    'Latest academic transcript or marksheet',
    'Passport-size photographs (2)',
    'Address proof',
];

const FAQS = [
    {
        q: 'Can I apply if I have a work gap?',
        a: "Yes. We don't screen on work gaps — eligibility is based on your academic background and the specific program's requirements.",
    },
    {
        q: 'Is there an entrance test?',
        a: 'No written entrance test. Admission is based on the counselling session and document verification.',
    },
    {
        q: 'Are batch timings flexible for working professionals?',
        a: 'Both programs run weekday-evening and weekend batches. Your counsellor will confirm current availability during your session.',
    },
    {
        q: 'What happens if I fail document verification?',
        a: "We'll let you know exactly what's missing or mismatched, and you'll get a chance to resubmit before your seat hold expires.",
    },
];

const PERKS = [
    { icon: ShieldCheck, text: 'No entrance test' },
    { icon: Clock3, text: 'Evening & weekend batches' },
    { icon: Users, text: '30 seats per batch' },
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

const Field = ({ label, icon: Icon, children }) => (
    <label className="block">
        <span className="block text-[12px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: BRAND_DARK }}>
            {label}
        </span>
        <span className="relative block">
            <Icon size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
            {children}
        </span>
    </label>
);

const inputClass =
    'w-full rounded-2xl border-2 bg-white pl-11 pr-4 py-3 text-[14.5px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#009688]';

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const Admissions = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [checked, setChecked] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', email: '', program: 'BIM for Construction' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Wire this up to your enquiry API / backend
        console.log('Admissions enquiry submitted:', form);
        setSubmitted(true);
    };

    const resetForm = () => {
        setForm({ name: '', phone: '', email: '', program: 'BIM for Construction' });
        setSubmitted(false);
    };

    const toggleDoc = (i) =>
        setChecked((prev) => (prev.includes(i) ? prev.filter((n) => n !== i) : [...prev, i]));

    const docProgress = (checked.length / DOCUMENTS.length) * 100;
    const stepProgress = (activeStep / (PROCESS_STEPS.length - 1)) * 100;

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes ad-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .ad-float { animation: ad-float 5s ease-in-out infinite; }
        @keyframes ad-pop { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ad-pop { animation: ad-pop 420ms ease-out both; }
        @keyframes ad-ring { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.55); opacity: 0; } }
        .ad-ring { animation: ad-ring 2.2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ad-float, .ad-pop, .ad-ring { animation: none; } }
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
                                    Admissions
                                </span>
                            </nav>

                            <span
                                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                                style={{ background: TINT, color: BRAND_DARK }}
                            >
                                <Landmark size={14} /> Admissions open 2026–27
                            </span>

                            <h1
                                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                                style={{ color: BRAND }}
                            >
                                Start your path to an industry-ready career.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                No entrance test, no rigid deadlines that don't fit a working schedule — just a straightforward
                                process from enquiry to seat confirmation.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {PERKS.map(({ icon: Icon, text }) => (
                                    <span
                                        key={text}
                                        className="inline-flex items-center gap-2 text-[13px] font-bold px-3.5 py-1.5 rounded-full border bg-white"
                                        style={{ borderColor: LINE, color: BRAND_DARK }}
                                    >
                                        <Icon size={15} /> {text}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#enquiry"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Send an enquiry
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <a
                                    href="#programs"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    View programs
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden ad-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.small} alt="Students learning together" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.main} alt="Students on the MIIT campus" />
                            </div>
                            <div
                                className="absolute top-14 left-0 w-14 h-16"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, #4db6ac)` }}
                                aria-hidden="true"
                            />
                            <a
                                href="#enquiry"
                                aria-label="Go to the enquiry form"
                                className="group absolute bottom-6 right-0 w-[124px] h-[143px] sm:w-[146px] sm:h-[168px]"
                            >
                                <span className="absolute inset-0 ad-ring" style={{ clipPath: HEX, background: BRAND }} aria-hidden="true" />
                                <span
                                    className="relative flex flex-col items-center justify-center w-full h-full text-white text-center transition-transform duration-300 group-hover:scale-105"
                                    style={{ clipPath: HEX, background: BRAND }}
                                >
                                    <GraduationCap size={30} strokeWidth={1.6} />
                                    <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Apply for the next batch</span>
                                </span>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ QUICK FACTS ══════════ */}
            <section style={{ background: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND})` }}>
                <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
                    {QUICK_FACTS.map(({ value, label }, i) => (
                        <Reveal key={label} delay={i * 90}>
                            <div className="text-center px-4 md:border-r md:last:border-r-0 border-white/20">
                                <p className="text-3xl md:text-4xl font-extrabold text-white">{value}</p>
                                <p className="mt-1 text-[11.5px] text-white/75 uppercase tracking-[0.15em]">{label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ══════════ ADMISSION PROCESS ══════════ */}
            <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="How it works" title="Four steps, start to finish" center />
                    <p className="mt-4 text-center text-[13.5px] text-neutral-500">Tap a hexagon to explore each step.</p>
                </Reveal>

                <div className="relative mt-16">
                    {/* rail (desktop) */}
                    <span
                        className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-[3px] rounded-full"
                        style={{ background: LINE }}
                        aria-hidden="true"
                    />
                    <span
                        className="hidden md:block absolute top-[45px] left-[12.5%] h-[3px] rounded-full transition-all duration-700"
                        style={{ width: `${stepProgress * 0.75}%`, background: `linear-gradient(90deg, ${BRAND}, ${BRAND_DARK})` }}
                        aria-hidden="true"
                    />

                    <ol className="grid md:grid-cols-4 gap-10 md:gap-4">
                        {PROCESS_STEPS.map(({ icon: Icon, title, desc }, i) => {
                            const reached = i <= activeStep;
                            const current = i === activeStep;
                            return (
                                <li key={title} className="text-center">
                                    <Reveal delay={i * 110}>
                                        <button
                                            type="button"
                                            onClick={() => setActiveStep(i)}
                                            aria-pressed={current}
                                            aria-label={`Step ${i + 1}: ${title}`}
                                            className="group relative mx-auto block w-[80px] h-[92px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                            style={{ outlineColor: BRAND }}
                                        >
                                            {current && (
                                                <span className="absolute inset-0 ad-ring" style={{ clipPath: HEX, background: BRAND }} aria-hidden="true" />
                                            )}
                                            <span
                                                className="relative flex items-center justify-center w-full h-full transition-all duration-300 group-hover:scale-110"
                                                style={{
                                                    clipPath: HEX,
                                                    background: reached ? `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` : '#fff',
                                                    color: reached ? '#fff' : BRAND,
                                                    boxShadow: reached ? undefined : `inset 0 0 0 3px ${LINE}`,
                                                }}
                                            >
                                                <Icon size={28} strokeWidth={1.7} />
                                            </span>
                                            <span
                                                className="absolute -top-1 -right-1 w-7 h-8 flex items-center justify-center text-[11px] font-extrabold bg-white shadow"
                                                style={{ clipPath: HEX, color: BRAND_DARK }}
                                            >
                                                {i + 1}
                                            </span>
                                        </button>

                                        <div
                                            className="mt-6 bg-white rounded-3xl border p-5 transition-all duration-300"
                                            style={{
                                                borderColor: current ? BRAND : '#e5efed',
                                                boxShadow: current ? '0 18px 40px -22px rgba(0,150,136,.55)' : undefined,
                                            }}
                                        >
                                            <h3 className="text-[16.5px] font-bold" style={{ color: current ? BRAND : INK }}>
                                                {title}
                                            </h3>
                                            <p className="mt-2 text-[13.5px] leading-6 text-neutral-600">{desc}</p>
                                        </div>
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </section>

            {/* ══════════ PROGRAMS ══════════ */}
            <section id="programs" className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Choose your program" title="What you can apply for" center />
                    </Reveal>

                    <div className="mt-14 grid md:grid-cols-2 gap-8">
                        {PROGRAMS.map(({ icon: Icon, name, duration, eligibility, intake, highlights, link }, i) => (
                            <Reveal key={name} delay={i * 120}>
                                <div className="group h-full flex flex-col bg-white rounded-3xl border border-neutral-100 overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                                    <div
                                        className="relative px-7 py-7 flex items-center gap-5 overflow-hidden"
                                        style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
                                    >
                                        <span
                                            className="absolute -right-8 -top-8 w-32 h-36 bg-white/10"
                                            style={{ clipPath: HEX }}
                                            aria-hidden="true"
                                        />
                                        <span
                                            className="relative shrink-0 w-[68px] h-[78px] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105"
                                            style={{ clipPath: HEX, background: 'rgba(255,255,255,0.18)' }}
                                        >
                                            <Icon size={28} strokeWidth={1.7} />
                                        </span>
                                        <h3 className="relative text-[22px] font-extrabold text-white leading-tight">{name}</h3>
                                    </div>

                                    <div className="p-7 flex flex-col flex-1">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="rounded-2xl p-4" style={{ background: TINT }}>
                                                <p className="flex items-center gap-1.5 text-[10.5px] tracking-[0.14em] uppercase font-bold" style={{ color: BRAND }}>
                                                    <Clock3 size={13} /> Duration
                                                </p>
                                                <p className="mt-1 text-[15px] font-bold" style={{ color: INK }}>
                                                    {duration}
                                                </p>
                                            </div>
                                            <div className="rounded-2xl p-4" style={{ background: TINT }}>
                                                <p className="flex items-center gap-1.5 text-[10.5px] tracking-[0.14em] uppercase font-bold" style={{ color: BRAND }}>
                                                    <Users size={13} /> Intake
                                                </p>
                                                <p className="mt-1 text-[15px] font-bold" style={{ color: INK }}>
                                                    {intake}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                                            Eligibility
                                        </p>
                                        <p className="mt-1.5 text-[14px] leading-7 text-neutral-600">{eligibility}</p>

                                        <p className="mt-6 text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                                            Program highlights
                                        </p>
                                        <ul className="mt-3 space-y-3 flex-1">
                                            {highlights.map((h) => (
                                                <li key={h} className="flex items-start gap-3 text-[14px] leading-6 text-neutral-700">
                                                    <span
                                                        className="shrink-0 mt-0.5 w-6 h-[27px] flex items-center justify-center text-white"
                                                        style={{ clipPath: HEX, background: BRAND }}
                                                    >
                                                        <Check size={12} strokeWidth={3.2} />
                                                    </span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-7 flex flex-wrap items-center gap-4">
                                            <a
                                                href="#enquiry"
                                                onClick={() => {
                                                    setForm((prev) => ({ ...prev, program: name }));
                                                    setSubmitted(false);
                                                }}
                                                className="group/btn inline-flex items-center gap-3 rounded-full text-white text-[13.5px] font-bold pl-5 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                                style={{ background: BRAND }}
                                            >
                                                Apply for this program
                                                <span className="w-7 h-7 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5">
                                                    <ArrowRight size={14} strokeWidth={2.6} />
                                                </span>
                                            </a>
                                            <Link to={link} className="text-[13.5px] font-bold" style={{ color: BRAND }}>
                                                Program details →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ KEY DATES + DOCUMENTS ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-8">
                {/* Key dates */}
                <Reveal>
                    <div className="h-full bg-white rounded-3xl border p-7 md:p-9 shadow-sm" style={{ borderColor: '#d6e9e6' }}>
                        <div className="flex items-center gap-3">
                            <HexIcon icon={CalendarDays} size={52} filled />
                            <div>
                                <p className="text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                                    Key dates
                                </p>
                                <p className="text-[20px] font-extrabold leading-tight" style={{ color: INK }}>
                                    Plan your intake
                                </p>
                            </div>
                        </div>

                        <ul className="mt-7 space-y-4">
                            {KEY_DATES.map(({ label, month, day, kind }) => {
                                const isStart = kind === 'start';
                                return (
                                    <li
                                        key={label}
                                        className="group flex items-center gap-4 rounded-2xl border p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/10"
                                        style={{ borderColor: '#e5efed' }}
                                    >
                                        <span
                                            className="shrink-0 w-[62px] h-[71px] flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                clipPath: HEX,
                                                background: isStart ? `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` : TINT,
                                                color: isStart ? '#fff' : BRAND_DARK,
                                            }}
                                        >
                                            <span className="text-[10.5px] font-bold uppercase tracking-wider leading-none">{month}</span>
                                            <span className="text-[20px] font-extrabold leading-none mt-0.5">{day}</span>
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[14.5px] font-bold leading-snug" style={{ color: INK }}>
                                                {label}
                                            </p>
                                            <span
                                                className="mt-1.5 inline-block text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                                                style={{
                                                    background: isStart ? BRAND : TINT,
                                                    color: isStart ? '#fff' : BRAND_DARK,
                                                }}
                                            >
                                                {isStart ? 'Batch start' : 'Deadline'}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Reveal>

                {/* Documents checklist */}
                <Reveal delay={120}>
                    <div
                        className="relative h-full overflow-hidden rounded-3xl p-7 md:p-9 text-white"
                        style={{ background: `linear-gradient(150deg, ${BRAND_DARK}, ${BRAND})` }}
                    >
                        <span
                            className="absolute -right-12 -bottom-12 w-52 h-60 bg-white/10"
                            style={{ clipPath: HEX }}
                            aria-hidden="true"
                        />
                        <div className="relative">
                            <div className="flex items-center gap-3">
                                <span
                                    className="shrink-0 w-[52px] h-[52px] flex items-center justify-center bg-white/20"
                                    style={{ clipPath: HEX }}
                                >
                                    <FileText size={20} strokeWidth={1.8} />
                                </span>
                                <div>
                                    <p className="text-[11px] tracking-[0.18em] uppercase font-bold text-white/80">Documents you'll need</p>
                                    <p className="text-[20px] font-extrabold leading-tight">Your checklist</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center justify-between text-[12.5px] font-bold text-white/90">
                                    <span>
                                        {checked.length} of {DOCUMENTS.length} ready
                                    </span>
                                    <span>{Math.round(docProgress)}%</span>
                                </div>
                                <div className="mt-2 h-2.5 rounded-full bg-white/20 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-white transition-all duration-500"
                                        style={{ width: `${docProgress}%` }}
                                    />
                                </div>
                            </div>

                            <ul className="mt-6 space-y-3">
                                {DOCUMENTS.map((d, i) => {
                                    const on = checked.includes(i);
                                    return (
                                        <li key={d}>
                                            <button
                                                type="button"
                                                onClick={() => toggleDoc(i)}
                                                aria-pressed={on}
                                                className="w-full flex items-start gap-3.5 rounded-2xl px-4 py-3 text-left transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                                                style={{ background: on ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)' }}
                                            >
                                                <span
                                                    className="shrink-0 mt-0.5 w-7 h-8 flex items-center justify-center transition-colors"
                                                    style={{
                                                        clipPath: HEX,
                                                        background: on ? '#fff' : 'rgba(255,255,255,0.25)',
                                                        color: BRAND_DARK,
                                                    }}
                                                >
                                                    {on && <Check size={14} strokeWidth={3.4} />}
                                                </span>
                                                <span
                                                    className="text-[14px] leading-6 text-white"
                                                    style={{ opacity: on ? 0.75 : 1, textDecoration: on ? 'line-through' : 'none' }}
                                                >
                                                    {d}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>

                            <p className="mt-5 text-[12px] text-white/75">
                                Tap items as you gather them. This checklist is just for you and isn't saved.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ══════════ ENQUIRY FORM ══════════ */}
            <section id="enquiry" className="py-20 md:py-28" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1200px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="Get started" title="Send us an enquiry" center />
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/15 bg-white">
                            {/* side panel */}
                            <div
                                className="relative overflow-hidden p-8 md:p-10 text-white flex flex-col"
                                style={{ background: `linear-gradient(160deg, ${BRAND_DARK}, ${BRAND})` }}
                            >
                                <span
                                    className="absolute -right-14 -top-14 w-56 h-64 bg-white/10"
                                    style={{ clipPath: HEX }}
                                    aria-hidden="true"
                                />
                                <span
                                    className="absolute -left-10 -bottom-12 w-40 h-46 bg-white/10"
                                    style={{ clipPath: HEX, height: 184 }}
                                    aria-hidden="true"
                                />
                                <div className="relative">
                                    <h3 className="text-[26px] font-extrabold leading-tight tracking-tight">
                                        Talk to a counsellor within two working days.
                                    </h3>
                                    <p className="mt-3 text-[14.5px] leading-7 text-white/85">
                                        Tell us a little about yourself and the program you're considering. No commitment, just a
                                        straight answer on fit.
                                    </p>

                                    <ul className="mt-8 space-y-4">
                                        {[
                                            { icon: Phone, label: 'Enquiry hotline', value: '+91 98765 43210', href: 'tel:+919876543210' },
                                            { icon: Mail, label: 'Email us', value: 'info@miit.ac.in', href: 'mailto:info@miit.ac.in' },
                                            { icon: Clock3, label: 'Office hours', value: 'Mon – Sat' },
                                        ].map(({ icon: Icon, label, value, href }) => {
                                            const inner = (
                                                <>
                                                    <span
                                                        className="shrink-0 w-11 h-[50px] flex items-center justify-center bg-white/15"
                                                        style={{ clipPath: HEX }}
                                                    >
                                                        <Icon size={17} strokeWidth={1.9} />
                                                    </span>
                                                    <span>
                                                        <span className="block text-[11px] uppercase tracking-[0.16em] text-white/70 font-bold">{label}</span>
                                                        <span className="block text-[15px] font-bold">{value}</span>
                                                    </span>
                                                </>
                                            );
                                            return (
                                                <li key={label}>
                                                    {href ? (
                                                        <a href={href} className="flex items-center gap-3.5 hover:opacity-90">
                                                            {inner}
                                                        </a>
                                                    ) : (
                                                        <div className="flex items-center gap-3.5">{inner}</div>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>

                            {/* form / success */}
                            <div className="p-7 md:p-10">
                                {submitted ? (
                                    <div className="ad-pop h-full flex flex-col items-center justify-center text-center py-10">
                                        <span
                                            className="w-24 h-[110px] flex items-center justify-center text-white"
                                            style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                                        >
                                            <PartyPopper size={38} strokeWidth={1.6} />
                                        </span>
                                        <h3 className="mt-6 text-[26px] font-extrabold tracking-tight" style={{ color: INK }}>
                                            Thanks, {form.name.split(' ')[0] || 'there'}!
                                        </h3>
                                        <p className="mt-2 max-w-sm text-[15px] leading-7 text-neutral-600">
                                            We've noted your interest in <b style={{ color: BRAND_DARK }}>{form.program}</b>. A counsellor
                                            will get in touch within two working days.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 text-[13.5px] font-bold px-6 py-2.5 transition-colors hover:bg-[#e6f4f2]"
                                            style={{ borderColor: BRAND, color: BRAND_DARK }}
                                        >
                                            Send another enquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                                        <Field label="Full name" icon={User}>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                autoComplete="name"
                                                className={inputClass}
                                                style={{ borderColor: '#d6e9e6' }}
                                                placeholder="Your name"
                                            />
                                        </Field>

                                        <Field label="Phone number" icon={Phone}>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                autoComplete="tel"
                                                className={inputClass}
                                                style={{ borderColor: '#d6e9e6' }}
                                                placeholder="+91 00000 00000"
                                            />
                                        </Field>

                                        <div className="sm:col-span-2">
                                            <Field label="Email address" icon={Mail}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    autoComplete="email"
                                                    className={inputClass}
                                                    style={{ borderColor: '#d6e9e6' }}
                                                    placeholder="you@example.com"
                                                />
                                            </Field>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <span className="block text-[12px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: BRAND_DARK }}>
                                                Program of interest
                                            </span>
                                            <div className="grid sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Program of interest">
                                                {PROGRAMS.map(({ icon: Icon, name, duration }) => {
                                                    const on = form.program === name;
                                                    return (
                                                        <button
                                                            key={name}
                                                            type="button"
                                                            role="radio"
                                                            aria-checked={on}
                                                            onClick={() => setForm((prev) => ({ ...prev, program: name }))}
                                                            className="flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                                            style={{
                                                                background: on ? TINT : '#fff',
                                                                borderColor: on ? BRAND : '#d6e9e6',
                                                                outlineColor: BRAND,
                                                            }}
                                                        >
                                                            <span
                                                                className="shrink-0 w-10 h-[46px] flex items-center justify-center"
                                                                style={{
                                                                    clipPath: HEX,
                                                                    background: on ? BRAND : 'linear-gradient(145deg,#f4f8f8,#dcebe9)',
                                                                    color: on ? '#fff' : BRAND,
                                                                }}
                                                            >
                                                                <Icon size={17} strokeWidth={1.9} />
                                                            </span>
                                                            <span className="min-w-0">
                                                                <span className="block text-[14px] font-bold leading-tight" style={{ color: INK }}>
                                                                    {name}
                                                                </span>
                                                                <span className="block text-[12px] text-neutral-500">{duration}</span>
                                                            </span>
                                                            {on && <Check size={18} strokeWidth={3} className="ml-auto shrink-0" style={{ color: BRAND }} />}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="group w-full inline-flex items-center justify-center gap-3 rounded-full text-white text-[15px] font-bold pl-7 pr-2 py-2 transition-all hover:shadow-lg hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                                style={{ background: BRAND, outlineColor: BRAND }}
                                            >
                                                Submit enquiry
                                                <span className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                                    <ArrowRight size={17} strokeWidth={2.6} />
                                                </span>
                                            </button>
                                            <p className="mt-3 text-center text-[12px] text-neutral-500">
                                                We'll only use your details to respond to this enquiry.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ FAQ ══════════ */}
            <section className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Questions" title="Frequently asked" center />
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
                            Still deciding? Talk to a counsellor.
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            No commitment required — just a straight answer on whether a program fits your goals and schedule.
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
                                to="/about/management"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                About MIIT
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}

export default Admissions;