import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
            {/* Gradient Orb - Pink/Coral - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/40 via-rose-200/30 to-transparent rounded-full blur-[100px] pointer-events-none" />

            {/* Gradient Orb - Blue - Top Right */}
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-bl from-blue-200/40 via-indigo-100/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text content - Order 2 on mobile, Order 1 on desktop */}
                    <div className="text-center lg:text-left relative z-10 order-2 lg:order-1 pt-8 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-bm-darkBlue mb-4 uppercase leading-[0.95]">
                                Better Mice<br />
                                <span className="text-bm-magenta">Better Impact</span>
                            </h1>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-lg md:text-2xl font-semibold text-slate-800 mb-4"
                        >
                            Vos événements entre de bonnes mains
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base text-slate-500 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
                        >
                            Chez Better Mice, chaque événement est une opportunité
                            stratégique de créer de la valeur, renforcer les liens et
                            porter la voix de votre marque.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5"
                            >
                                <span className="relative z-10">Parler de votre projet</span>
                                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 font-medium rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                            >
                                Découvrir nos services
                            </a>
                        </motion.div>
                    </div>

                    {/* Tilted image cards - Order 1 on mobile, Order 2 on desktop */}
                    <div className="relative h-[300px] lg:h-[550px] w-full max-w-[350px] lg:max-w-none mx-auto order-1 lg:order-2">
                        {/* Image 1 - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 6, y: 20 }}
                            animate={{ opacity: 1, rotate: 6, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{
                                scale: 1.03,
                                rotate: 3,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="absolute top-0 right-4 lg:right-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-3xl shadow-xl overflow-hidden cursor-pointer z-10 bg-slate-300/50"
                        >
                            <img
                                src="/assets/hero-1.jpg"
                                alt="Organisation congrès corporate Casablanca - Salle de conférence avec participants"
                                width="320"
                                height="320"
                                loading="eager"
                                fetchpriority="high"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Image 2 - Bottom Left, Overlapping */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -6, y: 20 }}
                            animate={{ opacity: 1, rotate: -6, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{
                                scale: 1.03,
                                rotate: -3,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="absolute top-24 lg:bottom-16 left-4 lg:left-0 w-44 h-44 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-3xl shadow-xl overflow-hidden cursor-pointer z-20 bg-slate-400/60"
                        >
                            <img
                                src="/assets/hero-2.jpg"
                                alt="Soirée gala entreprise Maroc - Événement corporate Marrakech"
                                width="288"
                                height="288"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Decorative pink dot */}
                        <div className="absolute top-40 right-10 lg:bottom-24 lg:right-24 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-sm opacity-60" />
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
