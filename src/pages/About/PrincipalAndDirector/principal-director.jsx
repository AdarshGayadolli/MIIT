import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PROFILES = [
    {
        name: 'Suresh Bhatt',
        role: 'Principal',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80',
        message:
            "A syllabus is only as good as the person delivering it. My job is making sure every instructor at MIIT has actually done the work they're teaching — not just read about it.",
        bio: [
            'Suresh joined MIIT in 2017 after twelve years teaching construction technology and structural drafting at two engineering colleges, and a further four years consulting on BIM adoption for mid-size contractors.',
            "As Principal, he leads academic delivery, sets faculty hiring standards, and reviews every course syllabus against current industry practice each term — a process he insisted on from his first year here.",
        ],
        qualifications: [
            'M.Tech, Structural Engineering — NIT Trichy',
            'B.E., Civil Engineering — Anna University',
            'Certified Autodesk BIM Trainer',
        ],
        highlights: [
            '16 years in engineering education and industry consulting',
            'Redesigned the BIM for Construction curriculum around live client projects',
            'Chairs MIIT\'s termly academic review committee',
        ],
        focus: 'Curriculum quality, faculty standards, and keeping coursework current with industry tools.',
    },
    {
        name: 'Ananya Krishnan',
        role: 'Managing Director',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80',
        message:
            "Students and parents are making a real financial decision when they choose MIIT. I want every rupee of that to be visible in outcomes — placements, tools, and support — not just in a brochure.",
        bio: [
            'Ananya oversees admissions, finance, and MIIT\'s partnerships with employers and certification bodies. Before joining MIIT, she spent seven years running operations for a national vocational-training network across four states.',
            'She built MIIT\'s current placement-partner pipeline from a handful of local firms to over fifty companies across construction and digital marketing, and personally reviews every batch\'s placement outcomes before they\'re published.',
        ],
        qualifications: [
            'MBA, Operations Management — Symbiosis Institute',
            'B.Com — Christ University',
        ],
        highlights: [
            '7 years running multi-state vocational training operations',
            'Grew MIIT\'s hiring-partner network from 6 to 50+ companies',
            'Introduced MIIT\'s termly public placement-statistics report',
        ],
        focus: 'Admissions integrity, financial transparency, and employer partnerships.',
    },
];

const PrincipalAndDirector = () => {
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
                    <span className="text-[#356575]">Principal & Director</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">About us</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    Principal & Director
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    The two people directly accountable for what happens in MIIT's
                    classrooms and what happens after graduation — academics and
                    outcomes, respectively.
                </p>
            </section>

            {/* ── PROFILES ── */}
            {PROFILES.map(({ name, role, photo, message, bio, qualifications, highlights, focus }, i) => (
                <section
                    key={name}
                    className={i % 2 === 1 ? 'bg-gray-50' : ''}
                >
                    <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">

                        {/* Photo + quick facts card */}
                        <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                            <div className="relative">
                                <img
                                    src={photo}
                                    alt={name}
                                    className="rounded-2xl w-full h-[380px] object-cover"
                                />
                                <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md">
                                    <p className="text-[14px] font-bold text-[#1E3D47]">{name}</p>
                                    <p className="text-[12px] text-[#356575] mt-0.5">{role}</p>
                                </div>
                            </div>

                            <div className="mt-10 bg-white border border-gray-100 rounded-2xl p-5">
                                <p className="text-[11px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-3">
                                    Qualifications
                                </p>
                                <ul className="space-y-2">
                                    {qualifications.map((q) => (
                                        <li key={q} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#356575] opacity-60 mt-1.5 shrink-0" />
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Message + bio + highlights */}
                        <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                            <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">
                                {role === 'Principal' ? "Principal's message" : "Director's message"}
                            </span>

                            <p className="text-[#1E3D47] text-[19px] md:text-[22px] leading-relaxed mt-4 mb-6 font-medium">
                                "{message}"
                            </p>

                            {bio.map((para) => (
                                <p key={para.slice(0, 20)} className="text-gray-500 text-[15px] leading-relaxed mb-4 last:mb-6">
                                    {para}
                                </p>
                            ))}

                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#eaf4f7] rounded-xl p-5">
                                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-3">
                                        Career highlights
                                    </p>
                                    <ul className="space-y-2">
                                        {highlights.map((h) => (
                                            <li key={h} className="flex items-start gap-2.5 text-[13px] text-[#1E3D47] leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#356575] mt-1.5 shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border border-gray-100 rounded-xl p-5">
                                    <p className="text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium mb-3">
                                        Focus area
                                    </p>
                                    <p className="text-[13.5px] text-gray-600 leading-relaxed">{focus}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            ))}

            {/* ── CTA BANNER ── */}
            <section
                className="relative bg-cover bg-center py-20"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80')` }}
            >
                <div className="absolute inset-0 bg-[#1E3D47]/90" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Want to talk to our academic or admissions team directly?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Reach out with questions about courses, faculty, or the admissions process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/about/management"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Meet the full team
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PrincipalAndDirector;