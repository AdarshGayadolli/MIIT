import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Users,
  BriefcaseBusiness,
  Wrench,
  Clock3,
  FolderKanban,
  Award,
  Building2,
  Megaphone,
  ArrowUpRight,
} from 'lucide-react';
const STATS = [
  { value: '500+', label: 'Students Enrolled' },
  { value: '95%', label: 'Placement Rate' },
  { value: '50+', label: 'Industry Partners' },
  { value: '10+', label: 'Years of Excellence' },
];

const COURSES = [
  {
    icon: Building2,
    title: 'BIM for Construction',
    desc: 'Master Building Information Modeling and lead the future of smart construction.',
    link: '/departments/bim-construction',
    tag: 'In Demand',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Drive brand growth with SEO, paid ads, content strategy and data analytics.',
    link: '/departments/digital-marketing',
    tag: 'Top Rated',
  },
];

const MARQUEE_PARTNERS = [
  'Autodesk',
  'Google',
  'Meta',
  'HubSpot',
  'Bentley',
  'Trimble',
  'SEMrush',
  'Ahrefs',
  'Navisworks',
  'Canva',
  'Google',
  'Trimble',
  'Autodesk',
  'Google',
  'Meta',
  'HubSpot',
  'Bentley',
  'Trimble',
  'SEMrush',
  'Ahrefs',
  'Navisworks',
  'Canva',
  'Google',
  'Trimble',
];

