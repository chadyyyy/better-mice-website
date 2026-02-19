import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Settings, BarChart, CheckCircle2 } from 'lucide-react';

const Method = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const steps = [
        {
            icon: <Search className="w-8 h-8 text-white" />,
            title: "Comprendre",
            desc: "Analyse du besoin, objectifs et audience.",
            details: [
                "Audit stratégique",
                "Analyse de cible",
                "Définition des KPI"
            ]
        },
        {
            icon: <PenTool className="w-8 h-8 text-white" />,
            title: "Concevoir",
            desc: "Concept créatif, programme et storytelling.",
            details: [
                "Direction artistique",
                "Scénographie 3D",
                "Écriture du fil rouge"
            ]
        },
        {
            icon: <Settings className="w-8 h-8 text-white" />,
            title: "Produire",
            desc: "Logistique, production et coordination terrain.",
            details: [
                "Gestion technique",
                "Coordination prestataires",
                "Suivi budgetaire"
            ]
        },
        {
            icon: <BarChart className="w-8 h-8 text-white" />,
            title: "Mesurer",
            desc: "Retours, KPI et reporting post-événement.",
            details: [
                "Enquête satisfaction",
                "Analyse ROI/ROO",
                "Débriefing complet"
            ]
        }
    ];

    return (
        <section id="method" className="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-bm-darkBlue/50 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-bm-magenta font-bold tracking-widest uppercase text-xs mb-3 block">Processus</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">La méthode Better Mice</h2>
                        <p className="text-lg text-slate-300">Un accompagnement de A à Z, du brief au bilan.</p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-slate-800 -z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-bm-magenta/0 via-bm-magenta/50 to-bm-magenta/0 w-full h-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Circle Icon */}
                                <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center mb-6 shadow-2xl relative z-10 transition-all duration-500 ${hoveredIndex === index ? 'bg-bm-magenta border-bm-magenta scale-110' : 'bg-slate-800 border-slate-700'}`}>
                                    {step.icon}
                                    {/* Pulse Effect on Hover */}
                                    {hoveredIndex === index && (
                                        <div className="absolute inset-0 rounded-full border-2 border-bm-magenta animate-ping opacity-50"></div>
                                    )}
                                </div>

                                <motion.div
                                    className="relative z-20 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 w-full hover:border-bm-magenta/50 transition-colors duration-300 min-h-[160px]"
                                    layout
                                >
                                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{step.desc}</p>

                                    {/* Dropdown Content */}
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-left space-y-2 overflow-hidden border-t border-slate-700/50 pt-4 mt-2"
                                            >
                                                {step.details.map((detail, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="text-xs text-slate-300 flex items-center gap-2"
                                                    >
                                                        <CheckCircle2 className="w-3 h-3 text-bm-magenta flex-shrink-0" />
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </section>
    );
};

export default Method;
