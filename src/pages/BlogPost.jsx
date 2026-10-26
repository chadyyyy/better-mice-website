import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === slug);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-bm-darkBlue mb-4">Article introuvable</h1>
                    <p className="text-slate-500 mb-6">L'article que vous cherchez n'existe pas.</p>
                    <Link to="/blog" className="px-6 py-3 bg-bm-magenta text-white rounded-full font-semibold hover:shadow-lg transition-all">
                        Retour au blog
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id)
        .slice(0, 2);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const renderContent = (block, index) => {
        switch (block.type) {
            case 'paragraph':
                return (
                    <p key={index} className="text-lg text-slate-700 leading-relaxed mb-6">
                        {block.text}
                    </p>
                );
            case 'heading':
                return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-bm-darkBlue mt-10 mb-4">
                        {block.text}
                    </h2>
                );
            case 'list':
                return (
                    <ul key={index} className="space-y-3 mb-6 pl-2">
                        {block.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                <span className="w-2 h-2 rounded-full bg-bm-magenta mt-2.5 shrink-0"></span>
                                <span className="text-lg leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'quote':
                return (
                    <blockquote key={index} className="relative my-10 px-8 py-8 bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-2xl border-l-4 border-bm-magenta">
                        <svg className="absolute top-4 left-4 w-8 h-8 text-bm-magenta/20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                        </svg>
                        <p className="text-xl italic text-slate-800 leading-relaxed mb-3 pl-6">{block.text}</p>
                        {block.author && (
                            <cite className="text-sm font-semibold text-bm-magenta not-italic pl-6">— {block.author}</cite>
                        )}
                    </blockquote>
                );
            case 'cta':
                return (
                    <div key={index} className="my-12 p-8 bg-gradient-to-br from-bm-darkBlue to-slate-900 rounded-2xl text-center">
                        <p className="text-xl text-white font-medium mb-6">{block.text}</p>
                        <Link
                            to={block.link}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-bm-magenta text-white rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Nous contacter
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bm-darkBlue via-bm-darkBlue/60 to-bm-darkBlue/30"></div>

                {/* Back Button */}
                <div className="absolute top-24 left-6 z-20">
                    <button
                        onClick={() => navigate('/blog')}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4 text-sm">
                                <span className="px-3 py-1 bg-bm-magenta text-white font-semibold rounded-full text-xs">{post.category}</span>
                                <span className="text-white/80 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} de lecture</span>
                                <span className="text-white/80 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="container mx-auto max-w-4xl px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 min-w-0"
                    >
                        {/* Author Card */}
                        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-100">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bm-magenta to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-bold text-bm-darkBlue text-lg">{post.author}</p>
                                <p className="text-slate-500 text-sm">{post.authorRole} — Better Mice</p>
                            </div>
                        </div>

                        {/* Content Blocks */}
                        <div className="prose-custom">
                            {post.content.map((block, index) => renderContent(block, index))}
                        </div>

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-2 flex-wrap">
                                <Tag className="w-4 h-4 text-slate-400" />
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-bm-magenta hover:text-white transition-colors cursor-pointer">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share */}
                        <div className="mt-8 flex items-center gap-4">
                            <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                                <Share2 className="w-4 h-4" /> Partager :
                            </span>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white transition-all"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="bg-slate-50 py-16 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h3 className="text-2xl font-bold text-bm-darkBlue mb-8">Articles similaires</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((related) => (
                                <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                                    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 border border-slate-100">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={related.coverImage}
                                                alt={related.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                                <span>{related.category}</span>
                                                <span>•</span>
                                                <span>{related.readTime}</span>
                                            </div>
                                            <h4 className="font-bold text-bm-darkBlue group-hover:text-bm-magenta transition-colors leading-snug">
                                                {related.title}
                                            </h4>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlogPost;
