import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STAFF = [
    {
        name: 'Kavita Rao',
        role: 'Head of Admissions',
        department: 'Administration',
        email: 'admissions@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
        name: 'Arjun Nair',
        role: 'Finance & Accounts Officer',
        department: 'Administration',
        email: 'accounts@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
    {
        name: 'Priya Sharma',
        role: 'Student Support Coordinator',
        department: 'Administration',
        email: 'support@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
        name: 'Vikram Iyer',
        role: 'Academic Coordinator, BIM',
        department: 'Academics',
        email: 'bim.academics@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
        name: 'Meera Pillai',
        role: 'Academic Coordinator, Digital Marketing',
        department: 'Academics',
        email: 'dm.academics@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
        name: 'Rohan Das',
        role: 'Examinations & Records Officer',
        department: 'Academics',
        email: 'exams@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
    {
        name: 'Sneha Kulkarni',
        role: 'Placement Officer',
        department: 'Training & Placement',
        email: 'placements@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    },
    {
        name: 'Karthik Menon',
        role: 'Employer Relations Officer',
        department: 'Training & Placement',
        email: 'employers@miit.ac.in',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
];

const DEPARTMENTS = ['All', 'Administration', 'Academics', 'Training & Placement'];

const SectionHeading = ({ eyebrow, title, center }) => (
    <div className={`max-w-2xl mb-12 ${center ? 'mx-auto text-center' : ''}`}>
        <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1E3D47]">{title}</h2>
    </div>
);

const AdministrativeStaff = () => {
    const [activeDept, setActiveDept] = useState('All');

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

    const filteredStaff = activeDept === 'All' ? STAFF : STAFF.filter((s) => s.department === activeDept);

    return (
        <div className="bg-white text-gray-900">

            {/* ── PAGE INTRO ── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10 md:pt-20">
                <div className="flex items-center gap-2 text-[12.5px] text-gray-400 mb-8">
                    <Link to="/" className="hover:text-[#356575] transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/administration/organization-chart" className="hover:text-[#356575] transition-colors">Administration</Link>
                    <span>/</span>
                    <span className="text-[#356575]">Administrative Staff</span>
                </div>

                <span className="text-[11px] tracking-[0.15em] uppercase text-[#356575] font-medium">Administration</span>
                <h1
                    className="text-[#1E3D47] leading-[1.12] mt-2 mb-6 text-[36px] md:text-[46px] max-w-2xl"
                    style={{ fontFamily: "'Chevalier LP W00 Regular', serif", fontWeight: 400 }}
                >
                    The staff running things day to day.
                </h1>
                <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-xl">
                    From admissions to placements, here's who to reach out to for
                    what — and how to contact them directly.
                </p>
            </section>

            {/* ── QUICK FACTS ── */}
            <section className="bg-[#356575]">
                <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/15">
                    {[
                        { value: String(STAFF.length), label: 'Administrative staff' },
                        { value: '3', label: 'Departments' },
                        { value: '< 48 hrs', label: 'Typical response time' },
                        { value: 'Mon–Sat', label: 'Office hours' },
                    ].map(({ value, label }) => (
                        <div key={label} className="text-center px-4 py-2">
                            <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
                            <p className="text-[11px] text-white/60 uppercase tracking-wider mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── STAFF DIRECTORY ── */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <SectionHeading eyebrow="Directory" title="Meet the team" />

                {/* Department filter */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {DEPARTMENTS.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveDept(dept)}
                            className={`px-4 py-2 rounded-lg text-[13px] font-medium border transition-colors
                                ${activeDept === dept
                                    ? 'bg-[#356575] border-[#356575] text-white'
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-[#356575]/40 hover:text-[#356575]'
                                }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredStaff.map(({ name, role, department, email, photo }) => (
                        <div
                            key={name}
                            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#356575]/30 hover:shadow-md transition-all"
                        >
                            <img
                                src={photo}
                                alt={name}
                                className="w-full h-48 object-cover grayscale-[15%] group-hover:grayscale-0 transition-all"
                            />
                            <div className="p-5">
                                <span className="inline-block text-[10px] tracking-[0.08em] uppercase text-[#356575] bg-[#eaf4f7] px-2.5 py-1 rounded-full font-medium mb-2.5">
                                    {department}
                                </span>
                                <h3 className="text-[14.5px] font-bold text-[#1E3D47]">{name}</h3>
                                <p className="text-gray-500 text-[12.5px] mt-0.5 mb-3">{role}</p>

                                <a
                                    href={`mailto:${email}`}
                                    className="text-[12px] text-[#356575] font-medium hover:text-[#1E3D47] transition-colors break-all"
                                >
                                    {email}
                                </a>
                        </div>
                        </div>
                    ))}
                </div>

                {filteredStaff.length === 0 && (
                    <p className="text-gray-400 text-[13.5px] text-center py-12">
                        No staff listed under this department yet.
                    </p>
                )}
            </section>

            {/* ── CTA BANNER ── */}
            <section
                className="relative bg-cover bg-center py-20"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80')` }}
            >
                <div className="absolute inset-0 bg-[#1E3D47]/90" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Can't find the right person?
                    </h2>
                    <p className="text-white/60 text-[15px] mb-8 leading-relaxed">
                        Send us a general enquiry and we'll route it to the right department.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-[#356575] hover:bg-[#4D8A9E] text-white font-medium text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            to="/administration/organization-chart"
                            className="border border-white/30 hover:border-white/60 text-white text-[14px] px-8 py-3 rounded-lg transition-colors"
                        >
                            Organization chart
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AdministrativeStaff;