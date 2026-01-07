import { Terminal, Github, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                        <Terminal size={18} className="text-accent" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Zync</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
                    <Link to="/#features" className="hover:text-text transition-colors">Features</Link>
                    <Link to="/#themes" className="hover:text-text transition-colors">Themes</Link>
                    <a href="https://github.com/FDgajju/zync#readme" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">Docs</a>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/gajendra/ssh-ui"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-muted hover:text-text transition-colors"
                    >
                        <Github size={20} />
                    </a>

                    <Link to="/download" className={cn(
                        "group relative px-4 py-2 rounded-lg bg-white text-black font-semibold text-sm transition-all",
                        "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
                        "flex items-center gap-2"
                    )}>
                        <span>Download</span>
                        <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
