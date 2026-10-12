import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Activity,
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    Bot,
    Bug,
    CalendarDays,
    Camera,
    CheckSquare,
    ClipboardCheck,
    Clock,
    Database,
    DollarSign,
    Eye,
    FileText,
    Film,
    FolderKanban,
    Gauge,
    Image as ImageIcon,
    Layers,
    LayoutGrid,
    Laptop,
    Lightbulb,
    Link2,
    LogOut,
    Megaphone,
    MessageCircle,
    MessageSquare,
    Monitor,
    MousePointerClick,
    PenLine,
    Percent,
    Play,
    Rocket,
    Search,
    Send,
    Share2,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    Tag,
    Target,
    TrendingUp,
    Type,
    Users,
    Video,
    Wrench,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer, AdministrativeStaff,
   Placements, PlacementProcess & PlacementStatistics.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const GLOW = '#cfeae6';
const LINE = '#d6e9e6';

/* ─────────────────────────  DATA  ───────────────────────── */
const TOTAL_SLIDES = 10;

const HERO_STATS = [
    { icon: Layers, value: '10', label: 'Modules' },
    { icon: Sparkles, value: '50+', label: 'Topics' },
    { icon: Wrench, value: 'Hands-on', label: 'Projects' },
    { icon: Award, value: 'Certificate', label: 'of Completion' },
];

const OVERVIEW_CARDS = [
    { icon: BookOpen, title: 'Learn', desc: 'Concepts with real examples' },
    { icon: MousePointerClick, title: 'Practice', desc: 'Hands-on activities & case studies' },
    { icon: Rocket, title: 'Build', desc: 'Real campaigns and projects' },
    { icon: TrendingUp, title: 'Grow', desc: 'Build your portfolio & career' },
];

const ROADMAP = [
    { n: '01', title: 'Digital Marketing Fundamentals' },
    { n: '02', title: 'Website & Landing Pages' },
    { n: '03', title: 'SEO' },
    { n: '04', title: 'Social Media Marketing' },
    { n: '05', title: 'Content Marketing' },
    { n: '06', title: 'Google Ads' },
    { n: '07', title: 'Email & WhatsApp Marketing' },
    { n: '08', title: 'Analytics & Data-Driven Marketing' },
    { n: '09', title: 'Influencer & Affiliate Marketing' },
    { n: '10', title: 'Capstone Project' },
];

const SEO_STATS = [
    { icon: FileText, value: '13', label: 'Topics' },
    { icon: CheckSquare, value: '4', label: 'Activities' },
    { icon: FolderKanban, value: '1', label: 'Project' },
];

const SEO_STEPS = [
    { icon: Search, title: 'Discover', desc: 'Search engines find your content' },
    { icon: Bug, title: 'Crawl', desc: 'Bots visit your website' },
    { icon: Database, title: 'Index', desc: 'Content is stored in a database' },
    { icon: BarChart3, title: 'Rank', desc: 'Relevance & quality decide position' },
    { icon: Eye, title: 'Click', desc: 'Users find you in search results' },
    { icon: ShoppingBag, title: 'Convert', desc: 'Visitors become customers', highlight: true },
];

const SEO_TOOLS = [
    { icon: Search, color: '#009688', name: 'Google Search', desc: 'For keyword ideas & search trends' },
    { icon: BarChart3, color: '#00796b', name: 'Google Search Console', desc: 'Monitor performance & fix issues' },
    { icon: Target, color: '#26a69a', name: 'Google Keyword Planner', desc: 'Find the right keywords' },
    { icon: TrendingUp, color: '#00897b', name: 'Google Trends', desc: 'Analyze trends & interests' },
    { icon: Link2, color: '#4db6ac', name: 'Ahrefs / SEMrush', desc: 'Competitor analysis & backlinks' },
];

/* Social platforms keep their own brand colours so they stay recognisable. */
const PLATFORMS = [
    { name: 'Instagram', color: '#E1306C', icon: Camera },
    { name: 'YouTube', color: '#FF0000', icon: Play },
    { name: 'Facebook', color: '#1877F2', text: 'f' },
    { name: 'X (Twitter)', color: '#000000', text: 'X' },
    { name: 'LinkedIn', color: '#0A66C2', text: 'in' },
    { name: 'WhatsApp', color: '#25D366', icon: MessageCircle },
];

const SOCIAL_TOPICS = [
    'Strategy & Planning',
    'Hashtags & Engagement',
    'Content Calendar',
    'Community Building',
    'Organic vs Paid',
    'Influencer Marketing',
    'Reels & Stories',
    'Analytics',
];

