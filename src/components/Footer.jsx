import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = ({ onMentionsClick }) => {
    return (
        <footer className="bg-slate-900 text-white border-t border-slate-800">
            {/* CTA Section H2 */}
            <div className="py-16 border-b border-white/5">
                <h2 className="text-5xl md:text-7xl font-bold text-center text-white mb-0 px-4">
                    Créons l'Impact.
                    <span className="block text-2xl md:text-3xl text-gray-400 mt-6 font-light">
                        Votre projet événementiel commence ici.
                    </span>
                </h2>
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">

                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <a href="#home" className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <img src="/assets/logo.webp" alt="Better Mice Logo" className="h-14 w-auto object-contain brightness-0 invert" />
                        </a>
                        <p className="text-slate-400 text-sm max-w-xs mb-2">
                            Transformez vos événements en leviers de croissance. L'agence MICE de référence au Maroc.
                        </p>
                        <p className="text-slate-500 text-xs mt-4 font-medium border-l-2 border-bm-magenta pl-3">
                            Fièrement basé à Casablanca, opérant dans tout le Royaume.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex gap-8 text-sm font-medium text-slate-300">
                        <div className="flex flex-col gap-2">
                            <a href="#agency" className="hover:text-bm-magenta transition-colors">Agence</a>
                            <a href="#services" className="hover:text-bm-magenta transition-colors">Services</a>
                            <a href="#method" className="hover:text-bm-magenta transition-colors">Méthode</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a href="#portfolio" className="hover:text-bm-magenta transition-colors">Réalisations</a>
                            <a href="#contact" className="hover:text-bm-magenta transition-colors">Contact</a>
                            <button onClick={onMentionsClick} className="hover:text-bm-magenta transition-colors text-left">Mentions Légales</button>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bm-magenta transition-colors text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bm-magenta transition-colors text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-bm-magenta transition-colors text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Better Mice. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
