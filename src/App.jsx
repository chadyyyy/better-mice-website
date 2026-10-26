import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy-load below-fold components to reduce initial bundle size
const Clients = lazy(() => import('./components/Clients'));
const Agency = lazy(() => import('./components/Agency'));
const Services = lazy(() => import('./components/Services'));
const Method = lazy(() => import('./components/Method'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Partners = lazy(() => import('./components/Partners'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Pages (lazy-loaded)
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CarteNumerique = lazy(() => import('./pages/CarteNumerique'));

// Minimal fallback - invisible placeholder to prevent layout shift
const SectionFallback = () => <div className="min-h-[200px]" />;

// Home page component
const HomePage = ({ onNavigate }) => (
  <>
    <Hero />
    <Suspense fallback={<SectionFallback />}>
      <Clients />
      <Agency />
      <Services />
      <Method />
      <Portfolio onViewAll={() => { window.scrollTo(0, 0); onNavigate('/projects'); }} />
      <Partners />
      <WhyChooseUs />
      <Contact />
    </Suspense>
  </>
);

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalonePage = location.pathname.startsWith('/carte/');

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
      {!isStandalonePage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={navigate} />} />
          <Route path="/projects" element={
            <Suspense fallback={<SectionFallback />}>
              <ProjectsPage />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<SectionFallback />}>
              <Blog />
            </Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<SectionFallback />}>
              <BlogPost />
            </Suspense>
          } />
          <Route path="/carte/:slug" element={
            <Suspense fallback={<SectionFallback />}>
              <CarteNumerique />
            </Suspense>
          } />
        </Routes>
      </main>
      {!isStandalonePage && (
        <Suspense fallback={null}>
          <Footer />
          <BackToTop />
        </Suspense>
      )}
    </div>
  );
};

export default App;