const CONTENT_ITEMS = [
    { icon: PenLine, label: 'Blog Writing' },
    { icon: LayoutGrid, label: 'Types of Content' },
    { icon: Video, label: 'Video Content' },
    { icon: BookOpen, label: 'Storytelling' },
    { icon: BarChart3, label: 'Infographics' },
    { icon: CalendarDays, label: 'Content Calendar' },
    { icon: Share2, label: 'Social Media Content' },
    { icon: Send, label: 'Distribution' },
    { icon: Type, label: 'Copywriting' },
    { icon: Gauge, label: 'Measurement' },
];

const AI_ITEMS = [
    { icon: Sparkles, label: 'AI-assisted content creation' },
    { icon: ImageIcon, label: 'AI image generation' },
    { icon: MessageSquare, label: 'Prompt engineering basics' },
    { icon: Film, label: 'AI video tools' },
    { icon: Lightbulb, label: 'AI for social media ideas' },
    { icon: PenLine, label: 'Content editing with AI' },
    { icon: FileText, label: 'AI for blogs & articles' },
    { icon: ShieldCheck, label: 'Ethical use of AI' },
    { icon: Megaphone, label: 'AI for advertisements' },
];

const ADS_TYPES = [
    { icon: Search, label: 'Search' },
    { icon: Monitor, label: 'Display' },
    { icon: Video, label: 'Video' },
    { icon: ShoppingCart, label: 'Shopping' },
];

const ADS_METRICS = [
    { icon: MousePointerClick, label: 'CTR' },
    { icon: DollarSign, label: 'CPC' },
    { icon: Percent, label: 'Conversion Rate' },
    { icon: TrendingUp, label: 'ROAS' },
];

const ANALYTICS_METRICS_LEFT = [
    { icon: Activity, label: 'Traffic' },
    { icon: Users, label: 'Users' },
    { icon: Clock, label: 'Sessions' },
    { icon: MessageCircle, label: 'Engagement' },
];

const ANALYTICS_METRICS_RIGHT = [
    { icon: Target, label: 'Conversion' },
    { icon: LogOut, label: 'Bounce Rate' },
    { icon: Tag, label: 'UTM Parameters' },
    { icon: Link2, label: 'Campaign Tracking' },
];

const TRAFFIC_SOURCES = [
    { label: 'Organic Search', value: 42, color: BRAND },
    { label: 'Social Media', value: 31, color: BRAND_DARK },
    { label: 'Paid Ads', value: 19, color: '#4db6ac' },
    { label: 'Direct', value: 8, color: '#a5d6d0' },
];

const CAPSTONE_STEPS = [
    'Research & Target Audience',
    'Strategy & Planning',
    'Content Creation',
    'Website / Landing Page',
    'SEO & Paid Campaigns',
    'Social Media & Email',
    'Analytics & Reporting',
];

/* ─────────────────────────  SHARED PIECES  ───────────────────────── */
const Logo = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V4l7 9V4" stroke={BRAND} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 21l7-17" stroke={BRAND} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

const SlideShell = ({ children, className = '' }) => (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-4">
        <div
            className={`relative overflow-hidden rounded-3xl border shadow-[0_10px_40px_-15px_rgba(15,47,44,0.25)] ${className}`}
            style={{
                borderColor: LINE,
                background: `linear-gradient(135deg, #ffffff 0%, #ffffff 45%, ${TINT} 100%)`,
            }}
        >
            {children}
        </div>
    </section>
);

const SlideHeader = ({ index, right }) => (
    <div className="flex items-center justify-between text-[11px] md:text-[12px]" style={{ color: INK }}>
        <div className="flex items-center gap-2 font-medium">
            <Logo />
            <span>Digital Marketing Course</span>
        </div>
        {right ??
            (index && (
                <span className="text-gray-400 tracking-wide">
                    {String(index).padStart(2, '0')} <span className="mx-0.5">/</span> {TOTAL_SLIDES}
                </span>
            ))}
    </div>
);

const Underline = () => <div className="w-12 h-[3px] rounded-full mt-3" style={{ background: BRAND }} />;

const ModuleTag = ({ children }) => (
    <span
        className="inline-block text-white text-[11px] font-semibold px-3 py-1 rounded-md"
        style={{ background: BRAND }}
    >
        {children}
    </span>
);

