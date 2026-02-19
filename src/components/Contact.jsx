import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        type: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'success', 'error'

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch("https://formsubmit.co/ajax/fatma.hanini@bettermice.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formState,
                    _subject: `Nouveau message de ${formState.name} - Site Web`,
                    _template: 'table'
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormState({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    type: '',
                    message: ''
                });
            } else {
                console.error("Submission error:", data);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Network error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-16 bg-white overflow-hidden">
            {/* Decorative Background Shape */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 rounded-l-[100px] -z-0 hidden lg:block"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3"
                    >
                        <h4 className="text-bm-magenta font-semibold uppercase tracking-wider mb-2">Contact</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-bm-darkBlue mb-8 leading-tight">
                            Parlons de votre <br />prochain événement
                        </h2>
                        <p className="text-lg text-gray-600 mb-10">
                            Notre équipe est à votre écoute pour construire avec vous une expérience sur-mesure.
                        </p>

                        {/* Bureau Contact */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-bm-darkBlue shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-bm-darkBlue mb-1">Nos Bureaux</h3>
                                    <p className="text-gray-500">375 Boulevard Med V, 7ème Etg App13 Espace A/B Bis<br />Casablanca, Maroc</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-bm-magenta shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg text-bm-darkBlue mb-1">Téléphone Bureau</h5>
                                    <a href="tel:+212521043921" className="block text-gray-500 hover:text-bm-magenta transition-colors">+212 5 21 04 39 21</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-bm-darkBlue shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-lg text-bm-darkBlue mb-1">Email</h5>
                                    <a href="mailto:contact@bettermice.com" className="block text-gray-500 hover:text-bm-magenta transition-colors">contact@bettermice.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Personal Contact Card - Fatma HANINI */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Votre interlocutrice dédiée</h5>
                            <div className="bg-gradient-to-br from-slate-50 to-pink-50/50 rounded-2xl p-5 border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="/assets/fatma-hanini.jpg"
                                        alt="Fatma HANINI"
                                        className="w-16 h-16 rounded-full object-cover ring-2 ring-bm-magenta/30 shadow-lg"
                                    />
                                    <div>
                                        <h5 className="font-bold text-lg text-bm-darkBlue">Fatma HANINI</h5>
                                        <p className="text-bm-magenta font-medium">Co-founder & CEO</p>
                                    </div>
                                </div>
                                <div className="space-y-2 pl-1">
                                    <a href="tel:+212663432299" className="flex items-center gap-3 text-gray-600 hover:text-bm-magenta transition-colors">
                                        <Phone className="w-4 h-4" />
                                        <span>+212 6 63 43 22 99</span>
                                    </a>
                                    <a href="mailto:fatma.hanini@bettermice.com" className="flex items-center gap-3 text-gray-600 hover:text-bm-magenta transition-colors">
                                        <Mail className="w-4 h-4" />
                                        <span>fatma.hanini@bettermice.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-7/12"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nom & Prénom</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="Votre nom"
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Entreprise</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formState.company}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="Nom de votre société"
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Professionnel</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="nom@entreprise.com"
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formState.phone}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="06..."
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type d'événement</label>
                                    <select
                                        name="type"
                                        value={formState.type}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50"
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Sélectionnez un type</option>
                                        <option value="congres">Congrès / Conférence</option>
                                        <option value="seminaire">Séminaire / Formation</option>
                                        <option value="salon">Salon / Stand</option>
                                        <option value="voyage">Voyage / Incentive</option>
                                        <option value="teambuilding">Team Building</option>
                                        <option value="soiree">Soirée d'entreprise</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Brief</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-bm-magenta focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                                        placeholder="Dites-nous en plus sur votre projet..."
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-primary text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <p className="text-sm font-medium">Merci ! Votre message a bien été envoyé. Nous vous répondrons sous 24h.</p>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg"
                                    >
                                        <XCircle className="w-5 h-5" />
                                        <p className="text-sm font-medium">Une erreur est survenue. Veuillez nous contacter directement par téléphone ou email.</p>
                                    </motion.div>
                                )}

                                <p className="text-center text-xs text-gray-400 mt-4">Réponse sous 24h ouvrées.</p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
