import { Terminal, Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-panel/30 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                        <Terminal size={18} className="text-accent" />
                    </div>
                    <span className="font-bold tracking-tight">Zync</span>
                </div>

                {/* Copyright */}
                <div className="text-muted text-sm">
                    © {new Date().getFullYear()} Zync. Open source and free forever.
                </div>

                {/* Socials */}
                <div className="flex items-center gap-6">
                    <a href="#" className="text-muted hover:text-text transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-muted hover:text-text transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
