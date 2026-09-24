import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OUTCOMES = [
  { value: '90%+', label: 'Placement rate maintained yearly' },
  { value: '6 months', label: 'Program duration' },
  { value: '4', label: 'Core software tools' },
  { value: 'ISO 19650', label: 'Standards-aligned curriculum' },
];

const MODULES = [
  {
    number: '01',
    title: '3D Architectural & Structural Modeling',
    desc: 'Build parametric building models in Autodesk Revit — walls, structural elements, families, and construction documents that stay linked to a single data source.',
  },
  {
    number: '02',
    title: 'Model Federation & Clash Detection',
    desc: 'Combine architectural, structural, and MEP models in Navisworks, run clash tests, generate reports, and resolve conflicts before they reach the site.',
  },
  {
    number: '03',
    title: '4D Scheduling & Sequencing',
    desc: 'Link Revit models to MS Project schedules, build 4D construction sequences in Navisworks, and simulate phasing and materials planning.',
  },
  {
    number: '04',
    title: 'Quantity Takeoff & Cost Estimation',
    desc: 'Extract accurate quantity takeoffs directly from the model and connect them to conceptual and detailed cost estimates (5D BIM).',
  },
  {
    number: '05',
    title: 'BIM Execution Planning',
    desc: 'Draft Employer Information Requirements (EIR) and BIM Execution Plans (BEP), and structure model data and naming conventions to ISO 19650.',
  },
  {
    number: '06',
    title: 'Point Cloud & As-Built Coordination',
    desc: 'Work with laser-scanned point cloud data and LIDAR captures to model existing conditions and verify as-built accuracy against design intent.',
  },
];

const TOOLS = ['Autodesk Revit', 'Navisworks Manage', 'AutoCAD', 'BIM 360 / ACC', 'MS Project'];

const CAREERS = [
  { role: 'BIM Modeler', desc: 'Builds and maintains discipline models (architectural, structural, MEP) in Revit.' },
  { role: 'BIM Coordinator', desc: 'Runs clash detection across federated models and manages the coordination process between teams.' },
  { role: 'Construction Planner', desc: 'Links models to schedules for 4D sequencing and site logistics planning.' },
  { role: 'Quantity Surveyor (BIM)', desc: 'Extracts takeoffs from models to support cost estimation and tendering.' },
];

const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', caption: 'High-rise coordination model' },
  { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', caption: 'Structural clash detection review' },
  { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', caption: 'On-site digital twin application' },
];

const SectionHeading = ({ eyebrow, title, center }) => (
  <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
    <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
  </div>
);

export default function BIM() {
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
          <span className="text-gray-500">Departments</span>
          <span>/</span>
          <span className="text-[#356575]">BIM for Construction</span>
        </div>

        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Department of BIM</span>
        <h1
          className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
          style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
        >
          BIM for Construction.
        </h1>
        <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
          Master the digital construction workflows reshaping how buildings
          are designed, coordinated, and delivered — from parametric modeling
          to clash detection and 4D scheduling.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/admissions"
            className="bg-[#356575] hover:bg-[#2A5161] text-white text-[13.5px] font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Apply now
          </Link>
          <Link
            to="/contact"
            className="border border-[#d0e4e9] hover:border-[#356575]/40 text-[#1E3D47] text-[13.5px] font-medium px-7 py-3 rounded-lg transition-colors"
          >
            Talk to an advisor
          </Link>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="max-w-7xl mx-auto px-6 pb-10 md:pb-14">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="BIM model coordination on a construction site"
          className="rounded-2xl w-full h-[280px] md:h-[380px] object-cover"
        />
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

      {/* ── OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Overview</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 leading-snug text-[#1E3D47]">
            Where digital precision meets construction reality
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
            Building Information Modeling is no longer a niche skill — it's
            the backbone of modern construction management. This program
            builds the technical fluency to lead BIM adoption across
            architectural firms, contractors, and infrastructure agencies.
          </p>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            From clash detection to 5D cost modeling, you'll graduate ready
            to work on projects that demand precision, cross-team
            coordination, and digital leadership.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="text-[12px] font-medium text-[#356575] bg-[#eaf4f7] px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
            alt="BIM 3D model on screen"
            className="rounded-2xl w-full object-cover h-[320px]"
          />
          <div className="absolute -bottom-5 -left-5 bg-white border border-[#d0e4e9] rounded-xl px-5 py-4 shadow-md">
            <p className="text-[11px] text-gray-400 uppercase tracking-wide">Certification</p>
            <p className="text-[13.5px] font-semibold text-[#1E3D47] mt-0.5">Autodesk & ISO 19650 aligned</p>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Curriculum" title="Core modules" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map(({ number, title, desc }) => (
              <div
                key={number}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#356575]/30 hover:shadow-md transition-all"
              >
                <span className="text-[#356575]/40 text-[13px] font-semibold tracking-widest">{number}</span>
                <h3 className="text-[15px] font-bold text-[#1E3D47] mt-3 mb-2">{title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER OUTCOMES ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <SectionHeading eyebrow="Where graduates go" title="Roles this program prepares you for" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CAREERS.map(({ role, desc }) => (
            <div key={role} className="bg-white rounded-2xl p-6 border border-gray-100 hover:bg-[#eaf4f7] transition-colors group">
              <div className="w-2 h-2 rounded-full bg-[#356575] mb-4" />
              <h3 className="text-[14.5px] font-bold text-[#1E3D47] mb-2 group-hover:text-[#356575] transition-colors">
                {role}
              </h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="In practice" title="Real projects, real impact" />
          <div className="grid md:grid-cols-3 gap-6">
            {GALLERY.map(({ url, caption }) => (
              <div key={caption} className="group relative overflow-hidden rounded-2xl">
                <img
                  src={url}
                  alt={caption}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#1E3D47]/0 group-hover:bg-[#1E3D47]/50 transition-all duration-300 flex items-end">
                  <p className="text-white text-[13px] font-medium px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {caption}
                  </p>
                </div>
              </div>
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
            Ready to build smarter?
          </h2>
          <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
            Join the next batch of BIM professionals. Seats are limited per intake.
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
}