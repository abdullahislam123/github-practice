import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

export default function AboutPage() {
    const purposes = [
        {
            icon: '🎯',
            title: 'Our Purpose',
            description: 'Codrithm is built to empower developers of all levels to learn, collaborate, and grow together in a supportive community environment.'
        },
        {
            icon: '💡',
            title: 'Why We Created It',
            description: 'We recognized that learning to code can be overwhelming and lonely. We created Codrithm to provide a welcoming space where beginners feel supported and experienced developers can mentor and contribute.'
        },
    ]

    const audience = [
        {
            icon: '🚀',
            title: 'For Beginners',
            subtitle: 'Just Starting Your Journey',
            benefits: [
                'Structured learning paths',
                'Beginner-friendly resources',
                'Mentorship from experienced developers',
                'Support from a welcoming community'
            ]
        },
        {
            icon: '⭐',
            title: 'For Developers',
            subtitle: 'Advancing Your Skills',
            benefits: [
                'Advanced technical discussions',
                'Networking opportunities',
                'Contribute to open-source projects',
                'Share knowledge and mentor others'
            ]
        },
    ]

    const achievements = [
        {
            icon: '📚',
            title: 'Master New Technologies',
            description: 'Keep up with the latest frameworks, tools, and programming languages through curated courses and workshops.'
        },
        {
            icon: '🤝',
            title: 'Build Real Projects',
            description: 'Collaborate on real-world projects with team members from around the world and build your portfolio.'
        },
        {
            icon: '💼',
            title: 'Career Advancement',
            description: 'Get job-ready with interview prep, portfolio reviews, and direct connections with hiring partners.'
        },
        {
            icon: '🎓',
            title: 'Earn Certifications',
            description: 'Complete courses and earn industry-recognized certifications to validate your skills.'
        },
        {
            icon: '🌍',
            title: 'Global Network',
            description: 'Connect with thousands of developers worldwide, share experiences, and build lasting professional relationships.'
        },
        {
            icon: '💪',
            title: 'Personal Growth',
            description: 'Build confidence in your abilities through hands-on learning, feedback, and supportive community interactions.'
        },
    ]

    return (
        <div className="min-h-screen bg-[#030712] font-sans">
            {/* Ambient Backgrounds */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 md:py-48 overflow-hidden">
                <div className="absolute inset-0 z-0 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/10 rounded-full filter blur-[200px] pointer-events-none"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">The Vision Statement</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Codrithm</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        A community dedicated to empowering developers of all levels to succeed through learning, collaboration, and mutual support.
                    </p>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-16 text-white tracking-tight">
                        Our Story
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {purposes.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-[#ffffff03] backdrop-blur-xl p-10 rounded-[32px] border border-white/5 hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.3)] transition-all duration-500 overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 filter blur-[40px] transition-opacity duration-500"></div>
                                <div className="relative z-10 text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block drop-shadow-xl">{item.icon}</div>
                                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-32 relative z-10">
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-blue-500/10 rounded-full filter blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Target Audience</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                            Who It's For
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {audience.map((group, index) => (
                            <div
                                key={index}
                                className="group bg-[#ffffff03] backdrop-blur-3xl p-10 lg:p-12 rounded-[40px] border border-white/5 hover:border-white/20 shadow-2xl transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative z-10">
                                    <div className="text-6xl mb-6 group-hover:animate-pulse inline-block">{group.icon}</div>
                                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                                        {group.title}
                                    </h3>
                                    <p className="text-lg tracking-widest text-accent font-bold uppercase mb-8">
                                        {group.subtitle}
                                    </p>
                                    <ul className="space-y-4">
                                        {group.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent font-bold mr-4 flex-shrink-0 mt-0.5">✓</span>
                                                <span className="text-gray-300 text-lg font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Members Can Learn & Achieve */}
            <section className="py-32 relative z-10 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            What You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Achieve</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-medium">Unlock your full potential with our proven framework.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {achievements.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#ffffff03] backdrop-blur-xl p-8 rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-accent/20 transition-colors shadow-lg">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sub/Join CTA Section integrated beautifully */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full filter blur-[150px] pointer-events-none -z-10"></div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">
                        Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Movement?</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 text-gray-400 font-medium max-w-2xl mx-auto">
                        Start your journey today and connect with thousands of developers who are passionate about scaling their skills.
                    </p>
                    <Link to="/join" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-blue-500 to-purple-600 rounded-2xl font-black text-white text-xl shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                        Join Community Now ➜
                    </Link>
                </div>
            </section>
        </div>
    )
}
