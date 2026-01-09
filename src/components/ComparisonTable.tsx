import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
    { name: 'Cross-Platform (Win/Mac/Linux)', zync: true, putty: false, termius: true },
    { name: 'GPU Acceleration', zync: true, putty: false, termius: false },
    { name: 'Visual Tunnel Manager', zync: true, putty: false, termius: true },
    { name: 'Portable Mode (USB/Cloud)', zync: true, putty: true, termius: false },
    { name: 'Cloud Sync', zync: true, putty: false, termius: true },
    { name: 'Open Source', zync: true, putty: true, termius: false },
    { name: 'Price', zync: 'Free', putty: 'Free', termius: '$10/mo' },
];

export function ComparisonTable() {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Why choose Zync?
                </h2>
                <p className="text-xl text-muted">
                    See how we stack up against the old guard and the new expensive subscriptions.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="p-4 w-1/3"></th>
                            <th className="p-4 text-center">
                                <span className="text-xl font-bold text-accent">Zync</span>
                            </th>
                            <th className="p-4 text-center text-muted font-medium">PuTTY</th>
                            <th className="p-4 text-center text-muted font-medium">Termius</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium text-white">{feature.name}</td>

                                {/* Zync */}
                                <td className="p-4 text-center bg-accent/5">
                                    {renderCell(feature.zync, true)}
                                </td>

                                {/* Putty */}
                                <td className="p-4 text-center">
                                    {renderCell(feature.putty)}
                                </td>

                                {/* Termius */}
                                <td className="p-4 text-center">
                                    {renderCell(feature.termius)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function renderCell(value: boolean | string, isPrimary = false) {
    if (typeof value === 'boolean') {
        if (value) {
            return <div className="flex justify-center"><Check className={cn("w-6 h-6", isPrimary ? "text-accent" : "text-white")} /></div>;
        }
        return <div className="flex justify-center"><X className="w-6 h-6 text-white/20" /></div>;
    }
    return <span className={cn("font-bold", isPrimary ? "text-accent" : "text-white")}>{value}</span>;
}
