import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle, Users, Handshake, Rocket, ArrowRight } from 'lucide-react';

const Agency = () => {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    const pillars = [
        {
            icon: <Target className="w-6 h-6 text-white" />,
            title: "Stratégie & Conseil",
            desc: "Analyse de vos enjeux pour des événements impactants.",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-white" />,
            title: "Créativité & Design",
            desc: "Des concepts uniques pour marquer les esprits.",
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            title: "Exécution Parfaite",
            desc: "Une logistique sans faille pour votre sérénité.",
            gradient: "from-blue-500 to-cyan-500"
        }
    ];

    return (
        <section id="agency" className="relative pt-16 pb-16 bg-slate-50 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-bm-magenta/5 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
                <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative pl-8 mb-10 group">
                                {/* Animated Vertical Bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        whileInView={{ height: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="w-full bg-bm-magenta absolute top-0 left-0"
                                    />
                                </div>

                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block text-sm font-bold tracking-[0.2em] text-bm-magenta mb-2 uppercase"
                                >
                                    Notre Agence
                                </motion.span>

                                <h2 className="text-4xl md:text-6xl font-extrabold text-bm-darkBlue mb-4 leading-tight tracking-tight">
                                    Créateurs de <span className="relative inline-block">
                                        liens
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-bm-magenta/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                        </svg>
                                    </span>, <br />
                                    accélérateurs de business.
                                </h2>
                            </div>

                            <div className="space-y-8 text-slate-600 leading-relaxed">
                                <p className="text-xl text-slate-800 font-medium">
                                    Chez Better Mice, nous transformons l'événementiel en <span className="bg-clip-text text-transparent bg-gradient-to-r from-bm-magenta to-purple-600 font-bold">levier de performance.</span>
                                </p>

                                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                                    <p className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">Notre Impact Stratégique</p>
                                    <motion.ul
                                        variants={listVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <motion.li variants={itemVariants} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-pink-50 text-bm-magenta group-hover:scale-110 transition-transform duration-300">
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-bm-darkBlue text-lg group-hover:text-bm-magenta transition-colors">Fédérer vos équipes</h3>
                                                <p className="text-sm text-slate-500">Renforcer la cohésion et le sentiment d'appartenance.</p>
                                            </div>
                                        </motion.li>

                                        <motion.li variants={itemVariants} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                                <Handshake className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-bm-darkBlue text-lg group-hover:text-purple-600 transition-colors">Convaincre vos partenaires</h3>
                                                <p className="text-sm text-slate-500">Créer un cadre propice aux échanges et signatures.</p>
                                            </div>
                                        </motion.li>

                                        <motion.li variants={itemVariants} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300">
                                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                                <Rocket className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-bm-darkBlue text-lg group-hover:text-blue-600 transition-colors">Faire rayonner votre marque</h3>
                                                <p className="text-sm text-slate-500">Une mise en scène soignée pour un impact durable.</p>
                                            </div>
                                        </motion.li>
                                    </motion.ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual & Pillars Side */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        {/* Main Image with Glass Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                                    alt="Équipe Better Mice en action"
                                    className="w-full aspect-[4/3] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bm-darkBlue/90 via-bm-darkBlue/20 to-transparent"></div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <p className="text-white text-lg font-medium italic mb-2">"L'excellence est un détail, mais les détails font l'excellence."</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-1 bg-bm-magenta rounded-full"></div>
                                            <span className="text-white/80 text-sm uppercase tracking-wider font-bold">Better Mice Manifesto</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element behind */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-bm-magenta/30 rounded-[2rem]"></div>
                        </motion.div>

                        {/* Interactive 3D Pillars */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {pillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                    className="relative overflow-hidden bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${pillar.gradient} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500`}></div>

                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 shadow-md group-hover:rotate-6 transition-transform duration-300`}>
                                        {pillar.icon}
                                    </div>
                                    <h3 className="font-bold text-bm-darkBlue text-sm mb-2">{pillar.title}</h3>
                                    <p className="text-xs text-slate-500 leading-snug">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Agency;
