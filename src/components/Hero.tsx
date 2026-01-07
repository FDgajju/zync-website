import { ArrowRight, ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Hero() {
    const [os, setOs] = useState('Linux');

    useEffect(() => {
        const ua = window.navigator.userAgent;
        if (ua.includes('Win')) setOs('Windows');
        else if (ua.includes('Mac')) setOs('macOS');
        else if (ua.includes('Linux')) setOs('Linux');
    }, []);

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-panel/50 backdrop-blur-sm text-xs font-medium text-muted animate-fade-in">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    v1.0 is now available
                    <ChevronRight size={12} />
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:100ms]">
                    The SSH Client for the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                        21st Century.
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 animate-fade-in [animation-delay:200ms]">
                    Stop fighting with config files. Manage servers, tunnels, and snippets in a beautiful, high-performance native interface.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in [animation-delay:300ms]">
                    <Link to="/download" className={cn(
                        "h-12 px-8 rounded-lg bg-white text-black font-semibold transition-all",
                        "hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]",
                        "flex items-center gap-2"
                    )}>
                        Download for {os}
                        <ArrowRight size={18} />
                    </Link>
                    <a href="https://github.com/FDgajju/zync#readme" target="_blank" rel="noreferrer" className="h-12 px-8 rounded-lg border border-border bg-panel/50 hover:bg-panel hover:text-white text-muted transition-all font-medium flex items-center justify-center">
                        View Documentation
                    </a>
                </div>

                {/* App Screenshot Visualization */}
                <div className="mt-20 w-full max-w-5xl relative animate-fade-in [animation-delay:500ms]">

                    {/* Glow behind screenshot */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent rounded-xl blur-xl opacity-50" />

                    {/* Mock Window */}
                    <div className="relative rounded-xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden aspect-[16/10] group">

                        {/* Fake Window Controls */}
                        <div className="h-10 bg-panel/50 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>

                        {/* Mock Content (Abstract Representation of App) */}
                        <div className="flex h-full">
                            {/* Sidebar */}
                            <div className="w-64 border-r border-white/5 p-4 flex flex-col gap-4">
                                <div className="h-6 w-24 bg-white/5 rounded" />
                                <div className="space-y-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
                                            <div className="w-8 h-8 bg-black/40 rounded" />
                                            <div className="h-2 w-16 bg-white/10 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Area */}
                            <div className="flex-1 p-6 relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                    <TerminalIcon size={120} className="text-white/10" />
                                </div>
                                <div className="font-mono text-sm text-muted">
                                    <span className="text-accent">➜</span> <span className="text-white">~</span> ssh production-server<br />
                                    <span className="text-green-400">Connected to production-server (192.168.1.45)</span><br />
                                    <br />
                                    <span className="text-white">root@prod:~$</span> <span className="animate-pulse">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