const Home = () => {
  const heroRef = useRef(null);

  const marqueeRef = useRef(null);
  const lastScrollY = useRef(0);
  const marqueePosition = useRef(0);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setScrollY(currentScrollY);

      const marquee = marqueeRef.current;

      if (marquee) {
        // Scroll DOWN → move RIGHT to LEFT
        marqueePosition.current -= delta * 1.2;

        // Get half of the duplicated content width
        const halfWidth = marquee.scrollWidth / 2;

        // Keep position inside infinite range
        if (marqueePosition.current <= -halfWidth) {
          marqueePosition.current += halfWidth;
        }

        if (marqueePosition.current >= 0) {
          marqueePosition.current -= halfWidth;
        }

        marquee.style.transform = `
        translate3d(${marqueePosition.current}px, 0, 0)
      `;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
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
      {/* ── PROGRAMS ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">

            <div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">
                Programs
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">
                Our departments
              </h2>
            </div>

            <Link
              to="/admissions"
              className="
          text-[#356575]
          text-[13.5px]
          font-medium
          hover:underline
          shrink-0
        "
            >
              View all programs →
            </Link>

          </div>

          {/* Course cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {COURSES.map(
              ({ icon: Icon, title, desc, link, tag }) => (

                <Link
                  key={title}
                  to={link}
                  className="
              group
              bg-white
              border
              border-gray-100
              rounded-2xl
              p-7
              hover:border-[#356575]/30
              hover:shadow-md
              transition-all
              duration-300
            "
                >

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">

                    {/* Course icon */}
                    <div
                      className="
                  w-12
                  h-12
                  bg-[#eaf4f7]
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  group-hover:bg-[#356575]
                  transition-colors
                  duration-300
                "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="
                    text-[#356575]
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                      />
                    </div>

                    {/* Tag */}
                    <span
                      className="
                  bg-[#356575]/10
                  text-[#356575]
                  text-[11px]
                  font-semibold
                  px-3
                  py-1
                  rounded-full
                "
                    >
                      {tag}
                    </span>

                  </div>

                  {/* Title */}
                  <h3
                    className="
                text-[17px]
                font-bold
                text-[#1E3D47]
                mb-2
                group-hover:text-[#356575]
                transition-colors
              "
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5">
                    {desc}
                  </p>

                  {/* Explore */}
                  <div
                    className="
                flex
                items-center
                gap-1.5
                text-[#356575]
                text-[13px]
                font-medium
              "
                  >
                    <span>Explore program</span>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={2}
                      className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                  duration-300
                "
                    />
                  </div>

                </Link>

              )
            )}

          </div>
        </div>
      </section>

      {/* ── MARQUEE PARTNERS ── */}
      {/* ── PARTNERS ── */}
      {/* ── PARTNERS ── */}
      {/* ── SCROLL CONTROLLED PARTNERS MARQUEE ── */}
      <section className="py-12 border-y border-gray-100 overflow-hidden">

        {/* Section heading */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center text-[11px] tracking-[0.15em] uppercase text-gray-400 font-medium">
            Tools & partners our students work with
          </p>
        </div>

        {/* Marquee viewport */}
        <div className="relative w-full overflow-hidden">

          {/* Left fade */}
          <div
            className="
        absolute
        left-0
        top-0
        bottom-0
        w-20
        bg-gradient-to-r
        from-white
        to-transparent
        z-10
        pointer-events-none
      "
          />

          {/* Moving track */}
          <div
            ref={marqueeRef}
            className="
        flex
        items-center
        w-max
        gap-12
        px-20
        will-change-transform
      "
          >
            {/* First set */}
            {MARQUEE_PARTNERS.map((name, index) => (
              <div
                key={`first-${name}-${index}`}
                className="
            shrink-0
            text-[#356575]/50
            font-semibold
            text-[15px]
            tracking-wide
            hover:text-[#356575]
            transition-colors
          "
              >
                {name}
              </div>
            ))}

            {/* Second set - required for infinite loop */}
            {MARQUEE_PARTNERS.map((name, index) => (
              <div
                key={`second-${name}-${index}`}
                className="
            shrink-0
            text-[#356575]/50
            font-semibold
            text-[15px]
            tracking-wide
            hover:text-[#356575]
            transition-colors
          "
              >
                {name}
              </div>
            ))}
          </div>

          {/* Right fade */}
          <div
            className="
        absolute
        right-0
        top-0
        bottom-0
        w-20
        bg-gradient-to-l
        from-white
        to-transparent
        z-10
        pointer-events-none
      "
          />

        </div>
      </section>

      {/* ── WHY MIIT ── */}
      {/* ── WHY MIIT ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">
            Why choose us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">
            Built for real careers
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              icon: Users,
              title: 'Industry experts as faculty',
              desc: 'Learn directly from professionals who have worked at top companies and bring real-world insight to every class.',
            },

            {
              icon: BriefcaseBusiness,
              title: 'Dedicated placement cell',
              desc: 'A full-time team working on your behalf — resume building, mock interviews, employer connects, and job referrals.',
            },

            {
              icon: Wrench,
              title: 'Hands-on lab training',
              desc: 'Access to licensed industry tools like Revit, Navisworks, Google Ads Manager, and SEMrush from day one.',
            },

            {
              icon: Clock3,
              title: 'Flexible batch timings',
              desc: 'Morning and evening batches designed for both fresh graduates and working professionals.',
            },

            {
              icon: FolderKanban,
              title: 'Live project exposure',
              desc: 'Work on actual client briefs and real campaigns as part of your coursework — not simulations.',
            },

            {
              icon: Award,
              title: 'Globally recognized certificates',
              desc: 'Graduate with certificates from Google, Autodesk, Meta, and HubSpot alongside your MIIT diploma.',
            },
          ].map(({ icon: Icon, title, desc }) => (

            <div
              key={title}
              className="
          bg-gray-50
          rounded-2xl
          p-6
          border
          border-transparent
          hover:bg-[#eaf4f7]
          hover:border-[#356575]/10
          hover:shadow-sm
          transition-all
          duration-300
          group
        "
            >

              {/* Icon */}
              <div
                className="
            w-11
            h-11
            bg-white
            rounded-xl
            flex
            items-center
            justify-center
            mb-4
            shadow-sm
            group-hover:bg-[#356575]
            transition-colors
            duration-300
          "
              >
                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="
              text-[#356575]
              group-hover:text-white
              transition-colors
              duration-300
            "
                />
              </div>

              {/* Title */}
              <h3
                className="
            text-[15px]
            font-bold
            text-[#1E3D47]
            mb-2
            group-hover:text-[#356575]
            transition-colors
          "
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {desc}
              </p>

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