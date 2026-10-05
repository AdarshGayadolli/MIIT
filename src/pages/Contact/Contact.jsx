import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Home,
  Landmark,
  Phone,
  Mail,
  MapPin,
  Clock3,
  User,
  MessageSquare,
  MessagesSquare,
  Send,
  Copy,
  Check,
  Navigation,
  GraduationCap,
  BriefcaseBusiness,
  LifeBuoy,
  Wallet,
  PartyPopper,
  CircleHelp,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   THEME — same as Navbar, Home, Footer & other pages.
   ───────────────────────────────────────────────────────────── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const LINE = '#cfe5e2';

const HEX = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
const HOUSE = 'polygon(50% 0%, 100% 22%, 100% 100%, 0% 100%, 0% 22%)';

const u = (id, w = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
const IMG = {
  main: u('photo-1523240795612-9a054b0db644', 900),
  small: u('photo-1522202176988-66273c2fd55f', 600),
  cta: u('photo-1523050854058-8df90110c9f1', 1600),
};

/* ─────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────── */
const CONTACT_METHODS = [
  {
    icon: Phone,
    title: 'Call us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    note: 'Mon–Sat, 9:00 AM – 6:00 PM',
    cta: 'Call now',
  },
  {
    icon: Mail,
    title: 'Email us',
    value: 'info@miit.ac.in',
    href: 'mailto:info@miit.ac.in',
    note: 'Response within 48 hours',
    cta: 'Write an email',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    value: 'MIIT Campus, Vaijaynagar Main Road, Bengaluru',
    href: 'https://maps.google.com',
    note: 'Get directions',
    cta: 'Open in Maps',
    external: true,
  },
];

const SUBJECTS = ['Admissions enquiry', 'Training & placement', 'Student support', 'Accounts & fees', 'Other'];

const DEPARTMENT_CONTACTS = [
  {
    icon: GraduationCap,
    dept: 'Admissions',
    email: 'admissions@miit.ac.in',
    desc: 'Program enquiries, eligibility, and enrollment',
    subject: 'Admissions enquiry',
  },
  {
    icon: BriefcaseBusiness,
    dept: 'Training & Placement',
    email: 'placements@miit.ac.in',
    desc: 'Placement drives, employer partnerships, career support',
    subject: 'Training & placement',
  },
  {
    icon: LifeBuoy,
    dept: 'Student Support',
    email: 'support@miit.ac.in',
    desc: 'Grievances, batch timings, and general student queries',
    subject: 'Student support',
  },
  {
    icon: Wallet,
    dept: 'Accounts & Finance',
    email: 'accounts@miit.ac.in',
    desc: 'Fee payments, receipts, and refund queries',
    subject: 'Accounts & fees',
  },
];

/* days = JS getDay() values (0 = Sunday). open/close are 24h numbers. */
const HOURS = [
  { label: 'Monday – Friday', time: '9:00 AM – 6:00 PM', days: [1, 2, 3, 4, 5], open: 9, close: 18 },
  { label: 'Saturday', time: '9:00 AM – 2:00 PM', days: [6], open: 9, close: 14 },
  { label: 'Sunday', time: 'Closed', days: [0] },
];

const FAQS = [
  {
    q: 'How soon will I hear back after submitting the form?',
    a: 'Our team responds to every enquiry within 48 working hours, usually sooner during business days.',
  },
  {
    q: 'Can I visit the campus before enrolling?',
    a: 'Yes — campus visits are welcome on weekdays between 10 AM and 4 PM. Call ahead so a counsellor can walk you through.',
  },
  {
    q: 'I have a query about an existing batch. Who do I contact?',
    a: 'Reach out to Student Support at support@miit.ac.in with your batch and program name, and they will route it to the right coordinator.',
  },
];

const PERKS = [
  { icon: Clock3, text: 'Reply within 48 hrs' },
  { icon: MessagesSquare, text: 'A real person responds' },
  { icon: MapPin, text: 'Campus visits welcome' },
];

/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */
const Img = ({ src, alt = '', className = '', style }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    onError={(e) => {
      e.currentTarget.style.opacity = 0;
    }}
    className={`w-full h-full object-cover ${className}`}
    style={style}
  />
);

const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${className}`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const HexIcon = ({ icon: Icon, size = 64, filled = false }) => (
  <span
    className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
    style={{
      width: size,
      height: size,
      clipPath: HEX,
      background: filled ? BRAND : 'linear-gradient(145deg,#f4f8f8,#dcebe9)',
      color: filled ? '#fff' : BRAND,
    }}
  >
    <Icon size={size * 0.38} strokeWidth={1.7} />
  </span>
);

const Heading = ({ eyebrow, title, center = false }) => (
  <div className={center ? 'text-center' : ''}>
    <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
      <span className="w-6 h-[2px]" style={{ background: BRAND }} />
      {eyebrow}
    </span>
    <h2 className="mt-2 text-3xl md:text-[40px] font-bold leading-tight tracking-tight" style={{ color: INK }}>
      {title}
    </h2>
  </div>
);

const Field = ({ label, icon: Icon, children }) => (
  <label className="block">
    <span className="block text-[12px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: BRAND_DARK }}>
      {label}
    </span>
    <span className="relative block">
      <Icon size={17} className="absolute left-4 top-3.5 text-neutral-400 pointer-events-none" />
      {children}
    </span>
  </label>
);

const inputClass =
  'w-full rounded-2xl border-2 bg-white pl-11 pr-4 py-3 text-[14.5px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-[#009688]';

/* Current time in India, so "Open now" is right for any visitor */
const getIndiaNow = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

const getStatus = () => {
  const now = getIndiaNow();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const row = HOURS.find((h) => h.days.includes(day));
  const open = !!row && row.open != null && hour >= row.open && hour < row.close;
  return { day, open };
};

/* ─────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────── */
const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(null);
  const [status, setStatus] = useState(getStatus);

  // Keep the "Open now" badge fresh
  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(id);
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

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(false);
  };

  const copyEmail = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied((c) => (c === email ? null : c)), 1800);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  const messageDept = (subject) => {
    setForm((prev) => ({ ...prev, subject }));
    setSubmitted(false);
  };

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      <style>{`
        @keyframes ct-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .ct-float { animation: ct-float 5s ease-in-out infinite; }
        @keyframes ct-pop { from { opacity: 0; transform: translateY(14px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .ct-pop { animation: ct-pop 420ms ease-out both; }
        @keyframes ct-ring { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.55); opacity: 0; } }
        .ct-ring { animation: ct-ring 2.2s ease-out infinite; }
        @keyframes ct-dot { 0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,.55); } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } }
        .ct-dot { animation: ct-dot 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ct-float, .ct-pop, .ct-ring, .ct-dot { animation: none; } }
      `}</style>

      {/* ══════════ PAGE HERO ══════════ */}
      <section
        id="main-content"
        className="relative"
        style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 55%, #f3faf9 100%)` }}
      >
        <div
          className="hidden lg:block absolute -top-24 -left-24 w-72 h-80 opacity-[0.12]"
          style={{ clipPath: HEX, background: BRAND }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1300px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <div>
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-neutral-500 mb-7">
                <Link to="/" className="inline-flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
                  <Home size={14} /> Home
                </Link>
                <ChevronRight size={14} />
                <span className="font-semibold" style={{ color: BRAND_DARK }}>
                  Contact
                </span>
              </nav>

              <span
                className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full mb-5"
                style={{ background: TINT, color: BRAND_DARK }}
              >
                <Landmark size={14} /> Get in touch
              </span>

              <h1
                className="text-[40px] sm:text-[52px] xl:text-[62px] leading-[1.06] font-extrabold tracking-tight"
                style={{ color: BRAND }}
              >
                We'd like to hear from you.
              </h1>
              <p className="mt-6 text-[15.5px] leading-8 text-neutral-800 max-w-xl">
                Questions about a program, admissions, or an existing batch — reach us however's easiest, and a real
                person responds within 48 hours.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {PERKS.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 text-[13px] font-bold px-3.5 py-1.5 rounded-full border bg-white"
                    style={{ borderColor: LINE, color: BRAND_DARK }}
                  >
                    <Icon size={15} /> {text}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#message"
                  className="group inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold pl-6 pr-1.5 py-1.5 transition-all hover:shadow-lg hover:-translate-y-px"
                  style={{ background: BRAND }}
                >
                  Send a message
                  <span className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight size={16} strokeWidth={2.6} />
                  </span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-[14px] font-semibold pb-0.5 border-b-2"
                  style={{ color: BRAND, borderColor: `${BRAND}55` }}
                >
                  Or call +91 98765 43210
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-[440px] h-[420px] sm:h-[500px]">
              <div
                className="absolute top-0 right-6 w-[140px] h-[122px] sm:w-[165px] sm:h-[145px] overflow-hidden ct-float"
                style={{ clipPath: HOUSE, background: BRAND }}
              >
                <Img src={IMG.small} alt="Students on campus" />
              </div>
              <div
                className="absolute bottom-0 left-0 w-[290px] h-[335px] sm:w-[340px] sm:h-[393px] overflow-hidden"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
              >
                <Img src={IMG.main} alt="Students at MIIT" />
              </div>
              <div
                className="absolute top-14 left-0 w-14 h-16"
                style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, #4db6ac)` }}
                aria-hidden="true"
              />
              <a
                href="#message"
                aria-label="Go to the contact form"
                className="group absolute bottom-6 right-0 w-[124px] h-[143px] sm:w-[146px] sm:h-[168px]"
              >
                <span className="absolute inset-0 ct-ring" style={{ clipPath: HEX, background: BRAND }} aria-hidden="true" />
                <span
                  className="relative flex flex-col items-center justify-center w-full h-full text-white text-center transition-transform duration-300 group-hover:scale-105"
                  style={{ clipPath: HEX, background: BRAND }}
                >
                  <MessagesSquare size={30} strokeWidth={1.6} />
                  <span className="mt-1 text-[11.5px] font-bold leading-tight px-4">Reply within 48 hrs</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CONTACT METHODS ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 pt-20 md:pt-24">
        <div className="grid md:grid-cols-3 gap-6">
          {CONTACT_METHODS.map(({ icon, title, value, href, note, cta, external }, i) => (
            <Reveal key={title} delay={i * 110}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group relative h-full flex flex-col items-center text-center bg-white rounded-3xl border border-neutral-100 p-8 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-1.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: BRAND }}
              >
                <span
                  className="absolute -right-8 -top-8 w-28 h-32 opacity-[0.07]"
                  style={{ clipPath: HEX, background: BRAND }}
                  aria-hidden="true"
                />
                <HexIcon icon={icon} size={84} filled />
                <p className="mt-5 text-[11px] tracking-[0.18em] uppercase font-bold" style={{ color: BRAND }}>
                  {title}
                </p>
                <p className="mt-2 text-[18px] font-extrabold leading-snug transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                  {value}
                </p>
                <p className="mt-1.5 text-[13.5px] text-neutral-500 flex-1">{note}</p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ color: BRAND }}
                >
                  {cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ FORM + MAP ══════════ */}
      <section id="message" className="mt-20 md:mt-24 py-20 md:py-28" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[1300px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Send a message" title="Fill out the form" center />
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            {/* Form */}
            <Reveal>
              <div className="bg-white rounded-[2rem] border p-7 md:p-10 shadow-xl shadow-teal-900/5" style={{ borderColor: '#d6e9e6' }}>
                {submitted ? (
                  <div className="ct-pop flex flex-col items-center justify-center text-center py-12">
                    <span
                      className="w-24 h-[110px] flex items-center justify-center text-white"
                      style={{ clipPath: HEX, background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})` }}
                    >
                      <PartyPopper size={38} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 text-[26px] font-extrabold tracking-tight" style={{ color: INK }}>
                      Message sent{form.name ? `, ${form.name.split(' ')[0]}` : ''}!
                    </h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-7 text-neutral-600">
                      We'll get back to you within 48 hours
                      {form.subject ? (
                        <>
                          {' '}
                          about <b style={{ color: BRAND_DARK }}>{form.subject.toLowerCase()}</b>
                        </>
                      ) : null}
                      .
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border-2 text-[13.5px] font-bold px-6 py-2.5 transition-colors hover:bg-[#e6f4f2]"
                      style={{ borderColor: BRAND, color: BRAND_DARK }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" icon={User}>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className={inputClass}
                        style={{ borderColor: '#d6e9e6' }}
                        placeholder="Your name"
                      />
                    </Field>

                    <Field label="Phone number" icon={Phone}>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className={inputClass}
                        style={{ borderColor: '#d6e9e6' }}
                        placeholder="+91 00000 00000"
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <Field label="Email address" icon={Mail}>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className={inputClass}
                          style={{ borderColor: '#d6e9e6' }}
                          placeholder="you@example.com"
                        />
                      </Field>
                    </div>

                    <div className="sm:col-span-2">
                      <span className="block text-[12px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: BRAND_DARK }}>
                        Subject <span className="normal-case tracking-normal font-medium text-neutral-400">(optional)</span>
                      </span>
                      <div className="flex flex-wrap gap-2.5" role="radiogroup" aria-label="Subject">
                        {SUBJECTS.map((s) => {
                          const on = form.subject === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              role="radio"
                              aria-checked={on}
                              onClick={() => setForm((prev) => ({ ...prev, subject: on ? '' : s }))}
                              className="inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-2 text-[13px] font-bold transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                              style={{
                                background: on ? BRAND : '#fff',
                                borderColor: on ? BRAND : '#d6e9e6',
                                color: on ? '#fff' : BRAND_DARK,
                                outlineColor: BRAND,
                              }}
                            >
                              {on && <Check size={13} strokeWidth={3.2} />}
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <Field label="Message" icon={MessageSquare}>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          maxLength={600}
                          className={`${inputClass} resize-none`}
                          style={{ borderColor: '#d6e9e6' }}
                          placeholder="How can we help?"
                        />
                      </Field>
                      <p className="mt-1.5 text-right text-[12px] text-neutral-400">{form.message.length} / 600</p>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 rounded-full text-white text-[15px] font-bold pl-7 pr-2 py-2 transition-all hover:shadow-lg hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        style={{ background: BRAND, outlineColor: BRAND }}
                      >
                        Send message
                        <span className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                          <Send size={16} strokeWidth={2.4} />
                        </span>
                      </button>
                      <p className="mt-3 text-center text-[12px] text-neutral-500">
                        We'll only use your details to respond to this message.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Map + hours */}
            <div className="flex flex-col gap-6">
              <Reveal delay={100}>
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl shadow-teal-900/10 h-[300px]" style={{ background: TINT }}>
                  <iframe
                    title="MIIT campus location"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Whitefield%2C+Bengaluru&output=embed"
                  />
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white text-[13px] font-bold pl-4 pr-3 py-2 shadow-lg hover:-translate-y-px transition-transform"
                    style={{ color: BRAND_DARK }}
                  >
                    <Navigation size={15} /> Get directions
                  </a>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div
                  className="relative overflow-hidden rounded-[2rem] p-7 md:p-8 text-white"
                  style={{ background: `linear-gradient(150deg, ${BRAND_DARK}, ${BRAND})` }}
                >
                  <span
                    className="absolute -right-12 -bottom-12 w-52 h-60 bg-white/10"
                    style={{ clipPath: HEX }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span
                          className="shrink-0 w-[48px] h-[55px] flex items-center justify-center bg-white/20"
                          style={{ clipPath: HEX }}
                        >
                          <Clock3 size={19} strokeWidth={1.8} />
                        </span>
                        <p className="text-[20px] font-extrabold leading-tight">Office hours</p>
                      </div>
                      <span
                        className="inline-flex items-center gap-2 rounded-full bg-white text-[12px] font-bold px-3 py-1.5"
                        style={{ color: status.open ? '#15803d' : '#525252' }}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${status.open ? 'ct-dot' : ''}`}
                          style={{ background: status.open ? '#22c55e' : '#a3a3a3' }}
                        />
                        {status.open ? 'Open now' : 'Closed now'}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {HOURS.map(({ label, time, days }) => {
                        const today = days.includes(status.day);
                        return (
                          <li
                            key={label}
                            className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-[14px]"
                            style={{ background: today ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.08)' }}
                          >
                            <span className="flex items-center gap-2 font-medium text-white/90">
                              {label}
                              {today && (
                                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white rounded-full px-2 py-0.5" style={{ color: BRAND_DARK }}>
                                  Today
                                </span>
                              )}
                            </span>
                            <span className="font-bold text-white">{time}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="mt-4 text-[12px] text-white/75">All times are Indian Standard Time (IST).</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ DEPARTMENT CONTACTS ══════════ */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <Heading eyebrow="Reach the right team" title="Department contacts" center />
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENT_CONTACTS.map(({ icon, dept, email, desc, subject }, i) => (
            <Reveal key={dept} delay={(i % 4) * 100}>
              <div className="group h-full flex flex-col bg-white rounded-3xl border border-neutral-100 p-6 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300">
                <HexIcon icon={icon} size={68} filled />
                <h3 className="mt-5 text-[17px] font-bold transition-colors group-hover:text-[#009688]" style={{ color: INK }}>
                  {dept}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-6 text-neutral-600 flex-1">{desc}</p>

                <div
                  className="mt-5 flex items-center gap-2 rounded-2xl pl-3 pr-1.5 py-1.5"
                  style={{ background: TINT }}
                >
                  <a
                    href={`mailto:${email}`}
                    className="min-w-0 flex-1 text-[12.5px] font-semibold break-all leading-snug hover:underline"
                    style={{ color: BRAND_DARK }}
                  >
                    {email}
                  </a>
                  <button
                    type="button"
                    onClick={() => copyEmail(email)}
                    aria-label={`Copy ${email}`}
                    title="Copy email"
                    className="shrink-0 w-8 h-[37px] flex items-center justify-center text-white transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ clipPath: HEX, background: BRAND, outlineColor: BRAND }}
                  >
                    {copied === email ? <Check size={14} strokeWidth={3} /> : <Copy size={13} strokeWidth={2.2} />}
                  </button>
                </div>
                <p className="h-4 mt-1 text-[11.5px] font-semibold" style={{ color: BRAND }} aria-live="polite">
                  {copied === email ? 'Email copied!' : ''}
                </p>

                <a
                  href="#message"
                  onClick={() => messageDept(subject)}
                  className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-bold"
                  style={{ color: BRAND }}
                >
                  Message this team <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 md:py-28" style={{ background: '#f2f8f7' }}>
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal>
            <Heading eyebrow="Questions" title="Before you reach out" center />
          </Reveal>

          <div className="mt-12 space-y-4">
            {FAQS.map(({ q, a }, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={q} delay={i * 80}>
                  <div
                    className="rounded-2xl border bg-white transition-shadow duration-300"
                    style={{
                      borderColor: open ? BRAND : '#d6e9e6',
                      boxShadow: open ? '0 14px 30px -18px rgba(0,150,136,.5)' : undefined,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      style={{ outlineColor: BRAND }}
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="shrink-0 w-9 h-[41px] flex items-center justify-center"
                          style={{
                            clipPath: HEX,
                            background: open ? BRAND : TINT,
                            color: open ? '#fff' : BRAND_DARK,
                          }}
                        >
                          <CircleHelp size={16} strokeWidth={2.2} />
                        </span>
                        <span className="text-[15.5px] font-bold leading-snug" style={{ color: INK }}>
                          {q}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        style={{ color: BRAND }}
                      />
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-[76px] text-[14.5px] leading-7 text-neutral-600">{a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Img src={IMG.cta} alt="" />
        </div>
        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${BRAND_DARK}f2, ${BRAND}d9)` }} />
        <div
          className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/10"
          style={{ clipPath: HEX }}
          aria-hidden="true"
        />
        <div
          className="hidden md:block absolute -left-10 -bottom-10 w-44 h-52 bg-white/10"
          style={{ clipPath: HEX }}
          aria-hidden="true"
        />

        <Reveal>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight">
              Ready to take the next step?
            </h2>
            <p className="mt-4 text-white/85 text-[16px] leading-8">
              Skip the form and start your admissions enquiry directly.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-3 bg-white rounded-full text-[14px] font-bold pl-7 pr-1.5 py-1.5 hover:shadow-xl transition-all hover:-translate-y-px"
                style={{ color: BRAND_DARK }}
              >
                Start admissions enquiry
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: BRAND }}>
                  <ArrowRight size={16} strokeWidth={2.6} />
                </span>
              </Link>
              <Link
                to="/about/management"
                className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-[14px] font-bold px-8 py-3 rounded-full transition-colors"
              >
                About MIIT
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;