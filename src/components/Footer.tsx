import { Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050505] py-12 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

                <div className="flex items-center gap-6 text-muted/60">
                    <a href="#" className="hover:text-white transition-colors">Features</a>
                    <a href="#" className="hover:text-white transition-colors">Download</a>
                    <a href="#" className="hover:text-white transition-colors">Changelog</a>
                    <a href="#" className="hover:text-white transition-colors">License</a>
                </div>

                <div className="flex items-center gap-4 text-muted/40">
                    <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                </div>

                <div className="text-muted/20 text-xs">
                    © {new Date().getFullYear()} Zync. Built by builders.
                </div>

            </div>
        </footer>
    );
}
