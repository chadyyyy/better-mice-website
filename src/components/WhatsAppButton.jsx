import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // WhatsApp configuration
    const phoneNumber = "212663432299"; // Better Mice WhatsApp number
    const defaultMessage = "Bonjour Better Mice ! Je souhaite des informations sur vos services événementiels.";

    useEffect(() => {
        // Show button after scrolling down a bit
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
        };

        // Show immediately after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Show tooltip after button appears
            setTimeout(() => setShowTooltip(true), 1000);
            // Hide tooltip after 5 seconds
            setTimeout(() => setShowTooltip(false), 6000);
        }, 2000);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 flex-row">
                    {/* WhatsApp Button */}
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClick}
                        className="w-16 h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow group relative"
                        aria-label="Contacter sur WhatsApp"
                    >
                        {/* Subtle glow instead of ping for better performance */}

                        {/* WhatsApp Icon */}
                        <svg
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-white relative z-10"
                            fill="currentColor"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </motion.button>
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.8 }}
                                className="bg-white rounded-xl shadow-xl p-4 max-w-[200px] relative"
                            >
                                <button
                                    onClick={() => setShowTooltip(false)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200"
                                    aria-label="Fermer"
                                >
                                    <X className="w-3 h-3" aria-hidden="true" />
                                </button>
                                <p className="text-sm text-gray-700 font-medium">
                                    Besoin d'aide ? Contactez-nous sur WhatsApp ! 💬
                                </p>
                                {/* Arrow */}
                                <div className="absolute left-[-8px] bottom-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
