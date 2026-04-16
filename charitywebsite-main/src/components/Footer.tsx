import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart } from 'lucide-react';
import { ACTION_LINKS, GOLD_UNDERLINE_LINK_CLASS } from '../constants/actionLinks';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="bg-[#001F5B] pt-28 pb-16 overflow-hidden relative" style={{ fontSize: '200%' }}>
            {/* Green top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
                            <img src="/assets/logo/enako.png" alt="Enako Outreach logo" className="h-28 w-auto object-contain group-hover:scale-105 transition-transform" />
                            <div className="leading-none pt-1">
                                <p className="text-white text-xl md:text-2xl font-black tracking-[0.08em] uppercase">ENAKO OUTREACH</p>
                                <p className="text-[#00C2C7] text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em]">Community Impact Foundation</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            A humanitarian NGO dedicated to transforming communities across Cameroon through education, healthcare, clean water, and social empowerment.
                        </p>
                        {/* Contact info */}
                        <div className="space-y-3">
                            <a href="tel:+237600000000" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <img src="/assets/charity/contact us/phone.png" alt="phone" className="w-8 h-8 object-contain" />
                                +237 600 000 000
                            </a>
                            <a href="mailto:info@enakooutreach.org" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                                <img src="/assets/charity/contact us/email.png" alt="email" className="w-8 h-8 object-contain" />
                                info@enakooutreach.org
                            </a>
                            <div className="flex items-center gap-3 text-slate-400">
                                <img src="/assets/charity/contact us/location.png" alt="location" className="w-8 h-8 object-contain" />
                                Akwa Douala, Cameroon  
                            </div>
                        </div>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {[
                                { src: '/assets/charity/social/facebook.png', href: '#' },
                                { src: '/assets/charity/social/instagram.png', href: '#' },
                                { src: '/assets/charity/social/twitter.png', href: '#' },
                                { src: '/assets/charity/social/Youtube.png', href: '#' },
                            ].map((s, i) => (
                                <a key={i} href={s.href} className="inline-flex items-center">
                                    <img src={s.src} alt="social" className="w-8 h-8 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Organization */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">Organization</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'About Us', href: '/about' },
                                    { label: 'Our Impact', href: '/impact' },
                                    { label: 'Success Stories', href: '/stories' },
                                    { label: 'Blog', href: '/blog' },
                                    { label: 'Partnership', href: '/partnership' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">Programs</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Scholarships', href: '/programs/scholarships' },
                                    { label: 'Clean Water', href: '/programs/clean-water-initiative' },
                                    { label: 'Teacher Rewards', href: '/programs/teacher-rewards' },
                                    { label: 'Health Support', href: '/programs/community-health-support' },
                                    { label: 'Single Mothers', href: '/programs/single-mothers-assistance' },
                                    { label: 'Youth Empowerment', href: '/programs/youth-empowerment' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Communities */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">Communities</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Focus Communities', href: '/focus-communities' },
                                    { label: 'Littoral Region', href: '/focus-communities' },
                                    { label: 'Centre Region', href: '/focus-communities' },
                                    { label: 'North West', href: '/focus-communities' },
                                    { label: 'South West', href: '/focus-communities' },
                                    { label: 'West Region', href: '/focus-communities' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.href} className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group">
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Get Involved */}
                        <div className="space-y-5">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-400">Get Involved</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: 'Donate', href: '/donate' },
                                    { label: 'Volunteer', href: '/get-involved' },
                                    { label: 'Partner With Us', href: '/partnership' },
                                    { label: 'Apply for Scholarship', href: ACTION_LINKS.applyScholarship },
                                    { label: 'Apply for Help', href: ACTION_LINKS.applyHelp },
                                    { label: 'Report a Case', href: ACTION_LINKS.reportCase },
                                    { label: 'Contact Us', href: '/contact' },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.href}
                                            className={`text-sm font-medium transition-colors flex items-center gap-2 group ${
                                                item.label.includes('Apply') || item.label.includes('Report')
                                                    ? GOLD_UNDERLINE_LINK_CLASS
                                                    : 'text-slate-400 hover:text-white'
                                            }`}
                                        >
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Donate Banner */}
                <div className="my-10 rounded-2xl bg-gradient-to-r from-green-700 via-green-600 to-green-700 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-black text-xl mb-1">Transform a Life Today</h3>
                        <p className="text-white text-sm">Your donation directly funds education, healthcare, and clean water for families in Cameroon.</p>
                    </div>
                    <Link to="/donate" className="flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors whitespace-nowrap">
                        <Heart className="w-4 h-4" />
                        Donate Now
                    </Link>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
                    <p className="font-medium">© {new Date().getFullYear()} Enako Outreach. All rights reserved. Akwa Douala, Cameroon .</p>
                    <div className="flex items-center gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
