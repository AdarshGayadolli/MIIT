import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const STATS = [
  { value: '500+', label: 'Students Enrolled' },
  { value: '95%', label: 'Placement Rate' },
  { value: '50+', label: 'Industry Partners' },
  { value: '10+', label: 'Years of Excellence' },
];

const COURSES = [
  {
    icon: '',
    title: 'BIM for Construction',
    desc: 'Master Building Information Modeling and lead the future of smart construction.',
    link: '/departments/bim-construction',
    tag: 'In Demand',
  },
  {
    icon: '',
    title: 'Digital Marketing',
    desc: 'Drive brand growth with SEO, paid ads, content strategy and data analytics.',
    link: '/departments/digital-marketing',
    tag: 'Top Rated',
  },
];

const MARQUEE_PARTNERS = [
  'Autodesk', 'Google', 'Meta', 'HubSpot', 'Bentley', 'Trimble', 'SEMrush', 'Ahrefs', 'Navisworks', 'Canva',
];

const Home = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?w=1800&q=80')`,
          backgroundPositionY: `${scrollY * 0.4}px`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#0f2a33]/95 via-[#1E3D47]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7AAFC0] animate-pulse" />
              <span className="text-white/80 text-[12px] tracking-wider uppercase font-medium">
                Admissions open — 2025 batch
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Shape Your Future <br />
              <span className="text-[#7AAFC0]">at MIIT</span>
            </h1>

            <p className="text-white/70 text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-xl">
              Medini Institute of Information Technology prepares students with industry-ready skills, hands-on training, and career support that gets results.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/departments"
                className="bg-[#356575] hover:bg-[#2A5161] text-white font-medium text-[14px] px-7 py-3 rounded-lg transition-colors"
              >
                Explore courses
              </Link>
              <Link
                to="/admissions"
                className="border border-white/30 hover:border-white/60 text-white text-[14px] px-7 py-3 rounded-lg transition-colors backdrop-blur-sm"
              >
                Apply now →
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-white/40 text-[11px] tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#356575]">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center px-4 py-2">
              <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Who we are</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 leading-snug text-[#1E3D47]">
            Empowering the next generation of innovators
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            MIIT is a forward-thinking institute dedicated to bridging the gap between education and industry. Our programs are co-designed with top employers to ensure every graduate is job-ready from day one.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: '', text: 'Industry-aligned curriculum' },
              { icon: '', text: 'Live project experience' },
              { icon: '', text: 'Certified by Google & Autodesk' },
              { icon: '', text: '100% placement support' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#eaf4f7] rounded-lg flex items-center justify-center text-base shrink-0">
                  {icon}
                </div>
                <p className="text-[13px] font-medium text-[#1E3D47]">{text}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about/management"
            className="inline-block mt-8 text-[#356575] text-[13.5px] font-medium border-b border-[#356575]/40 hover:border-[#356575] transition-colors"
          >
            Learn more about us →
          </Link>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
            alt="Students at MIIT"
            className="rounded-2xl w-full object-cover h-[360px]"
          />
          <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md max-w-[200px]">
            <p className="text-2xl font-bold text-[#356575]">95%</p>
            <p className="text-[12px] text-gray-500 mt-0.5">Students placed within 3 months of graduation</p>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">Our departments</h2>
            </div>
            <Link to="/admissions" className="text-[#356575] text-[13.5px] font-medium hover:underline shrink-0">
              View all programs →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {COURSES.map(({ icon, title, desc, link, tag }) => (
              <Link
                key={title}
                to={link}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#356575]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#eaf4f7] rounded-xl flex items-center justify-center text-2xl">
                    {icon}
                  </div>
                  <span className="bg-[#356575]/10 text-[#356575] text-[11px] font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1E3D47] mb-2 group-hover:text-[#356575] transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5">{desc}</p>
                <div className="flex items-center gap-1.5 text-[#356575] text-[13px] font-medium">
                  Explore program
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE PARTNERS ── */}
      <section className="py-12 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-[11px] tracking-[0.15em] uppercase text-gray-400 font-medium">
            Tools & partners our students work with
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-12 items-center whitespace-nowrap">
            {[...MARQUEE_PARTNERS, ...MARQUEE_PARTNERS].map((name, i) => (
              <span key={i} className="text-[#356575]/50 font-semibold text-[15px] tracking-wide shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MIIT ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Why choose us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">Built for real careers</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: '', title: 'Industry experts as faculty', desc: 'Learn directly from professionals who have worked at top companies and bring real-world insight to every class.' },
            { icon: '', title: 'Dedicated placement cell', desc: 'A full-time team working on your behalf — resume building, mock interviews, employer connects, and job referrals.' },
            { icon: '', title: 'Hands-on lab training', desc: 'Access to licensed industry tools like Revit, Navisworks, Google Ads Manager, and SEMrush from day one.' },
            { icon: '', title: 'Flexible batch timings', desc: 'Morning and evening batches designed for both fresh graduates and working professionals.' },
            { icon: '', title: 'Live project exposure', desc: 'Work on actual client briefs and real campaigns as part of your coursework — not simulations.' },
            { icon: '', title: 'Globally recognized certificates', desc: 'Graduate with certificates from Google, Autodesk, Meta, and HubSpot alongside your MIIT diploma.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-2xl p-6 hover:bg-[#eaf4f7] transition-colors group">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-sm">
                {icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#1E3D47] mb-2 group-hover:text-[#356575] transition-colors">
                {title}
              </h3>
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
            Ready to start your career journey?
          </h2>
          <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
            Join hundreds of students who chose MIIT and landed roles at top companies. Limited seats available for the next batch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
            >
              Apply now
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;