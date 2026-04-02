import React, { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('submitting')
        
        setTimeout(() => {
            setStatus('success')
            setEmail('')
            setTimeout(() => setStatus('idle'), 3000)
        }, 1000)
    }

    return (
        <div className="relative bg-[#ffffff05] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
            <div className="absolute -left-32 -top-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 font-bold text-xs uppercase tracking-widest text-accent">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Weekly intel
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Stay 10x Ahead.</h3>
                    <p className="text-gray-400 font-medium leading-relaxed mb-0">
                        Get curated tutorials, tools, and community updates delivered straight to your inbox. No spam, just value.
                    </p>
                </div>
                
                <div className="relative">
                    {status === 'success' ? (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center animate-in fade-in duration-500">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-400 rounded-full mb-3">✓</div>
                            <h4 className="text-xl font-bold text-green-400 mb-1">Access Granted</h4>
                            <p className="text-green-400/80 text-sm font-medium">You're now on the priority list.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative group/input">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-50 blur transition-opacity duration-500"></div>
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address..." 
                                    required
                                    className="relative w-full px-6 py-5 bg-[#030712]/50 backdrop-blur-xl border border-white/10 rounded-2xl text-white font-medium focus:outline-none placeholder-gray-500 shadow-inner transition-all"
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full sm:w-auto px-8 py-5 bg-white text-[#030712] rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-200 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex justify-center items-center gap-3"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-[#030712] border-t-transparent rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Subscribe Now 
                                        <span className="text-lg">➜</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
