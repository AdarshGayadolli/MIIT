import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const YEARLY_RATES = [
    { year: '2022', rate: 88 },
    { year: '2023', rate: 91 },
    { year: '2024', rate: 93 },
    { year: '2025', rate: 92 },
    { year: '2026', rate: 94 },
];

const PROGRAM_STATS = [
    {
        program: 'BIM for Construction',
        rate: '95%',
        avgPackage: '₹8.2L',
        topPackage: '₹14L',
        recruiters: 22,
    },
    {
        program: 'Digital Marketing',
        rate: '93%',
        avgPackage: '₹6.4L',
        topPackage: '₹11L',
        recruiters: 28,
    },
];

const RECRUITERS = [
    'L&T Construction', 'Shapoorji Pallonji', 'Turner Construction', 'AECOM',
    'Ogilvy', 'WPP', 'Dentsu', 'Publicis', 'Godrej Properties', 'Brigade Group',
    'Interpublic Group', 'Sobha Ltd',
];

const BATCH_TABLE = [
    { batch: 'Winter 2025', program: 'BIM for Construction', enrolled: 30, placed: 29, rate: '97%' },
    { batch: 'Winter 2025', program: 'Digital Marketing', enrolled: 30, placed: 28, rate: '93%' },
    { batch: 'Summer 2025', program: 'BIM for Construction', enrolled: 28, placed: 26, rate: '93%' },
    { batch: 'Summer 2025', program: 'Digital Marketing', enrolled: 30, placed: 27, rate: '90%' },
    { batch: 'Winter 2024', program: 'BIM for Construction', enrolled: 26, placed: 25, rate: '96%' },
    { batch: 'Winter 2024', program: 'Digital Marketing', enrolled: 28, placed: 25, rate: '89%' },
];

const METHODOLOGY = [
    'A student is counted "placed" only on a signed offer letter, not a verbal offer.',
    'Rates are calculated against enrolled students who completed the program, not those who dropped out.',
    'Figures are published as-is each term, including batches with below-average outcomes.',
    'Package figures are cost-to-company (CTC) as stated in the offer letter.',
];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const PlacementStatistics = () => {
    const [programFilter, setProgramFilter] = useState('All');

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

    const filteredBatches = programFilter === 'All'
        ? BATCH_TABLE
        : BATCH_TABLE.filter((b) => b.program === programFilter);

    const maxRate = Math.max(...YEARLY_RATES.map((y) => y.rate));

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/training-placement/about" className="hover:text-[#356575] transition-colors">Training & Placement</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Placement Statistics</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Training & Placement</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    The numbers, published as they are.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    Every batch's outcomes, reported honestly — whether or not they're
                    favorable. Updated every term.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: '94%', label: 'Latest year placement rate' },
                        { value: '50+', label: 'Hiring partner companies' },
                        { value: '₹7.3L', label: 'Average package (blended)' },
                        { value: '5 yrs', label: 'Track record published' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── YEARLY TREND ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Trend" title="Placement rate by year" />

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 md:p-10">
                    <div className="flex items-end justify-between gap-4 md:gap-8 h-56">
                        {YEARLY_RATES.map(({ year, rate }) => (
                            <div key={year} className="flex-1 flex flex-col items-center justify-end h-full">
                                <span className="text-[13px] font-bold text-[#1E3D47] mb-2">{rate}%</span>
                                <div
                                    className="w-full max-w-[56px] rounded-t-lg bg-gradient-to-t from-[#356575] to-[#4D8A9E] transition-all"
                                    style={{ height: `${(rate / maxRate) * 100}%` }}
                                />
                                <span className="text-[12px] text-gray-500 mt-3">{year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROGRAM BREAKDOWN ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="By program" title="How each program performs" />
                    <div className="grid md:grid-cols-2 gap-6">
                        {PROGRAM_STATS.map(({ program, rate, avgPackage, topPackage, recruiters }) => (
                            <div key={program} className="bg-white rounded-2xl p-7 border border-gray-100">
                                <h3 className="text-[18px] font-bold text-[#1E3D47] mb-5">{program}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Placement rate</p>
                                        <p className="text-[18px] font-bold text-[#1E3D47]">{rate}</p>
                                    </div>
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Recruiters</p>
                                        <p className="text-[18px] font-bold text-[#1E3D47]">{recruiters}</p>
                                    </div>
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Avg. package</p>
                                        <p className="text-[18px] font-bold text-[#1E3D47]">{avgPackage}</p>
                                    </div>
                                    <div className="bg-[#eaf4f7] rounded-xl p-4">
                                        <p className="text-[10.5px] tracking-[0.1em] uppercase text-[#356575] font-medium mb-1">Top package</p>
                                        <p className="text-[18px] font-bold text-[#1E3D47]">{topPackage}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BATCH TABLE ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
                    <SectionHeading eyebrow="Batch-by-batch" title="Recent outcomes" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {['All', 'BIM for Construction', 'Digital Marketing'].map((prog) => (
                        <button
                            key={prog}
                            onClick={() => setProgramFilter(prog)}
                            className={`px-4 py-2 rounded-lg text-[13px] font-medium border transition-colors
                                ${programFilter === prog
                                    ? 'bg-[#356575] border-[#356575] text-white'
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#356575]/40 hover:text-[#356575]'
                                }`}
                        >
                            {prog}
                        </button>
                    ))}
                </div>

                <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="px-6 py-3.5 text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium">Batch</th>
                                <th className="px-6 py-3.5 text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium">Program</th>
                                <th className="px-6 py-3.5 text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium">Enrolled</th>
                                <th className="px-6 py-3.5 text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium">Placed</th>
                                <th className="px-6 py-3.5 text-[11px] tracking-[0.1em] uppercase text-gray-400 font-medium">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBatches.map((row, i) => (
                                <tr key={`${row.batch}-${row.program}`} className={i !== filteredBatches.length - 1 ? 'border-b border-gray-100' : ''}>
                                    <td className="px-6 py-3.5 text-[13.5px] text-[#1E3D47] font-medium">{row.batch}</td>
                                    <td className="px-6 py-3.5 text-[13.5px] text-gray-500">{row.program}</td>
                                    <td className="px-6 py-3.5 text-[13.5px] text-gray-500">{row.enrolled}</td>
                                    <td className="px-6 py-3.5 text-[13.5px] text-gray-500">{row.placed}</td>
                                    <td className="px-6 py-3.5 text-[13.5px] font-semibold text-[#356575]">{row.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── RECRUITERS ── */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading eyebrow="Who's hiring" title="A sample of our recruiting partners" />
                    <div className="flex flex-wrap gap-3">
                        {RECRUITERS.map((name) => (
                            <span
                                key={name}
                                className="text-[13px] font-medium text-[#1E3D47] bg-white border border-gray-100 px-5 py-3 rounded-xl"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-400 text-[12.5px] mt-6">
                        See the full list on <Link to="/training-placement/partners" className="text-[#356575] font-medium hover:text-[#1E3D47]">Placement Partners</Link>.
                    </p>
                </div>
            </section>

            {/* ── METHODOLOGY ── */}
            <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="How we count" title="Methodology" center />
                <div className="bg-[#1E3D47] rounded-2xl p-7 md:p-9">
                    <ul className="space-y-3">
                        {METHODOLOGY.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[13.5px] text-white/80 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7AAFC0] mt-1.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
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
                        Want to be in next term's numbers?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Start your admissions enquiry and talk to a counsellor.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/admissions"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Start admissions enquiry
                        </Link>
                        <Link
                            to="/training-placement/partners"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Placement partners
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlacementStatistics;