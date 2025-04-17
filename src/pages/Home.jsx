import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Lazy load heavy components
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const FeaturedClients = lazy(() => import('../components/FeaturedClients'));
const Contact = lazy(() => import('../components/Contact'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
  </div>
);

const Home = () => {
  return (
    <>
      <SEO
        title="Retouch IT Services | Global Digital Solutions, Local Expertise"
        description="Retouch IT Services provides comprehensive digital solutions including UX Design, AI, Digital Marketing, CRM, Web Development, and more. Global expertise, local service."
        image="https://retouchitservices.com/og-image.jpg"
        url="https://retouchitservices.com"
      />
      <Navbar />
      
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <FeaturedClients />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default Home;
