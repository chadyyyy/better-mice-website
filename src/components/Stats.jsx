import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "10+", label: "Années d'Expérience" },
    { value: "500+", label: "Événements Réussis" },
    { value: "100%", label: "Satisfaction Client" },
    { value: "24/7", label: "Support Dédié" }
];

const Stats = () => {
    return (
        <section className="bg-bm-darkBlue py-8 relative overflow-hidden border-b border-white/10">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="px-4"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                                {stat.value}
                            </div>
                            <div className="text-bm-magenta font-medium text-sm md:text-base uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
