import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    ChevronDown,
    Home,
    Landmark,
    Building2,
    Megaphone,
    GraduationCap,
    Hammer,
    Rocket,
    Flag,
    CalendarCheck,
    Target,
    Users,
    Layers,
    Clock3,
    Check,
    Wrench,
    BriefcaseBusiness,
    Route,
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
    bim: u('photo-1503387762-592deb58ef4e', 900),
    dm: u('photo-1432888622747-4eb9a8efeb07', 900),
    team: u('photo-1522202176988-66273c2fd55f', 600),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const PHASES = {
    Learn: { icon: GraduationCap, blurb: 'Build the core skills and tool fluency.' },
    Build: { icon: Hammer, blurb: 'Apply them on real, project-style work.' },
    Launch: { icon: Rocket, blurb: 'Package your work and enter employer matching.' },
};

const ROADMAPS = {
    bim: {
        label: 'BIM for Construction',
        short: 'BIM',
        icon: Building2,
        image: IMG.bim,
        duration: '6 months',
        summary:
            'From Revit fundamentals to federated models, 4D/5D workflows and a client-style project, finishing with a portfolio and employer matching.',
        tools: ['Revit', 'Navisworks', 'Autodesk', 'ISO 19650'],
        milestones: [
            {
                month: 'Month 1',
                phase: 'Learn',
                title: 'Foundations & modeling basics',
                desc: 'Revit fundamentals, parametric families, and construction documentation.',
                skills: ['Revit', 'Parametric families', 'Documentation'],
                deliverable: 'A documented starter model',
            },
            {
                month: 'Month 2',
                phase: 'Learn',
                title: '3D architectural & structural modeling',
                desc: 'Build full discipline models with real project data embedded at every layer.',
                skills: ['Architectural modeling', 'Structural modeling', 'Data-rich models'],
                deliverable: 'A full discipline model',
            },
            {
                month: 'Month 3',
                phase: 'Build',
                title: 'Model federation & clash detection',
                desc: 'Combine architectural, structural, and MEP models in Navisworks and resolve conflicts.',
                skills: ['Navisworks', 'Model federation', 'Clash detection'],
                deliverable: 'A clash report with resolutions',
            },
            {
                month: 'Month 4',
                phase: 'Build',
                title: '4D scheduling & quantity takeoff',
                desc: 'Link models to project schedules and extract quantities for 5D cost estimation.',
                skills: ['4D scheduling', 'Quantity takeoff', '5D costing'],
                deliverable: 'A scheduled model with quantities',
            },
            {
                month: 'Month 5',
                phase: 'Launch',
                title: 'BIM execution planning',
                desc: 'Draft EIRs and BEPs, structure data to ISO 19650, and lead a live client-style project.',
                skills: ['EIR & BEP', 'ISO 19650', 'Project leadership'],
                deliverable: 'A BIM execution plan',
            },
            {
                month: 'Month 6',
                phase: 'Launch',
                title: 'Portfolio, mock interviews & placement',
                desc: 'Finalize project portfolio, complete mock technical rounds, and enter employer matching.',
                skills: ['Portfolio', 'Mock technical rounds', 'Employer matching'],
                deliverable: 'A placement-ready portfolio',
            },
        ],
    },
    dm: {
        label: 'Digital Marketing',
        short: 'Digital Marketing',
        icon: Megaphone,
        image: IMG.dm,
        duration: '4 months',
        summary:
            'From SEO and customer journeys to live paid campaigns, email automation and analytics, finishing with an end-to-end campaign and employer matching.',
        tools: ['Google Ads', 'Meta Ads', 'HubSpot', 'GA4'],
        milestones: [
            {
                month: 'Month 1',
                phase: 'Learn',
                title: 'Foundations & SEO',
                desc: 'Customer journey mapping, SMART goals, keyword research, and on-page/technical SEO.',
                skills: ['Journey mapping', 'Keyword research', 'Technical SEO'],
                deliverable: 'An SEO audit and goal plan',
            },
            {
                month: 'Month 2',
                phase: 'Build',
                title: 'Paid Search & Social',
                desc: 'Run live Google Ads and Meta/Instagram campaigns with audience targeting and A/B testing.',
                skills: ['Google Ads', 'Meta & Instagram', 'A/B testing'],
                deliverable: 'Live paid campaigns',
            },
            {
                month: 'Month 3',
                phase: 'Build',
                title: 'Content, email & analytics',
                desc: 'Content calendars, email automation in HubSpot/Mailchimp, and GA4 reporting on a live budget.',
                skills: ['Content calendars', 'Email automation', 'GA4 reporting'],
                deliverable: 'A performance report on a live budget',
            },
            {
                month: 'Month 4',
                phase: 'Launch',
                title: 'Live campaign, portfolio & placement',
                desc: 'Run a full campaign end to end, build a results portfolio, and enter employer matching.',
                skills: ['Full campaign', 'Results portfolio', 'Employer matching'],
                deliverable: 'A results portfolio',
            },
        ],
    },
};

