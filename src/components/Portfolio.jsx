import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio = ({ onViewAll }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (project, index = 0) => {
        if (project.gallery && project.gallery.length > 0) {
            setSelectedProject(project);
            setCurrentImageIndex(index);
        }
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
            );
        }
    };

    return (
        <>
            <section id="portfolio" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bm-darkBlue/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <div className="h-[2px] w-8 bg-bm-magenta"></div>
                                <span className="text-bm-magenta font-bold tracking-widest text-xs uppercase">Portfolio</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-bm-darkBlue mb-4 leading-tight">Quelques-unes de nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-bm-magenta to-purple-600">Réalisations</span></h2>
                            <p className="text-lg text-slate-600 font-light">Découvrez comment nous transformons des concepts en expériences inoubliables.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <button
                                onClick={onViewAll}
                                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-semibold text-bm-darkBlue hover:bg-bm-darkBlue hover:text-white hover:border-bm-darkBlue transition-all duration-300 group shadow-sm hover:shadow-lg"
                            >
                                Voir tous les projets
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Pro Max Horizontal Scroll Layout - "One Line" */}
                    <div
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 scrollbar-hide items-start"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                                onClick={() => openGallery(project)}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-900 w-[75vw] md:w-[260px] lg:w-[280px] xl:w-[300px] aspect-square snap-center shrink-0"
                            >
                                {/* Active Image */}
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                                />

                                {/* Sharp Gradient Overlay - No Blur */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                                {/* Content Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <span className="px-3 py-1 bg-bm-magenta text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                                                {project.type}
                                            </span>
                                            <span className="text-xs font-medium text-gray-300 flex items-center gap-1">
                                                <Maximize2 className="w-3 h-3" />
                                                {project.gallery.length} Photos
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{project.title}</h3>
                                        <p className="text-gray-300 text-sm max-w-sm mb-6 line-clamp-2 group-hover:text-white transition-colors duration-300">
                                            {project.info}
                                        </p>

                                        <div className="inline-flex items-center gap-2 text-bm-magenta font-semibold text-sm group-hover:gap-3 transition-all duration-300 border-b border-transparent group-hover:border-bm-magenta pb-1">
                                            Explorer la galerie
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-4 text-center md:hidden">
                        <button
                            onClick={onViewAll}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-bm-darkBlue text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full justify-center"
                        >
                            Voir tous les projets
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Premium Lightbox Gallery */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/98 z-[60] flex flex-col items-center justify-center p-4 backdrop-blur-sm"
                        onClick={closeGallery}
                    >
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-50 bg-gradient-to-b from-black/80 to-transparent">
                            <div className="text-white">
                                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                                <p className="text-sm text-gray-400">{selectedProject.gallery[currentImageIndex].legend}</p>
                            </div>
                            <button
                                onClick={closeGallery}
                                className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-50 bg-black/20 hover:bg-black/50 border border-white/10 rounded-full p-4 backdrop-blur-md hidden md:block"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-50 bg-black/20 hover:bg-black/50 border border-white/10 rounded-full p-4 backdrop-blur-md hidden md:block"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Main Image */}
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.gallery[currentImageIndex].url}
                                alt={selectedProject.gallery[currentImageIndex].legend}
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                            />
                        </motion.div>

                        {/* Bottom Caption & Thumbnails */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50 flex flex-col items-center">
                            <motion.p
                                key={`caption-${currentImageIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-white text-center font-medium text-lg mb-6 max-w-2xl hidden md:block"
                            >
                                {selectedProject.gallery[currentImageIndex].legend}
                            </motion.p>

                            {/* Thumbnails */}
                            <div className="flex gap-3 overflow-x-auto w-full max-w-4xl justify-center px-4 pb-2 scrollbar-hide">
                                {selectedProject.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-16 h-12 md:w-24 md:h-16 rounded overflow-hidden cursor-pointer transition-all duration-300 shrink-0 border-2 ${idx === currentImageIndex ? 'border-bm-magenta opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-80'
                                            }`}
                                    >
                                        <img src={img.url} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Portfolio;
