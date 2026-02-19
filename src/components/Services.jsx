import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Congrès & Conférences",
        description: "Gestion logistique et technique pour vos grands rassemblements professionnels.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    {
        title: "Séminaires & Formations",
        description: "Des lieux inspirants pour travailler, apprendre et échanger.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
    },
    {
        title: "Salons & Lancements",
        description: "Scénographie et stands pour valoriser vos produits et innovations.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80"
    },
    {
        title: "Voyages & Incentives",
        description: "Expériences exclusives pour récompenser et motiver vos équipes.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    },
    {
        title: "Team Building",
        description: "Activités ludiques et stratégiques pour renforcer la cohésion.",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80"
    },
    {
        title: "Soirées d'Entreprise",
        description: "Galas, anniversaires et cocktails pour célébrer vos succès.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    }
];

const Services = () => {
    return (
        <section id="services" className="relative py-20 overflow-hidden bg-slate-50">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bm-magenta/5 rounded-full blur-3xl mix-blend-multiply filter opacity-50 animate-blob pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply filter opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>

            <div className="container relative mx-auto px-6">
                {/* Section Header - Pro Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-gray-200">
                        <div className="max-w-2xl">
                            <span className="text-bm-magenta font-bold tracking-widest uppercase text-sm mb-2 block">Nos Expertises</span>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-bm-darkBlue leading-tight">
                                Nos Univers <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bm-magenta to-purple-600">MICE & Event</span>
                            </h2>
                        </div>
                        <p className="md:max-w-md text-slate-500 text-lg leading-relaxed">
                            Nous concevons des formats sur mesure pour chaque objectif stratégique. De la logistique millimétrée à l'émotion collective.
                        </p>
                    </div>
                </motion.div>

                {/* Vertical Interactive Accordion-Style Cards (Desktop) or Grid (Mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bm-darkBlue via-bm-darkBlue/50 to-transparent opacity-80 group-hover:via-bm-darkBlue/40 group-hover:opacity-70 transition-all duration-500"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-12 h-1 bg-bm-magenta mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
