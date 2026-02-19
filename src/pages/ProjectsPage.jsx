import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage = ({ onBack }) => {
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
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
                    <div className="container mx-auto px-6 py-4">
                        <button
                            onClick={onBack}
                            className="inline-flex items-center gap-2 text-bm-darkBlue hover:text-bm-magenta transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Retour à l'accueil
                        </button>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto mb-16"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-bm-darkBlue mb-6">
                                Nos Réalisations
                            </h1>
                            <p className="text-xl text-gray-600">
                                Découvrez l'ensemble de nos projets événementiels. Chaque événement est une histoire unique que nous avons eu le plaisir de créer.
                            </p>
                        </motion.div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    onClick={() => openGallery(project)}
                                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-bm-darkBlue/90 via-bm-darkBlue/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                                        {project.gallery.length > 0 && (
                                            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                                                {project.gallery.length} Photos
                                            </span>
                                        )}
                                        <span className="text-bm-magenta font-semibold text-sm mb-2 uppercase tracking-wider">{project.type}</span>
                                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm border-l-2 border-bm-magenta pl-3">{project.info}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="text-center mt-16"
                        >
                            <p className="text-gray-600 mb-6">Vous avez un projet en tête ?</p>
                            <button
                                onClick={onBack}
                                className="bg-bm-magenta text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Contactez-nous
                            </button>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Lightbox Gallery Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeGallery}
                    >
                        <button
                            onClick={closeGallery}
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-3"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-3"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-5xl max-h-[80vh] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.gallery[currentImageIndex]}
                                alt={`${selectedProject.title} - Photo ${currentImageIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />
                        </motion.div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                            <h3 className="text-white font-bold text-lg mb-1">{selectedProject.title}</h3>
                            <p className="text-white/60 text-sm">
                                {currentImageIndex + 1} / {selectedProject.gallery.length}
                            </p>
                        </div>

                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
                            {selectedProject.gallery.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                    className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 shrink-0 ${idx === currentImageIndex ? 'ring-2 ring-bm-magenta opacity-100' : 'opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectsPage;
