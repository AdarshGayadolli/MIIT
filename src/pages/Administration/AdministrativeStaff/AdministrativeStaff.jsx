import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ChevronRight,
    Home,
    Landmark,
    Users,
    Building2,
    BookOpenCheck,
    BriefcaseBusiness,
    Mail,
    Search,
    X,
    SearchX,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
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
const STAFF = [
    {
        name: 'Kavita Rao',
        role: 'Head of Admissions',
        department: 'Administration',
        email: 'admissions@miit.ac.in',
        photo: u('photo-1580489944761-15a19d654956', 500),
    },
    {
        name: 'Arjun Nair',
        role: 'Finance & Accounts Officer',
        department: 'Administration',
        email: 'accounts@miit.ac.in',
        photo: u('photo-1519085360753-af0119f7cbe7', 500),
    },
    {
        name: 'Priya Sharma',
        role: 'Student Support Coordinator',
        department: 'Administration',
        email: 'support@miit.ac.in',
        photo: u('photo-1573497019940-1c28c88b4f3e', 500),
    },
    {
        name: 'Vikram Iyer',
        role: 'Academic Coordinator, BIM',
        department: 'Academics',
        email: 'bim.academics@miit.ac.in',
        photo: u('photo-1560250097-0b93528c311a', 500),
    },
    {
        name: 'Meera Pillai',
        role: 'Academic Coordinator, Digital Marketing',
        department: 'Academics',
        email: 'dm.academics@miit.ac.in',
        photo: u('photo-1580489944761-15a19d654956', 500),
    },
    {
        name: 'Rohan Das',
        role: 'Examinations & Records Officer',
        department: 'Academics',
        email: 'exams@miit.ac.in',
        photo: u('photo-1519085360753-af0119f7cbe7', 500),
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Placement Officer',
        department: 'Training & Placement',
        email: 'placements@miit.ac.in',
        photo: u('photo-1573497019940-1c28c88b4f3e', 500),
    },
    {
        name: 'Karthik Menon',
        role: 'Employer Relations Officer',
        department: 'Training & Placement',
        email: 'employers@miit.ac.in',
        photo: u('photo-1560250097-0b93528c311a', 500),
    },
];

const DEPARTMENTS = [
    { label: 'All', icon: Users },
    { label: 'Administration', icon: Building2 },
    { label: 'Academics', icon: BookOpenCheck },
    { label: 'Training & Placement', icon: BriefcaseBusiness },
];

