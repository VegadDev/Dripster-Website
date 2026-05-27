import { lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AppIntro = lazy(() => import('./components/AppIntro'));
const Features = lazy(() => import('./components/Features'));
const CommunityFeed = lazy(() => import('./components/CommunityFeed'));
const WeatherIntelligence = lazy(() => import('./components/WeatherIntelligence'));
const Analytics = lazy(() => import('./components/Analytics'));
const AILearning = lazy(() => import('./components/AILearning'));
const FutureEcosystem = lazy(() => import('./components/FutureEcosystem'));
const DevStatus = lazy(() => import('./components/DevStatus'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative bg-dark-900 min-h-screen">
      {/* Custom cursor (desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero - eagerly loaded */}
      <Hero />

      {/* Lazily loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <AppIntro />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CommunityFeed />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WeatherIntelligence />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Analytics />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AILearning />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FutureEcosystem />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <DevStatus />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