const Callout = ({ children, className = '' }) => (
    <div
        className={`flex items-center gap-4 rounded-2xl border bg-white/70 px-5 py-4 ${className}`}
        style={{ borderColor: LINE }}
    >
        <Lightbulb size={22} style={{ color: BRAND }} strokeWidth={1.8} className="shrink-0" />
        <p className="text-[13px] leading-snug" style={{ color: INK }}>{children}</p>
    </div>
);

const PracticalActivity = ({ children, className = '' }) => (
    <div
        className={`flex items-center gap-4 rounded-2xl px-5 py-4 ${className}`}
        style={{ background: INK }}
    >
        <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
            <ClipboardCheck size={22} style={{ color: '#4db6ac' }} strokeWidth={1.8} />
        </div>
        <div className="leading-snug">
            <p className="text-[13px] font-semibold" style={{ color: '#4db6ac' }}>Practical Activity</p>
            <p className="text-[12px] text-white/80 mt-0.5">{children}</p>
        </div>
    </div>
);

const Handwritten = ({ children, className = '' }) => (
    <p
        className={`text-[22px] leading-tight -rotate-3 ${className}`}
        style={{ color: INK, fontFamily: "'Caveat', cursive" }}
    >
        {children}
    </p>
);

const IconListItem = ({ icon: Icon, label }) => (
    <li className="flex items-center gap-3 text-[13px]" style={{ color: INK }}>
        <span className="shrink-0 w-8 h-8 rounded-lg border bg-white flex items-center justify-center" style={{ borderColor: LINE }}>
            <Icon size={15} style={{ color: BRAND_DARK }} strokeWidth={1.7} />
        </span>
        {label}
    </li>
);

