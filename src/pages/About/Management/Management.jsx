import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Quote,
    Users,
    HardHat,
    ClipboardCheck,
    GraduationCap,
    Landmark,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar & Home. Change here to re-theme.
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
    students: u('photo-1523240795612-9a054b0db644', 500),
    chairman: u('photo-1560250097-0b93528c311a', 800),
    cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

const LEADERSHIP = [
    {
        name: 'Rajeev Menon',
        role: 'Chairman',
        bio: 'Founded MIIT in 2016 after two decades in enterprise construction management, with a focus on closing the gap between classroom learning and site-ready skills.',
        photo: u('photo-1560250097-0b93528c311a', 500),
    },
    {
        name: 'Ananya Krishnan',
        role: 'Managing Director',
        bio: 'Oversees admissions, finance, and institutional partnerships. Previously led operations at a national skills-training network.',
        photo: u('photo-1573497019940-1c28c88b4f3e', 500),
    },
    {
        name: 'Suresh Bhatt',
        role: 'Principal',
        bio: 'Responsible for academic delivery and faculty development. Twelve years teaching construction technology before joining MIIT.',
        photo: u('photo-1519085360753-af0119f7cbe7', 500),
    },
    {
        name: 'Divya Pillai',
        role: 'Dean of Training & Placement',
        bio: 'Runs the placement cell and employer relationships, from resume reviews to final interview rounds.',
        photo: u('photo-1580489944761-15a19d654956', 500),
    },
];

const GOVERNANCE = [
    {
        icon: Users,
        title: 'Open decision-making',
        desc: 'Curriculum and policy changes are reviewed with faculty and student representatives before they take effect.',
    },
    {
        icon: HardHat,
        title: 'Industry-led leadership',
        desc: 'Every member of the management team has worked in the fields MIIT teaches, not just in education administration.',
    },
    {
        icon: ClipboardCheck,
        title: 'Regular academic audits',
        desc: 'Course content and outcomes are reviewed each term against current employer requirements.',
    },
    {
        icon: GraduationCap,
        title: 'Student-first policies',
        desc: 'Fee structures, batch timings, and grievance handling are set with working students and first-generation learners in mind.',
    },
];

const FACTS = [
    { value: '4', label: 'Management team members' },
    { value: '45+', label: 'Combined industry years' },
    { value: '10+', label: 'Years leading MIIT' },
    { value: 'Termly', label: 'Governance review cycle' },
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
const Management = () => {
    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes mg-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .mg-float { animation: mg-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .mg-float { animation: none; } }
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
                            {/* breadcrumb */}
                            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-neutral-500 mb-7">
                                <Link to="/" className="inline-flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
                                    <Home size={14} /> Home
                                </Link>
                                <ChevronRight size={14} />
                                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                                    About Management
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
                                The people guiding MIIT forward.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                MIIT is run by a small team of people who have worked in the industries they teach, not career
                                administrators. That shapes everything from which tools we license to how the placement cell
                                operates.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/about/principal-director"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Principal & Director
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

                    {/* hex collage */}
                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden mg-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.students} alt="Students on campus" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.campus} alt="MIIT campus" />
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
                                <span className="text-[30px] font-extrabold leading-none">10+</span>
                                <span className="mt-1 text-[11.5px] font-semibold leading-tight px-4">Years of leadership</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ CHAIRMAN'S MESSAGE ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                <Reveal>
                    <div className="relative mx-auto w-full max-w-[460px] h-[440px] sm:h-[520px]">
                        <div
                            className="absolute top-0 left-0 w-[310px] h-[358px] sm:w-[370px] sm:h-[427px] overflow-hidden"
                            style={{ clipPath: HEX, background: BRAND }}
                        >
                            <Img src={IMG.chairman} alt="Rajeev Menon, Chairman of MIIT" />
                        </div>
                        <div
                            className="absolute bottom-2 right-0 w-[150px] h-[173px] sm:w-[170px] sm:h-[196px] flex flex-col items-center justify-center text-white text-center px-4"
                            style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                        >
                            <span className="text-[14px] font-bold leading-tight">Rajeev Menon</span>
                            <span className="mt-1 text-[11.5px] text-white/85">Chairman, MIIT</span>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={150}>
                    <div>
                        <Heading eyebrow="Chairman's message" title="Built around one question" />
                        <div className="mt-6 relative pl-7 border-l-4" style={{ borderColor: BRAND }}>
                            <Quote size={28} className="absolute -top-1 -left-[18px] p-1 rounded-full bg-white" style={{ color: BRAND }} />
                            <p className="text-[21px] md:text-[25px] leading-relaxed font-semibold" style={{ color: INK }}>
                                “We built MIIT around one question: will this actually get a graduate hired? If a course, a tool,
                                or a policy doesn’t answer yes, we change it.”
                            </p>
                        </div>
                        <p className="mt-6 text-[15.5px] leading-8 text-neutral-700">
                            Before founding MIIT, I spent close to twenty years managing large construction projects, watching
                            capable graduates struggle in their first year simply because their training hadn’t caught up with
                            the software and workflows the industry had already moved to.
                        </p>
                        <p className="mt-4 text-[15.5px] leading-8 text-neutral-700">
                            That gap is still what MIIT exists to close: through live industry tools, faculty who’ve worked the
                            jobs they teach, and a placement cell that treats a hire as the actual finish line, not a
                            certificate ceremony.
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* ══════════ GOVERNANCE ══════════ */}
            <section className="py-20 md:py-24" style={{ background: '#f2f8f7' }}>
                <div className="max-w-[1300px] mx-auto px-6">
                    <Reveal>
                        <Heading eyebrow="How we operate" title="Governance built for accountability" center />
                        <p className="mt-4 mx-auto max-w-2xl text-center text-[15.5px] leading-8 text-neutral-600">
                            Management decisions at MIIT are reviewed on a regular cycle, not made in isolation. Here’s what
                            that looks like day to day.
                        </p>
                    </Reveal>

                    <div className="mt-14 grid sm:grid-cols-2 gap-6">
                        {GOVERNANCE.map(({ icon, title, desc }, i) => (
                            <Reveal key={title} delay={(i % 2) * 100}>
                                <div className="group flex items-start gap-5 bg-white rounded-3xl p-6 border border-neutral-100 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 h-full">
                                    <HexIcon icon={icon} size={68} />
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

            {/* ══════════ LEADERSHIP TEAM ══════════ */}
            <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Leadership" title="The management team" center />
                </Reveal>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
                    {LEADERSHIP.map(({ name, role, bio, photo }, i) => (
                        <Reveal key={name} delay={(i % 4) * 100}>
                            <div className="group text-center">
                                <div className="relative mx-auto w-[200px] h-[231px]">
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
                                <h3 className="mt-6 text-[18px] font-bold" style={{ color: INK }}>
                                    {name}
                                </h3>
                                <p className="mt-1 text-[13px] font-bold tracking-wide" style={{ color: BRAND }}>
                                    {role}
                                </p>
                                <p className="mt-3 text-[13.5px] leading-6 text-neutral-600">{bio}</p>
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
                            Have a question for our leadership team?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Reach out directly, or explore our academic programs and admissions process.
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
                                to="/admissions"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                View admissions
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Management;