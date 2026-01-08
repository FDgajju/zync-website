import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Hero() {
    const [os, setOs] = useState('Linux');
    const [activeTab, setActiveTab] = useState('terminal');

    useEffect(() => {
        const ua = window.navigator.userAgent;
        if (ua.includes('Win')) setOs('Windows');
        else if (ua.includes('Mac')) setOs('macOS');
        else if (ua.includes('Linux')) setOs('Linux');
    }, []);

    return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-[#050505]">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">

                {/* Heading */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 animate-fade-in text-white leading-[0.9]">
                    SSH, reimagined<br />
                    for <span className="text-muted">modern devs.</span>
                </h1>

                {/* Subtext */}
                <p className="text-xl md:text-2xl text-muted/60 max-w-2xl mb-12 animate-fade-in [animation-delay:100ms] leading-relaxed">
                    Modern terminal with tabs & search. Visual tunnel manager. Truly portable. <br />
                    Everything you need in one beautiful interface.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in [animation-delay:200ms] mb-24">
                    <Link to="/download" className={cn(
                        "h-12 px-8 rounded-full bg-white text-black font-semibold text-lg transition-all",
                        "hover:bg-white/90 hover:scale-105 active:scale-95",
                        "flex items-center gap-2"
                    )}>
                        Download Zync
                        <ArrowRight size={18} />
                    </Link>
                    <div className="text-muted/40 text-sm font-mono">
                        v1.3.0 for {os}
                    </div>
                </div>

                {/* App Screenshot - Terminal/Files View */}
                <div className="w-full max-w-6xl relative animate-fade-in [animation-delay:400ms]">

                    {/* Window Container */}
                    <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_100px_-20px_rgba(255,255,255,0.1)] overflow-hidden aspect-[16/10] flex flex-col text-left">
                        {/* Custom Titlebar */}
                        <div className="bg-[#0a0a0a] border-b border-white/5 flex items-center h-10 px-4 justify-between shrink-0">
                            {/* Left: Window Controls */}
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-[#ff5f56] transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-[#ffbd2e] transition-colors" />
                                    <div className="w-3 h-3 rounded-full bg-[#333] hover:bg-[#27c93f] transition-colors" />
                                </div>
                            </div>

                            {/* Center: Title */}
                            <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-muted/60">
                                Local Terminal
                            </div>

                            {/* Right */}
                            <div className="w-10" />
                        </div>

                        {/* Main Content Area */}
                        <div className="flex flex-1 overflow-hidden bg-[#0a0a0a]">

                            {/* Sidebar - Hosts */}
                            <div className="w-48 md:w-64 border-r border-white/5 bg-[#080808] flex flex-col">
                                {/* Sidebar Header */}
                                <div className="p-3 border-b border-white/5">
                                    <div className="text-xs font-semibold text-muted/40 uppercase tracking-wider mb-2">Hosts</div>
                                    <div className="text-xs text-muted/60">EXPLORER</div>
                                </div>

                                {/* Host List */}
                                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                                    {/* Active Host */}
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#5b8dff]/10 border border-[#5b8dff]/20 text-white cursor-pointer">
                                        <div className="text-[#5b8dff] text-xs">▶</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium truncate">Local Terminal</div>
                                            <div className="text-xs text-muted/60 truncate">This Computer</div>
                                        </div>
                                    </div>

                                    {/* Other Hosts */}
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-muted/60 cursor-pointer transition-colors">
                                        <div className="text-xs opacity-0">▶</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium truncate">Production Server</div>
                                            <div className="text-xs truncate">ubuntu@prod.example.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-muted/60 cursor-pointer transition-colors">
                                        <div className="text-xs opacity-0">▶</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-medium truncate">Dev Environment</div>
                                            <div className="text-xs truncate">dev@staging.local</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Footer */}
                                <div className="p-3 border-t border-white/5">
                                    <button className="w-full px-3 py-1.5 text-xs font-medium text-[#5b8dff] hover:bg-white/5 rounded-md transition-colors">
                                        + Add Host
                                    </button>
                                </div>
                            </div>

                            {/* Main Panel - Terminal or Files */}
                            <div className="flex-1 flex flex-col">
                                {/* Tabs */}
                                <div className="flex items-center gap-1 px-4 py-2 border-b border-white/5 bg-[#080808]">
                                    <button
                                        onClick={() => setActiveTab('terminal')}
                                        className={cn(
                                            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                                            activeTab === 'terminal' ? "bg-white/5 text-[#5b8dff]" : "text-muted/60 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        Terminal
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('files')}
                                        className={cn(
                                            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                                            activeTab === 'files' ? "bg-white/5 text-[#5b8dff]" : "text-muted/60 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        Files
                                    </button>
                                    <div className="px-3 py-1.5 text-xs font-medium text-muted/40 rounded-md hover:text-muted/60 hover:bg-white/5 transition-colors cursor-pointer">
                                        Dashboard
                                    </div>
                                    <div className="px-3 py-1.5 text-xs font-medium text-muted/40 rounded-md hover:text-muted/60 hover:bg-white/5 transition-colors cursor-pointer">
                                        Tunnels
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex-1 relative overflow-hidden">
                                    {activeTab === 'terminal' ? (
                                        // Terminal View
                                        <div className="absolute inset-0 p-4 md:p-6 font-mono text-sm text-white/90">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-green-500">➜</span>
                                                    <span className="text-blue-400">~</span>
                                                    <span className="text-white/60">ssh root@production</span>
                                                </div>
                                                <div className="text-muted/60 text-xs">Connecting to production.example.com...</div>
                                                <div className="text-green-500 text-xs">✓ Connected successfully</div>
                                                <div className="mt-4 flex items-center gap-2">
                                                    <span className="text-yellow-500">➜</span>
                                                    <span className="text-purple-400">/var/www/app</span>
                                                    <span className="text-white">git status</span>
                                                </div>
                                                <div className="text-muted/60 text-xs space-y-1 ml-4">
                                                    <div>On branch main</div>
                                                    <div>Your branch is up to date with 'origin/main'.</div>
                                                    <div className="text-green-500">nothing to commit, working tree clean</div>
                                                </div>
                                                <div className="mt-4 flex items-center gap-2">
                                                    <span className="text-yellow-500">➜</span>
                                                    <span className="text-purple-400">/var/www/app</span>
                                                    <span className="animate-pulse">_</span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Files View (SFTP)
                                        <div className="absolute inset-0 flex flex-col">
                                            {/* File Browser Header */}
                                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#080808]">
                                                <div className="text-[#5b8dff] text-xs">🏠</div>
                                                <div className="text-sm font-mono text-muted/60">/home/gajendra</div>
                                            </div>

                                            {/* File Grid */}
                                            <div className="flex-1 overflow-y-auto p-4">
                                                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                                                    {/* Folders */}
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📁</div>
                                                        <div className="text-xs text-white/80 truncate w-full text-center">Desktop</div>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📁</div>
                                                        <div className="text-xs text-white/80 truncate w-full text-center">Documents</div>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📁</div>
                                                        <div className="text-xs text-white/80 truncate w-full text-center">Work</div>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📁</div>
                                                        <div className="text-xs text-white/80 truncate w-full text-center">.ssh</div>
                                                    </div>
                                                    {/* Files */}
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📄</div>
                                                        <div className="text-xs text-muted/60 truncate w-full text-center">.bashrc</div>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                                                        <div className="text-2xl">📄</div>
                                                        <div className="text-xs text-muted/60 truncate w-full text-center">.profile</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Status Bar */}
                                <div className="h-6 px-4 flex items-center justify-between text-xs border-t border-white/5 bg-[#080808]">
                                    <div className="text-muted/40">Ready</div>
                                    <div className="text-muted/40">
                                        {activeTab === 'terminal' ? 'bash' : '6 items'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
