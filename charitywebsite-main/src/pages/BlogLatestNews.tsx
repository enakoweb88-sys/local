import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Rss, Bell } from 'lucide-react';

const latestNews = [
    {
        id: 1,
        date: 'March 28, 2026',
        category: 'Healthcare',
        tag: 'New Initiative',
        title: 'Enako Launches Mobile Health Clinic in Bamenda',
        excerpt: 'Our newest mobile clinic has reached over 500 families in the North West region during its first week of operation, providing free medical screenings and medication.',
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: true,
    },
    {
        id: 2,
        date: 'March 22, 2026',
        category: 'Education',
        tag: 'Milestone',
        title: '8 Scholarships Awarded for the 2026 Academic Year',
        excerpt: 'Enako Outreach celebrates a landmark milestone as 200 deserving students from across Cameroon receive full tuition funding for the 2025–2026 academic year.',
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: false,
    },
    {
        id: 3,
        date: 'March 15, 2026',
        category: 'Clean Water',
        tag: 'Project Update',
        title: 'Borehole Drilling Completed in 3 Littoral Villages',
        excerpt: 'Three communities in the Littoral region now have access to clean, safe drinking water following the completion of our latest infrastructure project.',
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: false,
    },
    {
        id: 4,
        date: 'March 8, 2026',
        category: 'Emergency Relief',
        tag: 'Alert',
        title: 'Emergency Food Distribution Reaches 15 Families in South West',
        excerpt: 'Following a period of acute food insecurity, Enako delivered emergency food packages to 15 families across partner communities in the South West region.',
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: true,
    },
    {
        id: 5,
        date: 'February 28, 2026',
        category: 'Women Support',
        tag: 'Programme',
        title: "Single Mothers Programme Reports Early Livelihood Progress",
        excerpt: "Graduates of our single mothers' skills training programme in Bafoussam are reporting steady early income and business-start progress.",
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: false,
    },
    {
        id: 6,
        date: 'February 20, 2026',
        category: 'Education',
        tag: 'Partnership',
        title: 'New Partnership with Ministry of Basic Education Signed',
        excerpt: 'Enako Outreach formalises a strategic partnership with Cameroon\'s Ministry of Basic Education to jointly support school rehabilitation across three regions.',
        image: '/assets/charity/our-expertize-in-action.png',
        urgent: false,
    },
];

const categoryColors: Record<string, string> = {
    Healthcare: 'bg-red-100 text-red-700',
    Education: 'bg-blue-100 text-blue-700',
    'Clean Water': 'bg-cyan-100 text-cyan-700',
    'Emergency Relief': 'bg-orange-100 text-orange-700',
    'Women Support': 'bg-purple-100 text-purple-700',
    Partnership: 'bg-secondary/20 text-secondary',
};

const BlogLatestNews = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-16 bg-gradient-to-br from-slate-900 to-green-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-2 mb-4">
                            <Rss className="w-4 h-4 text-secondary" />
                            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Live Updates</span>
                        </div>
                        <h1 className="text-white font-black text-5xl md:text-6xl mb-4">Latest News</h1>
                        <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
                            Stay informed on our most recent activities, programmes, and impact across Cameroon.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Breaking banner */}
            <div className="bg-red-600 text-white py-3 px-6">
                <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm font-semibold">
                    <span className="flex items-center gap-1.5 bg-white text-red-600 px-3 py-1 rounded-full text-xs font-black">
                        <Bell className="w-3 h-3" /> URGENT
                    </span>
                    Emergency relief response ongoing in North West Region — <Link to="/donate" className="underline">donate now to help</Link>
                </div>
            </div>

            {/* News Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Featured */}
                    <FadeIn direction="up">
                        <div className="mb-8">
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Top Story</span>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            {latestNews.slice(0, 1).map((post) => (
                                <motion.article
                                    key={post.id}
                                    whileHover={{ y: -4 }}
                                    className="lg:col-span-2 group rounded-3xl overflow-hidden transition-all duration-500"
                                >
                                    <div className="grid md:grid-cols-2">
                                        <div className="relative h-72 md:h-full overflow-hidden">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
                                            {post.urgent && (
                                                <span className="absolute top-4 left-4 px-3 py-1 bg-red-600 text-white text-xs font-black rounded-full">URGENT</span>
                                            )}
                                        </div>
                                        <div className="p-10 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black ${categoryColors[post.category] || 'bg-secondary/20 text-secondary'}`}>
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />{post.date}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-secondary transition-colors">{post.title}</h2>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                                            <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-4 transition-all">
                                                Read Full Story <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Remaining posts */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestNews.slice(1).map((post, i) => (
                            <FadeIn key={post.id} direction="up" delay={i * 0.07}>
                                <motion.article
                                    whileHover={{ y: -4 }}
                                    className="group transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="w-full aspect-square overflow-hidden relative">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        {post.urgent && (
                                            <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black rounded-full">URGENT</span>
                                        )}
                                        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black backdrop-blur-sm ${categoryColors[post.category] || 'bg-green-100 text-green-700'}`}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="text-[12px] text-slate-500 mb-2">{post.date} • {post.tag}</div>
                                        <h3 className="text-slate-900 font-black text-base leading-tight mb-2">
                                            <Link to={`/blog/${post.id}`} className="underline hover:text-green-700">{post.title}</Link>
                                        </h3>
                                    </div>
                                </motion.article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-green-50 border-t border-green-100">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h3 className="font-black text-slate-900 text-2xl mb-3">Stay Updated</h3>
                    <p className="text-slate-500 text-sm mb-6">Get the latest news from Enako Outreach delivered to your inbox.</p>
                    <div className="flex gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200" />
                        <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogLatestNews;