/* Simple SVG line chart with soft area fill */
const Sparkline = ({ points, color = BRAND, id = 'spark', className = '' }) => {
    const W = 220;
    const H = 90;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;
    const step = W / (points.length - 1);
    const coords = points.map((p, i) => [i * step, H - 8 - ((p - min) / range) * (H - 20)]);
    const line = coords.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    const area = `${line} L${W},${H} L0,${H} Z`;

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className={`w-full ${className}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={area} fill={`url(#${id})`} />
            <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

/* ─────────────────────────  SLIDE 1 : HERO  ───────────────────────── */
const HeroSlide = () => (
    <SlideShell>
        <div className="relative px-6 md:px-10 pt-6 pb-8 md:pb-10 min-h-[420px] md:min-h-[460px]">
            <SlideHeader
                right={
                    <div className="hidden sm:flex items-center gap-2 text-gray-400">
                        <span>Learn</span>
                        <span style={{ color: BRAND }}>•</span>
                        <span>Apply</span>
                        <span style={{ color: BRAND }}>•</span>
                        <span>Grow</span>
                    </div>
                }
            />

            <div className="hidden md:block absolute top-0 right-0 h-full w-[48%]">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${BRAND_DARK}, ${INK})`,
                        borderTopLeftRadius: '55% 50%',
                        borderBottomLeftRadius: '35% 60%',
                    }}
                />
                <div
                    className="absolute top-10 right-0 bottom-0 left-12 overflow-hidden"
                    style={{ borderTopLeftRadius: '50% 40%', borderBottomLeftRadius: '30% 55%' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                        alt="Digital marketing strategy on a laptop"
                        className="w-full h-full object-cover opacity-95"
                    />
                </div>
                <div
                    className="absolute top-0 right-0 w-36 h-36 rounded-full"
                    style={{ background: BRAND, opacity: 0.9, transform: 'translate(40%,-45%)' }}
                />
            </div>

            <div className="relative z-10 mt-10 md:mt-12 max-w-md">
                <h1
                    className="font-bold leading-[1.02] text-[44px] md:text-[64px]"
                    style={{ color: INK, fontFamily: "'Poppins', sans-serif" }}
                >
                    Digital
                    <br />
                    Marketing
                </h1>
                <p className="mt-3 text-[20px] md:text-[24px] font-medium" style={{ color: INK }}>
                    From <span className="font-semibold" style={{ color: BRAND }}>Strategy</span> to Success
                </p>
                <p className="mt-4 text-[13.5px] text-gray-500 leading-relaxed max-w-xs">
                    Build in-demand skills, create real campaigns and become a digital marketing pro.
                </p>

                <Link
                    to="/admissions"
                    className="mt-6 inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-white text-[13px] font-medium"
                    style={{ background: BRAND }}
                >
                    Start Learning
                    <span
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-black/30"
                    >
                        <ArrowRight size={15} />
                    </span>
                </Link>
            </div>

            <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {HERO_STATS.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-2">
                        <Icon size={20} style={{ color: BRAND_DARK }} strokeWidth={1.6} />
                        <div className="leading-tight">
                            <p className="text-[12px] font-bold" style={{ color: INK }}>{value}</p>
                            <p className="text-[9.5px] text-gray-400">{label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 2 : OVERVIEW  ───────────────────────── */
const OverviewSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={1} />

            <h2 className="mt-8 text-[30px] md:text-[38px] font-bold" style={{ color: INK }}>
                Course Overview
            </h2>
            <p className="mt-4 text-[17px] font-semibold" style={{ color: BRAND_DARK }}>What will you learn?</p>
            <p className="mt-2 text-[13.5px] text-gray-500 leading-relaxed max-w-lg">
                This course gives you a complete understanding of digital marketing, from basics to advanced
                strategies, with hands-on practice and real-world projects.
            </p>
            <Underline />

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {OVERVIEW_CARDS.map(({ icon: Icon, title, desc }) => (
                    <div
                        key={title}
                        className="bg-white/80 border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                        style={{ borderColor: LINE }}
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                            style={{ background: TINT }}
                        >
                            <Icon size={22} style={{ color: BRAND_DARK }} strokeWidth={1.6} />
                        </div>
                        <h3 className="text-[15px] font-bold" style={{ color: INK }}>{title}</h3>
                        <p className="text-[12px] text-gray-500 mt-1 leading-snug">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 3 : ROADMAP  ───────────────────────── */
const RoadmapSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={2} />

            <h2 className="mt-8 text-[30px] md:text-[38px] font-bold" style={{ color: INK }}>
                Course Roadmap
            </h2>
            <p className="mt-1 text-[16px] font-medium" style={{ color: BRAND_DARK }}>Your Learning Journey</p>
            <Underline />

            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-10">
                {ROADMAP.map(({ n, title }, i) => (
                    <div key={n} className="relative flex items-start gap-3">
                        <div
                            className="shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center text-[13px] font-bold shadow-md border-2"
                            style={{ color: BRAND_DARK, borderColor: BRAND }}
                        >
                            {n}
                        </div>
                        <p className="text-[12.5px] font-semibold leading-snug pt-1 pr-6" style={{ color: INK }}>
                            {title}
                        </p>

                        {i % 5 !== 4 && (
                            <div className="hidden md:flex absolute top-[18px] -right-3 w-8 items-center">
                                <div className="flex-1 border-t border-dashed" style={{ borderColor: BRAND }} />
                                <ArrowRight size={12} style={{ color: BRAND }} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-end">
                <Handwritten className="text-right">
                    Small steps
                    <br />
                    Big results <ArrowRight size={14} className="inline" style={{ color: BRAND }} />
                </Handwritten>
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 4 : MODULE 03 – SEO  ───────────────────────── */
const SeoModuleSlide = () => (
    <SlideShell>
        <div className="relative px-6 md:px-10 pt-6 pb-8 md:pb-10 min-h-[380px] md:min-h-[420px]">
            <SlideHeader right={<span />} />

            <div className="hidden md:block absolute top-0 right-0 h-full w-[46%]">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(135deg, ${BRAND_DARK}, ${INK})`,
                        borderTopLeftRadius: '60% 45%',
                        borderBottomLeftRadius: '40% 70%',
                    }}
                />
                <div
                    className="absolute top-12 right-0 bottom-0 left-14 overflow-hidden"
                    style={{ borderTopLeftRadius: '55% 40%', borderBottomLeftRadius: '35% 60%' }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200&q=80"
                        alt="Search engine on a laptop screen"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className="absolute top-8 right-10 w-3 h-3 rounded-full"
                    style={{ background: '#4db6ac' }}
                />
            </div>

            <div className="relative z-10 mt-10 md:mt-12 max-w-md">
                <span
                    className="inline-block text-white text-[12px] font-semibold px-4 py-1 rounded-md"
                    style={{ background: BRAND }}
                >
                    Module 03
                </span>
                <h2
                    className="mt-4 text-[34px] md:text-[44px] font-bold leading-[1.08]"
                    style={{ color: INK }}
                >
                    Search Engine
                    <br />
                    Optimization (SEO)
                </h2>
                <p className="mt-3 text-[15px] text-gray-500">Get found. Get clicks. Get results.</p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                    {SEO_STATS.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <div className="w-9 h-9 rounded-lg border bg-white flex items-center justify-center" style={{ borderColor: LINE }}>
                                <Icon size={16} style={{ color: BRAND_DARK }} strokeWidth={1.6} />
                            </div>
                            <div className="leading-tight">
                                <p className="text-[14px] font-bold" style={{ color: INK }}>{value}</p>
                                <p className="text-[10px] text-gray-400">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link
                to="/admissions"
                className="relative z-10 mt-8 md:absolute md:bottom-8 md:right-10 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-white text-[13px] font-medium"
                style={{ background: BRAND }}
            >
                Continue <ArrowRight size={15} />
            </Link>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 5 : HOW SEO WORKS  ───────────────────────── */
const HowSeoWorksSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={4} />

            <h2 className="mt-8 text-[30px] md:text-[38px] font-bold" style={{ color: INK }}>
                How SEO Works
            </h2>
            <p className="mt-1 text-[15px] text-gray-500">From crawling to conversion.</p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-2">
                {SEO_STEPS.map(({ icon: Icon, title, desc, highlight }, i) => (
                    <div key={title} className="relative flex flex-col items-center text-center px-2">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                            style={{ background: highlight ? BRAND : INK }}
                        >
                            <Icon size={24} className="text-white" strokeWidth={1.7} />
                        </div>
                        <h3 className="mt-3 text-[14px] font-bold" style={{ color: INK }}>{title}</h3>
                        <p className="mt-1 text-[11px] text-gray-500 leading-snug max-w-[120px]">{desc}</p>

                        {i < SEO_STEPS.length - 1 && (
                            <ArrowRight
                                size={14}
                                className="hidden md:block absolute top-[25px] -right-2"
                                style={{ color: BRAND }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <Callout className="mt-8 max-w-2xl mx-auto">
                Good SEO isn't just about ranking.
                <br />
                It's about creating value for your audience.
            </Callout>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 6 : TOOLS YOU'LL USE  ───────────────────────── */
const SeoToolsSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={5} />

            <h2 className="mt-8 text-[30px] md:text-[38px] font-bold" style={{ color: INK }}>
                Tools You'll Use
            </h2>
            <p className="mt-1 text-[15px] text-gray-500">Work smarter, not harder.</p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                {SEO_TOOLS.map(({ icon: Icon, color, name, desc }) => (
                    <div
                        key={name}
                        className="bg-white/80 border rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all"
                        style={{ borderColor: LINE }}
                    >
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                            style={{ background: `${color}1A` }}
                        >
                            <Icon size={20} style={{ color }} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-[13px] font-bold leading-snug" style={{ color: INK }}>{name}</h3>
                        <p className="text-[11px] text-gray-500 mt-1 leading-snug">{desc}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
                <PracticalActivity className="flex-1">
                    Perform an SEO audit of an existing website and suggest improvements.
                </PracticalActivity>
                <Handwritten className="text-right md:pr-4">
                    Better tools
                    <br />
                    Better decisions
                </Handwritten>
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 7 : SOCIAL MEDIA MARKETING  ───────────────────────── */
const SocialMediaSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={6} />

            <div className="mt-6 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                    <ModuleTag>Module 04</ModuleTag>
                    <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight" style={{ color: INK }}>
                        Social Media Marketing
                    </h2>
                    <p className="mt-1 text-[14px] text-gray-500">Build your brand. Build your community.</p>

                    <div className="mt-6 rounded-2xl border bg-white/70 p-5" style={{ borderColor: LINE }}>
                        <p className="text-[13px] font-bold mb-3" style={{ color: INK }}>Platforms</p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {PLATFORMS.map(({ name, color, icon: Icon, text }) => (
                                <div key={name} className="flex items-center gap-3 text-[12.5px]" style={{ color: INK }}>
                                    <span
                                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[12px] font-bold"
                                        style={{ background: color }}
                                    >
                                        {Icon ? <Icon size={14} strokeWidth={2} /> : text}
                                    </span>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-6 text-[13px] font-bold" style={{ color: INK }}>Key Topics</p>
                    <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1.5">
                        {SOCIAL_TOPICS.map((t) => (
                            <li key={t} className="flex items-center gap-2 text-[12px] text-gray-600">
                                <ArrowRight size={11} style={{ color: BRAND }} strokeWidth={2.5} />
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex justify-center items-center min-h-[360px]">
                    <div
                        className="absolute w-[300px] h-[300px] rounded-full"
                        style={{ background: `radial-gradient(circle, ${GLOW} 0%, rgba(255,255,255,0) 70%)` }}
                    />
                    <div
                        className="relative w-[190px] h-[350px] rounded-[2rem] overflow-hidden shadow-2xl"
                        style={{ border: `6px solid ${INK}`, background: INK }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80"
                            alt="Social media on a smartphone"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full" style={{ background: INK }} />
                    </div>

                    <span className="absolute top-6 right-[14%] w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white" style={{ background: '#E1306C' }}>
                        <Camera size={20} />
                    </span>
                    <span className="absolute top-[38%] right-[4%] w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white text-[16px] font-bold" style={{ background: '#1877F2' }}>
                        f
                    </span>
                    <span className="absolute bottom-[26%] right-[10%] w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white text-[13px] font-bold" style={{ background: '#0A66C2' }}>
                        in
                    </span>
                    <span className="absolute top-[24%] left-[8%] w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white" style={{ background: BRAND }}>
                        <Share2 size={18} />
                    </span>

                    <Handwritten className="absolute bottom-0 right-0 text-right">
                        Create
                        <br />
                        Engage
                        <br />
                        Grow <ArrowRight size={14} className="inline" style={{ color: BRAND }} />
                    </Handwritten>
                </div>
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 8 : CONTENT MARKETING  ───────────────────────── */
const ContentMarketingSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={7} />

            <div className="mt-6 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                    <ModuleTag>Module 05</ModuleTag>
                    <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight" style={{ color: INK }}>
                        Content Marketing
                    </h2>
                    <p className="mt-1 text-[14px] text-gray-500">
                        Great content informs, builds trust and drives action.
                    </p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {CONTENT_ITEMS.map((item) => (
                            <IconListItem key={item.label} {...item} />
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div className="rounded-3xl overflow-hidden h-[300px] md:h-[340px] shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80"
                            alt="Notebook and pen for content planning"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <p
                            className="text-[30px] md:text-[36px] leading-[1.05] text-center -rotate-6 bg-white/75 backdrop-blur-[1px] rounded-xl px-5 py-3"
                            style={{ color: INK, fontFamily: "'Caveat', cursive", fontWeight: 600 }}
                        >
                            Content
                            <br />
                            Creates
                            <br />
                            Value
                        </p>
                    </div>
                </div>
            </div>

            <Callout className="mt-8 max-w-xl">
                Content isn't about selling,
                <br />
                it's about solving problems.
            </Callout>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 9 : GENERATIVE AI FOR MARKETING  ───────────────────────── */
const GenerativeAiSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={8} />

            <div className="mt-6 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                <div>
                    <ModuleTag>Module 06</ModuleTag>
                    <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight" style={{ color: INK }}>
                        Generative AI for Marketing
                    </h2>
                    <p className="mt-1 text-[14px] text-gray-500">Work smarter with the power of AI.</p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {AI_ITEMS.map((item) => (
                            <IconListItem key={item.label} {...item} />
                        ))}
                    </ul>
                </div>

                <div className="relative flex items-center justify-center min-h-[260px]">
                    <div
                        className="absolute w-[260px] h-[260px] rounded-full"
                        style={{ background: `radial-gradient(circle, ${GLOW} 0%, rgba(255,255,255,0) 70%)` }}
                    />
                    <div
                        className="relative w-40 h-40 rounded-[2.5rem] flex items-center justify-center shadow-2xl"
                        style={{ background: `linear-gradient(135deg, ${BRAND_DARK}, ${INK})` }}
                    >
                        <Bot size={84} className="text-white" strokeWidth={1.3} />
                        <span
                            className="absolute -top-3 -right-3 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
                            style={{ background: BRAND }}
                        >
                            <Sparkles size={20} className="text-white" />
                        </span>
                    </div>

                    <Handwritten className="absolute top-0 right-0 text-center">
                        Ideas
                        <br />+ AI
                        <br />= Impact
                    </Handwritten>
                </div>
            </div>

            <PracticalActivity className="mt-8 max-w-2xl">
                Create a complete AI-assisted marketing campaign for a real brand.
            </PracticalActivity>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 10 : GOOGLE ADS & PAID MARKETING  ───────────────────────── */
const GoogleAdsSlide = () => (
    <SlideShell>
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
            <SlideHeader index={9} />

            <div className="mt-6 grid md:grid-cols-[1fr_1fr] gap-8 items-start">
                <div>
                    <ModuleTag>Module 07</ModuleTag>
                    <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight" style={{ color: INK }}>
                        Google Ads & Paid Marketing
                    </h2>
                    <p className="mt-1 text-[14px] text-gray-500">Right audience. Right message. Right time.</p>

                    <div className="mt-6 grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-[13px] font-bold mb-3" style={{ color: INK }}>Campaign Types</p>
                            <ul className="space-y-3">
                                {ADS_TYPES.map((item) => (
                                    <IconListItem key={item.label} {...item} />
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[13px] font-bold mb-3" style={{ color: INK }}>Key Metrics</p>
                            <ul className="space-y-3">
                                {ADS_METRICS.map((item) => (
                                    <IconListItem key={item.label} {...item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* right: performance card */}
                <div className="relative">
                    <div
                        className="absolute -inset-4 rounded-full"
                        style={{ background: `radial-gradient(circle, ${GLOW} 0%, rgba(255,255,255,0) 70%)` }}
                    />
                    <div className="relative bg-white rounded-2xl border shadow-xl p-5" style={{ borderColor: LINE }}>
                        <p className="text-[11px] text-gray-400">Total Clicks</p>
                        <div className="flex items-end gap-2 mt-1">
                            <p className="text-[30px] font-bold leading-none" style={{ color: INK }}>12,880</p>
                            <span className="text-[12px] font-semibold mb-1" style={{ color: BRAND }}>↑ 23%</span>
                        </div>
                        <Sparkline
                            id="ads-spark"
                            className="mt-4 h-28"
                            points={[18, 22, 20, 28, 26, 34, 31, 42, 40, 52, 58, 72]}
                        />
                        <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                            <span>Week 1</span>
                            <span>Week 4</span>
                            <span>Week 8</span>
                            <span>Week 12</span>
                        </div>
                    </div>
                </div>
            </div>

            <PracticalActivity className="mt-8">
                Design a Google Ads campaign for a hypothetical business.
            </PracticalActivity>
        </div>
    </SlideShell>
);

/* ─────────────────────────  SLIDE 11 : ANALYTICS & DATA-DRIVEN MARKETING  ───────────────────────── */
const AnalyticsSlide = () => {
    // build conic-gradient stops from TRAFFIC_SOURCES
    let acc = 0;
    const stops = TRAFFIC_SOURCES.map(({ value, color }) => {
        const start = acc;
        acc += value;
        return `${color} ${start}% ${acc}%`;
    }).join(', ');

    return (
        <SlideShell>
            <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
                <SlideHeader index={10} />

                <div className="mt-6 grid md:grid-cols-[1fr_1fr] gap-8 items-start">
                    <div>
                        <ModuleTag>Module 08</ModuleTag>
                        <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight" style={{ color: INK }}>
                            Analytics & Data-Driven Marketing
                        </h2>
                        <p className="mt-1 text-[14px] text-gray-500">Measure. Learn. Improve.</p>

                        <p className="mt-6 text-[13px] font-bold mb-3" style={{ color: INK }}>Key Metrics</p>
                        <div className="grid grid-cols-2 gap-6">
                            <ul className="space-y-3">
                                {ANALYTICS_METRICS_LEFT.map((item) => (
                                    <IconListItem key={item.label} {...item} />
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {ANALYTICS_METRICS_RIGHT.map((item) => (
                                    <IconListItem key={item.label} {...item} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* right: dashboard cards */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl border shadow-lg p-5" style={{ borderColor: LINE }}>
                            <p className="text-[11px] text-gray-400">Website Performance</p>
                            <div className="flex items-end gap-2 mt-1">
                                <p className="text-[28px] font-bold leading-none" style={{ color: INK }}>24,850</p>
                                <span className="text-[12px] font-semibold mb-1" style={{ color: BRAND }}>↑ 24%</span>
                            </div>
                            <Sparkline
                                id="an-spark"
                                color={BRAND_DARK}
                                className="mt-3 h-20"
                                points={[30, 36, 32, 40, 38, 48, 44, 56, 52, 64, 60, 74]}
                            />
                        </div>

                        <div className="bg-white rounded-2xl border shadow-lg p-5" style={{ borderColor: LINE }}>
                            <p className="text-[11px] text-gray-400 mb-3">Traffic Sources</p>
                            <div className="flex items-center gap-6">
                                <div
                                    className="relative shrink-0 w-28 h-28 rounded-full"
                                    style={{ background: `conic-gradient(${stops})` }}
                                >
                                    <div className="absolute inset-[22%] rounded-full bg-white" />
                                </div>
                                <ul className="space-y-2 flex-1">
                                    {TRAFFIC_SOURCES.map(({ label, value, color }) => (
                                        <li key={label} className="flex items-center justify-between text-[12px]" style={{ color: INK }}>
                                            <span className="flex items-center gap-2">
                                                <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                                                {label}
                                            </span>
                                            <span className="font-semibold">{value}%</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <PracticalActivity className="mt-8">
                    Analyze a real campaign and create a performance report.
                </PracticalActivity>
            </div>
        </SlideShell>
    );
};

/* ─────────────────────────  SLIDE 12 : CAPSTONE PROJECT  ───────────────────────── */
const CapstoneSlide = () => (
    <SlideShell>
        <div className="grid lg:grid-cols-[1fr_300px]">
            {/* left: content */}
            <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
                <SlideHeader index={10} />

                <h2 className="mt-8 text-[30px] md:text-[38px] font-bold" style={{ color: INK }}>
                    Capstone Project
                </h2>
                <p className="mt-1 text-[14px] text-gray-500">Plan. Create. Execute. Analyze.</p>
                <Underline />

                <div className="mt-8 grid md:grid-cols-[1fr_1fr] gap-8 items-center">
                    <ol className="space-y-3">
                        {CAPSTONE_STEPS.map((step, i) => (
                            <li key={step} className="flex items-center gap-3 text-[13px]" style={{ color: INK }}>
                                <span
                                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                                    style={{ background: BRAND }}
                                >
                                    {i + 1}
                                </span>
                                {step}
                            </li>
                        ))}
                    </ol>

                    {/* illustration: laptop + megaphone */}
                    <div className="relative flex items-center justify-center min-h-[240px]">
                        <div
                            className="absolute w-[240px] h-[240px] rounded-full"
                            style={{ background: `radial-gradient(circle, ${GLOW} 0%, rgba(255,255,255,0) 70%)` }}
                        />
                        <div
                            className="relative w-44 h-36 rounded-2xl flex items-center justify-center shadow-2xl"
                            style={{ background: `linear-gradient(135deg, ${BRAND_DARK}, ${INK})` }}
                        >
                            <Laptop size={72} className="text-white" strokeWidth={1.3} />
                            <span
                                className="absolute -top-5 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg -rotate-12"
                                style={{ background: BRAND }}
                            >
                                <Megaphone size={26} className="text-white" />
                            </span>
                            <span className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                                <BarChart3 size={18} style={{ color: BRAND }} />
                            </span>
                        </div>

                        <Handwritten className="absolute -bottom-2 right-0 text-center">
                            Your ideas
                            <br />+ Our tools
                            <br />= Real Impact
                        </Handwritten>
                    </div>
                </div>

                <Link
                    to="/admissions"
                    className="mt-10 inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 text-white text-[13px] font-medium"
                    style={{ background: BRAND }}
                >
                    Let's Build Your Campaign
                    <span className="w-8 h-8 rounded-full flex items-center justify-center bg-black/30">
                        <ArrowRight size={15} />
                    </span>
                </Link>
            </div>

            {/* right: dark quote panel */}
            <div
                className="flex flex-col justify-between px-8 py-10 text-white"
                style={{ background: `linear-gradient(160deg, ${BRAND_DARK}, ${INK})` }}
            >
                <div>
                    <p className="text-[34px] leading-none" style={{ color: '#4db6ac' }}>“</p>
                    <p className="mt-2 text-[17px] leading-relaxed font-medium">
                        Marketing is no longer about the stuff that you make, but the stories you tell.
                    </p>
                    <p className="mt-4 text-[12px] text-white/60">— Seth Godin</p>
                </div>

                <div className="mt-10 flex items-center gap-3">
                    <Logo />
                    <p className="text-[18px] leading-tight font-semibold">
                        Learn
                        <br />
                        Practice
                        <br />
                        <span style={{ color: '#4db6ac' }}>Grow</span>
                    </p>
                </div>
            </div>
        </div>
    </SlideShell>
);

/* ─────────────────────────  PAGE  ───────────────────────── */
export default function DigitalMarketing() {
    useEffect(() => {
        const id = 'dm-fonts';
        if (!document.getElementById(id)) {
            const link = document.createElement('link');
            link.id = id;
            link.rel = 'stylesheet';
            link.href =
                'https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&family=Poppins:wght@400;500;600;700&display=swap';
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div className="py-6 md:py-10" style={{ background: '#f3faf9', fontFamily: "'Poppins', sans-serif" }}>
            <HeroSlide />
            <OverviewSlide />
            <RoadmapSlide />
            <SeoModuleSlide />
            <HowSeoWorksSlide />
            <SeoToolsSlide />
            <SocialMediaSlide />
            <ContentMarketingSlide />
            <GenerativeAiSlide />
            <GoogleAdsSlide />
            <AnalyticsSlide />
            <CapstoneSlide />
        </div>
    );
}