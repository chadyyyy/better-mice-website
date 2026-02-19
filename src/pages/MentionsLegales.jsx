import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, MapPin, Phone, Mail, Globe, Shield } from 'lucide-react';

const MentionsLegales = ({ onBack }) => {
    return (
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

            <main className="container mx-auto px-6 py-16 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-bm-darkBlue mb-8">
                        Mentions Légales
                    </h1>

                    {/* Éditeur */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-bm-magenta" />
                            <h2 className="text-2xl font-bold text-bm-darkBlue">Éditeur du Site</h2>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
                            <p className="font-semibold text-lg">Better Mice SARL</p>
                            <div className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 text-bm-magenta shrink-0 mt-0.5" />
                                <p>375 Boulevard Med V, 7ème Etg App13 Espace A/B Bis<br />20000 Casablanca, Maroc</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-5 h-5 text-bm-magenta" />
                                <p>+212 5 21 04 39 21</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5 text-bm-magenta" />
                                <p>contact@bettermice.com</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Globe className="w-5 h-5 text-bm-magenta" />
                                <p>www.bettermice.com</p>
                            </div>
                            <p className="text-gray-600 pt-2 border-t border-gray-100">
                                <span className="font-medium">Directrice de Publication:</span> Fatma Hanini
                            </p>
                        </div>
                    </section>

                    {/* Hébergeur */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-6 h-6 text-bm-magenta" />
                            <h2 className="text-2xl font-bold text-bm-darkBlue">Hébergement</h2>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <p className="text-gray-600">
                                Ce site est hébergé par Genious Communications.<br />
                                Bd Allal Al Fassi, Opération Al Borj, Imm B, 3ème étage Appt 12, Marrakech 40000, Maroc<br />
                                <a href="https://www.genious.ma" target="_blank" rel="noopener noreferrer" className="text-bm-magenta hover:underline">www.genious.ma</a>
                            </p>
                        </div>
                    </section>

                    {/* Propriété Intellectuelle */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-6 h-6 text-bm-magenta" />
                            <h2 className="text-2xl font-bold text-bm-darkBlue">Propriété Intellectuelle</h2>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                            <p className="text-gray-600">
                                L'ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes) est la propriété exclusive de Better Mice SARL, sauf mention contraire.
                            </p>
                            <p className="text-gray-600">
                                Toute reproduction, distribution, modification ou utilisation de ces contenus sans autorisation préalable écrite est strictement interdite.
                            </p>
                        </div>
                    </section>

                    {/* Protection des Données */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-6 h-6 text-bm-magenta" />
                            <h2 className="text-2xl font-bold text-bm-darkBlue">Protection des Données Personnelles</h2>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                            <p className="text-gray-600">
                                Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                            </p>
                            <p className="text-gray-600">
                                Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.
                            </p>
                            <p className="text-gray-600">
                                Pour exercer vos droits, contactez-nous à : <span className="text-bm-magenta font-medium">contact@bettermice.com</span>
                            </p>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-bm-darkBlue mb-4">Cookies</h2>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <p className="text-gray-600">
                                Ce site utilise des cookies techniques nécessaires à son fonctionnement. Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires.
                            </p>
                        </div>
                    </section>

                    {/* Mise à jour */}
                    <p className="text-sm text-gray-400 text-center">
                        Dernière mise à jour : Janvier 2025
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default MentionsLegales;
