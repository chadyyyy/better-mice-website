import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOSchema Component
 * Injects comprehensive JSON-LD structured data for Google AI Overviews (SGE),
 * rich results, and local business visibility in Morocco.
 */
const SEOSchema = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["LocalBusiness", "EventPlanningBusiness"],
                "@id": "https://bettermice.com/#organization",
                "name": "Better Mice",
                "alternateName": "Better Mice Agency",
                "description": "Agence événementielle leader à Casablanca spécialisée dans l'organisation de congrès, séminaires, team building et voyages incentive au Maroc. Plus de 10 ans d'expérience et 150+ événements réussis.",
                "url": "https://bettermice.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://bettermice.com/assets/logo.png",
                    "width": 200,
                    "height": 60
                },
                "image": [
                    "https://bettermice.com/assets/hero-event.jpg",
                    "https://bettermice.com/assets/team-building.jpg",
                    "https://bettermice.com/assets/conference.jpg"
                ],
                "telephone": "+212 5 21 04 39 21",
                "email": "contact@bettermice.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "375 Boulevard Med V, 7ème Etg App13 Espace A/B Bis",
                    "addressLocality": "Casablanca",
                    "addressRegion": "Casablanca-Settat",
                    "postalCode": "20000",
                    "addressCountry": "MA"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.5731,
                    "longitude": -7.5898
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Casablanca",
                        "@id": "https://www.wikidata.org/wiki/Q7903"
                    },
                    {
                        "@type": "City",
                        "name": "Marrakech",
                        "@id": "https://www.wikidata.org/wiki/Q101625"
                    },
                    {
                        "@type": "City",
                        "name": "Rabat",
                        "@id": "https://www.wikidata.org/wiki/Q3551"
                    },
                    {
                        "@type": "City",
                        "name": "Tanger",
                        "@id": "https://www.wikidata.org/wiki/Q82500"
                    },
                    {
                        "@type": "City",
                        "name": "Agadir",
                        "@id": "https://www.wikidata.org/wiki/Q104871"
                    },
                    {
                        "@type": "Country",
                        "name": "Maroc",
                        "@id": "https://www.wikidata.org/wiki/Q1028"
                    }
                ],
                "priceRange": "$$$$",
                "currenciesAccepted": "MAD, EUR, USD",
                "paymentAccepted": "Cash, Credit Card, Bank Transfer",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "09:00",
                        "closes": "18:00"
                    }
                ],
                "sameAs": [
                    "https://www.linkedin.com/company/bettermice",
                    "https://www.instagram.com/bettermice",
                    "https://www.facebook.com/bettermice"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services Événementiels Better Mice",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "@id": "https://bettermice.com/#service-congres",
                                "name": "Organisation de Congrès",
                                "description": "Planification et gestion complète de congrès nationaux et internationaux au Maroc.",
                                "provider": { "@id": "https://bettermice.com/#organization" },
                                "areaServed": "MA",
                                "serviceType": "Event Planning"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "@id": "https://bettermice.com/#service-seminaires",
                                "name": "Séminaires d'Entreprise",
                                "description": "Organisation de séminaires corporate, formations et réunions stratégiques.",
                                "provider": { "@id": "https://bettermice.com/#organization" },
                                "areaServed": "MA",
                                "serviceType": "Corporate Events"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "@id": "https://bettermice.com/#service-teambuilding",
                                "name": "Team Building",
                                "description": "Activités de cohésion d'équipe innovantes: rallyes, olympiades, escape games outdoor.",
                                "provider": { "@id": "https://bettermice.com/#organization" },
                                "areaServed": "MA",
                                "serviceType": "Team Building"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "@id": "https://bettermice.com/#service-incentive",
                                "name": "Voyages Incentive",
                                "description": "Voyages de motivation sur mesure au Maroc: désert, Atlas, côte atlantique.",
                                "provider": { "@id": "https://bettermice.com/#organization" },
                                "areaServed": "MA",
                                "serviceType": "Incentive Travel"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "@id": "https://bettermice.com/#service-gala",
                                "name": "Soirées de Gala",
                                "description": "Création d'événements de prestige: galas, remises de prix, anniversaires d'entreprise.",
                                "provider": { "@id": "https://bettermice.com/#organization" },
                                "areaServed": "MA",
                                "serviceType": "Gala Events"
                            }
                        }
                    ]
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "47",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "review": [
                    {
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "5",
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Organization",
                            "name": "Groupe OCP"
                        },
                        "reviewBody": "Une équipe professionnelle qui a su orchestrer notre congrès annuel avec brio."
                    }
                ],
                "founder": {
                    "@type": "Person",
                    "name": "Fondateur Better Mice",
                    "jobTitle": "CEO & Founder"
                },
                "foundingDate": "2014",
                "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "minValue": 10,
                    "maxValue": 50
                },
                "slogan": "Event & Emotion"
            },
            {
                "@type": "WebSite",
                "@id": "https://bettermice.com/#website",
                "url": "https://bettermice.com",
                "name": "Better Mice - Agence Événementielle Maroc",
                "description": "Agence MICE leader au Maroc pour vos événements corporate",
                "publisher": { "@id": "https://bettermice.com/#organization" },
                "inLanguage": ["fr-MA", "en"],
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://bettermice.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://bettermice.com/#webpage",
                "url": "https://bettermice.com",
                "name": "Better Mice | Agence Événementielle N°1 Casablanca",
                "isPartOf": { "@id": "https://bettermice.com/#website" },
                "about": { "@id": "https://bettermice.com/#organization" },
                "description": "Votre partenaire événementiel à Casablanca. Organisation clé en main de congrès, séminaires, team building et voyages incentive au Maroc.",
                "breadcrumb": { "@id": "https://bettermice.com/#breadcrumb" },
                "inLanguage": "fr-MA",
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://bettermice.com/assets/og-image.jpg"
                },
                "datePublished": "2024-01-01",
                "dateModified": "2025-12-25"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://bettermice.com/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://bettermice.com"
                    }
                ]
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Combien coûte l'organisation d'un événement corporate au Maroc?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le budget varie selon le type d'événement, le nombre de participants et les prestations. Un séminaire d'entreprise démarre à partir de 500 MAD/personne, tandis qu'un congrès international peut nécessiter un budget de 2000+ MAD/personne. Contactez-nous pour un devis personnalisé gratuit."
                }
            },
            {
                "@type": "Question",
                "name": "Quels types d'événements organise Better Mice?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Better Mice organise tous types d'événements corporate: congrès, séminaires, team building, voyages incentive, soirées de gala, lancements de produits, conventions et anniversaires d'entreprise partout au Maroc."
                }
            },
            {
                "@type": "Question",
                "name": "Dans quelles villes du Maroc intervenez-vous?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons dans tout le Maroc: Casablanca, Marrakech, Rabat, Tanger, Agadir, Fès, Essaouira, Ouarzazate et le désert du Sahara. Notre siège est à Casablanca mais nous organisons des événements partout dans le royaume."
                }
            },
            {
                "@type": "Question",
                "name": "Quel est le délai minimum pour organiser un événement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le délai idéal est de 2 à 3 mois pour un événement de grande envergure. Cependant, notre équipe expérimentée peut organiser des événements en urgence sous 2 à 4 semaines selon la complexité et la disponibilité des prestataires."
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
};

export default SEOSchema;
