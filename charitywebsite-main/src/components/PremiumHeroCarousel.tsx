import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ACTION_LINKS } from '../constants/actionLinks';

const slides = [
    {
        image: '/assets/charity/african-primary-school.png',
        tag: 'Education & Opportunity',
        title: 'Empowering Futures Across Cameroon',
        description: 'Enako Outreach delivers scholarships, school rehabilitation, and teacher support to rural and urban communities across Cameroon.',
        cta1: { label: 'Apply for Help', to: ACTION_LINKS.applyHelp },
        cta2: { label: 'Learn More', to: '/programs/scholarships' },
    },
    {
        image: '/assets/charity/teacher-rewards.png',
        tag: 'Teacher Excellence',
        title: 'Rewarding Educators Who Change Lives',
        description: 'We recognise and reward outstanding teachers with grants, training, and professional development throughout Cameroon.',
        cta1: { label: 'Nominate a Teacher', to: '/programs/teacher-rewards' },
        cta2: { label: 'Our Programs', to: '/programs' },
    },
    {
        image: '/assets/charity/community-health-support.png',
        tag: 'Community Action',
        title: 'Building Stronger Communities Together',
        description: 'From clean water access to emergency relief, we uplift entire communities through coordinated, sustainable humanitarian programmes.',
        cta1: { label: 'Donate Now', to: '/donate' },
        cta2: { label: 'Report a Need', to: ACTION_LINKS.reportCase },
    },
];

const PremiumHeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const next = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), []);
    const prev = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), []);

    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
            style={{ backgroundColor: '#001B44' }}
        >
            {/* Main content */}
            <div className="relative z-10 w-full min-h-screen flex items-center">
                <div className="grid lg:grid-cols-2 gap-0 w-full min-h-screen">

                    {/* LEFT — Dark navy text block */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`text-${current}`}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.65, ease: 'easeOut' }}
                            className="flex items-center justify-center p-8 md:p-20 lg:p-32"
                            style={{ backgroundColor: '#001B44' }}
                        >
                            <div className="max-w-xl">
                                <span
                                    className="text-xs font-bold uppercase tracking-[0.32em] block mb-5"
                                    style={{ color: '#00BFA5' }}
                                >
                                    {slide.tag}
                                </span>

                                <h1 className="text-white text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1.05] tracking-tight mb-8">
                                    {slide.title}
                                </h1>

                                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-5">
                                    <Link to={slide.cta1.to} className="btn-pill btn-pill-teal text-base px-10 py-4 shadow-none">
                                        {slide.cta1.label} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link to={slide.cta1.to} className="btn-pill text-base px-10 py-4" style={{ border: '2px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '9999px', fontWeight: 700 }}>
                                        {slide.cta2.label}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* RIGHT — Photo portion */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`img-${current}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="relative h-[50vh] lg:h-full w-full overflow-hidden"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border-2 text-white flex items-center justify-center transition-colors text-base font-bold"
                    style={{ borderColor: 'rgba(0,27,68,0.4)', color: '#001B44' }}
                    aria-label="Previous slide"
                >
                    ‹
                </button>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="transition-all duration-500 rounded-full"
                        style={{
                            width: i === current ? '2.5rem' : '0.75rem',
                            height: '0.75rem',
                            backgroundColor: i === current ? '#001B44' : 'rgba(0,27,68,0.35)',
                        }}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
                <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center transition-colors text-base font-bold"
                    style={{ borderColor: 'rgba(0,27,68,0.4)', color: '#001B44' }}
                    aria-label="Next slide"
                >
                    ›
                </button>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-10 right-12 z-20 text-sm font-bold" style={{ color: 'rgba(0,27,68,0.55)' }}>
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </section>
    );
};

export default PremiumHeroCarousel;
