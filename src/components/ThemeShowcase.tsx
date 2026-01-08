import { useState } from 'react';
import { cn } from '../lib/utils';

const themes = [
    {
        id: 'dark',
        name: 'Standard',
        bg: '#09090b',
        fg: '#e4e4e7',
        accent: '#6366f1',
        keyword: '#c678dd',
        string: '#98c379',
        func: '#61afef'
    },
    {
        id: 'dracula',
        name: 'Dracula',
        bg: '#282a36',
        fg: '#f8f8f2',
        accent: '#ff79c6',
        keyword: '#ff79c6',
        string: '#f1fa8c',
        func: '#8be9fd'
    },
    {
        id: 'nord',
        name: 'Nord',
        bg: '#2e3440',
        fg: '#d8dee9',
        accent: '#88c0d0',
        keyword: '#81a1c1',
        string: '#a3be8c',
        func: '#88c0d0'
    },
    {
        id: 'monorail',
        name: 'Monokai',
        bg: '#272822',
        fg: '#f8f8f2',
        accent: '#a6e22e',
        keyword: '#f92672',
        string: '#e6db74',
        func: '#66d9ef'
    }
];

export function ThemeShowcase() {
    const [activeTheme, setActiveTheme] = useState(themes[0]);

    return (
        <section id="themes" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Yours, truly.
                </h2>
                <p className="text-lg text-muted/60">
                    Themes that sync across all your devices.
                </p>

                {/* Minimal Tab Switcher */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    {themes.map(theme => (
                        <button
                            key={theme.id}
                            onClick={() => setActiveTheme(theme)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                activeTheme.id === theme.id
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-muted hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Preview Window */}
            <div className="max-w-3xl mx-auto relative">
                <div
                    className="relative rounded-xl shadow-2xl overflow-hidden border transition-all duration-500"
                    style={{
                        backgroundColor: activeTheme.bg,
                        borderColor: 'rgba(255,255,255,0.1)'
                    }}
                >
                    {/* Mock Title Bar */}
                    <div className="h-10 flex items-center px-4 gap-2 border-b transition-colors duration-500"
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Mock Terminal Content */}
                    <div className="p-8 font-mono text-sm leading-relaxed"
                        style={{ color: activeTheme.fg }}
                    >
                        <div className="mb-4">
                            <span style={{ color: activeTheme.accent }}>➜</span> <span>~</span> <span style={{ color: activeTheme.func }}>nvim</span> config.json
                        </div>

                        <div className="pl-0">
                            <span style={{ opacity: 0.5 }}>1</span> <span style={{ color: activeTheme.keyword }}>{"{"}</span><br />
                            <span style={{ opacity: 0.5 }}>2</span> &nbsp;&nbsp;<span style={{ color: activeTheme.keyword }}>"app_name"</span>: <span style={{ color: activeTheme.string }}>"Zync"</span>,<br />
                            <span style={{ opacity: 0.5 }}>3</span> &nbsp;&nbsp;<span style={{ color: activeTheme.keyword }}>"version"</span>: <span style={{ color: activeTheme.accent }}>1.3.0</span>,<br />
                            <span style={{ opacity: 0.5 }}>4</span> &nbsp;&nbsp;<span style={{ color: activeTheme.keyword }}>"theme"</span>: <span style={{ color: activeTheme.string }}>"{activeTheme.name}"</span><span className="animate-pulse">_</span><br />
                            <span style={{ opacity: 0.5 }}>5</span> <span style={{ color: activeTheme.keyword }}>{"}"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
