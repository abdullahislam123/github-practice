import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'

const teamMembers = [
    {
        name: 'Alex Rivera',
        role: 'Founder',
        description: 'Visionary leader with a passion for building inclusive developer communities.',
        avatar: 'AR',
        links: {
            linkedin: '#',
            github: '#'
        },
        color: 'from-blue-600 to-accent'
    },
    {
        name: 'Jordan Smith',
        role: 'Community Manager',
        description: 'Dedicated to fostering engagement and supporting every member of our community.',
        avatar: 'JS',
        links: {
            linkedin: '#',
            github: '#'
        },
        color: 'from-accent to-pink-500'
    },
    {
        name: 'Sarah Chen',
        role: 'Technical Mentor',
        description: 'Expert developer helping others master modern web technologies and best practices.',
        avatar: 'SC',
        links: {
            linkedin: '#',
            github: '#'
        },
        color: 'from-green-500 to-primary-600'
    },
    {
        name: 'Mike Johnson',
        role: 'Event Organizer',
        description: 'Master of coordination, bringing developers together through impactful workshops and meetups.',
        avatar: 'MJ',
        links: {
            linkedin: '#',
            github: '#'
        },
        color: 'from-yellow-400 to-orange-500'
    },
    {
        name: 'Elena Rodriguez',
        role: 'Content Creator',
        description: 'Crafting high-quality learning materials that make complex topics easy to understand.',
        avatar: 'ER',
        links: {
            linkedin: '#',
            github: '#'
        },
        color: 'from-purple-500 to-accent'
    }
]

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gray-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 md:py-40 bg-primary-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-6 py-2 bg-accent/20 border border-accent/40 rounded-full mb-8 backdrop-blur-sm">
                        <span className="text-white font-bold tracking-wider">OUR VISIONARIES</span>
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Brilliant Minds</span> Behind Codrithm
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        We're a diverse group of developers, creators, and community builders dedicated to empowering the next generation of tech talent.
                    </p>
                    <div className="flex justify-center gap-8">
                        <div className="text-white">
                            <p className="text-4xl font-black">5+</p>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Dedicated Leads</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700"></div>
                        <div className="text-white">
                            <p className="text-4xl font-black">5000+</p>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Global Members</p>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Team Grid Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white/80 backdrop-blur-xl rounded-[40px] p-10 border border-white shadow-2xl hover:shadow-primary-600/10 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${member.color} opacity-10 rounded-full filter blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Avatar */}
                                <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl font-black text-white shadow-xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {member.avatar}
                                </div>
                                
                                {/* Info */}
                                <h3 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <span className={`inline-block px-6 py-1.5 rounded-full text-sm font-black uppercase tracking-widest bg-gradient-to-r ${member.color} text-white mb-6 shadow-md`}>
                                    {member.role}
                                </span>
                                
                                <p className="text-gray-600 leading-relaxed font-medium mb-10 min-h-[4.5rem]">
                                    {member.description}
                                </p>
                                
                                {/* Social Links */}
                                <div className="flex gap-6 mt-auto">
                                    <a 
                                        href={member.links.linkedin} 
                                        className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md group/link"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={member.links.github} 
                                        className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md group/link"
                                        aria-label={`${member.name}'s GitHub`}
                                    >
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Decorative Bottom Bar */}
                            <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${member.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl -translate-y-1/2 -ml-40 opacity-50"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -translate-y-1/2 -mr-40 opacity-50"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6">Our Driven Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium italic">"Community first, always. We believe in the power of shared knowledge and collective growth."</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🤝', title: 'Collaboration', desc: 'Working together is our greatest strength.' },
                            { icon: '💡', title: 'Innovation', desc: 'Constantly pushing the boundaries of technology.' },
                            { icon: '🌍', title: 'Inclusivity', desc: 'A welcoming space for everyone, everywhere.' },
                            { icon: '📚', title: 'Education', desc: 'Empowering through high-quality learning.' }
                        ].map((value, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary-200 transition-all duration-300">
                                <div className="text-5xl mb-6">{value.icon}</div>
                                <h4 className="text-xl font-black text-gray-900 mb-2">{value.title}</h4>
                                <p className="text-gray-600 font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="relative py-32 sm:py-40 md:py-48 bg-primary-900 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-10 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-black text-sm uppercase tracking-[0.2em]">Become a Part of Us</span>
                    </div>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-12 leading-[1.1]">
                        Inspired to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-accent to-purple-400">Join the Mission?</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                        We're always looking for visionary creators, talented developers, and community leaders to help shape the future of Codrithm.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        <button className="px-12 py-6 bg-white text-primary-900 rounded-2xl font-black text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:scale-110 transition-all duration-300 shadow-2xl">
                            Open Positions ➜
                        </button>
                        <button className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/10 backdrop-blur-md transform hover:scale-110 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
                
                {/* Background glow effects */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full filter blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px] translate-x-1/4 translate-y-1/4" style={{ animationDelay: '3s' }}></div>
            </section>

            {/* SEO Head Tags handled by metadata/react-helmet if needed, but adding semantic tags here */}
        </div>
    )
}
