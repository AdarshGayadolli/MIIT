import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GOVERNING_BODY = [
    { name: 'Rajeev Menon', role: 'Chairman' },
    { name: 'Ananya Krishnan', role: 'Managing Director' },
];

const LEADERSHIP_TIER = [
    { name: 'Suresh Bhatt', role: 'Principal', reportsTo: 'Chairman & MD' },
    { name: 'Divya Pillai', role: 'Dean of Training & Placement', reportsTo: 'Chairman & MD' },
];

const DEPARTMENTS = [
    {
        head: 'Head of Academics',
        reportsTo: 'Principal',
        units: ['BIM for Construction faculty', 'Digital Marketing faculty', 'Academic review committee'],
    },
    {
        head: 'Head of Administration',
        reportsTo: 'Principal',
        units: ['Admissions office', 'Finance & accounts', 'Student support & grievance cell'],
    },
    {
        head: 'Head of Training & Placement',
        reportsTo: 'Dean of Training & Placement',
        units: ['Placement committee', 'Employer relations', 'Career counselling'],
    },
];

const COMMITTEES = [
    {
        title: 'Academic Review Committee',
        desc: 'Chaired by the Principal. Reviews and approves curriculum changes each term against current employer requirements.',
        chair: 'Suresh Bhatt, Principal',
    },
    {
        title: 'Placement Committee',
        desc: "Oversees the training-to-placement pipeline and reports batch-level outcomes to the Dean of Training & Placement.",
        chair: 'Divya Pillai, Dean of Training & Placement',
    },
    {
        title: 'Grievance Redressal Committee',
        desc: 'Handles student and staff complaints, with a mandated response within 48 hours of filing.',
        chair: 'Ananya Krishnan, Managing Director',
    },
];

const PRINCIPLES = [
    { title: 'Short reporting lines', desc: 'No more than three levels between any staff member and the Chairman, so issues reach decision-makers fast.' },
    { title: 'Defined ownership', desc: 'Every department has one named head accountable for its outcomes — no shared or ambiguous ownership.' },
    { title: 'Committee oversight', desc: 'Cross-functional decisions (curriculum, placement, grievances) run through standing committees, not ad hoc calls.' },
    { title: 'Published structure', desc: 'This chart is kept current and public, so students and staff always know who owns what.' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const ChartNode = ({ name, role, tone = 'light' }) => (
    <div
        className={`rounded-xl px-5 py-3.5 text-center min-w-[180px] border ${tone === 'dark'
                ? 'bg-[#1E3D47] border-[#1E3D47] text-white'
                : tone === 'accent'
                    ? 'bg-[#356575] border-[#356575] text-white'
                    : 'bg-white border-[#d0e4e9] text-[#1E3D47]'
            }`}
    >
        <p className={`text-[13.5px] font-bold ${tone === 'light' ? 'text-[#1E3D47]' : 'text-white'}`}>{name}</p>
        <p className={`text-[11px] mt-0.5 ${tone === 'light' ? 'text-[#356575]' : 'text-white/70'}`}>{role}</p>
    </div>
);

const Connector = () => (
    <div className="flex justify-center">
        <div className="w-px h-6 bg-[#d0e4e9]" />
    </div>
);

const OrganizationChart = () => {
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
                    <Link to="/administration/organization-chart" className="hover:text-[#356575] transition-colors">Administration</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Organization Chart</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Administration</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    Who reports to whom, and why it stays simple.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    MIIT is kept deliberately flat. Every role below has a named
                    owner, a short reporting line, and a committee where cross-team
                    decisions actually get made.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: '3', label: 'Reporting levels max' },
                        { value: '3', label: 'Department heads' },
                        { value: '3', label: 'Standing committees' },
                        { value: 'Termly', label: 'Structure review cycle' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ORG CHART ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Structure" title="The reporting chart" />

                <div className="bg-gray-50 rounded-2xl border border-gray-100 px-6 py-12 md:py-16 overflow-x-auto">
                    <div className="min-w-[720px] flex flex-col items-center">

                        {/* Governing body */}
                        <div className="flex gap-6">
                            {GOVERNING_BODY.map((p) => (
                                <ChartNode key={p.name} name={p.name} role={p.role} tone="dark" />
                            ))}
                        </div>

                        <Connector />

                        {/* Leadership tier */}
                        <div className="flex gap-6">
                            {LEADERSHIP_TIER.map((p) => (
                                <ChartNode key={p.name} name={p.name} role={p.role} tone="accent" />
                            ))}
                        </div>

                        <Connector />

                        {/* Department heads */}
                        <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
                            {DEPARTMENTS.map((d) => (
                                <div key={d.head} className="flex flex-col items-center">
                                    <ChartNode name={d.head} role={`Reports to ${d.reportsTo}`} />
                                    <div className="w-px h-5 bg-[#d0e4e9]" />
                                    <div className="bg-white border border-dashed border-[#d0e4e9] rounded-xl px-4 py-3 w-full">
                                        <ul className="space-y-1.5">
                                            {d.units.map((u) => (
                                                <li key={u} className="text-[11.5px] text-gray-500 leading-snug flex items-start gap-1.5">
                                                    <span className="w-1 h-1 rounded-full bg-[#356575] opacity-60 mt-1.5 shrink-0" />
                                                    {u}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <p className="text-gray-400 text-[12px] mt-4 text-center">
                    Scroll horizontally on smaller screens to view the full chart.
                </p>
            </section>

            {/* ── STANDING COMMITTEES ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="Cross-functional decisions" title="Standing committees" />
                    <div className="grid sm:grid-cols-3 gap-6">
                        {COMMITTEES.map(({ title, desc, chair }) => (
                            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-[15px] font-bold text-[#1E3D47] mb-2">{title}</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{desc}</p>
                                <div className="pt-3 border-t border-gray-100">
                                    <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Chair</p>
                                    <p className="text-[12.5px] text-[#1E3D47] font-medium">{chair}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW WE STRUCTURE ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Design principles" title="Why the structure looks like this" />
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {PRINCIPLES.map(({ title, desc }) => (
                        <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all">
                            <div className="w-2 h-2 rounded-full bg-[#356575] mb-4" />
                            <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-2">{title}</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                        </div>
                    ))}
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
                        Not sure who to reach out to?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Contact us and we'll route your query to the right department head.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/administration/administrative-staff"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Administrative staff
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OrganizationChart;