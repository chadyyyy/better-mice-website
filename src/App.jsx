import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load below-the-fold components
const Stats = lazy(() => import('./components/Stats'));
const Agency = lazy(() => import('./components/Agency'));
const Services = lazy(() => import('./components/Services'));
const Clients = lazy(() => import('./components/Clients'));
const Method = lazy(() => import('./components/Method'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Partners = lazy(() => import('./components/Partners'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Contact = lazy(() => import('./components/Contact'));

// Lazy load non-critical UI elements
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

// Lazy load pages
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToProjects = () => {
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToMentions = () => {
    setCurrentPage('mentions');
    window.scrollTo(0, 0);
  };

  const navigateTo404 = () => {
    setCurrentPage('404');
    window.scrollTo(0, 0);
  };

  // Page routing
  if (currentPage === 'projects') {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <ProjectsPage onBack={navigateToHome} />
        <WhatsAppButton />
      </Suspense>
    );
  }

  if (currentPage === 'mentions') {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <MentionsLegales onBack={navigateToHome} />
        <WhatsAppButton />
      </Suspense>
    );
  }

  if (currentPage === '404') {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <NotFoundPage onBack={navigateToHome} />
        <WhatsAppButton />
      </Suspense>
    );
  }

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Stats />
          <Agency />
          <Services />
          <Clients />
          <Method />
          <Portfolio onViewAll={navigateToProjects} />
          <Partners />
          <WhyChooseUs />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer onMentionsClick={navigateToMentions} />
        <BackToTop />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;
