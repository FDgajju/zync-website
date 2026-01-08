import { Zap, Shield, HardDrive, Network, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

// Typing effect component
function Typewriter() {
    const [text, setText] = useState('');
    const fullText = "ssh root@production --turbo";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; setText(''); }, 2000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono text-white">{text}<span className="animate-pulse">_</span></span>;
}

export function FeatureGrid() {
    return (
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto space-y-40">

            {/* Feature 1: Performance */}
            <div className="grid md:grid-cols-2 gap-20 items-center group">
                <div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white/10 transition-colors">
                        <Cpu size={24} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Built for speed.<br />
                        <span className="text-muted/60">Every frame matters.</span>
                    </h3>
                    <p className="text-lg text-muted/60 leading-relaxed max-w-md">
                        Built with xterm.js for smooth, responsive terminal rendering. Instant startup, seamless scrolling, and zero lag. Optimized for modern workflows.
                    </p>
                </div>
                <div className="relative h-[400px] flex items-center justify-center">
                    {/* Abstract Performance Viz */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl opacity-20" />
                    <div className="relative w-full max-w-sm aspect-square border border-white/10 rounded-full flex items-center justify-center ring-1 ring-white/5">
                        <div className="w-2/3 h-2/3 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-5xl font-bold font-mono text-white">⚡</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 2: Visual Tunnels */}
            <div className="grid md:grid-cols-2 gap-20 items-center md:flex-row-reverse group">
                <div className="order-2 md:order-1 relative h-[400px] flex items-center justify-center">
                    {/* Abstract Network Viz */}
                    <svg className="w-full h-full max-w-md" viewBox="0 0 400 400">
                        <circle cx="50" cy="200" r="4" fill="#fff" className="animate-pulse" />
                        <circle cx="350" cy="200" r="4" fill="#fff" className="animate-pulse" />
                        <path d="M 50 200 Q 200 100 350 200" fill="none" stroke="currentColor" className="text-white/20" strokeWidth="2" strokeDasharray="4 4" />
                        <path d="M 50 200 Q 200 300 350 200" fill="none" stroke="currentColor" className="text-white/20" strokeWidth="2" strokeDasharray="4 4" />

                        {/* Moving dots */}
                        <circle r="3" fill="#fff">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M 50 200 Q 200 100 350 200" />
                        </circle>
                        <circle r="3" fill="#fff">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 200 Q 200 300 350 200" />
                        </circle>
                    </svg>
                </div>
                <div className="order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white/10 transition-colors">
                        <Network size={24} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Visual Tunnels.<br />
                        <span className="text-muted/60">No more -L 8080.</span>
                    </h3>
                    <p className="text-lg text-muted/60 leading-relaxed max-w-md">
                        Drag, drop, connected. Visualize your port forwards and tunnels in a beautiful interface that makes complex networking feel tangible.
                    </p>
                </div>
            </div>

            {/* Feature 3: Smart Snippets */}
            <div className="grid md:grid-cols-2 gap-20 items-center group">
                <div>
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white/10 transition-colors">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Type less.<br />
                        <span className="text-muted/60">Deploy more.</span>
                    </h3>
                    <p className="text-lg text-muted/60 leading-relaxed max-w-md">
                        Smart snippets let you save complex commands and run them across multiple servers instantly. It's like having a cheat sheet that actually works.
                    </p>
                </div>
                <div className="relative h-[300px] w-full max-w-lg mx-auto bg-[#09090b] border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed overflow-hidden">
                    <div className="flex gap-2 mb-4 opacity-50">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="text-muted">
                        <span className="text-green-500">➜</span> <Typewriter />
                    </div>
                    <div className="mt-4 text-white/50">
                        Deployment started...<br />
                        Building containers...<br />
                        <span className="text-white">✓ App running on port 3000</span>
                    </div>
                </div>
            </div>

            {/* Feature 4: Portable */}
            <div className="grid md:grid-cols-2 gap-20 items-center md:flex-row-reverse group">
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="relative w-64 h-40 border border-white/10 bg-[#09090b] rounded-lg transform -rotate-6 flex items-center justify-center group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                            <Shield size={24} />
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <HardDrive size={32} className="text-white" />
                            <span className="font-mono text-xs text-muted">E:\Zync-Portable</span>
                        </div>
                        {/* Glow */}
                        <div className="absolute -inset-1 bg-white/20 blur-xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity" />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-white/10 transition-colors">
                        <HardDrive size={24} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Simply Portable.<br />
                        <span className="text-muted/60">Zero footprint.</span>
                    </h3>
                    <p className="text-lg text-muted/60 leading-relaxed max-w-md">
                        Put Zync on a USB stick or a cloud folder. It runs entirely self-contained. No registry keys, no hidden files. Your environment, everywhere.
                    </p>
                </div>
            </div>

        </section>
    );
}
