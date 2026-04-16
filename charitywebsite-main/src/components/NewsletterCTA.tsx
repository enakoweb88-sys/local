import { Send, Mail } from 'lucide-react';
import FadeIn from './FadeIn';

const NewsletterCTA = () => {
    return (
        <section className="bg-transparent py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] bg-navy p-12 md:p-20 overflow-hidden shadow-2xl">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <FadeIn direction="right">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                    <Mail className="w-3 h-3" /> Stay Updated
                                </span>
                                <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6">
                                    Insights from the <br />
                                    <span className="text-secondary ">Frontlines.</span>
                                </h2>
                                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                    Subscribe to receive our monthly impact reports, community stories, and humanitarian bulletins directly in your inbox.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="w-full max-w-md">
                            <FadeIn direction="left" delay={0.2}>
                                <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full h-20 pl-8 pr-32 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-secondary focus:bg-white/10 transition-all text-lg font-medium"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-3 top-3 bottom-3 px-8 rounded-xl bg-secondary text-[#001F5B] font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-secondary/20 flex items-center gap-2"
                                    >
                                        Join <Send className="w-4 h-4" />
                                    </button>
                                </form>
                                <p className="mt-4 text-[10px] font-black text-slate-500 uppercase tracking-widest text-center lg:text-left ">
                                    * We respect your privacy. Unsubscribe anytime.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
