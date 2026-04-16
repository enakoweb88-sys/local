import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Archive, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const years = [
    {
        year: '2026',
        months: [
            { month: 'March 2026', count: 8, posts: ['Enako Launches Mobile Health Clinic in Bamenda', '8 Scholarships Awarded for 2026 Academic Year', 'Borehole Drilling Completed in 3 Littoral Villages', 'Emergency Food Distribution Reaches 15 Families'] },
            { month: 'February 2026', count: 6, posts: ['Single Mothers Programme Reports Early Livelihood Progress', 'New Partnership with Ministry of Basic Education', 'Youth Empowerment Workshop Graduates 80 Young People'] },
            { month: 'January 2026', count: 5, posts: ['Annual Report 2025 Published', 'Clean Water Reaches 5 New Villages', '2026 Programme Roadmap Announced'] },
        ],
    },
    {
        year: '2025',
        months: [
            { month: 'December 2025', count: 7, posts: ['Year in Review: 120 Lives Touched', 'Christmas Food Donation Drive Success', 'Teacher Awards Ceremony Held in Yaoundé'] },
            { month: 'November 2025', count: 5, posts: ['Healthcare Outreach Reaches Adamawa', 'School Rehabilitation Project Begins in Centre Region'] },
            { month: 'October 2025', count: 6, posts: ['Enako Outreach Officially Registered as NGO', 'First Major Fundraiser Raises XAF 5M'] },
            { month: 'September 2025', count: 4, posts: ['Launch of Single Mothers Programme', 'Back-to-School Supply Distribution'] },
            { month: 'August 2025', count: 3, posts: ['Water Crisis Response in Littoral', 'Partnership with Local Church Networks'] },
        ],
    },
];

const stats = [
    { label: 'Total Articles', value: '16+' },
    { label: 'Categories', value: '6' },
    { label: 'Years Active', value: '2' },
    { label: 'Monthly Updates', value: '5+' },
];

const BlogArchives = () => {
    const [openYear, setOpenYear] = useState<string>('2026');
    const [openMonth, setOpenMonth] = useState<string | null>('March 2026');
    const [search, setSearch] = useState('');

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-2 mb-4">
                            <Archive className="w-4 h-4 text-secondary" />
                            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Article Archive</span>
                        </div>
                        <h1 className="text-white font-black text-5xl md:text-6xl mb-4">Archives</h1>
                        <p className="text-slate-300 text-xl max-w-2xl">Browse our complete library of articles, reports, and updates since founding.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 bg-green-600">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="text-white font-black text-3xl mb-1">{s.value}</div>
                                <div className="text-secondary text-xs font-semibold uppercase tracking-widest">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search + Archive */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    {/* Search */}
                    <FadeIn direction="up">
                        <div className="relative mb-10">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search archived articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full h-14 pl-14 pr-6 rounded-2xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                            />
                        </div>
                    </FadeIn>

                    {/* Year Accordions */}
                    <div className="space-y-4">
                        {years.map((yearGroup) => (
                            <FadeIn key={yearGroup.year} direction="up">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenYear(openYear === yearGroup.year ? '' : yearGroup.year)}
                                        className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center font-black">
                                                {yearGroup.year.slice(-2)}
                                            </div>
                                            <div className="text-left">
                                                <div className="font-black text-slate-900 text-lg">{yearGroup.year}</div>
                                                <div className="text-slate-400 text-xs">
                                                    {yearGroup.months.reduce((a, m) => a + m.count, 0)} articles across {yearGroup.months.length} months
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openYear === yearGroup.year ? 'rotate-180' : ''}`} />
                                    </button>

                                    {openYear === yearGroup.year && (
                                        <div className="border-t border-slate-100 bg-slate-50 p-4 space-y-2">
                                            {yearGroup.months
                                                .filter(m => !search || m.posts.some(p => p.toLowerCase().includes(search.toLowerCase())))
                                                .map((monthGroup) => (
                                                    <div key={monthGroup.month} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                                        <button
                                                            onClick={() => setOpenMonth(openMonth === monthGroup.month ? null : monthGroup.month)}
                                                            className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-green-50 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <Calendar className="w-4 h-4 text-secondary" />
                                                                <span className="font-semibold text-slate-800 text-sm">{monthGroup.month}</span>
                                                                <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-[10px] font-black rounded-full">
                                                                    {monthGroup.count} posts
                                                                </span>
                                                            </div>
                                                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openMonth === monthGroup.month ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {openMonth === monthGroup.month && (
                                                            <div className="border-t border-slate-100 px-5 pb-4 pt-2 space-y-2">
                                                                {monthGroup.posts
                                                                    .filter(p => !search || p.toLowerCase().includes(search.toLowerCase()))
                                                                    .map((post, idx) => (
                                                                        <motion.div
                                                                            key={idx}
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: idx * 0.05 }}
                                                                        >
                                                                            <Link
                                                                                to="/blog/posts"
                                                                                className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-secondary/10 text-slate-600 hover:text-secondary text-sm font-medium transition-colors group"
                                                                            >
                                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                                                {post}
                                                                            </Link>
                                                                        </motion.div>
                                                                    ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Browse All CTA */}
                    <FadeIn direction="up" className="mt-12 text-center">
                        <p className="text-slate-500 text-sm mb-4">Looking for all blog posts?</p>
                        <Link to="/blog/posts" className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors">
                            Browse All Blog Posts
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogArchives;

