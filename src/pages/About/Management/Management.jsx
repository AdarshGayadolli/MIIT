import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LEADERSHIP = [
    {
        name: 'Rajeev Menon',
        role: 'Chairman',
        bio: 'Founded MIIT in 2016 after two decades in enterprise construction management, with a focus on closing the gap between classroom learning and site-ready skills.',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
        name: 'Ananya Krishnan',
        role: 'Managing Director',
        bio: 'Oversees admissions, finance, and institutional partnerships. Previously led operations at a national skills-training network.',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
        name: 'Suresh Bhatt',
        role: 'Principal',
        bio: 'Responsible for academic delivery and faculty development. Twelve years teaching construction technology before joining MIIT.',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
    {
        name: 'Divya Pillai',
        role: 'Dean of Training & Placement',
        bio: 'Runs the placement cell and employer relationships, from resume reviews to final interview rounds.',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
];

const GOVERNANCE = [
    {
        title: 'Open decision-making',
        desc: 'Curriculum and policy changes are reviewed with faculty and student representatives before they take effect.',
    },
    {
        title: 'Industry-led leadership',
        desc: 'Every member of the management team has worked in the fields MIIT teaches, not just in education administration.',
    },
    {
        title: 'Regular academic audits',
        desc: 'Course content and outcomes are reviewed each term against current employer requirements.',
    },
    {
        title: 'Student-first policies',
        desc: 'Fee structures, batch timings, and grievance handling are set with working students and first-generation learners in mind.',
    },
];

const Management = () => {
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
                    <span className="text-[#356575]">About Management</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">About us</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    The people guiding MIIT forward.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    MIIT is run by a small team of people who have worked in the industries
                    they teach — not career administrators. That shapes everything from
                    which tools we license to how the placement cell operates.
                </p>
            </section>

            {/* ── CHAIRMAN'S MESSAGE ── */}
            <section className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80"
                        alt="Rajeev Menon, Chairman of MIIT"
                        className="rounded-2xl w-full h-[420px] object-cover"
                    />
                    <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md">
                        <p className="text-[14px] font-bold text-[#1E3D47]">Rajeev Menon</p>
                        <p className="text-[12px] text-gray-500 mt-0.5">Chairman, MIIT</p>
                    </div>
                </div>

                <div>
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Chairman's message</span>
                    <p className="text-[#1E3D47] text-[20px] md:text-[24px] leading-relaxed mt-4 mb-6 font-medium">
                        "We built MIIT around one question: will this actually get a
                        graduate hired? If a course, a tool, or a policy doesn't answer
                        yes, we change it."
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                        Before founding MIIT, I spent close to twenty years managing
                        large construction projects, watching capable graduates struggle
                        in their first year simply because their training hadn't caught
                        up with the software and workflows the industry had already moved to.
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                        That gap is still what MIIT exists to close — through live
                        industry tools, faculty who've worked the jobs they teach, and a
                        placement cell that treats a hire as the actual finish line, not
                        a certificate ceremony.
                    </p>
                </div>
            </section>

            {/* ── GOVERNANCE PHILOSOPHY ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">How we operate</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 leading-snug text-[#1E3D47]">
                            Governance built for accountability
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Management decisions at MIIT are reviewed on a regular cycle,
                            not made in isolation. Here's what that looks like day to day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {GOVERNANCE.map(({ title, desc }) => (
                            <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100">
                                <h3 className="text-[14px] font-bold text-[#1E3D47] mb-2">{title}</h3>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LEADERSHIP TEAM ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="text-center mb-12">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Leadership</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">The management team</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LEADERSHIP.map(({ name, role, bio, photo }) => (
                        <div
                            key={name}
                            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <img
                                src={photo}
                                alt={name}
                                className="w-full h-56 object-cover grayscale-[15%] group-hover:grayscale-0 transition-all"
                            />
                            <div className="p-5">
                                <h3 className="text-[15px] font-bold text-[#1E3D47]">{name}</h3>
                                <p className="text-[#356575] text-[12.5px] font-medium mt-0.5 mb-3">{role}</p>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: '4', label: 'Management team members' },
                        { value: '45+', label: 'Combined industry years' },
                        { value: '10+', label: 'Years leading MIIT' },
                        { value: 'Termly', label: 'Governance review cycle' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
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
                        Have a question for our leadership team?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Reach out directly, or explore our academic programs and admissions process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/admissions"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            View admissions
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Management;