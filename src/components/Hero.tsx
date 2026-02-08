import { ArrowRight, Search, Terminal as TerminalIcon, Settings, Plus, PanelLeftClose, ChevronDown, X, Cpu, Activity, Wifi, Network } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export function Hero() {
    const [os, setOs] = useState('Linux');

    // Live Stats State
    const [stats, setStats] = useState({ cpu: 12, mem: 42, net: 1.2 });

    useEffect(() => {
        const ua = window.navigator.userAgent;
        if (ua.includes('Win')) setOs('Windows');
        else if (ua.includes('Mac')) setOs('macOS');
        else if (ua.includes('Linux')) setOs('Linux');

        // Stats Simulator
        const interval = setInterval(() => {
            setStats({
                cpu: Math.floor(Math.random() * (45 - 5) + 5),
                mem: Math.floor(Math.random() * (60 - 30) + 30),
                net: Number((Math.random() * (5 - 0.5) + 0.5).toFixed(1))
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // 3D Tilt & Spotlight Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 100 };

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    // Helper for Icon rendering
    const HostIcon = ({ src }: { src: string }) => (
        <img src={`/icons/${src}`} alt="icon" className="w-[14px] h-[14px] object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
    );

    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-[#050505] min-h-[90vh] flex flex-col items-center select-none perspective-[1000px]">
            {/* Spotlight / Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#797bce]/20 blur-[120px] rounded-full pointer-events-none -z-10 opacity-40" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10 w-full">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-[#797bce] bg-[#797bce]/10 border border-[#797bce]/20 rounded-full">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#797bce] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#797bce]"></span>
                        </span>
                        v2.0 is now available
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white leading-[0.9]"
                >
                    SSH, reimagined<br />
                    <span className="text-white/40">for modern devs.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-muted/60 max-w-2xl mb-12 leading-relaxed"
                >
                    Modern terminal with tabs & search. Visual tunnel manager. Truly portable. <br className="hidden md:block" />
                    Everything you need in one beautiful interface.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-center gap-4 mb-24"
                >
                    <Link to="/download" className={cn(
                        "group h-12 px-8 rounded-full bg-white text-black font-semibold text-lg transition-all relative overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                        "hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                    )}>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#797bce]/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="flex items-center gap-2 relative z-10">
                            Download Zync
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                    <div className="text-white/40 text-sm font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        v2.0.1 for {os}
                    </div>
                </motion.div>

                {/* App Screenshot - TRUE MIMIC with TILT */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full max-w-6xl relative group perspective-1000"
                >
                    {/* Perspective Glow */}
                    <div className="absolute -inset-4 bg-[#797bce]/20 blur-3xl opacity-0 group-hover:opacity-20 -z-10 rounded-[2rem] transition-opacity duration-700" />

                    {/* Window Container */}
                    <div className="relative rounded-xl border border-[#27272a] bg-[#09090b] shadow-2xl overflow-hidden aspect-[16/10] flex text-left ring-1 ring-white/5 transform-gpu backdrop-blur-sm">

                        {/* Cursor Spotlight Overlay - Follows Mouse inside Container */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-50 mix-blend-soft-light"
                            ref={el => {
                                if (el && el.parentElement) {
                                    // Vanilla JS mouse tracking for the spotlight gradient to avoid re-renders
                                    el.parentElement.addEventListener('mousemove', (e) => {
                                        const rect = el.parentElement!.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`;
                                    });
                                }
                            }}
                        />

                        {/* Sidebar */}
                        <div className="hidden md:flex bg-[#18181b]/95 backdrop-blur-xl border-r border-[#27272a]/50 flex-col h-full shrink-0 z-10 w-72">
                            {/* Sidebar Header */}
                            <div className="p-4 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-8 h-8 rounded-lg bg-[#797bce]/10 flex items-center justify-center border border-[#797bce]/20">
                                        <TerminalIcon size={16} className="text-[#797bce]" />
                                    </div>
                                    <div className="flex flex-col leading-none">
                                        <span className="font-bold text-sm tracking-tight text-[#e4e4e7]">Personal</span>
                                        <span className="text-[10px] font-bold text-[#a1a1aa]/60 tracking-widest uppercase mt-0.5">Workspace</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button className="h-7 w-7 flex items-center justify-center rounded-lg hover:bg-[#27272a]/50 text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors"><PanelLeftClose size={14} /></button>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="px-3 mb-2">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#a1a1aa] group-focus-within:text-[#e4e4e7] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-[#27272a]/50 hover:bg-[#27272a] rounded-lg py-2 pl-9 text-xs text-[#e4e4e7] placeholder-[#a1a1aa]/40 focus:outline-none focus:ring-1 focus:ring-[#27272a] font-medium transition-all"
                                        disabled
                                    />
                                </div>
                            </div>

                            {/* System Actions */}
                            <div className="px-3 mb-2 space-y-1">
                                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#27272a]/30 hover:bg-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7] cursor-pointer transition-colors border border-transparent hover:border-[#27272a]/30 group">
                                    <TerminalIcon size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                                    <span className="font-medium text-[11px] uppercase tracking-wider opacity-80 group-hover:opacity-100">New Terminal</span>
                                </div>
                                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#27272a]/30 hover:bg-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7] cursor-pointer transition-colors border border-transparent hover:border-[#27272a]/30 group">
                                    <Network size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                                    <span className="font-medium text-[11px] uppercase tracking-wider opacity-80 group-hover:opacity-100">Port Forwarding</span>
                                </div>
                            </div>

                            <div className="h-px bg-[#27272a]/50 mx-4 my-2" />

                            {/* Sections */}
                            <div className="flex-1 overflow-y-auto px-2 space-y-4 scrollbar-thin">
                                {/* Active Section */}
                                <div>
                                    <div className="px-2 mb-1 flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-1 text-[#a1a1aa] group-hover:text-[#e4e4e7] transition-colors">
                                            <ChevronDown size={12} />
                                            <span className="text-xs font-bold uppercase tracking-wider">Active</span>
                                        </div>
                                        <span className="text-[10px] font-medium text-[#797bce] bg-[#797bce]/10 px-1.5 rounded-full">1</span>
                                    </div>
                                    <div className="pl-1 space-y-0.5">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#27272a] border border-[#27272a] relative overflow-hidden group/item cursor-pointer">
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#797bce]" />
                                            <HostIcon src="ubuntu.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-[#e4e4e7]">Production</div>
                                                <div className="text-xs text-[#a1a1aa] truncate">root@54.23.11.90</div>
                                            </div>
                                            {/* Green Dot for Status */}
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_4px_#10b981]" />
                                        </div>
                                    </div>
                                </div>

                                {/* All Hosts Section */}
                                <div>
                                    <div className="px-2 mb-1 flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-1 text-[#a1a1aa] group-hover:text-[#e4e4e7] transition-colors">
                                            <ChevronDown size={12} />
                                            <span className="text-xs font-bold uppercase tracking-wider">All Hosts</span>
                                        </div>
                                    </div>
                                    <div className="pl-1 space-y-0.5">
                                        {/* Local */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="macos.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Local Terminal</div>
                                                <div className="text-xs opacity-60 truncate">local shell</div>
                                            </div>
                                        </div>

                                        {/* Builder (Arch) */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="arch.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Builder</div>
                                                <div className="text-xs opacity-60 truncate">builder@ci-builder</div>
                                            </div>
                                        </div>

                                        {/* Debian */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="debian.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Debian Stable</div>
                                                <div className="text-xs opacity-60 truncate">admin@core-s1</div>
                                            </div>
                                        </div>

                                        {/* Prod DB */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="postgresql.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Prod Database</div>
                                                <div className="text-xs opacity-60 truncate">postgres@db-prod-01</div>
                                            </div>
                                        </div>

                                        {/* Jenkins */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="jenkins.svg" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Jenkins Server</div>
                                                <div className="text-xs opacity-60 truncate">admin@ci.internal</div>
                                            </div>
                                        </div>

                                        {/* Load Balancer */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="nginx.png" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">Load Balancer</div>
                                                <div className="text-xs opacity-60 truncate">nginx@lb-edge-01</div>
                                            </div>
                                        </div>

                                        {/* Backup Server */}
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group">
                                            <HostIcon src="aws.svg" />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium">AWS Backup</div>
                                                <div className="text-xs opacity-60 truncate">root@s3-gateway</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Footer */}
                            <div className="p-3 border-t border-[#27272a]/20 bg-[#09090b]/50 backdrop-blur-md mt-auto">
                                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#27272a]/50 cursor-pointer transition-colors group">
                                    <div className="h-8 w-8 rounded-lg bg-[#27272a] border border-[#27272a] flex items-center justify-center group-hover:border-[#27272a]/60">
                                        <Settings size={16} className="text-[#a1a1aa] group-hover:text-[#e4e4e7]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-[#e4e4e7]">Settings</span>
                                        <span className="text-[10px] text-[#a1a1aa]/60 tracking-wide">Preferences</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col bg-[#09090b] relative z-0">
                            {/* Tab Bar - Child Tab Bar visual */}
                            <div className="h-10 flex items-center px-4 bg-[#09090b] border-b border-[#27272a]">
                                <div className="flex items-center gap-1">
                                    {/* Active Tab */}
                                    <div className="group relative flex items-center gap-2 px-3 py-1.5 bg-[#18181b] rounded-md border border-[#27272a] pr-8 cursor-default transition-all shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_4px_#10b981]" />
                                        <span className="text-xs font-medium text-[#e4e4e7]">root@production</span>
                                        {/* Close Icon (Hover) */}
                                        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-0.5 rounded-md text-[#a1a1aa] opacity-0 group-hover:opacity-100 hover:bg-[#27272a] transition-all">
                                            <X size={12} />
                                        </button>
                                    </div>

                                    {/* Inactive Tab */}
                                    <div className="group relative flex items-center gap-2 px-3 py-1.5 hover:bg-[#27272a]/30 rounded-md border border-transparent hover:border-[#27272a]/30 cursor-pointer transition-all">
                                        <div className="w-2 h-2 rounded-full bg-[#a1a1aa]/30" />
                                        <span className="text-xs font-medium text-[#a1a1aa] group-hover:text-[#e4e4e7]">Local Terminal</span>
                                    </div>

                                    {/* Add Button */}
                                    <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-[#27272a] text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors ml-1">
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-hidden relative">
                                <div className="text-[#e4e4e7]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[#10b981]">➜</span>
                                        <span className="text-[#797bce]">root@production</span>
                                        <span className="text-[#a1a1aa]">~</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[#a1a1aa]">Last login: {new Date().toLocaleDateString()} from 192.168.1.42</div>
                                        <br />
                                        <div className="flex max-w-xl p-3 mb-4 rounded bg-[#797bce]/10 border border-[#797bce]/20 text-[#e4e4e7] gap-3">
                                            <div className="text-[#797bce]">ℹ</div>
                                            <div>
                                                <div className="font-bold text-[#797bce] mb-1">System Update Available</div>
                                                <div className="textxs opacity-80">A new security patch is available for this server. Run <span className="text-[#e4e4e7] bg-[#797bce]/20 px-1 rounded">apt upgrade</span> to install.</div>
                                            </div>
                                        </div>

                                        {/* Static Command 1: docker ps */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#10b981]">➜</span>
                                            <span className="text-[#797bce]">root@production</span>
                                            <span className="text-[#e4e4e7]">docker ps</span>
                                        </div>

                                        <div className="text-[#a1a1aa]/80 text-xs mt-2 font-mono whitespace-pre overflow-x-auto">
                                            {`CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                    NAMES
8f3d2a1b4c5e   postgres:14    "docker-entrypoint.s…"   2 days ago      Up 2 days      0.0.0.0:5432->5432/tcp   db_prod
9e8d7c6b5a4f   redis:7        "docker-entrypoint.s…"   2 days ago      Up 2 days      6379/tcp                 cache_prod
1a2b3c4d5e6f   nginx:latest   "/docker-entrypoint.…"   2 days ago      Up 2 days      0.0.0.0:80->80/tcp       web_proxy`}
                                        </div>

                                        {/* Static Command 2: htop */}
                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="text-[#10b981]">➜</span>
                                            <span className="text-[#797bce]">root@production</span>
                                            <span className="text-[#e4e4e7]">htop</span>
                                        </div>

                                        {/* HTOP View */}
                                        <div className="mt-2 p-2 bg-[#27272a]/50 rounded text-[10px] text-[#a1a1aa] font-mono leading-tight">
                                            <div className="flex justify-between text-[#e4e4e7] font-bold mb-1">
                                                <span>CPU [||||||||||||||||    {stats.cpu}%]</span>
                                                <span>Tasks: 42, 19 thr; 1 running</span>
                                            </div>
                                            <div className="flex justify-between text-[#e4e4e7] font-bold mb-2">
                                                <span>Mem [||||||||||          {stats.mem / 100 * 16}G/16G]</span>
                                                <span>Uptime: 14 days, 03:22:11</span>
                                            </div>
                                            <div className="flex bg-[#e4e4e7] text-black px-1 mb-1">
                                                <span className="w-12">PID</span><span className="w-12">USER</span><span className="w-12">PRI</span><span className="w-12">NI</span><span className="w-12">VIRT</span><span className="w-12">RES</span><span className="w-12">SHR</span><span className="w-12">S</span><span className="w-12">CPU%</span><span className="w-12">MEM%</span><span className="flex-1">Command</span>
                                            </div>
                                            <div>
                                                <span className="w-12 inline-block text-[#10b981]">1234</span><span className="w-12 inline-block">root</span><span className="w-12 inline-block">20</span><span className="w-12 inline-block">0</span><span className="w-12 inline-block">124M</span><span className="w-12 inline-block">24M</span><span className="w-12 inline-block">12M</span><span className="w-12 inline-block">S</span><span className="w-12 inline-block">0.5</span><span className="w-12 inline-block">0.2</span><span className="inline-block">/usr/bin/dockerd</span>
                                            </div>
                                            <div>
                                                <span className="w-12 inline-block text-[#10b981]">5678</span><span className="w-12 inline-block">root</span><span className="w-12 inline-block">20</span><span className="w-12 inline-block">0</span><span className="w-12 inline-block">89M</span><span className="w-12 inline-block">12M</span><span className="w-12 inline-block">8M</span><span className="w-12 inline-block">S</span><span className="w-12 inline-block">0.2</span><span className="w-12 inline-block">0.1</span><span className="inline-block">/usr/sbin/sshd</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Status Bar - LIVE */}
                            <div className="h-6 bg-[#27272a] border-t border-[#27272a] flex items-center justify-between px-3 text-[10px] uppercase font-medium tracking-wide text-[#a1a1aa] shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 text-[#10b981]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                        Connected
                                    </div>
                                    <div className="h-3 w-px bg-[#27272a]" />
                                    <span>54.23.11.90</span>
                                </div>

                                {/* Live Stats Indicators */}
                                <div className="hidden sm:flex items-center gap-4 opacity-80">
                                    <div className="flex items-center gap-1.5">
                                        <Cpu size={10} />
                                        <span>{stats.cpu}%</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Activity size={10} />
                                        <span>{stats.mem}%</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Wifi size={10} />
                                        <span>{stats.net} MB/s</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 opacity-60">
                                    <span>UTF-8</span>
                                    <span>SSH-2.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
