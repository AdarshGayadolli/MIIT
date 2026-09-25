import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OUTCOMES = [
  { value: '≥ 90%', label: 'Placement rate maintained yearly' },
  { value: '50+', label: 'Hiring partner companies' },
  { value: '2', label: 'Placement drives per batch' },
  { value: 'Termly', label: 'Public placement report' },
];

const WHAT_WE_DO = [
  {
    title: 'Career counselling from day one',
    desc: 'Placement isn\'t a final-term activity. Every student gets a counselling session early in the program to map skills to realistic career paths.',
  },
  {
    title: 'Resume & portfolio building',
    desc: 'One-on-one reviews of resumes, LinkedIn profiles, and project portfolios before any interview process begins.',
  },
  {
    title: 'Mock interviews & technical rounds',
    desc: 'Practice rounds run by faculty and industry mentors, with direct feedback on technical answers and presentation.',
  },
  {
    title: 'Employer matching & drives',
    desc: 'We match each batch against our hiring-partner network and run on-campus and virtual placement drives through the term.',
  },
  {
    title: 'Post-placement follow-up',
    desc: 'The placement cell stays in touch through the first few months on the job to catch and resolve early transition issues.',
  },
  {
    title: 'Alumni & referral network',
    desc: 'Graduates already placed with partner companies actively refer and mentor the next batch coming through.',
  },
];

const PROCESS_PREVIEW = [
  { step: '01', label: 'Skill assessment & counselling' },
  { step: '02', label: 'Resume & portfolio prep' },
  { step: '03', label: 'Mock interviews' },
  { step: '04', label: 'Employer matching & drives' },
  { step: '05', label: 'Offer & onboarding support' },
];

const RELATED_LINKS = [
  { to: '/training-placement/committee', label: 'Placement Committee', desc: 'Who runs the placement cell' },
  { to: '/training-placement/process', label: 'Training & Placement Process', desc: 'The full step-by-step workflow' },
  { to: '/training-placement/roadmap', label: 'Training Roadmap', desc: 'How training builds toward placement' },
  { to: '/training-placement/partners', label: 'Placement Partners', desc: 'Companies that hire from MIIT' },
  { to: '/training-placement/events', label: 'Events', desc: 'Drives, fairs, and info sessions' },
  { to: '/training-placement/statistics', label: 'Placement Statistics', desc: 'Published outcomes by batch' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
  <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
  </div>
);

const AboutTrainingAndPlacement = () => {
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
          <span className="text-gray-500">Training & Placement</span>
          <span>/</span>
          <span className="text-[#356575]">About</span>
        </div>

        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Training & Placement</span>
        <h1
          className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
          style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
        >
          Placement isn't the finish line for us — it's the point.
        </h1>
        <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
          Every program at MIIT is built with a job at the end of it. The
          training & placement cell stays involved from the first counselling
          session to the first few months on the job.
        </p>
      </section>

      {/* ── OUTCOMES BAR ── */}
      <section className="bg-[#356575]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
          {OUTCOMES.map(({ value, label }) => (
            <div key={label} className="text-center px-4 py-2">
              <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Our approach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 leading-snug text-[#1E3D47]">
            A hire is the actual outcome, not a certificate ceremony
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
            The placement cell doesn't wait until the final term to get
            involved. Counselling starts early, so every student knows what
            role they're training toward and what employers in that role
            actually expect.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            We track outcomes per batch, publish them honestly whether or
            not the numbers are favorable, and keep the hiring-partner
            network growing every term rather than resting on past results.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
            alt="Placement counselling session"
            className="rounded-2xl w-full object-cover h-[320px]"
          />
          <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide">Cell oversight</p>
            <p className="text-[13.5px] font-semibold text-[#1E3D47] mt-0.5">Dean of Training & Placement</p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="What the cell handles" title="Support from day one to the first paycheck" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_DO.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-[#356575] mb-4" />
                <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-2">{title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">At a glance</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">The process, in five steps</h2>
          </div>
          <Link
            to="/training-placement/process"
            className="text-[13px] font-medium text-[#356575] hover:text-[#1E3D47] transition-colors whitespace-nowrap"
          >
            See the full process →
          </Link>
        </div>

        <div className="grid sm:grid-cols-5 gap-4">
          {PROCESS_PREVIEW.map(({ step, label }, i) => (
            <div key={step} className="relative">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 h-full hover:border-[#356575]/30 hover:shadow-md transition-all">
                <span className="text-[#356575]/40 text-[13px] font-semibold tracking-widest">{step}</span>
                <p className="text-[13.5px] font-semibold text-[#1E3D47] mt-2.5 leading-snug">{label}</p>
              </div>
              {i < PROCESS_PREVIEW.length - 1 && (
                <span className="hidden sm:block absolute top-1/2 -right-2.5 -translate-y-1/2 w-2.5 h-px bg-[#d0e4e9]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Explore further" title="Go deeper into training & placement" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED_LINKS.map(({ to, label, desc }) => (
              <Link
                key={to}
                to={to}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all"
              >
                <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-1.5 group-hover:text-[#356575] transition-colors">
                  {label}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </Link>
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

export default AboutTrainingAndPlacement;