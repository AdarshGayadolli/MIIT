import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
    {
        phase: 'Phase 1',
        title: 'Skill assessment & counselling',
        timing: 'Weeks 1–2',
        desc: 'Every student sits a one-on-one counselling session early in the program. We map current skill level against realistic target roles, so training has a clear destination from day one.',
        owner: 'Placement cell + program faculty',
    },
    {
        phase: 'Phase 2',
        title: 'Skill-building & live projects',
        timing: 'Core program duration',
        desc: 'Coursework runs alongside real client-style projects — BIM coordination models, live-budget marketing campaigns — so the portfolio going into placement isn\'t theoretical.',
        owner: 'Program faculty',
    },
    {
        phase: 'Phase 3',
        title: 'Resume & portfolio review',
        timing: 'Final month, week 1',
        desc: 'One-on-one reviews of resumes, LinkedIn profiles, and project portfolios. Nothing goes to an employer until it\'s passed this review.',
        owner: 'Placement Officer',
    },
    {
        phase: 'Phase 4',
        title: 'Mock interviews',
        timing: 'Final month, week 2',
        desc: 'Practice technical and HR rounds run by faculty and industry mentors, with direct feedback on answers, tooling knowledge, and presentation.',
        owner: 'Placement cell + industry mentors',
    },
    {
        phase: 'Phase 5',
        title: 'Employer matching & drives',
        timing: 'Final month, weeks 3–4',
        desc: 'Students are matched against current openings from our hiring-partner network. On-campus and virtual placement drives run through this window.',
        owner: 'Employer Relations Officer',
    },
    {
        phase: 'Phase 6',
        title: 'Offer & onboarding support',
        timing: 'Post-offer',
        desc: 'The placement cell helps review offer terms and stays in touch through the first few months on the job to catch and resolve early transition issues.',
        owner: 'Placement cell',
    },
];

const RESPONSIBILITIES = [
    { party: 'Student', items: ['Attend counselling and mock interview sessions', 'Keep resume and portfolio current', 'Respond to employer matches within 48 hours'] },
    { party: 'Placement cell', items: ['Run resume/portfolio reviews and mock interviews', 'Match students to relevant openings', 'Publish termly outcome reports'] },
    { party: 'Hiring partner', items: ['Share accurate role requirements and timelines', 'Provide interview feedback within one week', 'Confirm offers in writing through the placement cell'] },
];

const FAQS = [
    { q: 'What if I don\'t get placed during my batch\'s drive window?', a: 'You stay active in the placement pool for future drives and employer matches — there\'s no cutoff date after which support stops.' },
    { q: 'Can I decline an employer match?', a: "Yes. Matching isn't mandatory placement — you can decline a specific opening and stay open to others." },
    { q: 'Does the placement cell help with salary negotiation?', a: 'The cell reviews offer terms with you and can flag anything unusual, but negotiation itself is between you and the employer.' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const TrainingAndPlacementProcess = () => {
    const [openFaq, setOpenFaq] = useState(null);

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
                    <Link to="/training-placement/about" className="hover:text-[#356575] transition-colors">Training & Placement</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Process</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Training & Placement</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    From counselling to your first paycheck.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    Six phases, each with a named owner and a defined timing window —
                    so placement isn't a vague promise, it's a process you can track.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: '6', label: 'Process phases' },
                        { value: '48 hrs', label: 'Employer feedback window' },
                        { value: 'No cutoff', label: 'Ongoing placement pool' },
                        { value: 'Months', label: 'Post-offer follow-up' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROCESS TIMELINE ── */}
            <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="The process" title="Six phases, start to first paycheck" />

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[27px] md:left-[35px] top-2 bottom-2 w-px bg-[#d0e4e9]" />

                    <div className="space-y-8">
                        {PROCESS_STEPS.map(({ phase, title, timing, desc, owner }, i) => (
                            <div key={phase} className="relative flex gap-6 md:gap-8">
                                {/* Node */}
                                <div className="relative z-10 shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] rounded-2xl bg-white border-2 border-[#356575] flex items-center justify-center">
                                    <span className="text-[#356575] font-bold text-[15px] md:text-[17px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Card */}
                                <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all mb-2">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] bg-[#eaf4f7] px-2.5 py-1 rounded-full font-medium">
                                            {phase}
                                        </span>
                                        <span className="text-[11.5px] text-gray-400">{timing}</span>
                                    </div>
                                    <h3 className="text-[16px] font-bold text-[#1E3D47] mb-2">{title}</h3>
                                    <p className="text-gray-500 text-[13.5px] leading-relaxed mb-3">{desc}</p>
                                    <p className="text-[12px] text-gray-400">
                                        <span className="font-medium text-gray-500">Owned by:</span> {owner}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESPONSIBILITIES ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="Who does what" title="Responsibilities at each stage" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {RESPONSIBILITIES.map(({ party, items }) => (
                            <div key={party} className="bg-white border border-gray-100 rounded-2xl p-7">
                                <h3 className="text-[15px] font-bold text-[#1E3D47] mb-4">{party}</h3>
                                <ul className="space-y-2.5">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#356575] opacity-60 mt-1.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Questions" title="About the process" center />
                <div className="space-y-3">
                    {FAQS.map(({ q, a }, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <div key={q} className="border border-gray-100 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                                >
                                    <span className="text-[14px] font-semibold text-[#1E3D47]">{q}</span>
                                    <svg
                                        className={`w-4 h-4 text-[#356575] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-5">
                                        <p className="text-gray-500 text-[13.5px] leading-relaxed">{a}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
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
                        See who runs this process
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Meet the committee behind every phase, or check our published outcomes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/training-placement/committee"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Placement committee
                        </Link>
                        <Link
                            to="/training-placement/statistics"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Placement statistics
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TrainingAndPlacementProcess;