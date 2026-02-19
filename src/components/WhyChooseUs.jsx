import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Shield, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
    const steps = [
        {
            id: "01",
            title: "Conception Stratégique",
            desc: "Nous alignons l'événement sur vos objectifs business.",
            icon: <Star className="w-6 h-6 text-white" />
        },
        {
            id: "02",
            title: "Design Scénographique",
            desc: "Création d'univers immersifs et impactants.",
            icon: <Zap className="w-6 h-6 text-white" />
        },
        {
            id: "03",
            title: "Production Technique",
            desc: "Maîtrise audiovisuelle et logistique totale.",
            icon: <Shield className="w-6 h-6 text-white" />
        }
    ];

    return (
        <section id="why-us" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bm-magenta/5 rounded-full blur-[100px] opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bm-darkBlue/5 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-bm-magenta font-bold tracking-widest uppercase text-xs mb-3 block"
                    >
                        Notre Valeur Ajoutée
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-bm-darkBlue leading-tight"
                    >
                        Pourquoi choisir <span className="text-bm-magenta">Better Mice ?</span>
                    </motion.h2>
                </div>

                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full flex flex-col items-start overflow-hidden hover:-translate-y-2"
                        >
                            {/* Gradient Border Line Top */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bm-darkBlue to-bm-magenta transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                            {/* Big Number Background */}
                            <span className="absolute -right-4 -top-8 text-[10rem] font-bold text-slate-50 group-hover:text-slate-100 transition-colors duration-500 pointer-events-none select-none z-0">
                                {step.id}
                            </span>

                            {/* Content */}
                            <div className="relative z-10 w-full">
                                <div className="w-14 h-14 rounded-2xl bg-bm-darkBlue flex items-center justify-center shadow-lg shadow-bm-darkBlue/20 mb-8 group-hover:bg-bm-magenta group-hover:shadow-bm-magenta/30 transition-all duration-300">
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-bm-darkBlue mb-4 group-hover:text-bm-magenta transition-colors duration-300">
                                    {step.title}
                                </h3>

                                <p className="text-slate-500 text-lg leading-relaxed mb-6 group-hover:text-slate-600">
                                    {step.desc}
                                </p>

                                <div className="w-full h-px bg-slate-100 group-hover:bg-slate-200 transition-colors mt-auto"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-bm-darkBlue to-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-bm-magenta/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3"></div>

                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="mb-8">
                                <span className="inline-block p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                    <HeartHandshake className="w-8 h-8 text-bm-magenta" />
                                </span>
                            </div>
                            <p className="text-2xl md:text-4xl font-serif italic text-white leading-tight mb-6">
                                "Avec Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-bm-magenta to-pink-400 font-semibold not-italic">Mice</span>, votre événement passe de la simple date à l'expérience mémorable."
                            </p>
                            <div className="w-16 h-1 bg-bm-magenta rounded-full opacity-50"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
