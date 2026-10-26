import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Team members data
const teamMembers = {
    'fatma-hanini': {
        firstName: 'Fatma',
        lastName: 'Hanini',
        name: 'Fatma Hanini',
        initials: 'FH',
        company: 'Better Mice',
        photo: '/assets/fatma-hanini.jpg',
        bio: "Passionnée par l'événementiel depuis plus de 10 ans, je dirige Better Mice avec une vision claire : transformer chaque événement en un levier stratégique pour votre entreprise. De la CAN 2025 aux sommets d'entreprise, nous concevons des expériences d'exception qui créent de l'impact.",
        phones: [
            { number: '06 63 43 22 99', intl: '+212663432299', typeKey: 'mobile' },
            { number: '+212 5 21 04 39 21', intl: '+212521043921', typeKey: 'office' },
        ],
        email: 'fatma.hanini@bettermice.com',
        website: 'www.bettermice.com',
        websiteUrl: 'https://bettermice.com',
        address: {
            street: '357 Boulevard Med V, 7ème Etg App13 Espace A/B Bis',
            city: 'Casablanca',
            country: 'Maroc',
            zip: '20000',
            lat: 33.5935399,
            lng: -7.6018506,
            zoom: 19,
        },
        whatsapp: '212663432299',
        stats: [
            { value: '10+', labelKey: 'statYears' },
            { value: '500+', labelKey: 'statEvents' },
            { value: '100%', labelKey: 'statSatisfaction' },
        ],
        expertiseKeys: [
            'expCongres',
            'expSeminaires',
            'expTeamBuilding',
            'expIncentive',
            'expGalas',
            'expSalons',
        ],
        portfolio: [
            { image: '/assets/portfolio/can-2025/can-cover.webp', title: 'CAN 2025', typeKey: 'typeSport' },
            { image: '/assets/portfolio/almond-consulting/1.webp', title: 'Almond Consulting', typeKey: 'typeCorporate' },
            { image: '/assets/portfolio/gitex-maroc-2024/gitex-1.jpg', title: 'GITEX MAROC', typeKey: 'typeSalon' },
        ],
        socials: {
            linkedin: 'https://www.linkedin.com/company/bettermice',
            instagram: 'https://www.instagram.com/bettermice',
        },
    },
};

