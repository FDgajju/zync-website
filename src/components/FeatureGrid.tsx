import { Terminal, Network, FileText, Zap, Shield, Sparkles } from 'lucide-react';

export function FeatureGrid() {
    return (
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Everything you need,<br />
                    <span className="text-muted">nothing you don't.</span>
                </h2>
                <p className="text-xl text-muted max-w-2xl">
                    We stripped away the bloat and focused on what matters: raw performance, reliability, and a developer experience that gets out of your way.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1: Smart Terminal (Large) */}
                <div className="md:col-span-2 rounded-3xl border border-white/5 bg-panel/50 p-8 hover:border-white/10 transition-colors group">
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                        <Terminal size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Smart Terminal</h3>
                    <p className="text-muted text-lg mb-8">
                        Powered by xterm.js with GPU acceleration. Tabs, split panes, and instant search (Ctrl+F) built right in.
                    </p>
                    <div className="h-48 rounded-xl bg-bg border border-white/5 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-muted/50 select-none">
                            [Interactive Terminal Preview]
                         </div>
                    </div>
                </div>

                {/* Card 2: Visual Tunnels */}
                <div className="rounded-3xl border border-white/5 bg-panel/50 p-8 hover:border-white/10 transition-colors">
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                        <Network size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Visual Tunnels</h3>
                    <p className="text-muted">
                        Forget `ssh -L`. Manage local and remote port forwarding with a simple, visual interface.
                    </p>
                </div>

                {/* Card 3: Snippets */}
                <div className="rounded-3xl border border-white/5 bg-panel/50 p-8 hover:border-white/10 transition-colors">
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Smart Snippets</h3>
                    <p className="text-muted">
                        Save your most used commands. Run them on any server with a single click. Variable support coming soon.
                    </p>
                </div>

                {/* Card 4: SFTP (Large) */}
                <div className="md:col-span-2 rounded-3xl border border-white/5 bg-panel/50 p-8 hover:border-white/10 transition-colors">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Drag & Drop SFTP</h3>
                            <p className="text-muted text-lg mb-6">
                                Upload files to your server just by dragging them into the window. Built-in file manager for quick edits.
                            </p>
                             <ul className="space-y-2 text-muted">
                                <li className="flex items-center gap-2"><Shield size={16} /> Secure by default</li>
                                <li className="flex items-center gap-2"><Sparkles size={16} /> Resume capability</li>
                            </ul>
                        </div>
                        <div className="flex-1 h-48 rounded-xl bg-bg border border-white/5 relative overflow-hidden">
                            {/* Abstract File List */}
                            <div className="p-4 space-y-2 opacity-50">
                                <div className="h-4 w-3/4 bg-white/10 rounded" />
                                <div className="h-4 w-1/2 bg-white/10 rounded" />
                                <div className="h-4 w-5/6 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
