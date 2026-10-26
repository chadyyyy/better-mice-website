import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        const toggleVisibility = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsVisible(window.pageYOffset > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80 pointer-events-none'}`}
        >
            <button
                onClick={scrollToTop}
                className="bg-bm-magenta text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bm-magenta"
                aria-label="Back to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default BackToTop;
