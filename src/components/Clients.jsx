import React from 'react';
import { motion } from 'framer-motion';

const clients = [
    { name: "Bosch", logo: "/assets/clients/bosch.webp" },
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
    { name: "Logitter", logo: "/assets/clients/logitter.png" },
    { name: "Cyrine Tours", logo: "/assets/clients/cyrine-tours.png" },
    { name: "Yougo", logo: null },
    { name: "Let's Travel", logo: "/assets/clients/lets-travel.webp" },
];

const ClientItem = ({ client }) => (
    <div className="shrink-0 mx-4 md:mx-6 group">
        <div className="relative bg-white rounded-2xl px-6 py-5 border border-slate-100/80 flex items-center justify-center min-w-[150px] h-[85px] overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-bm-magenta/5 hover:-translate-y-1 hover:border-bm-magenta/20">
            {/* Subtle gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-bm-magenta/0 to-bm-magenta/0 group-hover:from-bm-magenta/[0.02] group-hover:to-pink-100/10 transition-all duration-500 rounded-2xl"></div>

            {client.logo ? (
                <img
                    src={client.logo}
                    alt={client.name}
                    className="h-9 md:h-11 w-auto object-contain max-w-[120px] grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10"
                    loading="lazy"
                />
            ) : (
                <span className="text-[15px] font-bold text-slate-300 group-hover:text-bm-darkBlue transition-colors duration-500 whitespace-nowrap relative z-10 tracking-tight">
                    {client.name}
                </span>
            )}
        </div>
    </div>
);

const Clients = () => {
    const row1 = clients.slice(0, Math.ceil(clients.length / 2));
    const row2 = clients.slice(Math.ceil(clients.length / 2));

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden relative">
            {/* Ambient decoration */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-bm-magenta/[0.03] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-400/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="container mx-auto px-6 mb-14 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-5"
                    >
                        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-bm-magenta/50"></div>
                        <span className="text-bm-magenta font-bold tracking-[0.25em] text-[11px] uppercase">
                            Ils nous font confiance
                        </span>
                        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-bm-magenta/50"></div>
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

            {/* Double Marquee */}
            <div className="relative space-y-5">
                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-20 md:w-48 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-48 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>

                {/* Row 1 */}
                <div className="overflow-hidden">
                    <div className="flex animate-marquee hover:[animation-play-state:paused]">
                        {[...row1, ...row1, ...row1].map((client, index) => (
                            <ClientItem key={`r1-${index}`} client={client} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - reverse direction */}
                <div className="overflow-hidden">
                    <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
                        {[...row2, ...row2, ...row2].map((client, index) => (
                            <ClientItem key={`r2-${index}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
