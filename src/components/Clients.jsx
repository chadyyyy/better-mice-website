import React from 'react';
import { motion } from 'framer-motion';

// Real Clients (Mixed Logos & Text)
const realClients = [
    { name: "Bosch", logo: "/assets/clients/bosch.png" },
    { name: "Tunisair", logo: "/assets/clients/tunisair.svg" },
    { name: "Almond Consulting", logo: "/assets/clients/almond-consulting.jpeg" },
    { name: "Librairie des Écoles", logo: "/assets/clients/librairie-des-ecoles.webp" },
    { name: "CEM", logo: "/assets/clients/cem.jpeg" },
    { name: "TOP FX", logo: null },
    { name: "Hamag", logo: "/assets/clients/hamag.png" },
    { name: "Emmergizee", logo: null },
    { name: "Al Maderes", logo: null },
    { name: "MOTIVAXION", logo: null },
    { name: "Dayway", logo: null },
    { name: "Logitter 2025", logo: "/assets/clients/logitter.png" },
    { name: "Cyrine Tours", logo: "/assets/clients/cyrine-tours.png" },
    { name: "Yougo", logo: null },
    { name: "Let's Travel", logo: "/assets/clients/lets-travel.webp" }
];

const Clients = () => {
    return (
        <section className="py-16 bg-white overflow-hidden relative">
            {/* Pro Max Background Ambient */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-bm-magenta/5 rounded-full blur-3xl mix-blend-multiply filter opacity-60 pointer-events-none -translate-y-1/2"></div>

            <div className="container mx-auto px-6 mb-12 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-bm-magenta/50"></div>
                        <span className="text-bm-magenta font-bold tracking-[0.2em] text-xs uppercase">
                            Ils nous font confiance
                        </span>
                        <div className="h-[1px] w-8 bg-bm-magenta/50"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-bm-darkBlue"
                    >
                        Nos Clients
                    </motion.h2>
                </div>
            </div>

            {/* Marquee Container - CSS animation for better performance */}
            <div className="relative w-full py-10 bg-slate-50 border-t border-b border-slate-100">
                {/* Fade Edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                {/* CSS Marquee - much lighter than Framer Motion */}
                <div className="overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...realClients, ...realClients, ...realClients].map((client, index) => (
                            <div key={`client-${index}`} className="flex items-center justify-center mx-8 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 shrink-0">
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-14 w-auto object-contain max-w-[160px]"
                                        loading="lazy"
                                    />
                                ) : (
                                    <span className="text-xl font-bold text-slate-600 hover:text-bm-darkBlue transition-colors whitespace-nowrap">
                                        {client.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
