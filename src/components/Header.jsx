import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Accueil', href: '#home', type: 'anchor' },
        { name: 'Agence', href: '#agency', type: 'anchor' },
        { name: 'Services', href: '#services', type: 'anchor' },
        { name: 'Méthode', href: '#method', type: 'anchor' },
        { name: 'Réalisations', href: '#portfolio', type: 'anchor' },
        { name: 'Contact', href: '#contact', type: 'anchor' },
    ];

    const handleLinkClick = useCallback((e, link) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (link.type === 'route') {
            navigate(link.href);
            return;
        }

        // If we're not on the home page, navigate home first then scroll
        if (!isHomePage) {
            navigate('/' + link.href);
            return;
        }

        const element = document.querySelector(link.href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, [isHomePage, navigate]);

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate('/');
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white/95 shadow-md py-3 backdrop-blur-md border-b border-slate-100' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
                    <img src="/assets/logo.webp" alt="Better Mice Logo" className={`w-auto object-contain transition-all duration-300 ${isScrolled || !isHomePage ? 'h-12 md:h-16' : 'h-16 md:h-24'}`} width="140" height="64" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.type === 'route' ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-bm-magenta' : 'text-gray-700 hover:text-bm-magenta'}`}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link)}
                                className="text-sm font-medium text-gray-700 hover:text-bm-magenta transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, { href: '#contact', type: 'anchor' })}
                        className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 bg-bm-magenta text-white shadow-lg shadow-pink-500/30 hover:shadow-xl"
                    >
                        Demander un devis
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-bm-darkBlue"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <Menu className="w-7 h-7" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 border-t border-slate-100">
                    {navLinks.map((link) => (
                        link.type === 'route' ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === link.href ? 'text-bm-magenta bg-pink-50' : 'text-gray-800 hover:text-bm-magenta hover:bg-slate-50'}`}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link)}
                                className="text-gray-800 font-medium py-2 hover:text-bm-magenta px-4 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, { href: '#contact', type: 'anchor' })}
                        className="w-full text-center bg-bm-magenta text-white py-3 rounded-lg font-semibold"
                    >
                        Demander un devis
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
