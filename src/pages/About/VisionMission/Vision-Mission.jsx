import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MISSION_PILLARS = [
    {
        title: 'Teach the tools employers use',
        desc: 'Every course is built around the actual software and workflows in use today — Revit, Navisworks, Google Ads Manager, SEMrush — not outdated theory.',
    },
    {
        title: 'Treat placement as the real finish line',
        desc: "A certificate isn't the goal. Every batch is tracked through to an actual job offer, and the placement cell stays involved until that happens.",
    },
    {
        title: 'Keep curriculum current, not fixed',
        desc: 'Course content is reviewed every term against what our hiring partners are actually asking for, and updated when it falls behind.',
    },
    {
        title: 'Make technical education accessible',
        desc: 'Flexible batch timings, transparent fees, and support built for first-generation and working students, not just full-time residential learners.',
    },
];

const VALUES = [
    {
        title: 'Industry relevance',
        desc: 'If a skill isn\'t currently in demand, it doesn\'t stay in the syllabus. We\'d rather cut a module than teach it out of habit.',
    },
    {
        title: 'Transparency',
        desc: 'Placement statistics, fee structures, and faculty credentials are published, not just claimed in a brochure.',
    },
    {
        title: 'Accountability',
        desc: 'Faculty and management are reviewed against student outcomes, not attendance or paperwork.',
    },
    {
        title: 'Accessibility',
        desc: 'A serious technical education shouldn\'t require giving up a job or taking on unmanageable debt to get one.',
    },
];

const VisionAndMission = () => {
    useEffect(() => {
        const linkId = 'chevalier-lp-font';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = 'https://db.onlinewebfonts.com/c/5d17ee572e2e5767eba7a20b2ca8bd40?family=Chevalier+LP+W00+Regular';
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Vision & Mission</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">About us</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    What we're building, and why.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    Every decision at MIIT — from which software we license to how we
                    structure batch timings — is meant to answer to the statements below.
                </p>
            </section>

            {/* ── VISION ── */}
            <section className="bg-[#1E3D47] py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#7AAFC0] font-medium">Our vision</span>
                    <p
                        className="text-white leading-[1.3] mt-5 text-[26px] md:text-[34px]"
                        style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                    >
                        To be the region's most trusted bridge between classroom learning
                        and industry-ready careers in construction and digital technology.
                    </p>
                </div>
            </section>

            {/* ── MISSION ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="max-w-2xl mb-12">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Our mission</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">
                        Four commitments, not just a mission statement
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {MISSION_PILLARS.map(({ title, desc }, i) => (
                        <div
                            key={title}
                            className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <span className="text-[#356575]/40 text-[13px] font-semibold">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-[16px] font-bold text-[#1E3D47] mt-3 mb-2">{title}</h3>
                            <p className="text-gray-500 text-[13.5px] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">What guides us</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">Core values</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {VALUES.map(({ title, desc }) => (
                            <div key={title} className="bg-white rounded-2xl p-6 hover:bg-[#eaf4f7] transition-colors group">
                                <div className="w-2 h-2 rounded-full bg-[#356575] mb-4" />
                                <h3 className="text-[15px] font-bold text-[#1E3D47] mb-2 group-hover:text-[#356575] transition-colors">
                                    {title}
                                </h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            <section
                className="relative bg-cover bg-center py-20"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80')` }}
            >
                <div className="absolute inset-0 bg-[#1E3D47]/90" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        See how this plays out in the classroom
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Explore our departments, or read our quality policy for the specifics behind these commitments.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/departments"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Explore programs
                        </Link>
                        <Link
                            to="/about/quality-policy"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Quality policy
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VisionAndMission;