import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <button
                        onClick={scrollToTop}
                        className="bg-bm-magenta text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bm-magenta"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
