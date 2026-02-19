import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-bm-darkBlue to-slate-900 flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-lg"
            >
                {/* 404 Number */}
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                >
                    <span className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-bm-magenta to-pink-400 bg-clip-text text-transparent leading-none">
                        404
                    </span>
                </motion.div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Page Introuvable
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                {/* Search Icon Animation */}
                <motion.div
                    animate={{
                        x: [0, 10, -10, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="mb-8"
                >
                    <Search className="w-16 h-16 text-gray-600 mx-auto" />
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center justify-center gap-2 bg-bm-magenta text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Home className="w-5 h-5" />
                        Retour à l'accueil
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Page précédente
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-bm-magenta/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
