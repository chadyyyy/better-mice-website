import React from 'react';

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

const Partners = () => {
    return (
        <section className="pt-16 pb-0 bg-slate-50 overflow-hidden border-t border-slate-200">
            <div className="container mx-auto px-6 mb-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Partenaires Hôteliers</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Nous collaborons avec les meilleurs établissements pour garantir le succès de vos événements.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                {/* CSS Marquee - much lighter than Framer Motion */}
                <div className="flex animate-marquee">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={`partner-${index}`} className="flex items-center justify-center mx-8 md:mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300 shrink-0">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-14 md:h-18 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