const SUPPORT_LAYERS = [
    {
        icon: CalendarCheck,
        title: 'Weekly progress checks',
        desc: 'Faculty review skill progression against the roadmap every week — falling behind gets caught early, not at the final review.',
    },
    {
        icon: Target,
        title: 'Live project checkpoints',
        desc: 'Each milestone ends with a deliverable tied to a real or client-style project, not just a graded assignment.',
    },
    {
        icon: Users,
        title: 'Placement cell overlap',
        desc: 'The placement cell begins counselling in month one and stays involved through the final placement-ready milestone.',
    },
];

const FAQS = [
    {
        q: 'Does placement support start only at the end?',
        a: 'No. Placement counselling begins in month one, and the placement cell stays involved through the final placement-ready milestone.',
    },
    {
        q: 'What happens if I fall behind a milestone?',
        a: 'Faculty check progress against the roadmap every week, so gaps are spotted early and handled before the milestone review.',
    },
    {
        q: 'Will I work on real projects?',
        a: 'Yes. Every milestone ends with a deliverable tied to a real or client-style project, and these become your portfolio.',
    },
    {
        q: 'What comes after the final milestone?',
        a: 'The final milestone hands straight into the Training & Placement Process, where you enter employer matching.',
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
const TrainingRoadmap = () => {
    const [activeProgram, setActiveProgram] = useState('bim');
    const [activeStep, setActiveStep] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);

    const roadmap = ROADMAPS[activeProgram];
    const total = roadmap.milestones.length;
    const progress = total > 1 ? (activeStep / (total - 1)) * 100 : 100;

    const switchProgram = (key) => {
        setActiveProgram(key);
        setActiveStep(0);
    };

    const phaseCounts = roadmap.milestones.reduce((acc, m) => {
        acc[m.phase] = (acc[m.phase] || 0) + 1;
        return acc;
    }, {});

    const FACTS = [
        { value: roadmap.duration, label: 'Program duration' },
        { value: String(total), label: 'Roadmap milestones' },
        { value: 'Weekly', label: 'Progress checkpoints' },
        { value: 'Month 1', label: 'Placement counselling starts' },
    ];

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes tr-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .tr-float { animation: tr-float 5s ease-in-out infinite; }
        @keyframes tr-pop { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .tr-pop { animation: tr-pop 420ms ease-out both; }
        @keyframes tr-ring { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.55); opacity: 0; } }
        .tr-ring { animation: tr-ring 2.2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .tr-float, .tr-pop, .tr-ring { animation: none; } }
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
                                    Training Roadmap
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
                                How training builds toward a hire.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                Every program is mapped month by month, so skill-building and placement readiness happen together —
                                not training first, job search as an afterthought.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#roadmap"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Explore the roadmap
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
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden tr-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Students working together" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={roadmap.image} alt={roadmap.label} />
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
                                <Route size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Training + placement together</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ PROGRAM PICKER ══════════ */}
            <section id="roadmap" className="max-w-[1300px] mx-auto px-6 pt-20 md:pt-28">
                <Reveal>
                    <Heading eyebrow="Choose your program" title="Pick a roadmap to explore" center />
                </Reveal>

                <div className="mt-12 grid md:grid-cols-2 gap-6" role="tablist" aria-label="Program roadmap">
                    {Object.entries(ROADMAPS).map(([key, p], i) => {
                        const active = key === activeProgram;
                        return (
                            <Reveal key={key} delay={i * 100}>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => switchProgram(key)}
                                    className="group relative w-full text-left rounded-3xl border-2 p-6 md:p-7 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 overflow-hidden"
                                    style={{
                                        background: active ? `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` : '#fff',
                                        borderColor: active ? BRAND : '#d6e9e6',
                                        color: active ? '#fff' : INK,
                                        outlineColor: BRAND,
                                        boxShadow: active ? '0 20px 40px -18px rgba(0,121,107,.55)' : undefined,
                                    }}
                                >
                                    {active && (
                                        <span
                                            className="absolute -right-8 -top-8 w-32 h-36 bg-white/10"
                                            style={{ clipPath: HEX }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span
                                        className="relative shrink-0 w-[68px] h-[78px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                                        style={{
                                            clipPath: HEX,
                                            background: active ? 'rgba(255,255,255,0.18)' : 'linear-gradient(145deg,#f4f8f8,#dcebe9)',
                                            color: active ? '#fff' : BRAND,
                                        }}
                                    >
                                        <p.icon size={28} strokeWidth={1.7} />
                                    </span>
                                    <span className="relative min-w-0">
                                        <span className="flex flex-wrap items-center gap-2">
                                            <span className="text-[19px] font-extrabold leading-tight">{p.label}</span>
                                            <span
                                                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                                                style={{
                                                    background: active ? 'rgba(255,255,255,0.2)' : TINT,
                                                    color: active ? '#fff' : BRAND_DARK,
                                                }}
                                            >
                                                {p.duration}
                                            </span>
                                        </span>
                                        <span
                                            className="mt-2 block text-[13.5px] leading-6"
                                            style={{ color: active ? 'rgba(255,255,255,0.88)' : '#525252' }}
                                        >
                                            {p.summary}
                                        </span>
                                    </span>
                                </button>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* ══════════ QUICK FACTS ══════════ */}
            <section className="mt-16" style={{ background: `linear-gradient(90deg, ${BRAND_DARK}, ${BRAND})` }}>
                <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6">
                    {FACTS.map(({ value, label }) => (
                        <div key={label} className="text-center px-4 md:border-r md:last:border-r-0 border-white/20">
                            <p className="text-3xl md:text-4xl font-extrabold text-white">{value}</p>
                            <p className="mt-1 text-[11.5px] text-white/75 uppercase tracking-[0.15em]">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════ PHASES + TOOLS ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-24">
                <div key={activeProgram} className="tr-pop grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-stretch">
                    {/* phases */}
                    <div className="grid sm:grid-cols-3 gap-5">
                        {Object.entries(PHASES).map(([name, { icon: Icon, blurb }], i) => (
                            <div
                                key={name}
                                className="group relative rounded-3xl border border-neutral-100 bg-white p-6 text-center shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <span
                                    className="absolute top-3 left-4 text-[34px] font-extrabold leading-none select-none"
                                    style={{ color: `${BRAND}1f` }}
                                    aria-hidden="true"
                                >
                                    0{i + 1}
                                </span>
                                <div className="mx-auto w-[76px] h-[76px]">
                                    <HexIcon icon={Icon} size={76} filled />
                                </div>
                                <p className="mt-4 text-[18px] font-extrabold" style={{ color: INK }}>
                                    {name}
                                </p>
                                <p
                                    className="mt-1 inline-block text-[11.5px] font-bold px-3 py-0.5 rounded-full"
                                    style={{ background: TINT, color: BRAND_DARK }}
                                >
                                    {phaseCounts[name] || 0} {phaseCounts[name] === 1 ? 'month' : 'months'}
                                </p>
                                <p className="mt-3 text-[13.5px] leading-6 text-neutral-600">{blurb}</p>
                            </div>
                        ))}
                    </div>

                    {/* tools */}
                    <div
                        className="relative overflow-hidden rounded-3xl p-7 text-white flex flex-col justify-center"
                        style={{ background: `linear-gradient(150deg, ${BRAND_DARK}, ${BRAND})` }}
                    >
                        <span
                            className="absolute -right-10 -bottom-10 w-44 h-52 bg-white/10"
                            style={{ clipPath: HEX }}
                            aria-hidden="true"
                        />
                        <div className="relative">
                            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-bold text-white/80">
                                <Wrench size={14} /> Tools you'll use
                            </span>
                            <p className="mt-2 text-[22px] font-extrabold leading-tight">{roadmap.label}</p>
                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {roadmap.tools.map((t) => (
                                    <span key={t} className="text-[13px] font-bold px-4 py-1.5 rounded-full bg-white/15 border border-white/25">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ TIMELINE ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1100px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow={roadmap.label} title="Month-by-month roadmap" center />
                        <p className="mt-4 text-center text-[13.5px] text-neutral-500">
                            Tap a hexagon to move along the roadmap.
                        </p>
                    </Reveal>

                    <div key={activeProgram} className="relative mt-16">
                        {/* rail */}
                        <span
                            className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[3px] rounded-full"
                            style={{ background: LINE }}
                            aria-hidden="true"
                        />
                        <span
                            className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 w-[3px] rounded-full transition-all duration-700"
                            style={{
                                height: `calc((100% - 2rem) * ${progress / 100})`,
                                background: `linear-gradient(${BRAND}, ${BRAND_DARK})`,
                            }}
                            aria-hidden="true"
                        />

                        <ol className="space-y-10 md:space-y-14">
                            {roadmap.milestones.map((m, i) => {
                                const isLast = i === total - 1;
                                const reached = i <= activeStep;
                                const current = i === activeStep;
                                const left = i % 2 === 0;
                                const PhaseIcon = PHASES[m.phase].icon;
                                const NodeIcon = isLast ? Flag : null;

                                return (
                                    <li
                                        key={m.month}
                                        className="tr-pop grid grid-cols-[72px_1fr] md:grid-cols-[1fr_96px_1fr] items-center"
                                        style={{ animationDelay: `${i * 80}ms` }}
                                    >
                                        {/* node */}
                                        <div className="row-start-1 col-start-1 md:col-start-2 flex justify-center relative z-10">
                                            <button
                                                type="button"
                                                onClick={() => setActiveStep(i)}
                                                aria-label={`${m.month}: ${m.title}`}
                                                aria-pressed={current}
                                                className="relative w-[64px] h-[74px] md:w-[78px] md:h-[90px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                                                style={{ outlineColor: BRAND }}
                                            >
                                                {current && (
                                                    <span
                                                        className="absolute inset-0 tr-ring"
                                                        style={{ clipPath: HEX, background: BRAND }}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span
                                                    className="relative flex flex-col items-center justify-center w-full h-full transition-all duration-300 hover:scale-110"
                                                    style={{
                                                        clipPath: HEX,
                                                        background: reached ? `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` : '#fff',
                                                        color: reached ? '#fff' : BRAND,
                                                        boxShadow: reached ? undefined : `inset 0 0 0 3px ${LINE}`,
                                                    }}
                                                >
                                                    {NodeIcon ? (
                                                        <NodeIcon size={22} strokeWidth={2} />
                                                    ) : (
                                                        <span className="text-[17px] md:text-[19px] font-extrabold leading-none">
                                                            {String(i + 1).padStart(2, '0')}
                                                        </span>
                                                    )}
                                                </span>
                                            </button>
                                        </div>

                                        {/* card */}
                                        <div
                                            className={`row-start-1 col-start-2 ${left ? 'md:col-start-1 md:pr-6' : 'md:col-start-3 md:pl-6'}`}
                                        >
                                            <div
                                                onClick={() => setActiveStep(i)}
                                                className="group cursor-pointer bg-white rounded-3xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/10"
                                                style={{
                                                    borderColor: current ? BRAND : '#e5efed',
                                                    boxShadow: current ? '0 18px 40px -20px rgba(0,150,136,.5)' : undefined,
                                                }}
                                            >
                                                <div className={`flex flex-wrap items-center gap-2 ${left ? 'md:justify-end' : ''}`}>
                                                    <span
                                                        className="text-[11px] tracking-[0.12em] uppercase font-bold px-3 py-1 rounded-full"
                                                        style={{ background: TINT, color: BRAND_DARK }}
                                                    >
                                                        {m.month}
                                                    </span>
                                                    <span
                                                        className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase font-bold px-3 py-1 rounded-full text-white"
                                                        style={{ background: BRAND }}
                                                    >
                                                        <PhaseIcon size={12} /> {m.phase}
                                                    </span>
                                                </div>

                                                <h3
                                                    className={`mt-3 text-[19px] font-bold leading-snug transition-colors group-hover:text-[#009688] ${left ? 'md:text-right' : ''}`}
                                                    style={{ color: INK }}
                                                >
                                                    {m.title}
                                                </h3>
                                                <p className={`mt-2 text-[14px] leading-7 text-neutral-600 ${left ? 'md:text-right' : ''}`}>
                                                    {m.desc}
                                                </p>

                                                <div className={`mt-4 flex flex-wrap gap-2 ${left ? 'md:justify-end' : ''}`}>
                                                    {m.skills.map((s) => (
                                                        <span
                                                            key={s}
                                                            className="text-[12px] font-semibold px-3 py-1 rounded-full border"
                                                            style={{ borderColor: '#cfe5e2', color: BRAND_DARK }}
                                                        >
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div
                                                    className={`mt-5 pt-4 border-t border-dashed flex items-center gap-3 ${left ? 'md:flex-row-reverse md:text-right' : ''}`}
                                                    style={{ borderColor: '#bfdcd8' }}
                                                >
                                                    <span
                                                        className="shrink-0 w-9 h-[41px] flex items-center justify-center text-white"
                                                        style={{ clipPath: HEX, background: BRAND }}
                                                    >
                                                        <Check size={16} strokeWidth={3} />
                                                    </span>
                                                    <div>
                                                        <p className="text-[10.5px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                                                            Deliverable
                                                        </p>
                                                        <p className="text-[13.5px] font-semibold leading-tight" style={{ color: INK }}>
                                                            {m.deliverable}
                                                        </p>
                                                    </div>
                                                </div>

                                                {isLast && (
                                                    <Link
                                                        to="/training-placement/process"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className={`mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold ${left ? 'md:float-right' : ''}`}
                                                        style={{ color: BRAND }}
                                                    >
                                                        Hands off to Training & Placement Process <ArrowRight size={14} />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </section>

            {/* ══════════ PARALLEL TRACKS ══════════ */}
            <section className="max-w-[1100px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Two tracks, one journey" title="Training and placement run side by side" center />
                    <p className="mt-4 mx-auto max-w-2xl text-center text-[15px] leading-8 text-neutral-600">
                        Skill training runs through every month. Placement readiness starts in month one and builds up to
                        employer matching. The intensity shown is illustrative.
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <div className="mt-12 rounded-[2rem] border bg-white p-6 md:p-10 shadow-sm" style={{ borderColor: '#d6e9e6' }}>
                        <div key={activeProgram} className="space-y-6">
                            {[
                                { label: 'Skill training', icon: GraduationCap, level: () => 1 },
                                {
                                    label: 'Placement readiness',
                                    icon: BriefcaseBusiness,
                                    level: (i) => 0.3 + (i / Math.max(total - 1, 1)) * 0.7,
                                },
                            ].map(({ label, icon: Icon, level }) => (
                                <div key={label} className="flex items-center gap-4">
                                    <div className="hidden sm:flex w-[190px] shrink-0 items-center gap-3">
                                        <HexIcon icon={Icon} size={48} />
                                        <span className="text-[14px] font-bold leading-tight" style={{ color: INK }}>
                                            {label}
                                        </span>
                                    </div>
                                    <div className="flex-1 grid gap-2" style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}>
                                        {roadmap.milestones.map((m, i) => (
                                            <div key={m.month} className="text-center">
                                                <div
                                                    className="h-12 rounded-xl transition-all duration-500"
                                                    style={{ background: BRAND, opacity: 0.18 + level(i) * 0.82 }}
                                                    title={`${label} — ${m.month}`}
                                                />
                                                <p className="mt-1.5 text-[11px] font-semibold text-neutral-500">M{i + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <p className="sm:hidden text-[12px] text-neutral-500">Top row: skill training. Bottom row: placement readiness.</p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ══════════ SUPPORT LAYERS ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="How it's supported" title="What keeps the roadmap on track" center />
                    </Reveal>

                    <div className="mt-14 grid sm:grid-cols-3 gap-x-8 gap-y-12">
                        {SUPPORT_LAYERS.map(({ icon, title, desc }, i) => (
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

            {/* ══════════ FAQ ══════════ */}
            <section className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Good to know" title="Roadmap questions, answered" center />
                </Reveal>

                <div className="mt-12 space-y-4">
                    {FAQS.map(({ q, a }, i) => {
                        const open = openFaq === i;
                        return (
                            <Reveal key={q} delay={i * 80}>
                                <div
                                    className="rounded-2xl border bg-white transition-shadow duration-300"
                                    style={{ borderColor: open ? BRAND : '#d6e9e6', boxShadow: open ? '0 14px 30px -18px rgba(0,150,136,.5)' : undefined }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(open ? -1 : i)}
                                        aria-expanded={open}
                                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-2xl"
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
                                    <div
                                        className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                    >
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
                            See what happens after the roadmap ends
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            The final milestone hands straight into our placement process.
                        </p>
                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/training-placement/process"
                                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                                style={{ color: BRAND_DARK }}
                            >
                                Placement process
                                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                                    <ArrowRight size={16} strokeWidth={2.6} />
                                </span>
                            </Link>
                            <Link
                                to="/admissions"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Start admissions enquiry
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default TrainingRoadmap;