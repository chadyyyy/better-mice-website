import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Maximize2, Camera, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    // Scroll to top + set page SEO on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Nos Réalisations — Portfolio Événementiel | Better Mice';
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', 'Découvrez nos projets événementiels : CAN 2025, GITEX, séminaires, team building et plus. Portfolio complet de Better Mice, agence événementielle à Casablanca.');
    }, []);

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedProject) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeGallery();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, currentImageIndex]);

    // Extract unique project types for filter tabs
    const projectTypes = ['all', ...new Set(projects.map(p => p.type))];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.type === activeFilter);

    const openGallery = (project, index = 0) => {
        if (project.gallery && project.gallery.length > 0) {
            setSelectedProject(project);
            setCurrentImageIndex(index);
            document.body.style.overflow = 'hidden';
        }
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = '';
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

    const totalPhotos = projects.reduce((sum, p) => sum + p.gallery.length, 0);

    return (
        <>
            {/* Hero Banner */}
            <section className="relative bg-bm-darkBlue overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-bm-magenta/10 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.button
                            onClick={() => navigate('/')}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Retour à l'accueil
                        </motion.button>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Nos{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bm-magenta via-pink-400 to-bm-magenta">
                                Réalisations
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                            Chaque événement est une histoire unique. Découvrez comment nous transformons vos visions en expériences mémorables.
                        </p>

                        {/* Stats row */}
                        <div className="flex justify-center gap-8 md:gap-16">
                            {[
                                { value: projects.length, label: 'Projets' },
                                { value: totalPhotos + '+', label: 'Photos' },
                                { value: new Set(projects.map(p => p.type)).size, label: 'Catégories' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                                    <div className="text-white/40 text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom curve */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="#f8fafc" />
                    </svg>
                </div>
            </section>

            {/* Filter Tabs + Grid */}
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
                    >
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === type
                                    ? 'bg-bm-darkBlue text-white shadow-lg shadow-bm-darkBlue/25'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {type === 'all' ? 'Tous les projets' : type}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.5 }}
                                    onClick={() => openGallery(project)}
                                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-gray-900"
                                >
                                    {/* Image */}
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                                    {/* Photo count badge */}
                                    <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/30 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                                        <Camera className="w-3.5 h-3.5" />
                                        {project.gallery.length}
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-7 flex flex-col justify-end">
                                        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block px-3 py-1 bg-bm-magenta/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                                                {project.type}
                                            </span>
                                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
                                                {project.info}
                                            </p>
                                            <div className="inline-flex items-center gap-2 text-bm-magenta font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                Explorer la galerie
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover border glow */}
                                    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/0 group-hover:ring-bm-magenta/30 transition-all duration-500 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-center mt-20"
                    >
                        <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
                            <p className="text-bm-darkBlue font-bold text-xl">Vous avez un projet en tête ?</p>
                            <p className="text-gray-500 text-sm max-w-md">Parlons de votre prochain événement. Notre équipe est prête à transformer votre vision en réalité.</p>
                            <button
                                onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }}
                                className="bg-gradient-to-r from-bm-magenta to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-bm-magenta/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                            >
                                Contactez-nous
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Premium Lightbox Gallery */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/98 z-[60] flex flex-col items-center justify-center backdrop-blur-sm"
                        onClick={closeGallery}
                    >
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 p-5 md:p-6 flex justify-between items-start z-50 bg-gradient-to-b from-black/80 to-transparent">
                            <div className="text-white">
                                <h3 className="text-lg md:text-xl font-bold">{selectedProject.title}</h3>
                                <p className="text-sm text-gray-400 mt-0.5">
                                    {selectedProject.gallery[currentImageIndex]?.legend}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-white/40 text-sm hidden md:block">
                                    {currentImageIndex + 1} / {selectedProject.gallery.length}
                                </span>
                                <button
                                    onClick={closeGallery}
                                    className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                                >
                                    <X className="w-7 h-7" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/30 hover:bg-white/10 border border-white/10 rounded-full p-3 md:p-4 backdrop-blur-md"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/30 hover:bg-white/10 border border-white/10 rounded-full p-3 md:p-4 backdrop-blur-md"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Main Image */}
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center relative px-16"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedProject.gallery[currentImageIndex]?.url || selectedProject.gallery[currentImageIndex]}
                                alt={selectedProject.gallery[currentImageIndex]?.legend || `Photo ${currentImageIndex + 1}`}
                                loading="lazy"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>

                        {/* Bottom Thumbnails */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50">
                            {/* Caption for mobile */}
                            <p className="text-white text-center font-medium text-sm mb-4 md:hidden line-clamp-1">
                                {selectedProject.gallery[currentImageIndex]?.legend}
                            </p>
                            {/* Desktop caption */}
                            <motion.p
                                key={`caption-${currentImageIndex}`}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-white text-center font-medium text-base mb-4 max-w-2xl mx-auto hidden md:block"
                            >
                                {selectedProject.gallery[currentImageIndex]?.legend}
                            </motion.p>

                            <div className="flex gap-2 md:gap-3 overflow-x-auto w-full max-w-4xl mx-auto justify-center px-4 pb-2 scrollbar-hide">
                                {selectedProject.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-14 h-10 md:w-20 md:h-14 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shrink-0 border-2 ${idx === currentImageIndex
                                            ? 'border-bm-magenta opacity-100 scale-110'
                                            : 'border-transparent opacity-40 hover:opacity-80'
                                            }`}
                                    >
                                        <img src={img?.url || img} alt="" loading="lazy" className="w-full h-full object-cover" />
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

export default ProjectsPage;
