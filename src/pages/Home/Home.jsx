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
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-0 md:pt-20">

          {/* Accreditation strip — legitimacy first, before anything else */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-[12.5px] text-gray-500">
            <span className="font-medium text-[#1E3D47]">Est. {new Date().getFullYear() - 12}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Affiliated & UGC-recognized programs</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>Certified partner: Autodesk · Google</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 items-center pb-16 md:pb-24">

            {/* Text */}
            <div>
              <h1
                className="text-[#1E3D47] leading-[1.12] mb-6 text-[38px] md:text-[50px]"
                style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
              >
                A college that gets you hired, not just graduated.
              </h1>

              <p className="text-gray-500 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-md">
               Medini Institute of Integrated Technology combines
                classroom learning with real industry tools, live projects,
                and a placement cell that stays with you until you're hired.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  to="/admissions"
                  className="bg-[#356575] hover:bg-[#2A5161] text-white font-medium text-[14px] px-7 py-3.5 rounded-lg transition-colors"
                >
                  Apply for {new Date().getFullYear()}–{new Date().getFullYear() + 1}
                </Link>
                <Link
                  to="/departments"
                  className="text-[#356575] text-[14px] font-medium border-b border-[#356575]/40 hover:border-[#356575] pb-0.5 transition-colors"
                >
                  View programs
                </Link>
              </div>

              <div className="flex gap-10 pt-6 border-t border-gray-100">
                {STATS.slice(0, 3).map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-[#1E3D47]">{value}</p>
                    <p className="text-[12px] text-gray-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo — real campus life, warm not moody */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80"
                alt="Students in a hands-on lab session at MIIT"
                className="rounded-2xl w-full h-[420px] md:h-[480px] object-cover"
                style={{ transform: `translateY(${Math.min(scrollY * 0.06, 24)}px)` }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-lg max-w-56 hidden sm:block">
                <p className="text-2xl font-bold text-[#356575]">95%</p>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  Graduates placed within 3 months
                </p>
              </div>
            </div>

          </div>
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
            className="rounded-2xl w-full object-cover h-90"
          />
          <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md max-w-50">
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