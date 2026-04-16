import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const AnimatedBar = ({ pct, color = '#00C2C7' }: { pct: number; color?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <div ref={ref} className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${pct}%` } : {}}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
            />
        </div>
    );
};

const ImpactDashboard: React.FC = () => {
    const metrics = [
        { label: 'School Outreach Coverage', pct: 86 },
        { label: 'Teacher Programme Uptake', pct: 78 },
        { label: 'Community Water Projects', pct: 91 },
        { label: 'Scholarship Fund Raised', pct: 63 },
    ];

    return (
        <section className="py-24 px-6 md:px-16 bg-transparent overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Text + Stats */}
                    <FadeIn direction="right">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                                <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">
                                    OUR EXPERTISE IN ACTION
                                </span>
                            </div>

                            <h2 className="text-navy text-4xl md:text-5xl font-black leading-tight tracking-tight mb-5">
                                Cameroon Humanitarian Impact —{' '}
                                <span className="text-secondary ">Measurable</span> Change in Real‑Time
                            </h2>

                            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-lg">
                                At Enako Outreach, we track every initiative with rigorous precision. Transparency is the bedrock of our foundation — here's what we're building:
                            </p>

                            <div className="space-y-7">
                                {metrics.map((m, i) => (
                                    <motion.div
                                        key={m.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-navy font-bold text-sm">{m.label}</span>
                                            <span className="text-secondary font-black text-sm">{m.pct}%</span>
                                        </div>
                                        <AnimatedBar pct={m.pct} />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    to="/impact"
                                    className="px-8 py-4 bg-secondary text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-[#00a8ae] hover:scale-105 transition-all"
                                >
                                    View Full Report
                                </Link>
                                <Link
                                    to="/volunteer"
                                    className="px-8 py-4 border-2 border-secondary text-secondary font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-secondary hover:text-white transition-all"
                                >
                                    Get Involved
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    {/* RIGHT — circular photo + accent shape */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative flex items-center justify-center">
                            {/* Blue accent shape bottom-right */}
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary rounded-tl-[80px] rounded-br-[16px] z-0 translate-x-8 translate-y-8 opacity-20" />

                            {/* Circular image */}
                            <div className="relative z-10 w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden">
                                <img
                                    src="/assets/charity/our-expertize-in-action.png"
                                    alt="Cameroonian children in school"
                                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/assets/charity/our-expertize-in-action.png';
                                    }}
                                />
                            </div>

                            {/* Floating stat card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute top-8 -left-4 md:-left-12 rounded-3xl px-6 py-4 z-20"
                            >
                                <p className="text-secondary text-3xl font-black tracking-tighter">120+</p>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Beneficiaries Target</p>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                                className="absolute bottom-16 -right-4 md:-right-10 rounded-3xl px-6 py-4 z-20"
                            >
                                <p className="text-white text-3xl font-black tracking-tighter">4</p>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Partner Schools</p>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ImpactDashboard;
