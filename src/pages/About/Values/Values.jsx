import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const QUALITY_OBJECTIVES = [
    {
        metric: '≥ 90%',
        title: 'Placement rate maintained yearly',
        desc: 'Tracked per batch and published publicly, not averaged across multiple years to hide a weak batch.',
    },
    {
        metric: '2×',
        title: 'Curriculum reviewed per year',
        desc: 'Every course is checked against current employer requirements at the start and midpoint of each academic year.',
    },
    {
        metric: '100%',
        title: 'Faculty holding current industry certification',
        desc: 'No instructor teaches a tool or platform they aren\'t currently certified or actively working with.',
    },
    {
        metric: '< 48 hrs',
        title: 'Student grievance response time',
        desc: 'Academic or administrative complaints receive an initial response within two working days.',
    },
];

const CORE_VALUES = [
    {
        title: 'Continuous improvement',
        desc: 'Every process — admissions, teaching, placement — is reviewed on a fixed schedule, not only when something breaks.',
    },
    {
        title: 'Measurable outcomes',
        desc: 'We track results we can show, not intentions we can only describe.',
    },
    {
        title: 'Compliance with standards',
        desc: 'Programs are built to meet recognized industry certification requirements, not just internal expectations.',
    },
    {
        title: 'Stakeholder feedback',
        desc: 'Students, faculty, and hiring partners are formally surveyed each term, and that feedback shapes the next one.',
    },
];

const Values = () => {
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
                    <span className="text-[#356575]">Quality Policy & Core Values</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">About us</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    Quality policy & core values.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    How MIIT defines, measures, and holds itself to a standard of
                    quality — not just as a statement, but as targets we report against.
                </p>
            </section>

            {/* ── QUALITY POLICY STATEMENT ── */}
            <section className="bg-[#1E3D47] py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#7AAFC0] font-medium">Quality policy statement</span>
                    <p
                        className="text-white leading-[1.35] mt-5 text-[22px] md:text-[28px]"
                        style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                    >
                        MIIT is committed to delivering technical education that meets
                        current industry standards, is reviewed on a fixed schedule, and
                        is measured by graduate employment outcomes — reported honestly,
                        whether or not the numbers are favorable.
                    </p>
                </div>
            </section>

            {/* ── QUALITY OBJECTIVES ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="max-w-2xl mb-12">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Quality objectives</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">
                        What we measure ourselves against
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {QUALITY_OBJECTIVES.map(({ metric, title, desc }) => (
                        <div
                            key={title}
                            className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <p className="text-[#356575] text-[26px] font-bold">{metric}</p>
                            <h3 className="text-[15.5px] font-bold text-[#1E3D47] mt-3 mb-2">{title}</h3>
                            <p className="text-gray-500 text-[13.5px] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CORE VALUES ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Core values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">
                            The standards behind the policy
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {CORE_VALUES.map(({ title, desc }) => (
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
                        Want the numbers behind our placement claims?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Our full placement statistics are published and updated every term.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/training-placement/statistics"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            View placement statistics
                        </Link>
                        <Link
                            to="/about/vision-mission"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Vision & mission
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Values;