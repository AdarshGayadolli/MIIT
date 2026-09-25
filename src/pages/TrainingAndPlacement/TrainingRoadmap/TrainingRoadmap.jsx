import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ROADMAPS = {
    bim: {
        label: 'BIM for Construction',
        duration: '6 months',
        milestones: [
            { month: 'Month 1', title: 'Foundations & modeling basics', desc: 'Revit fundamentals, parametric families, and construction documentation.' },
            { month: 'Month 2', title: '3D architectural & structural modeling', desc: 'Build full discipline models with real project data embedded at every layer.' },
            { month: 'Month 3', title: 'Model federation & clash detection', desc: 'Combine architectural, structural, and MEP models in Navisworks and resolve conflicts.' },
            { month: 'Month 4', title: '4D scheduling & quantity takeoff', desc: 'Link models to project schedules and extract quantities for 5D cost estimation.' },
            { month: 'Month 5', title: 'BIM execution planning', desc: 'Draft EIRs and BEPs, structure data to ISO 19650, and lead a live client-style project.' },
            { month: 'Month 6', title: 'Portfolio, mock interviews & placement', desc: 'Finalize project portfolio, complete mock technical rounds, and enter employer matching.' },
        ],
    },
    dm: {
        label: 'Digital Marketing',
        duration: '4 months',
        milestones: [
            { month: 'Month 1', title: 'Foundations & SEO', desc: 'Customer journey mapping, SMART goals, keyword research, and on-page/technical SEO.' },
            { month: 'Month 2', title: 'Paid Search & Social', desc: 'Run live Google Ads and Meta/Instagram campaigns with audience targeting and A/B testing.' },
            { month: 'Month 3', title: 'Content, email & analytics', desc: 'Content calendars, email automation in HubSpot/Mailchimp, and GA4 reporting on a live budget.' },
            { month: 'Month 4', title: 'Live campaign, portfolio & placement', desc: 'Run a full campaign end to end, build a results portfolio, and enter employer matching.' },
        ],
    },
};

const SUPPORT_LAYERS = [
    { title: 'Weekly progress checks', desc: 'Faculty review skill progression against the roadmap every week — falling behind gets caught early, not at the final review.' },
    { title: 'Live project checkpoints', desc: 'Each milestone ends with a deliverable tied to a real or client-style project, not just a graded assignment.' },
    { title: 'Placement cell overlap', desc: 'The placement cell begins counselling in month one and stays involved through the final placement-ready milestone.' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const TrainingRoadmap = () => {
    const [activeProgram, setActiveProgram] = useState('bim');

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

    const roadmap = ROADMAPS[activeProgram];

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/training-placement/about" className="hover:text-[#356575] transition-colors">Training & Placement</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Training Roadmap</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Training & Placement</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    How training builds toward a hire.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    Every program is mapped month by month, so skill-building and
                    placement readiness happen together — not training first, job
                    search as an afterthought.
                </p>
            </section>

            {/* ── PROGRAM TOGGLE ── */}
            <section className="max-w-7xl mx-auto px-6 pb-10">
                <div className="inline-flex bg-gray-50 border border-gray-100 rounded-xl p-1.5 gap-1">
                    {Object.entries(ROADMAPS).map(([key, { label }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveProgram(key)}
                            className={`px-5 py-2.5 rounded-lg text-[13.5px] font-medium transition-colors
                                ${activeProgram === key
                                    ? 'bg-[#356575] text-white'
                                    : 'text-gray-500 hover:text-[#1E3D47]'
                                }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: roadmap.duration, label: 'Program duration' },
                        { value: String(roadmap.milestones.length), label: 'Roadmap milestones' },
                        { value: 'Weekly', label: 'Progress checkpoints' },
                        { value: 'Month 1', label: 'Placement counselling starts' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ROADMAP TIMELINE ── */}
            <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow={roadmap.label} title="Month-by-month roadmap" />

                <div className="relative">
                    <div className="absolute left-[27px] md:left-[35px] top-2 bottom-2 w-px bg-[#d0e4e9]" />

                    <div className="space-y-8">
                        {roadmap.milestones.map(({ month, title, desc }, i) => {
                            const isLast = i === roadmap.milestones.length - 1;
                            return (
                                <div key={month} className="relative flex gap-6 md:gap-8">
                                    <div
                                        className={`relative z-10 shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-2xl flex items-center justify-center border-2
                                            ${isLast ? 'bg-[#356575] border-[#356575]' : 'bg-white border-[#356575]'}`}
                                    >
                                        <span className={`font-bold text-[13px] md:text-[14px] ${isLast ? 'text-white' : 'text-[#356575]'}`}>
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all mb-2">
                                        <span className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] bg-[#eaf4f7] px-2.5 py-1 rounded-full font-medium">
                                            {month}
                                        </span>
                                        <h3 className="text-[16px] font-bold text-[#1E3D47] mt-3 mb-2">{title}</h3>
                                        <p className="text-gray-500 text-[13.5px] leading-relaxed">{desc}</p>
                                        {isLast && (
                                            <p className="text-[12px] text-[#356575] font-medium mt-3">
                                                → Hands off to Training & Placement Process
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SUPPORT LAYERS ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="How it's supported" title="What keeps the roadmap on track" />
                    <div className="grid sm:grid-cols-3 gap-6">
                        {SUPPORT_LAYERS.map(({ title, desc }) => (
                            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-7">
                                <div className="w-2 h-2 rounded-full bg-[#356575] mb-4" />
                                <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-2">{title}</h3>
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
                        See what happens after the roadmap ends
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        The final milestone hands straight into our placement process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/training-placement/process"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Placement process
                        </Link>
                        <Link
                            to="/admissions"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Start admissions enquiry
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TrainingRoadmap;