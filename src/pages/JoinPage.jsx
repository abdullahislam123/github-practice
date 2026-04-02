import React, { useState } from 'react'

export default function JoinPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Frontend Developer',
        intent: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            setIsSubmitted(true)
            setFormData({ name: '', email: '', role: 'Frontend Developer', intent: '' })
            setTimeout(() => setIsSubmitted(false), 5000)
        }, 800)
    }

    return (
        <div className="min-h-screen bg-[#030712] flex flex-col relative overflow-hidden font-sans">
            {/* Advanced Background Gradients & Textures */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 pointer-events-none"></div>
            
            {/* Dynamic Orbs */}
            <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none"></div>
            <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
            <div className="fixed top-[40%] right-[20%] w-[30vw] h-[30vw] bg-purple-600/15 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full relative z-10">
                
                {/* Hero Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-gray-300 font-bold uppercase tracking-[0.2em] text-xs">Accepting New Members</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-400">Movement.</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Connect with 5000+ ambitious developers. Build your network, accelerate your learning, and shape the future of tech.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                    
                    {/* Left Column: Premium Social Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-accent"></span> Quick Connect
                        </h2>
                        
                        {/* Discord Premium Card */}
                        <a href="#" className="group relative bg-[#ffffff05] backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(88,101,242,0.4)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#5865F2] rounded-full filter blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                                        </svg>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#5865F2]/10 border border-[#5865F2]/20 px-3 py-1.5 rounded-full">
                                        <span className="w-2 h-2 rounded-full bg-[#3BA55C] animate-pulse"></span>
                                        <span className="text-[#5865F2] text-xs font-bold uppercase tracking-widest">2.5k Online</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Discord Server</h3>
                                <p className="text-gray-400 font-medium leading-relaxed mb-6">
                                    Instant answers, pair programming sessions, and voice chat. Welcome to your new virtual office.
                                </p>
                                <div className="mt-auto flex items-center text-white font-bold group-hover:text-[#5865F2] transition-colors">
                                    Launch Discord <span className="ml-2 transform group-hover:translate-x-2 transition-transform">➜</span>
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp Premium Card */}
                        <a href="#" className="group relative bg-[#ffffff05] backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(37,211,102,0.4)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#25D366] rounded-full filter blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1.5 rounded-full">
                                        <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest">Active Community</span>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-3 tracking-tight">WhatsApp Web</h3>
                                <p className="text-gray-400 font-medium leading-relaxed mb-6">
                                    Direct announcements, fast updates, and networking on the go.
                                </p>
                                <div className="mt-auto flex items-center text-white font-bold group-hover:text-[#25D366] transition-colors">
                                    Join Group <span className="ml-2 transform group-hover:translate-x-2 transition-transform">➜</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right Column: Stealth Premium Form */}
                    <div className="lg:col-span-7">
                        <div className="relative bg-[#ffffff03] backdrop-blur-3xl rounded-[40px] p-8 sm:p-12 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] h-full overflow-hidden">
                            {/* Inner Glow Details */}
                            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                            
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Create Profile</h2>
                                <p className="text-gray-400 font-medium mb-10 text-lg">Secure your spot in the official directory.</p>

                                {isSubmitted ? (
                                    <div className="h-[400px] flex flex-col items-center justify-center animate-in zoom-in duration-700">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50 animate-pulse"></div>
                                            <div className="w-24 h-24 bg-gradient-to-tr from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-5xl relative z-10 shadow-2xl">✓</div>
                                        </div>
                                        <h3 className="text-3xl font-black text-white mt-8 mb-3">Welcome Aboard!</h3>
                                        <p className="text-gray-400 font-medium text-center max-w-sm">We've sent an exclusive invite link to your inbox. Get ready to build.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Name Input */}
                                            <div className="relative">
                                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold ${focusedField === 'name' || formData.name ? '-top-3 text-xs text-accent bg-[#030712] px-2 rounded-full' : 'top-4 text-gray-500 tracking-wide'}`}>
                                                    Full Name
                                                </label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('name')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-medium text-white shadow-inner"
                                                />
                                            </div>

                                            {/* Email Input */}
                                            <div className="relative">
                                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold ${focusedField === 'email' || formData.email ? '-top-3 text-xs text-accent bg-[#030712] px-2 rounded-full' : 'top-4 text-gray-500 tracking-wide'}`}>
                                                    Email Address
                                                </label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-medium text-white shadow-inner"
                                                />
                                            </div>
                                        </div>

                                        {/* Role Select */}
                                        <div className="relative">
                                            <label className="absolute -top-3 left-5 text-xs text-accent bg-[#030712] px-2 rounded-full font-bold pointer-events-none z-10 transition-all">
                                                Primary Expertise
                                            </label>
                                            <select 
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('role')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-bold text-white appearance-none cursor-pointer shadow-inner relative z-0"
                                                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238b5cf6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 8l5 5 5-5'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1.2rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                            >
                                                <option value="Frontend Developer" className="bg-gray-900 text-white">Frontend Developer</option>
                                                <option value="Backend Developer" className="bg-gray-900 text-white">Backend Developer</option>
                                                <option value="Full Stack Developer" className="bg-gray-900 text-white">Full Stack Developer</option>
                                                <option value="Mobile Developer" className="bg-gray-900 text-white">Mobile Developer</option>
                                                <option value="UI/UX Designer" className="bg-gray-900 text-white">UI/UX Designer</option>
                                                <option value="DevOps Engineer" className="bg-gray-900 text-white">DevOps Engineer</option>
                                            </select>
                                        </div>

                                        {/* Intent Textarea */}
                                        <div className="relative">
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold ${focusedField === 'intent' || formData.intent ? '-top-3 text-xs text-accent bg-[#030712] px-2 rounded-full z-10' : 'top-4 text-gray-500 tracking-wide z-10'}`}>
                                                What drives you to join?
                                            </label>
                                            <textarea 
                                                name="intent"
                                                value={formData.intent}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('intent')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                rows="3"
                                                className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-medium text-white shadow-inner resize-none relative z-0 mt-1"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button 
                                            type="submit"
                                            className="w-full py-5 relative group overflow-hidden rounded-2xl"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-purple-600 transition-all duration-500 group-hover:scale-105"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            
                                            <span className="relative z-10 flex items-center justify-center gap-3 font-black text-xl text-white tracking-wide">
                                                Initiate Sequence 
                                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                            </span>
                                        </button>
                                        
                                        <div className="text-center pt-2">
                                            <p className="inline-flex items-center gap-2 text-xs text-gray-500 font-medium">
                                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                                SSL Encrypted Registration
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
