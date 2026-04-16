import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const programs = [
  {
    id: '01',
    name: 'Scholarships',
    desc: 'Full and partial scholarships for primary, secondary, and university students from low-income families across Cameroon.',
    href: '/programs/scholarships',
    image: '/assets/charity/scholarship.png',
  },
  {
    id: '02',
    name: 'Clean Water Initiative',
    desc: 'Installing boreholes, water purification systems and sanitation infrastructure in water-scarce communities.',
    href: '/programs/clean-water-initiative',
    image: '/assets/charity/clean-water-initiative.png',
  },
  {
    id: '03',
    name: 'Teacher Rewards',
    desc: 'Recognising and rewarding dedicated teachers with financial grants and professional development across all regions.',
    href: '/programs/teacher-rewards',
    image: '/assets/charity/teacher-rewards.png',
  },
  {
    id: '04',
    name: 'Community Health Support',
    desc: 'Mobile health clinics, medication supply, and preventive care campaigns reaching thousands of families quarterly.',
    href: '/programs/community-health-support',
    image: '/assets/charity/community-health-support.png',
  },
  {
    id: '05',
    name: 'Single Mothers Assistance',
    desc: 'Empowering single mothers and widows with micro-grants, skills training, trauma support, and childcare assistance.',
    href: '/programs/single-mothers-assistance',
    image: '/assets/charity/single-mothers-assistance.png',
  },
  {
    id: '06',
    name: 'Youth Empowerment',
    desc: 'Leadership training, vocational skills, and entrepreneurship programmes for youth aged 15-35 across Cameroon.',
    href: '/programs/youth-empowerment',
    image: '/assets/charity/youth-empowerment.png',
  },
];

const ProgramsGrid = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <FadeIn direction="right" className="max-w-xl">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">What We Do</span>
            <h2 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Our Programs
              <span className="block text-secondary">in Cameroon</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" className="max-w-sm">
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Six targeted programs designed to create lasting change in the communities that need it most.
            </p>
            <Link to="/programs" className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-4 transition-all">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <FadeIn key={program.id} delay={i * 0.08} direction="up">
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                <Link to={program.href} className="group relative block overflow-hidden transition-all duration-500 h-[360px]">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl font-black mb-2">{program.name}</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-4">{program.desc}</p>
                    <span className="inline-flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                      Explore Program <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
