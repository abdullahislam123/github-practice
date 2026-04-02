import React, { useState } from 'react'

export default function JoinPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Frontend Developer',
        intent: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true)
            setFormData({ name: '', email: '', role: 'Frontend Developer', intent: '' })
            setTimeout(() => setIsSubmitted(false), 5000)
        }, 800)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative overflow-hidden">
            {/* Background Decorations */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-primary-900 -z-10 rounded-b-[100px] sm:rounded-b-[200px]"></div>
            <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-accent/30 rounded-full filter blur-[100px] -z-10 animate-pulse"></div>
            <div className="fixed top-40 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full filter blur-[100px] -z-10" style={{ animationDelay: '2s' }}></div>

            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                        <span className="text-white font-black tracking-widest text-sm uppercase">Welcome to Codrithm</span>
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                        Let's Build the <br className="hidden sm:block" /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent">Future Together</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                        Join 5000+ developers learning, building, and growing. Connect on your favorite platforms or register directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left Column: Community Links */}
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-3xl font-black text-white lg:text-gray-900 mb-8 drop-shadow-md lg:drop-shadow-none">Quick Connect</h2>
                        
                        {/* Discord Card */}
                        <a href="#" className="group block relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5865F2]/10 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="w-16 h-16 bg-[#5865F2]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-[#5865F2] transition-colors">Discord Server</h3>
                                    <p className="text-gray-600 font-medium mb-3">Join the daily conversation. Code help, voice channels, and live streaming.</p>
                                    <p className="text-[#5865F2] font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 bg-[#3BA55C] rounded-full inline-block"></span>
                                        2.5k Online
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp Card */}
                        <a href="#" className="group block relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full filter blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-[#25D366] transition-colors">WhatsApp Community</h3>
                                    <p className="text-gray-600 font-medium mb-3">Quick updates, event announcements, and regional chapters.</p>
                                    <p className="text-[#25D366] font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                        Active Daily
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Right Column: Registration Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-[40px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
                            {/* Form Decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-accent/10 rounded-full filter blur-3xl -mt-20 -mr-20"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Create Your Profile</h2>
                                <p className="text-gray-500 font-medium mb-10">Sign up in seconds to unlock all community benefits.</p>

                                {isSubmitted ? (
                                    <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-10 text-center animate-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg shadow-green-500/30">✓</div>
                                        <h3 className="text-3xl font-black text-gray-900 mb-4">Welcome Aboard!</h3>
                                        <p className="text-gray-600 font-medium text-lg">Your profile has been created. Check your email for the next steps.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary-600 focus:bg-white transition-colors font-medium text-gray-900 placeholder-gray-400"
                                                    placeholder="Alex Developer"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Email Address</label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary-600 focus:bg-white transition-colors font-medium text-gray-900 placeholder-gray-400"
                                                    placeholder="alex@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Primary Role</label>
                                            <select 
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary-600 focus:bg-white transition-colors font-medium text-gray-900 appearance-none cursor-pointer"
                                                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 8l5 5 5-5'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                            >
                                                <option value="Frontend Developer">Frontend Developer</option>
                                                <option value="Backend Developer">Backend Developer</option>
                                                <option value="Full Stack Developer">Full Stack Developer</option>
                                                <option value="UI/UX Designer">UI/UX Designer</option>
                                                <option value="Student / Beginner">Student / Beginner</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-900 uppercase tracking-widest">Why do you want to join?</label>
                                            <textarea 
                                                name="intent"
                                                value={formData.intent}
                                                onChange={handleChange}
                                                required
                                                rows="3"
                                                className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary-600 focus:bg-white transition-colors font-medium text-gray-900 placeholder-gray-400 resize-none"
                                                placeholder="I want to learn, collaborate, and contribute..."
                                            ></textarea>
                                        </div>

                                        <button 
                                            type="submit"
                                            className="w-full py-5 bg-gradient-to-r from-primary-600 to-accent text-white rounded-2xl font-black text-xl hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] transform hover:-translate-y-1 transition-all duration-300"
                                        >
                                            Complete Registration 🚀
                                        </button>
                                        
                                        <p className="text-center text-sm text-gray-500 font-medium">
                                            By registering, you agree to our <a href="#" className="text-primary-600 hover:underline">Community Guidelines</a>.
                                        </p>
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
