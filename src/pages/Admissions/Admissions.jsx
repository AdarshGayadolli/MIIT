import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const QUICK_FACTS = [
    { value: '2', label: 'Programs offered' },
    { value: '≥ 90%', label: 'Placement rate' },
    { value: '3', label: 'Intakes per year' },
    { value: '< 48 hrs', label: 'Enquiry response time' },
];

const PROCESS_STEPS = [
    {
        title: 'Submit your enquiry',
        desc: 'Fill out the enquiry form below or call our hotline. A counsellor gets in touch within two working days.',
    },
    {
        title: 'Counselling session',
        desc: 'A one-on-one session to walk through program fit, batch timings, fees, and career outcomes for your goals.',
    },
    {
        title: 'Document verification',
        desc: 'Submit your academic records and ID proof for verification. Our team confirms eligibility for your chosen program.',
    },
    {
        title: 'Seat confirmation',
        desc: 'Pay the admission fee to lock your seat in the next available batch and receive your onboarding schedule.',
    },
];

const PROGRAMS = [
    {
        name: 'BIM for Construction',
        duration: '6 months',
        eligibility: "Diploma or degree in Civil Engineering, Architecture, or a related field",
        intake: '30 seats per batch',
        highlights: ['Revit, Navisworks, and BIM 360 coverage', 'Live client project in the final term', 'Placement support with 50+ hiring partners'],
    },
    {
        name: 'Digital Marketing',
        duration: '4 months',
        eligibility: 'Any graduate or final-year student, no prior marketing background required',
        intake: '30 seats per batch',
        highlights: ['Google Ads, SEMrush, and analytics tools', 'Run a real campaign with a live budget', 'Portfolio review before placement drives'],
    },
];

const KEY_DATES = [
    { label: 'Winter intake enquiry deadline', date: 'Nov 15' },
    { label: 'Winter batch starts', date: 'Dec 1' },
    { label: 'Summer intake enquiry deadline', date: 'Mar 15' },
    { label: 'Summer batch starts', date: 'Apr 1' },
];

const DOCUMENTS = [
    'Government-issued photo ID (Aadhaar, PAN, or passport)',
    'Latest academic transcript or marksheet',
    'Passport-size photographs (2)',
    'Address proof',
];

const FAQS = [
    {
        q: 'Can I apply if I have a work gap?',
        a: "Yes. We don't screen on work gaps — eligibility is based on your academic background and the specific program's requirements.",
    },
    {
        q: 'Is there an entrance test?',
        a: 'No written entrance test. Admission is based on the counselling session and document verification.',
    },
    {
        q: 'Are batch timings flexible for working professionals?',
        a: 'Both programs run weekday-evening and weekend batches. Your counsellor will confirm current availability during your session.',
    },
    {
        q: 'What happens if I fail document verification?',
        a: "We'll let you know exactly what's missing or mismatched, and you'll get a chance to resubmit before your seat hold expires.",
    },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const Admissions = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [form, setForm] = useState({ name: '', phone: '', email: '', program: 'BIM for Construction' });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Wire this up to your enquiry API / backend
        console.log('Admissions enquiry submitted:', form);
    };

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Admissions</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Admissions</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    Start your path to an industry-ready career.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    No entrance test, no rigid deadlines that don't fit a working
                    schedule — just a straightforward process from enquiry to seat
                    confirmation.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {QUICK_FACTS.map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ADMISSION PROCESS ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="How it works" title="Four steps, start to finish" />
                <div className="grid sm:grid-cols-2 gap-6">
                    {PROCESS_STEPS.map(({ title, desc }, i) => (
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

            {/* ── PROGRAMS ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="Choose your program" title="What you can apply for" />
                    <div className="grid md:grid-cols-2 gap-6">
                        {PROGRAMS.map(({ name, duration, eligibility, intake, highlights }) => (
                            <div key={name} className="bg-white rounded-2xl p-7 border border-gray-100">
                                <h3 className="text-[19px] font-bold text-[#1E3D47] mb-4">{name}</h3>

                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Duration</p>
                                        <p className="text-[13.5px] font-semibold text-[#1E3D47]">{duration}</p>
                                    </div>
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Intake</p>
                                        <p className="text-[13.5px] font-semibold text-[#1E3D47]">{intake}</p>
                                    </div>
                                </div>

                                <p className="text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium mb-1.5">Eligibility</p>
                                <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5">{eligibility}</p>

                                <p className="text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium mb-3">Program highlights</p>
                                <ul className="space-y-2">
                                    {highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2.5 text-[13px] text-gray-600 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#356575] opacity-60 mt-1.5 shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KEY DATES + DOCUMENTS ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-7">
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-5">Key dates</p>
                    <ul className="space-y-4">
                        {KEY_DATES.map(({ label, date }) => (
                            <li key={label} className="flex items-center justify-between border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                <span className="text-[13.5px] text-gray-600">{label}</span>
                                <span className="text-[13.5px] font-semibold text-[#1E3D47]">{date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#1E3D47] rounded-2xl p-7">
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#7AAFC0] font-medium mb-5">Documents you'll need</p>
                    <ul className="space-y-3">
                        {DOCUMENTS.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7AAFC0] mt-1.5 shrink-0" />
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── ENQUIRY FORM ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6">
                    <SectionHeading eyebrow="Get started" title="Send us an enquiry" center />

                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-7 md:p-9 grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-1">
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Full name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575]"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="sm:col-span-1">
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Phone number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575]"
                                placeholder="+91 00000 00000"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575]"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Program of interest</label>
                            <select
                                name="program"
                                value={form.program}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575] bg-white"
                            >
                                <option>BIM for Construction</option>
                                <option>Digital Marketing</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-[#356575] hover:bg-[#2A5161] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                            >
                                Submit enquiry
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Questions" title="Frequently asked" center />
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
                        Still deciding? Talk to a counsellor.
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        No commitment required — just a straight answer on whether a
                        program fits your goals and schedule.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/about"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            About MIIT
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Admissions;