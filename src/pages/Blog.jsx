import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const featuredPost = blogPosts[0];
    const otherPosts = blogPosts.slice(1);

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <section className="relative bg-bm-darkBlue pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bm-magenta/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[2px] w-8 bg-bm-magenta"></div>
                            <span className="text-bm-magenta font-bold tracking-widest text-xs uppercase">Blog & Ressources</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Insights <span className="text-transparent bg-clip-text bg-gradient-to-r from-bm-magenta to-pink-400">&</span> Tendances
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            Conseils d'experts, guides pratiques et tendances de l'événementiel au Maroc pour inspirer vos prochains projets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Article - Full Width */}
            <section className="container mx-auto px-6 -mt-12 relative z-20 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <Link to={`/blog/${featuredPost.id}`} className="group block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
                            <div className="grid md:grid-cols-2">
                                {/* Image */}
                                <div className="relative h-64 md:h-[420px] overflow-hidden">
                                    <img
                                        src={featuredPost.coverImage}
                                        alt={featuredPost.title}
                                        loading="eager"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-bm-magenta text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                            À la une
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                                        <span className="px-3 py-1 bg-pink-50 text-bm-magenta font-semibold rounded-full text-xs">{featuredPost.category}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(featuredPost.date)}</span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-bm-darkBlue mb-4 leading-tight group-hover:text-bm-magenta transition-colors duration-300">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bm-magenta to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                                {featuredPost.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-bm-darkBlue text-sm">{featuredPost.author}</p>
                                                <p className="text-xs text-slate-500">{featuredPost.authorRole}</p>
                                            </div>
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-bm-magenta font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                            Lire l'article
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </section>

            {/* Grid of Other Articles */}
            <section className="container mx-auto px-6 pb-20">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-bm-darkBlue">Tous les articles</h2>
                    <div className="h-[2px] flex-1 bg-slate-100 mx-8 hidden md:block"></div>
                    <span className="text-sm text-slate-500 font-medium">{blogPosts.length} articles</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                        >
                            <Link to={`/blog/${post.id}`} className="group block h-full">
                                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-100 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute top-3 left-3">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-bm-darkBlue text-xs font-bold rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                            <span>•</span>
                                            <span>{formatDate(post.date)}</span>
                                        </div>

                                        <h3 className="text-lg font-bold text-bm-darkBlue mb-3 leading-snug group-hover:text-bm-magenta transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-bm-magenta to-purple-600 flex items-center justify-center text-white font-bold text-[10px]">
                                                    {post.author.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <span className="text-xs font-medium text-slate-700">{post.author}</span>
                                            </div>

                                            <span className="inline-flex items-center gap-1 text-bm-magenta font-semibold text-xs group-hover:gap-2 transition-all duration-300">
                                                Lire
                                                <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
