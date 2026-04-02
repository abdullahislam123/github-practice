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
        color: 'from-blue-600 to-primary-600'
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
        color: 'from-gray-900 to-gray-700'
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
        color: 'from-green-600 to-primary-600'
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-24 sm:pt-32 md:pt-48 pb-20 bg-primary-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full filter blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-600 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-8 py-3 bg-accent/20 border border-accent/40 rounded-full mb-10 backdrop-blur-sm">
                        <span className="text-white font-black tracking-widest text-sm uppercase">Your Hub of Excellence</span>
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                        Master Your Craft with <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Codrithm Resources</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12 italic">
                        "Structured learning for developers. Find the best tutorials, tools, and repositories in one place."
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto relative group">
                        <input 
                            type="text" 
                            placeholder="Search tutorials, AI tools, or repositories..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-10 py-6 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white rounded-[30px] font-bold text-xl placeholder-gray-400 focus:outline-none focus:border-accent focus:bg-white/15 transition-all shadow-2xl"
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-accent text-3xl group-hover:scale-110 transition-transform">🔍</div>
                    </div>
                </div>
            </section>

            {/* Category Filter and Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
                <div className="flex flex-col items-center mb-20 text-center">
                    <div className="flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-xl p-5 rounded-[40px] border border-white shadow-2xl overflow-x-auto max-w-full">
                        {categories.map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                                    activeCategory === cat 
                                        ? 'bg-primary-900 text-white shadow-xl transform scale-105' 
                                        : 'text-gray-500 hover:text-primary-600 hover:bg-gray-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {filteredResources.map((res) => (
                            <div 
                                key={res.id}
                                className="group bg-white rounded-[40px] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 relative overflow-hidden"
                            >
                                {/* Card Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${res.color} opacity-5 group-hover:opacity-10 rounded-full filter blur-3xl transition-opacity duration-500`}></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${res.color} flex items-center justify-center text-4xl text-white mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        {res.icon}
                                    </div>
                                    <span className={`inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-gray-100 text-gray-500 mb-6 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors`}>
                                        {res.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors">
                                        {res.title}
                                    </h3>
                                    <p className="text-gray-600 font-medium leading-relaxed mb-10 flex-grow">
                                        {res.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <a 
                                            href={res.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="font-black text-primary-600 hover:text-accent flex items-center gap-2 group/link"
                                        >
                                            Explore <span className="transform group-hover/link:translate-x-2 transition-transform">➜</span>
                                        </a>
                                        <span className={`px-4 py-1.5 bg-gradient-to-r ${res.color} text-white font-black text-[10px] uppercase rounded-lg shadow-md`}>
                                            {res.status}
                                        </span>
                                    </div>
                                </div>
                                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${res.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40">
                        <p className="text-4xl text-gray-400 font-black mb-8 italic">No resources found for "{searchQuery}"</p>
                        <button 
                            onClick={() => {setSearchQuery(''); setActiveCategory('All')}}
                            className="px-10 py-4 bg-primary-900 text-white rounded-2xl font-black text-lg hover:shadow-2xl transition-all"
                        >
                            Reset Exploration
                        </button>
                    </div>
                )}
            </section>

            {/* Platform Benefits Highlighted Section */}
            <section className="bg-white py-32 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-50 rounded-full filter blur-[150px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-10 leading-tight">Structured Like the Best Platforms. Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Developers.</span></h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                                We've analyzed the best learning platforms like W3Schools and MDN to bring you a hand-picked selection of high-quality tutorials and tools that actually matter in modern web development.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: 'Quality over Quantity', desc: 'No fluff. Only the resources that we use ourselves.' },
                                    { title: 'Regular Updates', desc: 'Tech evolves fast. So does our repository.' },
                                    { title: 'Always Free', desc: 'Access all internal guides and external links at 0 cost.' }
                                ].map((item, id) => (
                                    <div key={id} className="flex gap-6">
                                        <div className="w-10 h-10 bg-accent text-white rounded-xl flex items-center justify-center font-black flex-shrink-0 shadow-lg">✓</div>
                                        <div>
                                            <h4 className="text-xl font-black text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-[50px] filter blur-3xl transform group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="relative bg-white/60 backdrop-blur-2xl rounded-[50px] p-10 border border-white shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center text-center">
                                <div className="text-[120px] mb-8 group-hover:rotate-12 transition-transform duration-700">📚</div>
                                <div className="absolute inset-0 flex items-center justify-center -z-10 text-[180px] opacity-5">W3S</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section provided by Footer/Layout */}
        </div>
    )
}
