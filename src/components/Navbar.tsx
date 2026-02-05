import { Terminal, Github, ArrowRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [stars, setStars] = useState<string>('1.2k');

    useEffect(() => {
        fetch('https://api.github.com/repos/FDgajju/zync')
            .then(res => res.json())
            .then(data => {
                const count = data.stargazers_count;
                if (count > 1000) {
                    setStars((count / 1000).toFixed(1) + 'k');
                } else {
                    setStars(count.toString());
                }
            })
            .catch(() => {
                // Fallback to default on error
                setStars('1.2k');
            });
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5 transition-all supports-[backdrop-filter]:bg-[#050505]/30">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo - Minimal Text Only */}
                <Link to="/" className="group flex items-center gap-2 hover:opacity-100 transition-opacity">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Terminal size={20} className="text-white relative z-10" />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">Zync</span>
                </Link>

                {/* Links - Subtle & Centered on Desktop */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted/60">
                    <Link to="/#features" className="hover:text-white transition-colors">Features</Link>
                    <Link to="/#themes" className="hover:text-white transition-colors">Themes</Link>
                    <Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link>
                    <a href="https://github.com/FDgajju/zync#readme" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Docs</a>
                </div>

                {/* CTAs - Minimal Button */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/FDgajju/zync"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden sm:flex items-center gap-2 bg-[#27272a]/50 hover:bg-[#27272a] border border-white/5 rounded-full px-3 py-1.5 transition-all group"
                    >
                        <Github size={16} className="text-muted group-hover:text-white transition-colors" />
                        <span className="text-xs font-medium text-muted/80 group-hover:text-white transition-colors">Star us</span>
                        <div className="w-px h-3 bg-white/10 mx-1" />
                        <Star size={12} className="text-muted/60 group-hover:text-amber-400 transition-colors" fill="currentColor" />
                        <span className="text-xs font-mono text-muted/60 group-hover:text-white/80 transition-colors">{stars}</span>
                    </a>

                    <div className="h-6 w-px bg-white/5 hidden sm:block" />

                    <Link to="/download" className={cn(
                        "group flex items-center gap-2 text-sm font-semibold text-white/90 transition-all",
                        "hover:text-white"
                    )}>
                        <span>Download</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5 text-muted/60 group-hover:text-white" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
