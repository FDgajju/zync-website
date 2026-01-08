import { Terminal, Github, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-xl border-b border-white/5 transition-all">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo - Minimal Text Only */}
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Terminal size={20} className="text-white" />
                    <span className="font-bold text-lg tracking-tight">Zync</span>
                </Link>

                {/* Links - Subtle & Centered on Desktop */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted/80">
                    <Link to="/#features" className="hover:text-white transition-colors">Features</Link>
                    <Link to="/#themes" className="hover:text-white transition-colors">Themes</Link>
                    <a href="https://github.com/FDgajju/zync#readme" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Docs</a>
                </div>

                {/* CTAs - Minimal Button */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/FDgajju/zync"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted/80 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>

                    <Link to="/download" className={cn(
                        "group flex items-center gap-2 text-sm font-semibold text-white transition-all",
                        "hover:text-white/80"
                    )}>
                        <span>Download</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
