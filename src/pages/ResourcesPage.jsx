import React, { useState } from 'react'

const resources = [
    {
        id: 1,
        title: 'Modern React Architecture',
        category: 'Web Development',
        icon: '⚛️',
        description: 'Learn how to build scalable React applications from scratch with best practices.',
        link: 'https://react.dev',
        status: 'Must-See',
        color: 'from-blue-500 to-blue-400'
    },
    {
        id: 2,
        title: 'GPT-4 Development Workshop',
        category: 'AI Tools',
        icon: '🤖',
        description: 'Comprehensive guide on integrating LLMs into your web applications.',
        link: 'https://openai.com/api',
        status: 'Trending',
        color: 'from-accent to-purple-400'
    },
    {
        id: 3,
        title: 'The Ultimate GitHub Repo',
        category: 'GitHub',
        icon: '📂',
        description: 'A curated list of free resources, tools, and libraries for web developers.',
        link: 'https://github.com/free-programming-books',
        status: 'Starred',
        color: 'from-gray-400 to-gray-200'
    },
    {
        id: 4,
        title: 'Full-Stack JS Bootcamp',
        category: 'Free Courses',
        icon: '💻',
        description: 'Go from zero to hero in JavaScript, Node.js, and Express with this free course.',
        link: 'https://www.freecodecamp.org',
        status: 'Free',
        color: 'from-orange-500 to-yellow-400'
    },
    {
        id: 5,
        title: 'Advanced Tailwind UI Design',
        category: 'Web Development',
        icon: '🎨',
        description: 'Master the art of creating premium, high-performance UIs using only Tailwind CSS.',
        link: 'https://tailwindcss.com/docs',
        status: 'Best Seller',
        color: 'from-blue-400 to-accent'
    },
    {
        id: 6,
        title: 'AI Image Gen with Stable Diffusion',
        category: 'AI Tools',
        icon: '🌠',
        description: 'Learn how to use AI for high-quality image generation and assets.',
        link: 'https://stability.ai',
        status: 'New',
        color: 'from-pink-500 to-accent'
    },
    {
        id: 7,
        title: 'Top 50 VS Code Extensions',
        category: 'GitHub',
        icon: '⚡',
        description: 'Boost your developer productivity with these essential VS Code plugins.',
        link: 'https://marketplace.visualstudio.com',
        status: 'Highly Rated',
        color: 'from-blue-600 to-blue-400'
    },
    {
        id: 8,
        title: 'Mastering SQL for Data Science',
        category: 'Free Courses',
        icon: '📊',
        description: 'Learn advanced SQL queries and data analysis techniques.',
        link: 'https://modern-sql.com',
        status: 'Trending',
        color: 'from-emerald-500 to-green-400'
    }
]

export default function ResourcesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = ['All', 'Web Development', 'AI Tools', 'GitHub', 'Free Courses']

    const filteredResources = resources.filter(res => {
        const matchesCategory = activeCategory === 'All' || res.category === activeCategory
        const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              res.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="min-h-screen bg-[#030712] flex flex-col font-sans overflow-hidden">
            {/* Global Ambient Background */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 md:py-48 z-10 overflow-hidden text-center">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">Your Hub of Excellence</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                        Master Your Craft with <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Codrithm Resources</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
                        "Structured learning for developers. Find the best tutorials, tools, and repositories in one place."
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-[30px] filter blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <input 
                            type="text" 
                            placeholder="Search tutorials, AI tools, or repositories..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="relative w-full px-10 py-6 bg-[#ffffff05] backdrop-blur-3xl border border-white/10 text-white rounded-[30px] font-bold text-lg sm:text-xl placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-all shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        />
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-accent text-3xl group-hover:scale-110 group-hover:text-blue-400 transition-all cursor-pointer">🔍</div>
                    </div>
                </div>
            </section>

            {/* Category Filter and Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="flex flex-wrap justify-center gap-3 bg-[#ffffff03] backdrop-blur-xl p-3 mt-4 rounded-[40px] border border-white/5 shadow-2xl overflow-x-auto max-w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl pointer-events-none"></div>
                        {categories.map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative z-10 px-8 py-3 rounded-3xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                    activeCategory === cat 
                                        ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredResources.map((res) => (
                            <div 
                                key={res.id}
                                className="group bg-[#ffffff03] backdrop-blur-3xl rounded-[32px] p-8 border border-white/5 hover:border-white/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col"
                            >
                                {/* Card Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${res.color} opacity-0 group-hover:opacity-10 rounded-full filter blur-[40px] transition-opacity duration-500 pointer-events-none`}></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${res.color} flex items-center justify-center text-3xl text-white mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                        {res.icon}
                                    </div>
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-gray-300 mb-6 border border-white/10 group-hover:border-white/30 transition-colors`}>
                                        {res.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors">
                                        {res.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-grow text-sm">
                                        {res.description}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <a 
                                            href={res.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="font-black text-white hover:text-accent flex items-center gap-2 group/link text-sm uppercase tracking-wider"
                                        >
                                            Explore <span className="transform group-hover/link:translate-x-2 transition-transform text-accent">➜</span>
                                        </a>
                                        <span className={`px-4 py-1.5 bg-gradient-to-r ${res.color} text-white font-black text-[9px] tracking-widest uppercase rounded-lg shadow-md`}>
                                            {res.status}
                                        </span>
                                    </div>
                                </div>
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${res.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40 border border-white/5 rounded-[40px] bg-[#ffffff02] backdrop-blur-xl">
                        <div className="text-6xl mb-6 opacity-50">🧭</div>
                        <p className="text-4xl text-gray-400 font-black mb-8">No resources found for "{searchQuery}"</p>
                        <button 
                            onClick={() => {setSearchQuery(''); setActiveCategory('All')}}
                            className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#030712] transition-colors"
                        >
                            Reset Exploration
                        </button>
                    </div>
                )}
            </section>

            {/* Platform Benefits Highlighted Section */}
            <section className="bg-white/[0.02] py-32 overflow-hidden relative border-t border-white/5">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full filter blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-6xl font-black text-white mb-10 leading-tight">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Developers.</span></h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                                We've analyzed the best learning platforms to bring you a hand-picked selection of high-quality tutorials and tools that actually matter in modern web development.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { title: 'Quality over Quantity', desc: 'No fluff. Only the resources that we use ourselves.' },
                                    { title: 'Regular Updates', desc: 'Tech evolves fast. So does our repository.' },
                                    { title: 'Always Free', desc: 'Access all internal guides and external links at 0 cost.' }
                                ].map((item, id) => (
                                    <div key={id} className="flex gap-6 group">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 text-accent rounded-xl flex items-center justify-center font-black flex-shrink-0 shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">✓</div>
                                        <div>
                                            <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                                            <p className="text-gray-400 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-[50px] filter blur-[60px] transform group-hover:scale-105 transition-transform duration-500 pointer-events-none"></div>
                            <div className="relative bg-[#ffffff03] backdrop-blur-2xl rounded-[50px] p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden aspect-[4/3] flex items-center justify-center text-center">
                                <div className="text-[120px] mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 drop-shadow-2xl">📚</div>
                                <div className="absolute inset-0 flex items-center justify-center -z-10 text-[180px] font-black text-white/5">DEV</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
