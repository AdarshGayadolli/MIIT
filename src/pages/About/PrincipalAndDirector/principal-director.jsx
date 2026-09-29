import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Quote,
    Landmark,
    GraduationCap,
    BadgeCheck,
    Target,
    Award,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home & Management.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
    campus: u('photo-1541339907198-e08756dedf3f', 900),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

const PROFILES = [
    {
        name: 'Suresh Bhatt',
        role: 'Principal',
        photo: u('photo-1519085360753-af0119f7cbe7', 900),
        message:
            "A syllabus is only as good as the person delivering it. My job is making sure every instructor at MIIT has actually done the work they're teaching — not just read about it.",
        bio: [
            'Suresh joined MIIT in 2017 after twelve years teaching construction technology and structural drafting at two engineering colleges, and a further four years consulting on BIM adoption for mid-size contractors.',
            'As Principal, he leads academic delivery, sets faculty hiring standards, and reviews every course syllabus against current industry practice each term — a process he insisted on from his first year here.',
        ],
        qualifications: [
            'M.Tech, Structural Engineering — NIT Trichy',
            'B.E., Civil Engineering — Anna University',
            'Certified Autodesk BIM Trainer',
        ],
        highlights: [
            '16 years in engineering education and industry consulting',
            'Redesigned the BIM for Construction curriculum around live client projects',
            "Chairs MIIT's termly academic review committee",
        ],
        focus: 'Curriculum quality, faculty standards, and keeping coursework current with industry tools.',
    },
    {
        name: 'Ananya Krishnan',
        role: 'Managing Director',
        photo: u('photo-1573497019940-1c28c88b4f3e', 900),
        message:
            "Students and parents are making a real financial decision when they choose MIIT. I want every rupee of that to be visible in outcomes — placements, tools, and support — not just in a brochure.",
        bio: [
            "Ananya oversees admissions, finance, and MIIT's partnerships with employers and certification bodies. Before joining MIIT, she spent seven years running operations for a national vocational-training network across four states.",
            "She built MIIT's current placement-partner pipeline from a handful of local firms to over fifty companies across construction and digital marketing, and personally reviews every batch's placement outcomes before they're published.",
        ],
        qualifications: [
            'MBA, Operations Management — Symbiosis Institute',
            'B.Com — Christ University',
        ],
        highlights: [
            '7 years running multi-state vocational training operations',
            "Grew MIIT's hiring-partner network from 6 to 50+ companies",
            "Introduced MIIT's termly public placement-statistics report",
        ],
        focus: 'Admissions integrity, financial transparency, and employer partnerships.',
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

const Eyebrow = ({ children }) => (
    <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
        <span className="w-6 h-[2px]" style={{ background: BRAND }} />
        {children}
    </span>
);

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const PrincipalAndDirector = () => {
    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes pd-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .pd-float { animation: pd-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .pd-float { animation: none; } }
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
                                    Principal & Director
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
                                Principal & Director
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                The two people directly accountable for what happens in MIIT's classrooms and what happens after
                                graduation — academics and outcomes, respectively.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/about/management"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Meet the full team
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

                    {/* two leaders in a hex collage */}
                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[460px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute bottom-0 left-0 w-[250px] h-[289px] sm:w-[295px] sm:h-[341px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={PROFILES[0].photo} alt={PROFILES[0].name} />
                            </div>
                            <div
                                className="absolute top-0 right-0 w-[210px] h-[243px] sm:w-[250px] sm:h-[289px] overflow-hidden pd-float"
                                style={{ clipPath: HEX, background: BRAND }}
                            >
                                <Img src={PROFILES[1].photo} alt={PROFILES[1].name} />
                            </div>
                            <div
                                className="absolute top-24 left-2 w-14 h-16"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, #4db6ac)` }}
                                aria-hidden="true"
                            />
                            <div
                                className="absolute bottom-4 right-2 w-[120px] h-[139px] sm:w-[140px] sm:h-[162px] flex flex-col items-center justify-center text-white text-center"
                                style={{ clipPath: HEX, background: BRAND }}
                            >
                                <GraduationCap size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Academics & Outcomes</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ PROFILES ══════════ */}
            {PROFILES.map(({ name, role, photo, message, bio, qualifications, highlights, focus }, i) => {
                const flipped = i % 2 === 1;
                return (
                    <section key={name} style={flipped ? { background: '#f2f8f7' } : undefined}>
                        <div className="max-w-[1300px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
                            {/* Photo + qualifications */}
                            <Reveal className={flipped ? 'lg:order-2' : ''}>
                                <div>
                                    <div className="relative mx-auto w-full max-w-[420px] h-[400px] sm:h-[460px]">
                                        <div
                                            className="absolute top-0 left-0 w-[290px] h-[335px] sm:w-[330px] sm:h-[381px] overflow-hidden"
                                            style={{ clipPath: HEX, background: BRAND }}
                                        >
                                            <Img src={photo} alt={name} />
                                        </div>
                                        <div
                                            className="absolute bottom-0 right-0 w-[150px] h-[173px] sm:w-[172px] sm:h-[199px] flex flex-col items-center justify-center text-white text-center px-5"
                                            style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                                        >
                                            <span className="text-[14px] font-bold leading-tight">{name}</span>
                                            <span className="mt-1 text-[11.5px] text-white/85 leading-tight">{role}</span>
                                        </div>
                                    </div>

                                    <div className="mt-10 bg-white border border-neutral-100 rounded-3xl p-6 shadow-sm">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Award size={18} style={{ color: BRAND }} />
                                            <p className="text-[12px] tracking-[0.15em] uppercase font-bold" style={{ color: BRAND }}>
                                                Qualifications
                                            </p>
                                        </div>
                                        <ul className="space-y-3">
                                            {qualifications.map((q) => (
                                                <li key={q} className="flex items-start gap-3 text-[14px] text-neutral-700 leading-6">
                                                    <BadgeCheck size={18} className="shrink-0 mt-0.5" style={{ color: BRAND }} />
                                                    {q}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Message + bio + highlights */}
                            <Reveal delay={150} className={flipped ? 'lg:order-1' : ''}>
                                <div>
                                    <Eyebrow>{role === 'Principal' ? "Principal's message" : "Director's message"}</Eyebrow>

                                    <h2 className="mt-2 text-3xl md:text-[40px] font-bold leading-tight tracking-tight" style={{ color: INK }}>
                                        {name}
                                    </h2>
                                    <p className="mt-1 text-[14px] font-bold tracking-wide" style={{ color: BRAND }}>
                                        {role}
                                    </p>

                                    <div className="mt-6 relative pl-7 border-l-4" style={{ borderColor: BRAND }}>
                                        <Quote size={28} className="absolute -top-1 -left-[18px] p-1 rounded-full bg-white" style={{ color: BRAND }} />
                                        <p className="text-[19px] md:text-[23px] leading-relaxed font-semibold" style={{ color: INK }}>
                                            “{message}”
                                        </p>
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        {bio.map((para, idx) => (
                                            <p key={idx} className="text-[15.5px] leading-8 text-neutral-700">
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    {/* Career highlights */}
                                    <div className="mt-8">
                                        <p className="text-[12px] tracking-[0.18em] uppercase font-bold mb-2" style={{ color: BRAND }}>
                                            Career highlights
                                        </p>
                                        <ul>
                                            {highlights.map((h) => (
                                                <li key={h} className="group flex items-center gap-4 py-3.5 border-b border-neutral-200">
                                                    <HexIcon icon={BadgeCheck} size={48} />
                                                    <span className="text-[14.5px] leading-6 text-neutral-800">{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Focus area */}
                                    <div
                                        className="mt-8 flex items-start gap-4 rounded-3xl p-6"
                                        style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}
                                    >
                                        <span
                                            className="shrink-0 w-12 h-[54px] flex items-center justify-center bg-white/15 text-white"
                                            style={{ clipPath: HEX }}
                                        >
                                            <Target size={22} strokeWidth={1.8} />
                                        </span>
                                        <div>
                                            <p className="text-[12px] tracking-[0.18em] uppercase font-bold text-white/75">Focus area</p>
                                            <p className="mt-1 text-[15px] leading-7 text-white font-medium">{focus}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                );
            })}

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
                            Want to talk to our academic or admissions team directly?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Reach out with questions about courses, faculty, or the admissions process.
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
                                Meet the full team
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default PrincipalAndDirector;