// Multilingual translations
const translations = {
    fr: {
        role: 'Co-fondatrice & CEO',
        add: 'Ajouter aux contacts',
        share: 'Partager mes infos',
        contact: 'Coordonnées',
        social: 'Réseaux sociaux',
        mobile: 'Mobile',
        office: 'Bureau',
        map: "Plan d'accès",
        route: 'Itinéraire',
        openmap: 'Ouvrir dans Google Maps',
        copied: 'Lien copié dans le presse-papier',
        added: 'Contact téléchargé (.vcf)',
        tag: 'Event & Emotion · Agence MICE Maroc',
        bioTitle: 'Vision & Engagement',
        statsTitle: 'En chiffres',
        statYears: 'Ans d’expérience',
        statEvents: 'Événements',
        statSatisfaction: 'Satisfaction client',
        expertiseTitle: 'Nos Expertises',
        expCongres: 'Congrès & Conférences',
        expSeminaires: 'Séminaires & Conventions',
        expTeamBuilding: 'Team Building & Cohésion',
        expIncentive: 'Voyages Incentive & VIP',
        expGalas: 'Soirées de Gala & Prestige',
        expSalons: 'Salons & Lancements',
        projectsTitle: 'Réalisations récentes',
        typeSport: 'Grand Événement Sportif',
        typeCorporate: 'Séminaire & Team Building',
        typeSalon: 'Salon International',
        viewAll: 'Tout voir',
        quoteCta: 'Un projet événementiel ?',
        quoteSub: 'Concevons ensemble un événement sur-mesure générateur d’émotions et d’impact.',
        quoteBtn: 'Demander un devis',
        waMessage: "Bonjour Fatma, je vous contacte via votre carte numérique. J'aimerais discuter d'un projet événementiel.",
    },
    en: {
        role: 'Co-founder & CEO',
        add: 'Add to contacts',
        share: 'Share my details',
        contact: 'Contact details',
        social: 'Social media',
        mobile: 'Mobile',
        office: 'Office',
        map: 'Location & Access',
        route: 'Get directions',
        openmap: 'Open in Google Maps',
        copied: 'Link copied to clipboard',
        added: 'Contact downloaded (.vcf)',
        tag: 'Event & Emotion · MICE Agency Morocco',
        bioTitle: 'Vision & Mission',
        statsTitle: 'Key Figures',
        statYears: 'Years experience',
        statEvents: 'Events delivered',
        statSatisfaction: 'Client satisfaction',
        expertiseTitle: 'Our Expertise',
        expCongres: 'Congresses & Conferences',
        expSeminaires: 'Seminars & Summits',
        expTeamBuilding: 'Team Building & Retreats',
        expIncentive: 'Incentive Travel & VIP',
        expGalas: 'Gala Evenings & Prestige',
        expSalons: 'Trade Shows & Launches',
        projectsTitle: 'Recent Projects',
        typeSport: 'Major Sporting Event',
        typeCorporate: 'Corporate Retreat',
        typeSalon: 'International Expo',
        viewAll: 'View all',
        quoteCta: 'Planning an event in Morocco?',
        quoteSub: "Let's craft a bespoke, impactful experience tailored to your organization.",
        quoteBtn: 'Request a proposal',
        waMessage: "Hello Fatma, I am contacting you via your digital card. I would like to discuss an event project.",
    },
    es: {
        role: 'Co-fundadora & CEO',
        add: 'Añadir a contactos',
        share: 'Compartir mis datos',
        contact: 'Datos de contacto',
        social: 'Redes sociales',
        mobile: 'Móvil',
        office: 'Oficina',
        map: 'Plano de acceso',
        route: 'Cómo llegar',
        openmap: 'Abrir en Google Maps',
        copied: 'Enlace copiado al portapapeles',
        added: 'Contacto descargado (.vcf)',
        tag: 'Event & Emotion · Agencia MICE Marruecos',
        bioTitle: 'Visión & Compromiso',
        statsTitle: 'En cifras',
        statYears: 'Años de experiencia',
        statEvents: 'Eventos realizados',
        statSatisfaction: 'Satisfacción cliente',
        expertiseTitle: 'Nuestras Especialidades',
        expCongres: 'Congresos y Conferencias',
        expSeminaires: 'Seminarios y Convenciones',
        expTeamBuilding: 'Team Building y Cohesión',
        expIncentive: 'Viajes de Incentivo',
        expGalas: 'Cenas de Gala y Prestigio',
        expSalons: 'Ferias y Lanzamientos',
        projectsTitle: 'Proyectos recientes',
        typeSport: 'Gran Evento Deportivo',
        typeCorporate: 'Seminario Corporativo',
        typeSalon: 'Feria Internacional',
        viewAll: 'Ver todo',
        quoteCta: '¿Un proyecto de evento en Marruecos?',
        quoteSub: 'Diseñemos juntos una experiencia memorable que genere verdadero impacto.',
        quoteBtn: 'Solicitar presupuesto',
        waMessage: "Hola Fatma, me pongo en contacto a través de su tarjeta digital. Me gustaría comentar un proyecto de evento.",
    },
};

