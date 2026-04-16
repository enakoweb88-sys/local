import FadeIn from './FadeIn';

const ImpactHero = () => {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden pt-20">
            {/* Background Image with Gradient Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Modern sustainable school building in a vibrant rural African community"
                    className="h-full w-full object-cover"
                    src="/assets/charity/our-expertize-in-action.png"
                />
                <div className="absolute inset-0 bg-navy/60 dark:bg-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
                <FadeIn direction="up">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-secondary text-secondary text-xs font-bold uppercase tracking-widest">
                            <span className="size-2 rounded-full bg-secondary animate-pulse"></span>
                            Impact Report 2024
                        </div>
                        <h1 className="text-navy dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                            Measuring Change. <br />
                            <span className="text-secondary">Sharing Progress.</span>
                        </h1>
                        <p className="text-navy dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                            A premium humanitarian foundation dedicated to elevating education and sustainable community development across the African continent.
                        </p>
                    </div>
                </FadeIn>

                {/* Impact Stats Strip (Floating) */}
                <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-auto">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="grid grid-cols-2 md:flex gap-8 md:gap-16 p-8 bg-white dark:bg-background-dark backdrop-blur-xl rounded-2xl shadow-2xl border border-white">
                            <div>
                                <p className="text-secondary text-3xl font-black">8</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Schools Planned</p>
                            </div>
                            <div className="border-l border-slate-200 dark:border-slate-700 pl-8 md:pl-16">
                                <p className="text-secondary text-3xl font-black">120+</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Students Goal</p>
                            </div>
                            <div className="hidden md:block border-l border-slate-200 dark:border-slate-700 pl-16">
                                <p className="text-secondary text-3xl font-black">1</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">Nation Served</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ImpactHero;
