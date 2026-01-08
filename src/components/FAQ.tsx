import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
    {
        q: "Is Zync really free?",
        a: "Yes. Zync is free and open-source software (MIT License). We believe developer tools should be accessible to everyone. There are no paid subscriptions or locked features."
    },
    {
        q: "Where are my SSH keys and passwords stored?",
        a: "Everything is stored locally on your machine using electron-store. We never sync your credentials to the cloud unless you explicitly use a cloud-synced folder for your data path."
    },
    {
        q: "Does it support ProxyJump / Bastion hosts?",
        a: "Yes! You can configure jump hosts easily in the settings. Zync handles the chaining automatically."
    },
    {
        q: "I'm on Windows. Do I need WSL?",
        a: "No. Zync runs natively on Windows using node-pty for terminal emulation. However, it integrates seamlessly with WSL distributions if you prefer that environment."
    },
    {
        q: "How does Portable Mode work?",
        a: "Just copy the Zync executable and creating a 'data' folder next to it. Zync will automatically detect it and store all config, logs, and keys there. Perfect for USB sticks."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                    <HelpCircle size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted">
                    Have something else? Join our Discord or check GitHub.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={cn(
                            "rounded-2xl border transition-all overflow-hidden",
                            openIndex === i ? "bg-white/5 border-white/10" : "bg-transparent border-white/5 hover:border-white/10"
                        )}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4"
                        >
                            <span className="font-semibold text-lg">{faq.q}</span>
                            {openIndex === i ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-muted" />}
                        </button>

                        <div
                            className={cn(
                                "grid transition-[grid-template-rows] duration-200 ease-out",
                                openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 pt-0 text-muted leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