const CarteNumerique = () => {
    const { slug } = useParams();
    const effectiveSlug = slug || window.location.pathname.split('/').pop() || 'fatma-hanini';
    const member = teamMembers[effectiveSlug];

    const [lang, setLang] = useState(() => {
        try {
            const saved = localStorage.getItem('bm-card-lang');
            if (saved && translations[saved]) return saved;
        } catch (_) {}
        const browserLang = (navigator.language || 'fr').slice(0, 2);
        return translations[browserLang] ? browserLang : 'fr';
    });

    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);
    const [photoError, setPhotoError] = useState(false);
    const toastTimeoutRef = useRef(null);
    const langBoxRef = useRef(null);

    const t = translations[lang] || translations.fr;

    // Close language dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langBoxRef.current && !langBoxRef.current.contains(e.target)) {
                setLangMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Set dynamic page title
    useEffect(() => {
        window.scrollTo(0, 0);
        if (member) {
            document.title = `${member.name} · ${t.role} · ${member.company}`;
        }
    }, [member, t, lang]);

    const showToast = (message) => {
        if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
        setToastMessage(message);
        toastTimeoutRef.current = setTimeout(() => {
            setToastMessage(null);
        }, 2500);
    };

    const handleSelectLang = (newLang) => {
        setLang(newLang);
        setLangMenuOpen(false);
        try {
            localStorage.setItem('bm-card-lang', newLang);
        } catch (_) {}
    };

    if (!member) {
        return (
            <div className="min-h-screen bg-bm-darkBlue flex items-center justify-center px-6">
                <div className="text-center text-white">
                    <h1 className="font-heading text-3xl font-bold mb-3">Carte introuvable</h1>
                    <p className="font-sans text-white/60 mb-6 text-sm">Le profil recherché n'existe pas ou a été déplacé.</p>
                    <Link
                        to="/"
                        className="inline-block bg-bm-magenta text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-600 transition-colors shadow-lg shadow-bm-magenta/25"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    const handleDownloadVCard = () => {
        const vcfContent = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `N:${member.lastName};${member.firstName};;;`,
            `FN:${member.name}`,
            `ORG:${member.company}`,
            `TITLE:${t.role}`,
            ...member.phones.map((p) => `TEL;TYPE=${p.typeKey === 'mobile' ? 'CELL,VOICE' : 'WORK,VOICE'}:${p.intl}`),
            `EMAIL;TYPE=WORK,INTERNET:${member.email}`,
            `URL:${member.websiteUrl}`,
            `ADR;TYPE=WORK:;;${member.address.street};${member.address.city};;${member.address.zip};${member.address.country}`,
            `PHOTO;VALUE=URI:https://bettermice.com${member.photo}`,
            'END:VCARD',
        ].join('\r\n');

        const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${member.firstName}-${member.lastName}.vcf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        showToast(t.added);
    };

    const handleShare = async () => {
        const shareData = {
            title: `${member.name} · ${member.company}`,
            text: `${member.name} — ${t.role}, ${member.company}`,
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
                showToast(t.copied);
            } else {
                showToast(window.location.href);
            }
        } catch (_) {
            // Dismissed
        }
    };

    const whatsappUrl = `https://wa.me/${member.whatsapp}?text=${encodeURIComponent(t.waMessage)}`;
    const mapsSearchUrl = `https://www.google.com/maps?q=${member.address.lat},${member.address.lng}&z=${member.address.zoom || 19}`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${member.address.lat},${member.address.lng}`;
    const mapEmbedUrl = `https://maps.google.com/maps?q=${member.address.lat},${member.address.lng}&t=&z=${member.address.zoom || 19}&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="min-h-screen bg-[#071328] text-slate-800 flex justify-center selection:bg-bm-magenta/20 font-sans">
            {/* Main App Container */}
            <main className="w-full max-w-[480px] min-h-screen sm:min-h-0 sm:my-6 relative bg-bm-darkBlue overflow-hidden sm:rounded-[32px] sm:shadow-[0_30px_90px_rgba(2,11,28,0.7)]">

                {/* Top Header */}
                <header className="flex justify-between items-center px-6 pt-[calc(18px+env(safe-area-inset-top))] pb-3">
                    <Link to="/" aria-label="Better Mice" className="inline-block transition-transform hover:scale-105 active:scale-95">
                        <img
                            src="/assets/logo.webp"
                            alt="Better Mice"
                            className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
                        />
                    </Link>

                    {/* Language Switcher Pill */}
                    <div className="relative" ref={langBoxRef}>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setLangMenuOpen(!langMenuOpen);
                            }}
                            aria-expanded={langMenuOpen}
                            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/15 border border-white/20 px-3.5 py-1.5 rounded-lg text-xs font-heading font-semibold tracking-wider transition-colors"
                        >
                            <span className="uppercase">{lang}</span>
                            <span className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-white mt-0.5" />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {langMenuOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute right-0 top-[calc(100%+8px)] bg-white rounded-xl p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.3)] min-w-[130px] z-50 list-none space-y-0.5 border border-slate-100"
                                >
                                    {[
                                        { code: 'fr', label: 'Français' },
                                        { code: 'en', label: 'English' },
                                        { code: 'es', label: 'Español' },
                                    ].map((item) => (
                                        <li key={item.code}>
                                            <button
                                                type="button"
                                                onClick={() => handleSelectLang(item.code)}
                                                className={`w-full text-left px-3 py-2 text-xs rounded-lg font-medium transition-colors ${
                                                    lang === item.code
                                                        ? 'bg-bm-magenta/10 text-bm-magenta font-semibold'
                                                        : 'text-slate-700 hover:bg-slate-50'
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </header>

                {/* Body Sheet: Clean warm ivory/cream background with modern architectural top curve */}
                <section className="relative mt-16 bg-[#F8F9FA] rounded-t-[34px] px-5 sm:px-6 pt-0 pb-12 min-h-[calc(100vh-110px)] sm:min-h-[640px]">

                    {/* Elevated Profile Card */}
                    <div className="relative -top-11 -mb-4 bg-white rounded-2xl flex overflow-hidden shadow-[0_16px_36px_rgba(21,36,82,0.12)] border border-slate-100">
                        {/* Photo Column */}
                        <div className="w-[145px] sm:w-[160px] min-h-[175px] shrink-0 bg-gradient-to-br from-[#152452] via-[#1a2d6d] to-[#251b4e] relative flex items-center justify-center overflow-hidden">
                            {/* Geometric Monogram Fallback */}
                            <span className="font-heading font-black text-3xl sm:text-4xl text-white/90 tracking-tight select-none">
                                {member.initials}
                            </span>
                            {!photoError && (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    onError={() => setPhotoError(true)}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Who Column with Distinctive Modern Brand Typography */}
                        <div className="p-4 sm:p-5 flex flex-col justify-center min-w-0 flex-1">
                            <h1 className="font-heading font-extrabold text-[1.45rem] sm:text-[1.65rem] leading-[1.1] text-bm-darkBlue tracking-tight">
                                {member.firstName}
                                <br />
                                <span className="text-bm-darkBlue">{member.lastName.toUpperCase()}</span>
                            </h1>
                            <div className="mt-2.5 flex flex-col gap-0.5">
                                <span className="inline-block text-xs font-bold text-bm-magenta tracking-wide uppercase">
                                    {t.role}
                                </span>
                                <span className="text-xs font-medium text-slate-500">
                                    {member.company}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Primary CTA Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <button
                            type="button"
                            onClick={handleDownloadVCard}
                            className="font-heading font-semibold text-xs sm:text-[0.85rem] tracking-wide text-white bg-bm-darkBlue hover:bg-[#1f3473] active:scale-[0.98] transition-all rounded-xl py-3.5 px-3 text-center shadow-md shadow-bm-darkBlue/15"
                        >
                            {t.add}
                        </button>
                        <button
                            type="button"
                            onClick={handleShare}
                            className="font-heading font-semibold text-xs sm:text-[0.85rem] tracking-wide text-bm-darkBlue bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all rounded-xl py-3.5 px-3 text-center shadow-sm"
                        >
                            {t.share}
                        </button>
                    </div>

                    {/* Coordonnées (Contact List) */}
                    <h2 className="font-heading font-bold text-lg text-bm-darkBlue mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-bm-magenta rounded-full shrink-0" />
                        {t.contact}
                    </h2>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 sm:p-3 mb-8">
                        <ul className="list-none p-0 divide-y divide-slate-100">
                            {/* Phone Numbers */}
                            {member.phones.map((phone, idx) => (
                                <li key={idx}>
                                    <a
                                        href={`tel:${phone.intl}`}
                                        className="flex items-center gap-3.5 py-3.5 px-3 text-slate-800 hover:text-bm-magenta transition-colors rounded-xl hover:bg-slate-50/80 group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-bm-darkBlue/5 text-bm-darkBlue group-hover:bg-bm-magenta/10 group-hover:text-bm-magenta flex items-center justify-center shrink-0 transition-colors">
                                            <svg
                                                className="w-4 h-4 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                                                <line x1="12" x2="12.01" y1="18" y2="18" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-heading font-semibold text-[0.95rem] text-slate-900 group-hover:text-bm-magenta transition-colors">
                                                {phone.number}
                                            </p>
                                            <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                                {t[phone.typeKey]}
                                            </p>
                                        </div>
                                        <svg
                                            className="w-4 h-4 text-slate-300 group-hover:text-bm-magenta stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transition-colors"
                                            viewBox="0 0 24 24"
                                        >
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </a>
                                </li>
                            ))}

                            {/* Email */}
                            <li>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-3.5 py-3.5 px-3 text-slate-800 hover:text-bm-magenta transition-colors rounded-xl hover:bg-slate-50/80 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-bm-darkBlue/5 text-bm-darkBlue group-hover:bg-bm-magenta/10 group-hover:text-bm-magenta flex items-center justify-center shrink-0 transition-colors">
                                        <svg
                                            className="w-4 h-4 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
                                            viewBox="0 0 24 24"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-heading font-semibold text-[0.92rem] text-slate-900 truncate group-hover:text-bm-magenta transition-colors">
                                            {member.email}
                                        </p>
                                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                            Email
                                        </p>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-300 group-hover:text-bm-magenta stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </li>

                            {/* Website */}
                            <li>
                                <a
                                    href={member.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 py-3.5 px-3 text-slate-800 hover:text-bm-magenta transition-colors rounded-xl hover:bg-slate-50/80 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-bm-darkBlue/5 text-bm-darkBlue group-hover:bg-bm-magenta/10 group-hover:text-bm-magenta flex items-center justify-center shrink-0 transition-colors">
                                        <svg
                                            className="w-4 h-4 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" x2="22" y1="12" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-heading font-semibold text-[0.95rem] text-slate-900 group-hover:text-bm-magenta transition-colors">
                                            {member.website}
                                        </p>
                                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                            Site Web
                                        </p>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-300 group-hover:text-bm-magenta stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </li>

                            {/* Address */}
                            <li>
                                <a
                                    href={mapsSearchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 py-3.5 px-3 text-slate-800 hover:text-bm-magenta transition-colors rounded-xl hover:bg-slate-50/80 group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-bm-darkBlue/5 text-bm-darkBlue group-hover:bg-bm-magenta/10 group-hover:text-bm-magenta flex items-center justify-center shrink-0 transition-colors">
                                        <svg
                                            className="w-4 h-4 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-heading font-semibold text-[0.92rem] text-slate-900 leading-snug">
                                            {member.address.street}
                                        </p>
                                        <p className="text-xs text-slate-500 leading-snug mt-0.5">
                                            {member.address.zip} {member.address.city}, {member.address.country}
                                        </p>
                                    </div>
                                    <svg
                                        className="w-4 h-4 text-slate-300 group-hover:text-bm-magenta stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round transition-colors"
                                        viewBox="0 0 24 24"
                                    >
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Plan d'accès */}
                    <h2 className="font-heading font-bold text-lg text-bm-darkBlue mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-bm-magenta rounded-full shrink-0" />
                        {t.map}
                    </h2>

                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100 aspect-[4/3] mb-3">
                        <iframe
                            src={mapEmbedUrl}
                            title="Localisation"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0 block"
                        />
                    </div>

                    {/* Itinéraire CTA Button */}
                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-white bg-bm-darkBlue hover:bg-[#1f3473] rounded-xl py-3.5 px-4 font-heading font-semibold text-xs tracking-wide uppercase transition-colors shadow-md shadow-bm-darkBlue/10 mb-8"
                    >
                        <span>{t.route}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </a>

                    {/* Réseaux sociaux */}
                    <h2 className="font-heading font-bold text-lg text-bm-darkBlue mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-bm-magenta rounded-full shrink-0" />
                        {t.social}
                    </h2>

                    <div className="flex gap-3 mb-8">
                        {/* WhatsApp Tile */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex-1 py-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm border border-slate-100 hover:-translate-y-0.5 hover:shadow-md transition-all group"
                        >
                            <svg className="w-7 h-7 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="font-heading font-bold text-[11px] text-slate-700">WhatsApp</span>
                        </a>

                        {/* LinkedIn Tile */}
                        <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex-1 py-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm border border-slate-100 hover:-translate-y-0.5 hover:shadow-md transition-all group"
                        >
                            <svg className="w-6 h-6 text-[#0A66C2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="font-heading font-bold text-[11px] text-slate-700">LinkedIn</span>
                        </a>

                        {/* Instagram Tile */}
                        <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex-1 py-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm border border-slate-100 hover:-translate-y-0.5 hover:shadow-md transition-all group"
                        >
                            <svg className="w-6 h-6 text-[#E4405F] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span className="font-heading font-bold text-[11px] text-slate-700">Instagram</span>
                        </a>
                    </div>

                    {/* About / Vision Statement */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 mb-8 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-3.5 bg-bm-magenta rounded-full shrink-0" />
                            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-bm-darkBlue">
                                {t.bioTitle}
                            </h3>
                        </div>
                        <p className="font-sans text-slate-600 text-[0.92rem] leading-relaxed italic">
                            "{member.bio}"
                        </p>
                    </div>

                    {/* Agency Key Stats */}
                    <div className="grid grid-cols-3 gap-2.5 mb-8">
                        {member.stats.map((s, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-3.5 text-center shadow-sm border border-slate-100 hover:border-bm-magenta/20 transition-colors"
                            >
                                <div className="font-heading text-2xl font-black text-bm-darkBlue tracking-tight">
                                    {s.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">
                                    {t[s.labelKey]}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Expertises Chips */}
                    <div className="mb-8">
                        <h2 className="font-heading font-bold text-lg text-bm-darkBlue mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-bm-magenta rounded-full shrink-0" />
                            {t.expertiseTitle}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {member.expertiseKeys.map((key) => (
                                <span
                                    key={key}
                                    className="px-3.5 py-1.5 bg-white text-bm-darkBlue text-xs font-semibold rounded-full shadow-sm border border-slate-100 hover:border-bm-magenta/30 transition-colors"
                                >
                                    {t[key]}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Recent Projects Preview */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-heading font-bold text-lg text-bm-darkBlue flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-bm-magenta rounded-full shrink-0" />
                                {t.projectsTitle}
                            </h2>
                            <Link
                                to="/projects"
                                className="font-heading font-bold text-xs text-bm-magenta hover:text-pink-600 transition-colors"
                            >
                                {t.viewAll} →
                            </Link>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {member.portfolio.map((proj, idx) => (
                                <Link
                                    key={idx}
                                    to="/projects"
                                    className="shrink-0 w-36 group relative rounded-xl overflow-hidden shadow-sm aspect-[4/5] bg-slate-900"
                                >
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                                        <p className="font-heading font-bold text-white text-xs leading-snug line-clamp-1">
                                            {proj.title}
                                        </p>
                                        <p className="font-sans text-white/60 text-[10px] mt-0.5">
                                            {t[proj.typeKey]}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quotation CTA Card with Signature Better Mice Gradient */}
                    <div className="bg-gradient-to-br from-bm-darkBlue via-[#182a5c] to-bm-darkBlue text-white rounded-2xl p-6 text-center shadow-lg shadow-bm-darkBlue/20 mb-8 border border-white/10 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-bm-magenta/20 rounded-full blur-2xl" />
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl mb-1.5 text-white tracking-tight relative z-10">
                            {t.quoteCta}
                        </h3>
                        <p className="font-sans text-white/70 text-xs sm:text-sm leading-relaxed mb-5 max-w-xs mx-auto relative z-10">
                            {t.quoteSub}
                        </p>
                        <a
                            href={`mailto:${member.email}?subject=${encodeURIComponent(
                                lang === 'en'
                                    ? 'Event Inquiry — Better Mice'
                                    : lang === 'es'
                                    ? 'Solicitud de presupuesto — Better Mice'
                                    : 'Demande de devis événementiel — Better Mice'
                            )}`}
                            className="inline-block bg-bm-magenta hover:bg-pink-600 font-heading font-bold text-xs uppercase tracking-wider text-white px-6 py-3 rounded-xl shadow-md transition-colors relative z-10"
                        >
                            {t.quoteBtn}
                        </a>
                    </div>

                    {/* Footer Signature */}
                    <footer className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
                        <span className="font-heading font-extrabold text-sm text-bm-darkBlue block mb-0.5 tracking-tight">
                            Better Mice
                        </span>
                        <span className="font-sans text-[11px] text-slate-400">{t.tag}</span>
                    </footer>
                </section>
            </main>

            {/* Bottom Floating Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 -translate-x-1/2 bottom-7 bg-bm-darkBlue text-white text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-2xl z-50 pointer-events-none tracking-wide font-heading font-medium border border-white/10"
                    >
                        {toastMessage}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CarteNumerique;
