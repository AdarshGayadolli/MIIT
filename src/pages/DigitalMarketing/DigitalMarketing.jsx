import { useEffect, useRef } from 'react';

const MODULES = [
  {
    number: '01',
    title: 'Search Engine Optimization',
    desc: 'Master on-page, off-page, and technical SEO strategies that drive organic traffic and push brands to the top of search rankings.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Content Marketing Strategy',
    desc: 'Build content ecosystems that attract, engage, and convert — from blog pipelines to video scripts and email sequences.',
    icon: '✍️',
  },
  {
    number: '03',
    title: 'Social Media Advertising',
    desc: 'Run high-converting paid campaigns across Meta, Instagram, LinkedIn, and YouTube with precision audience targeting and A/B testing.',
    icon: '📱',
  },
  {
    number: '04',
    title: 'Google Analytics & Data Tracking',
    desc: 'Set up GA4, interpret user behavior funnels, and build dashboards that turn raw data into clear marketing decisions.',
    icon: '📊',
  },
];

const OUTCOMES = [
  { stat: '96%', label: 'Placement rate' },
  { stat: '4 mo', label: 'Program duration' },
  { stat: '15+', label: 'Live tools covered' },
  { stat: '₹6L', label: 'Avg. starting package' },
];

const GALLERY = [
  {
    url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    caption: 'Live campaign dashboards',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    caption: 'Data-driven strategy sessions',
  },
  {
    url: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    caption: 'Social media content creation',
  },
];

const TOOLS = ['Google Ads', 'Meta Ads', 'SEMrush', 'Canva', 'HubSpot', 'Mailchimp', 'GA4', 'Ahrefs'];

export default function DigitalMarketing() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.backgroundPositionY = `${window.scrollY * 0.35}px`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-130 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-[#7AAFC0] font-medium mb-3">
            Department of Digital Marketing
          </span>
          <h1 className="text-5xl font-bold text-white leading-tight max-w-2xl">
            Digital Marketing
          </h1>
          <p className="mt-4 text-white/70 text-[15px] max-w-xl leading-relaxed">
            Grow brands, move markets, and master the algorithms. Learn the strategies that power the world's most successful digital campaigns.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-[#356575] hover:bg-[#2A5161] text-white text-[13px] font-medium px-6 py-2.5 rounded-lg transition-colors">
              Apply now
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white text-[13px] px-6 py-2.5 rounded-lg transition-colors">
              Download brochure
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#356575]">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-4 divide-x divide-white/15">
          {OUTCOMES.map(({ stat, label }) => (
            <div key={label} className="text-center px-4">
              <p className="text-2xl font-bold text-white">{stat}</p>
              <p className="text-[11px] text-white/60 uppercase tracking-wider mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Overview</span>
          <h2 className="text-3xl font-bold mt-2 mb-5 leading-snug">
            Where creativity meets data-driven growth
          </h2>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            Digital marketing isn't just about posting content — it's about understanding people, platforms, and performance metrics. Our program gives you the strategic mindset and technical toolkit to run campaigns that actually move the needle.
          </p>
          <p className="text-gray-600 leading-relaxed text-[15px] mt-4">
            From SEO audits to paid social funnels, you'll graduate with a live portfolio of real campaigns, not just theoretical knowledge.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#eaf4f7] flex items-center justify-center text-[#356575] text-lg">🎓</div>
            <div>
              <p className="text-[13px] font-medium text-gray-900">Industry-recognized certification</p>
              <p className="text-[12px] text-gray-500">Google, Meta & HubSpot certified curriculum</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80"
            alt="Digital marketing analytics"
            className="rounded-xl w-full object-cover h-72"
          />
          <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
            <p className="text-[12px] text-gray-500">Tools covered</p>
            <p className="text-[14px] font-medium text-gray-900">GA4 · SEMrush · Meta Ads · HubSpot</p>
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Curriculum</span>
          <h2 className="text-3xl font-bold mt-2 mb-10">Core modules</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {MODULES.map(({ number, title, desc, icon }) => (
              <div
                key={number}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#356575]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-bold text-[#356575]/50 tracking-widest mt-1">{number}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{icon}</span>
                      <h3 className="text-[15px] font-semibold text-gray-900">{title}</h3>
                    </div>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Industry tools</span>
        <h2 className="text-3xl font-bold mt-2 mb-8">What you'll work with</h2>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="px-5 py-2.5 border border-[#d0e4e9] rounded-full text-[13.5px] text-[#1E3D47] font-medium bg-[#eaf4f7] hover:bg-[#356575] hover:text-white hover:border-[#356575] transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">In practice</span>
          <h2 className="text-3xl font-bold mt-2 mb-8">Campaigns, content & results</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {GALLERY.map(({ url, caption }) => (
              <div key={caption} className="group relative overflow-hidden rounded-xl">
                <img
                  src={url}
                  alt={caption}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <p className="text-white text-[13px] font-medium px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1E3D47] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Ready to dominate the digital space?</h2>
            <p className="text-white/60 mt-2 text-[15px] max-w-lg">
              Join the next batch of digital marketers building careers at agencies, startups, and Fortune 500 brands.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="bg-[#356575] hover:bg-[#4D8A9E] text-white text-[13px] font-medium px-7 py-3 rounded-lg transition-colors">
              Apply now
            </button>
            <button className="border border-white/20 hover:border-white/50 text-white text-[13px] px-7 py-3 rounded-lg transition-colors">
              Talk to an advisor
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}