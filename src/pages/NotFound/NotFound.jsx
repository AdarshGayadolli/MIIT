import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SITE_MAP = [
    { to: '/', label: 'Home', zone: 'A-01' },
    { to: '/about', label: 'About Us', zone: 'A-02' },
    { to: '/admissions', label: 'Admissions', zone: 'B-01' },
    { to: '/departments/bim-construction', label: 'BIM for Construction', zone: 'C-01' },
    { to: '/departments/digital-marketing', label: 'Digital Marketing', zone: 'C-02' },
    { to: '/contact', label: 'Contact', zone: 'D-01' },
];

const NotFound = () => {
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
        <div className="relative bg-[#0F2229] text-white min-h-[calc(100vh-52px)] overflow-hidden flex flex-col">

            <style>{`
                @keyframes swing {
                    0%, 100% { transform: rotate(-2.5deg); }
                    50% { transform: rotate(2.5deg); }
                }
                @keyframes swingSlow {
                    0%, 100% { transform: rotate(2deg); }
                    50% { transform: rotate(-2deg); }
                }
                @keyframes beacon {
                    0%, 100% { opacity: 0.3; box-shadow: 0 0 8px 2px rgba(245,166,35,0.4); }
                    50% { opacity: 1; box-shadow: 0 0 22px 8px rgba(245,166,35,0.85); }
                }
                @keyframes driftUp {
                    0% { transform: translateY(0); opacity: 0; }
                    10% { opacity: 0.5; }
                    100% { transform: translateY(-260px); opacity: 0; }
                }
                @keyframes tapeShift {
                    0% { background-position: 0 0; }
                    100% { background-position: 80px 0; }
                }
                .pivot-l { transform-origin: top left; animation: swing 3.6s ease-in-out infinite; }
                .pivot-c { transform-origin: top center; animation: swingSlow 4.2s ease-in-out infinite; }
                .pivot-r { transform-origin: top right; animation: swing 3.9s ease-in-out infinite reverse; }
            `}</style>

            {/* ── Hazard tape strip, top ── */}
            <div
                className="h-6 w-full shrink-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #F5A623 0 14px, #1E3D47 14px 28px)',
                    animation: 'tapeShift 3s linear infinite',
                }}
            />

            {/* ── Ambient dust / grid ── */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#7AAFC0 1px, transparent 1px), linear-gradient(90deg, #7AAFC0 1px, transparent 1px)',
                    backgroundSize: '46px 46px',
                }}
            />
            {[...Array(10)].map((_, i) => (
                <span
                    key={i}
                    className="absolute rounded-full bg-[#7AAFC0]/30 pointer-events-none"
                    style={{
                        width: `${4 + (i % 3) * 2}px`,
                        height: `${4 + (i % 3) * 2}px`,
                        left: `${8 + i * 9}%`,
                        bottom: '10%',
                        animation: `driftUp ${5 + (i % 4)}s linear infinite`,
                        animationDelay: `${i * 0.6}s`,
                    }}
                />
            ))}

            {/* ── Content ── */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16">

                <div className="flex items-center gap-2 mb-8">
                    <span
                        className="w-3 h-3 rounded-full bg-[#F5A623]"
                        style={{ animation: 'beacon 1.4s ease-in-out infinite' }}
                    />
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#F5A623] font-semibold">
                        Site notice — Error 404
                    </span>
                </div>

                {/* ── Crane rig ── */}
                <svg viewBox="0 0 600 60" className="w-full max-w-xl h-auto mb-1" fill="none">
                    <line x1="10" y1="10" x2="590" y2="10" stroke="#7AAFC0" strokeWidth="3" />
                    <line x1="10" y1="10" x2="10" y2="55" stroke="#7AAFC0" strokeWidth="3" />
                    <line x1="590" y1="10" x2="590" y2="55" stroke="#7AAFC0" strokeWidth="3" />
                    <line x1="10" y1="10" x2="60" y2="55" stroke="#7AAFC0" strokeWidth="2" opacity="0.5" />
                    <line x1="590" y1="10" x2="540" y2="55" stroke="#7AAFC0" strokeWidth="2" opacity="0.5" />
                    <circle cx="150" cy="10" r="4" fill="#F5A623" />
                    <circle cx="300" cy="10" r="4" fill="#F5A623" />
                    <circle cx="450" cy="10" r="4" fill="#F5A623" />
                </svg>

                {/* ── Suspended 404 blocks ── */}
                <div className="flex items-start gap-6 md:gap-10 mb-4">
                    {[
                        { char: '4', pivot: 'pivot-l' },
                        { char: '0', pivot: 'pivot-c' },
                        { char: '4', pivot: 'pivot-r' },
                    ].map(({ char, pivot }, i) => (
                        <div key={i} className={`flex flex-col items-center ${pivot}`}>
                            <div className="w-px h-8 md:h-12 bg-[#7AAFC0]/60" />
                            <div
                                className="w-20 h-24 md:w-28 md:h-32 rounded-lg flex items-center justify-center border-2 border-[#F5A623]/40 shadow-lg"
                                style={{
                                    background: 'linear-gradient(145deg, #1E3D47, #14262c)',
                                }}
                            >
                                <span
                                    className="text-[56px] md:text-[76px] leading-none text-white"
                                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                                >
                                    {char}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-white text-center mt-6 mb-4">
                    This section's still under construction.
                </h1>
                <p className="text-white/50 text-[15px] leading-relaxed max-w-lg text-center mb-10">
                    The page you're after has either been moved off the plan or hasn't
                    broken ground yet. No hard hat required to turn back — just pick a
                    real destination below.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-14">
                    <Link
                        to="/"
                        className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                    >
                        Back to home
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-white/20 hover:border-white/50 text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                    >
                        Report this link
                    </Link>
                </div>

                {/* ── Site notice board ── */}
                <div className="w-full max-w-3xl bg-[#14262c] border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                        <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-medium">
                            Site map — approved routes
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {SITE_MAP.map(({ to, label, zone }) => (
                            <Link
                                key={to}
                                to={to}
                                className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-[#356575] border border-white/5 hover:border-[#356575] rounded-lg px-4 py-3 transition-colors"
                            >
                                <span className="text-[13px] font-medium text-white/80 group-hover:text-white transition-colors">
                                    {label}
                                </span>
                                <span className="text-[10px] font-mono text-[#F5A623]/70 group-hover:text-white/70 transition-colors">
                                    {zone}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── Hazard tape strip, bottom ── */}
            <div
                className="h-6 w-full shrink-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(-45deg, #F5A623 0 14px, #1E3D47 14px 28px)',
                    animation: 'tapeShift 3s linear infinite',
                }}
            />
        </div>
    );
};

export default NotFound;