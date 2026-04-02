import React from 'react'
import { Link } from 'react-router-dom'

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
        color: 'from-accent to-pink-600'
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
        color: 'from-teal-500 to-blue-600'
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
        color: 'from-purple-500 to-accent'
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
        color: 'from-pink-500 to-purple-600'
    }
]

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-[#030712] overflow-hidden font-sans">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 md:py-48 overflow-hidden z-10">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">Our Visionaries</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                        Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-400">Brilliant Minds</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-16">
                        We're a diverse group of developers, creators, and community builders dedicated to empowering the next generation of tech talent.
                    </p>
                    <div className="flex justify-center gap-12 sm:gap-24">
                        <div className="text-center group">
                            <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-accent group-hover:to-white transition-all duration-500 mb-2">5+</p>
                            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Core Leads</p>
                        </div>
                        <div className="w-[1px] h-20 bg-white/10"></div>
                        <div className="text-center group">
                            <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-accent group-hover:to-white transition-all duration-500 mb-2">5k+</p>
                            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Global Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-[#ffffff03] backdrop-blur-3xl rounded-[40px] p-10 border border-white/5 shadow-2xl hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.3)] transition-all duration-500 hover:-translate-y-4 overflow-hidden flex flex-col"
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-20 rounded-full filter blur-[60px] transition-opacity duration-700 pointer-events-none`}></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                                {/* Avatar */}
                                <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center text-5xl font-black text-white shadow-xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ring-2 ring-white/10 ring-offset-4 ring-offset-[#030712]`}>
                                    {member.avatar}
                                </div>
                                
                                {/* Info */}
                                <h3 className="text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {member.name}
                                </h3>
                                <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${member.color} mb-6 shadow-md`}>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{member.role}</span>
                                </div>
                                
                                <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-grow">
                                    {member.description}
                                </p>
                                
                                {/* Social Links */}
                                <div className="flex gap-4 mt-auto w-full justify-center">
                                    <a 
                                        href={member.links.linkedin} 
                                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5] text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] group/link"
                                        aria-label={`${member.name}'s LinkedIn`}
                                    >
                                        <svg className="w-6 h-6 fill-current group-hover/link:scale-110 transition-transform" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={member.links.github} 
                                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white text-gray-400 hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group/link"
                                        aria-label={`${member.name}'s GitHub`}
                                    >
                                        <svg className="w-6 h-6 fill-current group-hover/link:scale-110 transition-transform" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Decorative Bottom Bar */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 relative z-10 border-t border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Our Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Values</span></h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">"Community first, always. We believe in the power of shared knowledge and collective growth."</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🤝', title: 'Collaboration', desc: 'Working together is our greatest strength.' },
                            { icon: '💡', title: 'Innovation', desc: 'Constantly pushing the boundaries of technology.' },
                            { icon: '🌍', title: 'Inclusivity', desc: 'A welcoming space for everyone, everywhere.' },
                            { icon: '📚', title: 'Education', desc: 'Empowering through high-quality learning.' }
                        ].map((value, idx) => (
                            <div key={idx} className="group p-10 rounded-[32px] bg-[#ffffff03] backdrop-blur-md border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{value.icon}</div>
                                <h4 className="text-2xl font-black text-white mb-3">{value.title}</h4>
                                <p className="text-gray-400 font-medium leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Team CTA */}
            <section className="relative py-40 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-accent/5 to-[#030712]"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/10 rounded-full filter blur-[150px] pointer-events-none -z-10"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                        Shape the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-accent to-purple-400">Future.</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-12">
                        We're always looking for visionary creators, talented developers, and community leaders.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/join" className="px-10 py-5 bg-white text-[#030712] rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 transition-all duration-300">
                            Apply for Core Team ➜
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