const FACTS = [
    { value: String(STAFF.length), label: 'Administrative staff' },
    { value: '3', label: 'Departments' },
    { value: '< 48 hrs', label: 'Typical response time' },
    { value: 'Mon–Sat', label: 'Office hours' },
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

const deptIcon = (dept) => DEPARTMENTS.find((d) => d.label === dept)?.icon || Users;

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const AdministrativeStaff = () => {
    const [activeDept, setActiveDept] = useState('All');
    const [query, setQuery] = useState('');

    const counts = useMemo(() => {
        const c = { All: STAFF.length };
        STAFF.forEach((s) => {
            c[s.department] = (c[s.department] || 0) + 1;
        });
        return c;
    }, []);

    const filteredStaff = useMemo(() => {
        const q = query.trim().toLowerCase();
        return STAFF.filter((s) => {
            const deptOk = activeDept === 'All' || s.department === activeDept;
            const textOk =
                !q ||
                s.name.toLowerCase().includes(q) ||
                s.role.toLowerCase().includes(q) ||
                s.email.toLowerCase().includes(q);
            return deptOk && textOk;
        });
    }, [activeDept, query]);

    return (
        <div className="bg-white text-neutral-900 overflow-x-hidden">
            <style>{`
        @keyframes as-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .as-float { animation: as-float 5s ease-in-out infinite; }
        @keyframes as-pop { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .as-pop { animation: as-pop 380ms ease-out both; }
        @media (prefers-reduced-motion: reduce) { .as-float, .as-pop { animation: none; } }
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
                                    Administrative Staff
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
                                The staff running things day to day.
                            </h1>
                            <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                                From admissions to placements, here's who to reach out to for what, and how to contact them
                                directly.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a
                                    href="#directory"
                                    className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                                    style={{ background: BRAND }}
                                >
                                    Find a contact
                                    <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                        <ArrowRight size={16} strokeWidth={2.6} />
                                    </span>
                                </a>
                                <Link
                                    to="/administration/organization-chart"
                                    className="text-[14px] font-semibold pb-0.5 border-b-2"
                                    style={{ color: BRAND, borderColor: `${BRAND}55` }}
                                >
                                    Organization chart
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
                            <div
                                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden as-float"
                                style={{ clipPath: HOUSE, background: BRAND }}
                            >
                                <Img src={IMG.team} alt="Staff team discussion" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                            >
                                <Img src={IMG.office} alt="MIIT administrative office" />
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
                                <Mail size={30} strokeWidth={1.6} />
                                <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Reply within 48 hrs</span>
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

            {/* ══════════ STAFF DIRECTORY ══════════ */}
            <section id="directory" className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
                <Reveal>
                    <Heading eyebrow="Directory" title="Meet the team" center />
                </Reveal>

                {/* Filters + search */}
                <Reveal delay={100}>
                    <div className="mt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter by department">
                            {DEPARTMENTS.map(({ label, icon: Icon }) => {
                                const active = activeDept === label;
                                return (
                                    <button
                                        key={label}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => setActiveDept(label)}
                                        className="inline-flex items-center gap-2 rounded-full pl-3.5 pr-3 py-2 text-[13px] font-bold border-2 transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={{
                                            background: active ? BRAND : '#fff',
                                            borderColor: active ? BRAND : '#d6e9e6',
                                            color: active ? '#fff' : BRAND_DARK,
                                            outlineColor: BRAND,
                                        }}
                                    >
                                        <Icon size={15} strokeWidth={2} />
                                        {label}
                                        <span
                                            className="min-w-[22px] text-center text-[11px] font-extrabold rounded-full px-1.5 py-0.5"
                                            style={{
                                                background: active ? 'rgba(0,0,0,0.25)' : TINT,
                                                color: active ? '#fff' : BRAND_DARK,
                                            }}
                                        >
                                            {counts[label] || 0}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <label className="relative block w-full lg:w-[320px]">
                            <span className="sr-only">Search staff</span>
                            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search name, role or email"
                                className="w-full rounded-full border-2 bg-white pl-11 pr-10 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#009688]"
                                style={{ borderColor: '#d6e9e6' }}
                            />
                            {query && (
                                <button
                                    type="button"
                                    onClick={() => setQuery('')}
                                    aria-label="Clear search"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white"
                                    style={{ background: BRAND }}
                                >
                                    <X size={13} strokeWidth={3} />
                                </button>
                            )}
                        </label>
                    </div>
                </Reveal>

                <p className="mt-6 text-[13px] text-neutral-500" aria-live="polite">
                    Showing <b style={{ color: BRAND_DARK }}>{filteredStaff.length}</b> of {STAFF.length} staff members
                </p>

                {/* Cards */}
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {filteredStaff.map(({ name, role, department, email, photo }, i) => {
                        const DeptIcon = deptIcon(department);
                        return (
                            <div
                                key={name}
                                className="as-pop group relative bg-white rounded-3xl border border-neutral-100 pt-8 pb-6 px-6 text-center shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300"
                                style={{ animationDelay: `${(i % 4) * 70}ms` }}
                            >
                                {/* hexagon portrait with ring */}
                                <div className="relative mx-auto w-[150px] h-[173px]">
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
                                    {/* department badge */}
                                    <span
                                        className="absolute -bottom-1 -right-1 w-11 h-[50px] flex items-center justify-center text-white shadow-md"
                                        style={{ clipPath: HEX, background: BRAND }}
                                        title={department}
                                    >
                                        <DeptIcon size={17} strokeWidth={1.9} />
                                    </span>
                                </div>

                                <span
                                    className="mt-6 inline-block text-[10.5px] tracking-[0.12em] uppercase font-bold px-3 py-1 rounded-full"
                                    style={{ background: TINT, color: BRAND_DARK }}
                                >
                                    {department}
                                </span>
                                <h3 className="mt-3 text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                                    {name}
                                </h3>
                                <p className="mt-1 text-[13px] leading-5 text-neutral-500 min-h-[40px]">{role}</p>

                                <a
                                    href={`mailto:${email}`}
                                    className="mt-4 flex items-center gap-2.5 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-[#d7efec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={{ background: TINT, outlineColor: BRAND }}
                                >
                                    <span
                                        className="shrink-0 w-8 h-[37px] flex items-center justify-center text-white"
                                        style={{ clipPath: HEX, background: BRAND }}
                                    >
                                        <Mail size={13} strokeWidth={2.2} />
                                    </span>
                                    <span className="min-w-0 text-[12.5px] font-semibold break-all leading-snug" style={{ color: BRAND_DARK }}>
                                        {email}
                                    </span>
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Empty state */}
                {filteredStaff.length === 0 && (
                    <div className="mt-6 mx-auto max-w-md text-center py-14">
                        <span
                            className="mx-auto w-20 h-[92px] flex items-center justify-center"
                            style={{ clipPath: HEX, background: 'linear-gradient(145deg,#f4f8f8,#dcebe9)', color: BRAND }}
                        >
                            <SearchX size={32} strokeWidth={1.6} />
                        </span>
                        <h3 className="mt-5 text-[18px] font-bold" style={{ color: INK }}>
                            No matching staff found
                        </h3>
                        <p className="mt-1.5 text-[14px] text-neutral-500">
                            Try a different name or department, or send us a general enquiry.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                setActiveDept('All');
                            }}
                            className="mt-5 inline-flex items-center gap-2 rounded-full text-white text-[13px] font-bold px-5 py-2.5 hover:shadow-lg transition-all"
                            style={{ background: BRAND }}
                        >
                            Reset filters
                        </button>
                    </div>
                )}
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
                            Can't find the right person?
                        </h2>
                        <p className="mt-4 text-white/85 text-[16px] leading-8">
                            Send us a general enquiry and we'll route it to the right department.
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
                                to="/administration/organization-chart"
                                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
                            >
                                Organization chart
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default AdministrativeStaff;