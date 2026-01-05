import { useState } from 'react';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

const themes = [
    { id: 'dark', name: 'Standard Dark', bg: '#09090b', accent: '#6366f1' },
    { id: 'midnight', name: 'Midnight', bg: '#0f111a', accent: '#6366f1' },
    { id: 'warm', name: 'Dark Warm', bg: '#1c1917', accent: '#d97706' },
    { id: 'light-warm', name: 'Light Warm', bg: '#f9f5eb', accent: '#d97706', light: true },
];

export function ThemeShowcase() {
    const [activeTheme, setActiveTheme] = useState(themes[0]);

    return (
        <section id="themes" className="py-20 border-y border-white/5 bg-panel/30">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Code at the speed of thought,<br />
                        <span className="text-muted">in your favorite color.</span>
                    </h2>
                    <p className="text-xl text-muted mb-10">
                        Whether you prefer the stealth of our Dark themes or the coziness of Warm, we've got a theme that matches your vibe.
                    </p>

                    <div className="space-y-4">
                        {themes.map(theme => (
                            <button
                                key={theme.id}
                                onClick={() => setActiveTheme(theme)}
                                className={cn(
                                    "w-full p-4 rounded-xl border text-left flex items-center gap-4 transition-all",
                                    activeTheme.id === theme.id 
                                        ? "bg-white/5 border-accent ring-1 ring-accent" 
                                        : "bg-transparent border-white/10 hover:bg-white/5"
                                )}
                            >
                                <div 
                                    className="w-10 h-10 rounded-lg shadow-sm border border-white/10 flex items-center justify-center"
                                    style={{ backgroundColor: theme.bg }}
                                >
                                    {activeTheme.id === theme.id && (
                                        <Check size={16} className={theme.light ? "text-black" : "text-white"} />
                                    )}
                                </div>
                                <div>
                                    <div className="font-semibold">{theme.name}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Preview Window */}
                <div className="relative">
                     <div 
                        className="rounded-2xl shadow-2xl overflow-hidden border transition-colors duration-500"
                        style={{ 
                            backgroundColor: activeTheme.bg,
                            borderColor: activeTheme.light ? '#00000010' : '#ffffff10' 
                        }}
                    >
                        {/* Mock Title Bar */}
                        <div className="h-10 flex items-center px-4 gap-2 border-b transition-colors duration-500"
                              style={{ borderColor: activeTheme.light ? '#00000005' : '#ffffff05' }}
                        >
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>

                        {/* Mock Terminal Content */}
                        <div className="p-6 font-mono text-sm h-[400px]"
                             style={{ color: activeTheme.light ? '#444' : '#e4e4e7' }}
                        >
                             <span style={{ color: activeTheme.accent }}>➜</span> ~ ssh production<br/>
                             Connected...<br/><br/>
                             
                             <span style={{ color: activeTheme.accent }}>root@prod:~$</span> ls -la<br/>
                             drwxr-xr-x  2 root root 4096 Jan 4 10:00 .<br/>
                             drwxr-xr-x 14 root root 4096 Jan 4 09:30 ..<br/>
                             -rw-r--r--  1 root root  420 Jan 4 10:00 deploy.sh<br/>
                             -rw-r--r--  1 root root 1337 Jan 4 10:00 config.json<br/>
                             <br/>
                             <span style={{ color: activeTheme.accent }}>root@prod:~$</span> <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
