import { Zap, HardDrive, Network, Cpu, FileText } from 'lucide-react';
import { useState, useEffect, type MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

// Typing effect component
function Typewriter() {
    const [text, setText] = useState('');
    const fullText = "ssh root@production --turbo";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                setTimeout(() => { i = 0; setText(''); }, 2000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono text-white">{text}<span className="animate-pulse">_</span></span>;
}

// 3D Tilt Card Wrapper
function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    function handleMouseMove(event: MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="w-full h-full transition-all duration-200 ease-out"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

function FeatureCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/5 overflow-hidden rounded-xl bg-[#09090b] px-8 py-16 shadow-2xl transition-all hover:border-white/10 ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            {/* Subtle inner glow for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative h-full">{children}</div>
        </div>
    );
}

export function FeatureGrid() {
    return (
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Feature 1: Performance (Large) */}
                <FeatureCard className="md:col-span-2 md:row-span-2">
                    <div className="h-full flex flex-col justify-between">
                        <div className="space-y-4 max-w-lg relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors shadow-inner shadow-white/5">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                Native performance.<br />Zero latency.
                            </h3>
                            <p className="text-muted/60 text-lg leading-relaxed">
                                Powered by Tauri and Rust for instant startup and minimal memory footprint. Hand-tuned for responsiveness, ensuring your keystrokes feel immediate.
                            </p>
                        </div>

                        <div className="relative h-[300px] mt-12 flex items-center justify-center overflow-hidden rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-colors">
                            {/* Improved Performance Viz */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Abstract Speed Viz */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />

                                {/* Central Pulse */}
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
                                    <div className="relative w-24 h-24 bg-[#09090b] border border-indigo-500/30 rounded-xl flex items-center justify-center shadow-2xl rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out">
                                        <Zap className="w-10 h-10 text-indigo-400 fill-indigo-400/20" />
                                    </div>
                                    {/* Orbiting particles */}
                                    <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white]" />
                                    </div>
                                    <div className="absolute inset-0 animate-[spin_5s_linear_infinite_reverse] opacity-50">
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs font-mono text-muted/60">
                                    <div className="flex gap-2">
                                        <span className="text-indigo-400">RAM</span> <span>~40MB</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-emerald-400">INIT</span> <span>&lt;100ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeatureCard>

                {/* Feature 2: Visual Tunnels (Tall) */}
                <FeatureCard className="md:row-span-2">
                    <div className="h-full flex flex-col">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors shadow-inner shadow-white/5">
                            <Network size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Visual Tunnels</h3>
                        <p className="text-muted/60 mb-8 leading-relaxed">
                            Drag, drop, connected. Visualize your port forwards and tunnels in a beautiful interface. No more <code className="bg-white/10 px-1 py-0.5 rounded text-white font-mono text-sm">-L 8080</code>.
                        </p>

                        <div className="flex-1 min-h-[200px] relative flex items-center justify-center bg-gradient-to-b from-transparent to-indigo-500/5 rounded-lg border border-white/0 group-hover:border-white/5 transition-all">
                            <svg className="w-full h-full p-4" viewBox="0 0 200 300">
                                {/* Nodes */}
                                <circle cx="100" cy="50" r="6" fill="#6366f1" className="animate-pulse drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                                <text x="120" y="55" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">localhost:3000</text>

                                <circle cx="100" cy="250" r="6" fill="#fff" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                <text x="120" y="255" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="monospace">remote:80</text>

                                {/* Path */}
                                <path d="M 100 50 C 100 150 100 150 100 250" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="6 6" className="opacity-50" />

                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#ffffff" />
                                    </linearGradient>
                                </defs>

                                {/* Moving Packet */}
                                <circle r="4" fill="#fff" filter="url(#glow)">
                                    <animateMotion dur="2s" repeatCount="indefinite" path="M 100 50 C 100 150 100 150 100 250" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                                </circle>
                                <defs>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </FeatureCard>

                {/* Feature 3: Built-in SFTP (1x1) */}
                <FeatureCard className="md:col-span-1">
                    <div className="space-y-4 h-full flex flex-col">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors shadow-inner shadow-white/5">
                            <FileText size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Built-in SFTP</h3>
                        <p className="text-muted/60 text-sm leading-relaxed mb-4">
                            Drag, drop, done. Transfer files smoothly side-by-side.
                        </p>

                        <div className="flex-1 relative bg-[#050505] border border-white/10 rounded-lg p-3 overflow-hidden shadow-inner flex flex-col justify-center gap-2">
                            {/* SFTP Animation */}
                            <div className="flex justify-between items-center px-1">
                                <div className="w-8 h-10 border-2 border-white/10 rounded bg-white/5" />
                                <div className="h-[1px] flex-1 bg-white/10 mx-2 relative">
                                    <motion.div
                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-5 bg-indigo-500 rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                        animate={{
                                            left: ["0%", "80%", "0%"],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>
                                <div className="w-8 h-10 border-2 border-white/10 rounded bg-indigo-500/10" />
                            </div>
                            <div className="flex justify-between text-[8px] font-mono text-muted/40 px-1">
                                <span>LOCAL</span>
                                <span>REMOTE</span>
                            </div>
                        </div>
                    </div>
                </FeatureCard>

                {/* Feature 4: Portable (Wide) */}
                <FeatureCard className="md:col-span-2">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 space-y-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors shadow-inner shadow-white/5">
                                <HardDrive size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Simply Portable</h3>
                            <p className="text-muted/60 text-sm leading-relaxed">
                                Zero footprint. No registry keys. Runs from a USB stick. Your environment, everywhere you go.
                            </p>
                        </div>
                        <div className="relative w-64 h-32 flex items-center justify-center">
                            <TiltCard>
                                <div className="relative w-48 h-24 border border-white/10 bg-gradient-to-br from-[#18181b] to-[#09090b] rounded-lg shadow-2xl flex items-center justify-center group-hover:border-indigo-500/30 transition-colors duration-500">
                                    {/* USB Connector */}
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#27272a] rounded-l border-y border-l border-white/10" />

                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-mono text-xs text-indigo-400/80 font-bold tracking-widest">ZYNC DRIVE</span>
                                        <span className="font-mono text-[10px] text-muted/40">128GB</span>
                                    </div>

                                    {/* LED Indicator */}
                                    <div className="absolute right-3 top-3 w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                </div>
                            </TiltCard>
                            <div className="absolute -inset-10 bg-indigo-500/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    </div>
                </FeatureCard>

            </div>
        </section>
    );
}
