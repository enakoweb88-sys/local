import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const team = [
    {
        name: 'Dr. Amara Enako',
        role: 'Founder & Executive Director',
        bio: 'Amara brings 20 years of expertise in humanitarian logistics and a profound passion for African educational equity.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
    {
        name: 'Kofi Mensah',
        role: 'Director of Programs',
        bio: 'Kofi leads ground operations, ensuring every initiative is culturally aligned and community-driven for maximum impact.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
    {
        name: 'Sarah Johnson',
        role: 'Chief Operations Officer',
        bio: 'Sarah specializes in scaling non-profit impact through strategic partnerships and sustainable resource management globally.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
    {
        name: 'Oluwaseun Adeyemi',
        role: 'Head of Education Initiatives',
        bio: 'A former educator, Oluwaseun leads curriculum innovation and teacher training programs across three distinct regions.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Director of Community Outreach',
        bio: 'Elena bridges international donor relations with local grassroots movements to foster organic, community-driven growth.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
    {
        name: 'David Okoro',
        role: 'Financial Oversight Lead',
        bio: 'David ensures absolute fiscal transparency and ethical management for all foundation grants and operational budgets.',
        img: '/assets/charity/our-expertize-in-action.png',
    },
];

const LeadershipTeam = () => {
    return (
        <section className="px-6 lg:px-20 py-16 lg:py-24 max-w-7xl mx-auto">
            {/* Header */}
            <FadeIn direction="up">
                <div className="flex flex-col gap-4 max-w-3xl mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Governance & Vision</span>
                    <h2 className="text-navy text-4xl lg:text-5xl font-black leading-tight tracking-tight">Our Leadership Team</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Meet the dedicated visionaries driving sustainable change and community development across Africa through transparency, innovation, and local empowerment.
                    </p>
                </div>
            </FadeIn>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                    <FadeIn key={member.name} direction="up" delay={idx * 0.1} fullWidth>
                        <div className="group flex flex-col gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-200 hover:shadow-md h-full">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-navy text-xl font-bold">{member.name}</h3>
                                <p className="text-secondary font-semibold text-sm uppercase tracking-wide">{member.role}</p>
                                <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-2">{member.bio}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* CTA */}
            <FadeIn direction="up">
                <div className="mt-24 py-20 text-center">
                    <h3 className="text-navy text-3xl md:text-4xl font-black mb-4">Join Our Mission</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                        We are always looking for passionate individuals and corporate partners who share our vision for a brighter future in Africa. Let's build something lasting together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/volunteer" className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-secondary text-white font-bold hover:bg-[#00a8ae] transition-all">
                            Get in Touch <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </Link>
                        <Link to="/volunteer" className="flex items-center justify-center rounded-lg h-12 px-8 border-2 border-slate-200 text-navy font-bold hover:bg-slate-50 transition-all">
                            View Careers
                        </Link>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};

export default LeadershipTeam;
