import { Apple, Monitor, Laptop, Download, Copy, Check, Cpu, Zap, Command } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

export function DownloadPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-accent/10 to-transparent blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
                <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full" />
            </div>

            {/* Header Area */}
            <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono font-bold mb-6 tracking-wider uppercase animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    System Ready • v1.0.0
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 animate-fade-in [animation-delay:100ms]">
                    Choose Your <br />
                    <span className="text-white">Interface.</span>
                </h1>

                <p className="text-xl text-muted max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
                    Native performance on every dimension. Zync is optimized for the metal you run.
                </p>
            </div>

            {/* Platform Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full relative z-10">

                {/* macOS Card */}
                <PlatformCard
                    title="macOS"
                    icon={Apple}
                    desc="Built for Apple Silicon"
                    sub="Universal Binary • macOS 11+"
                    gradient="from-gray-500/20 to-gray-500/5"
                    delay="300ms"
                >
                    <div className="mt-8 space-y-3">
                        <DownloadButton label="Download for Mac" />
                        <div className="flex items-center justify-center gap-4 text-xs text-muted font-mono">
                            <span className="flex items-center gap-1"><Command size={10} /> Universal</span>
                            <span className="flex items-center gap-1"><Cpu size={10} /> Metal API</span>
                        </div>
                    </div>
                </PlatformCard>

                {/* Windows Card */}
                <PlatformCard
                    title="Windows"
                    icon={Monitor}
                    desc="Fluid & Native"
                    sub="Windows 10/11 • x64/ARM64"
                    gradient="from-blue-500/20 to-blue-500/5"
                    delay="400ms"
                >
                    <div className="mt-8 space-y-3">
                        <DownloadButton label="Download for Windows" />
                        <div className="flex items-center justify-center gap-4 text-xs text-muted font-mono">
                            <span className="flex items-center gap-1"><Zap size={10} /> GPU Accel</span>
                            <span className="flex items-center gap-1"><Monitor size={10} /> DirectX</span>
                        </div>
                    </div>
                </PlatformCard>

                {/* Linux Card */}
                <PlatformCard
                    title="Linux"
                    icon={Laptop}
                    desc="The Hacker's Choice"
                    sub="Debian • Arch • Fedora"
                    gradient="from-accent/20 to-accent/5"
                    delay="500ms"
                    featured
                >
                    <div className="mt-6">
                        <div className="relative group/term cursor-text">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-500 rounded-lg blur opacity-20 group-hover/term:opacity-40 transition-opacity" />
                            <div className="relative bg-[#09090b] border border-white/10 rounded-lg p-4 font-mono text-sm text-muted flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <span className="text-accent">$</span>
                                    <div className="flex-1 whitespace-nowrap overflow-x-auto scrollbar-hide">
                                        <span className="text-accent">curl</span> -fsSL https://raw.githubusercontent.com/FDgajju/zync-website/main/public/install.sh | sh
                                    </div>
                                    <div className="flex-shrink-0">
                                        <CopyButton text="curl -fsSL https://raw.githubusercontent.com/FDgajju/zync-website/main/public/install.sh | sh" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <a href="https://github.com/FDgajju/zync/releases" className="text-xs text-muted hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5" target="_blank" rel="noreferrer">
                                    View Tarballs & Packages
                                </a>
                            </div>
                        </div>
                    </div>
                </PlatformCard>

            </div>

        </div>
    );
}

function PlatformCard({ title, icon: Icon, desc, sub, gradient, children, delay, featured }: any) {
    return (
        <div className={cn(
            "relative group rounded-3xl p-1",
            "bg-gradient-to-b from-white/10 to-transparent",
            "hover:from-white/20 hover:to-white/5 transition-all duration-500",
            "animate-fade-in fill-mode-backwards"
        )} style={{ animationDelay: delay }}>

            <div className={cn(
                "absolute inset-0 bg-gradient-to-b rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                gradient
            )} />

            <div className="relative h-full bg-panel/80 backdrop-blur-xl rounded-[1.4rem] p-8 border border-white/5 flex flex-col items-center text-center overflow-hidden">
                {/* Top Shine */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Icon Container */}
                <div className={cn(
                    "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                    featured ? "bg-accent/10 text-accent shadow-[0_0_30px_-5px_var(--color-accent)]" : "bg-white/5 text-white/70"
                )}>
                    <Icon size={40} strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className="text-lg font-medium text-white/90 mb-1">{desc}</p>
                <p className="text-sm text-muted mb-6">{sub}</p>

                <div className="w-full mt-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

function DownloadButton({ label }: { label: string }) {
    return (
        <button className={cn(
            "w-full h-12 rounded-xl bg-white text-black font-bold transition-all",
            "hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
            "flex items-center justify-center gap-2"
        )}>
            <Download size={18} />
            {label}
        </button>
    )
}

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-white/10 text-muted hover:text-white transition-colors"
        >
            {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
    );
}
