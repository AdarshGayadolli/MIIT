import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const COMMITTEE_MEMBERS = [
    {
        name: 'Divya Pillai',
        role: 'Chair — Dean of Training & Placement',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Placement Officer',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
        name: 'Karthik Menon',
        role: 'Employer Relations Officer',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
        name: 'Vikram Iyer',
        role: 'Faculty Representative, BIM',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
    {
        name: 'Meera Pillai',
        role: 'Faculty Representative, Digital Marketing',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
];

const MANDATE = [
    { title: 'Employer matching', desc: 'Match each graduating batch to hiring partners based on skill fit, not just seniority or convenience.' },
    { title: 'Drive scheduling', desc: 'Plan and run on-campus and virtual placement drives so they don\'t clash with ongoing coursework.' },
    { title: 'Outcome reporting', desc: 'Track and publish placement statistics per batch, honestly, every term — favorable or not.' },
    { title: 'Grievance escalation', desc: 'Handle student complaints about the placement process itself and correct issues before the next drive.' },
];

const MEETING_CADENCE = [
    { freq: 'Weekly', desc: 'Internal sync on active drives, employer follow-ups, and student readiness.' },
    { freq: 'Monthly', desc: 'Full committee review of pipeline health and upcoming employer commitments.' },
    { freq: 'Termly', desc: 'Outcome report compiled and published — see Placement Statistics for the latest.' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const PlacementCommittee = () => {
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
                    <span className="text-[#356575]">Placement Committee</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Training & Placement</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    The people running placements.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    A standing committee of placement staff and faculty representatives,
                    accountable for matching every graduating batch to real employer
                    demand — not just running a job board.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: String(COMMITTEE_MEMBERS.length), label: 'Committee members' },
                        { value: 'Weekly', label: 'Internal sync cadence' },
                        { value: '2', label: 'Program areas represented' },
                        { value: 'Termly', label: 'Public outcome report' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── COMMITTEE MEMBERS ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Membership" title="Who's on the committee" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {COMMITTEE_MEMBERS.map(({ name, role, photo }) => (
                        <div
                            key={name}
                            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <img
                                src={photo}
                                alt={name}
                                className="w-full h-44 object-cover grayscale-[15%] group-hover:grayscale-0 transition-all"
                            />
                            <div className="p-4">
                                <h3 className="text-[13.5px] font-bold text-[#1E3D47]">{name}</h3>
                                <p className="text-gray-500 text-[12px] mt-0.5 leading-snug">{role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── MANDATE ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="Mandate" title="What the committee is accountable for" />
                    <div className="grid sm:grid-cols-2 gap-6">
                        {MANDATE.map(({ title, desc }, i) => (
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
                </div>
            </section>

            {/* ── MEETING CADENCE ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="How it operates" title="Meeting cadence" />
                <div className="grid sm:grid-cols-3 gap-6">
                    {MEETING_CADENCE.map(({ freq, desc }) => (
                        <div key={freq} className="bg-[#eaf4f7] rounded-2xl p-7">
                            <p className="text-[#356575] text-[19px] font-bold mb-2">{freq}</p>
                            <p className="text-gray-600 text-[13.5px] leading-relaxed">{desc}</p>
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
                        Have a concern about the placement process?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Reach out directly, or see how the full process works end to end.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/training-placement/process"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Training & placement process
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlacementCommittee;