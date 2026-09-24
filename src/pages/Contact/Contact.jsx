import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CONTACT_METHODS = [
    {
        title: 'Call us',
        value: '+91 98765 43210',
        href: 'tel:+919876543210',
        note: 'Mon–Sat, 9:00 AM – 6:00 PM',
    },
    {
        title: 'Email us',
        value: 'info@miit.ac.in',
        href: 'mailto:info@miit.ac.in',
        note: 'Response within 48 hours',
    },
    {
        title: 'Visit us',
        value: 'MIIT Campus, Vaijaynagar Main Road, Bengaluru',
        href: 'https://maps.google.com',
        note: 'Get directions',
    },
];

const DEPARTMENT_CONTACTS = [
    { dept: 'Admissions', email: 'admissions@miit.ac.in', desc: 'Program enquiries, eligibility, and enrollment' },
    { dept: 'Training & Placement', email: 'placements@miit.ac.in', desc: 'Placement drives, employer partnerships, career support' },
    { dept: 'Student Support', email: 'support@miit.ac.in', desc: 'Grievances, batch timings, and general student queries' },
    { dept: 'Accounts & Finance', email: 'accounts@miit.ac.in', desc: 'Fee payments, receipts, and refund queries' },
];

const FAQS = [
    { q: 'How soon will I hear back after submitting the form?', a: 'Our team responds to every enquiry within 48 working hours, usually sooner during business days.' },
    { q: 'Can I visit the campus before enrolling?', a: 'Yes — campus visits are welcome on weekdays between 10 AM and 4 PM. Call ahead so a counsellor can walk you through.' },
    { q: 'I have a query about an existing batch. Who do I contact?', a: 'Reach out to Student Support at support@miit.ac.in with your batch and program name, and they will route it to the right coordinator.' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

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
        // Wire this up to your contact/enquiry API
        console.log('Contact form submitted:', form);
        setSubmitted(true);
    };

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Contact</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Get in touch</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    We'd like to hear from you.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    Questions about a program, admissions, or an existing batch — reach
                    us however's easiest, and a real person responds within 48 hours.
                </p>
            </section>

            {/* ── CONTACT METHODS ── */}
            <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-20">
                <div className="grid sm:grid-cols-3 gap-6">
                    {CONTACT_METHODS.map(({ title, value, href, note }) => (
                        <a
                            key={title}
                            href={href}
                            target={title === 'Visit us' ? '_blank' : undefined}
                            rel={title === 'Visit us' ? 'noreferrer' : undefined}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <p className="text-[11px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-3">{title}</p>
                            <p className="text-[15px] font-semibold text-[#1E3D47] mb-1.5 group-hover:text-[#356575] transition-colors">
                                {value}
                            </p>
                            <p className="text-[12.5px] text-gray-400">{note}</p>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── FORM + MAP ── */}
            <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7 md:p-9">
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Send a message</span>
                <h2 className="text-2xl font-bold mt-2 mb-6 text-[#1E3D47]">Fill out the form</h2>

                {submitted ? (
                    <div className="bg-[#eaf4f7] rounded-xl p-6 text-center">
                        <p className="text-[15px] font-semibold text-[#1E3D47] mb-1.5">Message sent.</p>
                        <p className="text-[13.5px] text-gray-500">We'll get back to you within 48 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
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
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Subject</label>
                            <select
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575] bg-white"
                            >
                                <option value="">Select a topic</option>
                                <option>Admissions enquiry</option>
                                <option>Training & placement</option>
                                <option>Student support</option>
                                <option>Accounts & fees</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-[12px] font-medium text-[#1E3D47] mb-1.5">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[13.5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#356575]/30 focus:border-[#356575] resize-none"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-[#356575] hover:bg-[#2A5161] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                            >
                                Send message
                            </button>
                        </div>
                    </form>
                )}
            </div>

            {/* Map + office hours */}
            <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden border border-gray-100 h-[280px] bg-[#eaf4f7]">
                    <iframe
                        title="MIIT campus location"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Whitefield%2C+Bengaluru&output=embed"
                    />
                </div>

                <div className="bg-[#1E3D47] rounded-2xl p-7">
                    <p className="text-[11px] tracking-[0.1em] uppercase text-[#7AAFC0] font-medium mb-4">Office hours</p>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-between text-[13.5px]">
                            <span className="text-white/70">Monday – Friday</span>
                            <span className="text-white font-medium">9:00 AM – 6:00 PM</span>
                        </li>
                        <li className="flex items-center justify-between text-[13.5px]">
                            <span className="text-white/70">Saturday</span>
                            <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
                        </li>
                        <li className="flex items-center justify-between text-[13.5px]">
                            <span className="text-white/70">Sunday</span>
                            <span className="text-white font-medium">Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

                </div>
            </section>

            {/* ── DEPARTMENT CONTACTS ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Reach the right team" title="Department contacts" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DEPARTMENT_CONTACTS.map(({ dept, email, desc }) => (
                        <div key={dept} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all">
                            <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-2">{dept}</h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{desc}</p>
                            
                            <a
                                href={`mailto:${email}`}
                                className="text-[12.5px] text-[#356575] font-medium hover:text-[#1E3D47] transition-colors break-all"
                            >
                                {email}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FAQ ── */}
    <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
            <SectionHeading eyebrow="Questions" title="Before you reach out" center />
            <div className="space-y-3">
                {FAQS.map(({ q, a }, i) => {
                    const isOpen = openFaq === i;
                    return (
                        <div key={q} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
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
                        Ready to take the next step?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Skip the form and start your admissions enquiry directly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/admissions"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Start admissions enquiry
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

        </div >
    );
};

export default Contact;