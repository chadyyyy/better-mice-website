import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const partners = [
    { name: "Côté Océan Mogador", logo: "/assets/clients/cote-ocean-essaouira.png" },
    { name: "Kenzi Solazur Tanger", logo: "/assets/clients/kenzi-solazur-tanger.png" },
    { name: "Luxury Camp Merzouga", logo: "/assets/clients/luxury-camp-merzouga.png" },
    { name: "Novotel", logo: "/assets/clients/novotel-logo.png" },
    { name: "Oumnia Puerto", logo: "/assets/clients/oumnia-puerto.png" },
    { name: "Tempo", logo: "/assets/clients/tempo.png" },
    { name: "El Andalous", logo: "/assets/clients/el-andalous-logo.png" },
    { name: "Odyssee Center", logo: "/assets/clients/odyssee-center.png" },
];

const PartnerItem = ({ partner }) => (
    <div className="shrink-0 mx-8 md:mx-12 group flex items-center justify-center">
        <img
            src={partner.logo}
            alt={partner.name}
            className="h-14 md:h-16 w-auto object-contain max-w-[160px] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            loading="lazy"
        />
    </div>
);

const Partners = () => {
    return (
        <section className="relative py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-bm-darkBlue/[0.02] rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-14">
                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 mb-5"
                    >
                        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-bm-darkBlue/30"></div>
                        <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-bm-darkBlue/40" />
                            <span className="text-bm-darkBlue/60 font-bold tracking-[0.25em] text-[11px] uppercase">
                                Réseau Hôtelier
                            </span>
                        </div>
                        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-bm-darkBlue/30"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-bm-darkBlue mb-4"
                    >
                        Nos Partenaires
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg max-w-xl mx-auto font-light"
                    >
                        Les meilleurs établissements hôteliers pour garantir le succès de vos événements.
                    </motion.p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-20 md:w-48 h-full bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-48 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>

                <div className="overflow-hidden">
                    <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <PartnerItem key={`p-${index}`} partner={partner} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
