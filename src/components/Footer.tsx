import { Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050505] py-16 text-center relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">

                {/* Logo */}
                <div className="flex items-center gap-2 opacity-50">
                    <span className="font-bold text-lg tracking-tight text-white">Zync</span>
                </div>

                <div className="flex items-center gap-8 text-sm text-muted/60 font-medium">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#themes" className="hover:text-white transition-colors">Themes</a>
                    <a href="/download" className="hover:text-white transition-colors">Download</a>
                    <a href="https://github.com/FDgajju/zync" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="flex items-center gap-6 text-muted/40 mt-4">
                    <a href="https://github.com/FDgajju/zync" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                </div>

                <div className="text-muted/20 text-xs mt-8 font-mono">
                    © {new Date().getFullYear()} Zync. Licensed under MIT.
                </div>

            </div>
        </footer>
    );
}
