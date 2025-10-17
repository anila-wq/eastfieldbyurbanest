import { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/eastfield/Header';
import Hero from './components/eastfield/Hero';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Toaster } from './components/ui/sonner';

// Import core components directly to avoid loading delays
import DocumentsSection from './components/eastfield/DocumentsSection';
import SectionNavigation from './components/eastfield/SectionNavigation';
import ProjectOverview from './components/eastfield/ProjectOverview';
import AboutUrbanest from './components/eastfield/AboutUrbanest';
import BottomNavigation from './components/eastfield/BottomNavigation';
import ScrollButtons from './components/eastfield/ScrollButtons';
import FloatingWhatsApp from './components/eastfield/FloatingWhatsApp';

// Lazy load only heavy components with timeout protection
const Gallery = lazy(() => 
  Promise.race([
    import('./components/eastfield/Gallery'),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Component load timeout')), 10000)
    )
  ]).catch(() => import('./components/LoadingFallback'))
);

const Location = lazy(() => 
  Promise.race([
    import('./components/eastfield/Location'),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Component load timeout')), 10000)
    )
  ]).catch(() => import('./components/LoadingFallback'))
);

const FAQ = lazy(() => 
  Promise.race([
    import('./components/eastfield/FAQ'),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Component load timeout')), 10000)
    )
  ]).catch(() => import('./components/LoadingFallback'))
);

const Footer = lazy(() => 
  Promise.race([
    import('./components/eastfield/Footer'),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Component load timeout')), 10000)
    )
  ]).catch(() => import('./components/LoadingFallback'))
);

// Enhanced loading fallback
const LoadingDiv = ({ section = "content" }: { section?: string }) => (
  <div className="min-h-[200px] bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="text-white text-sm mb-2">Loading {section}...</div>
      <div className="w-8 h-8 border-2 border-[#c9980b] border-t-transparent rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

function App() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Allow initial components to render first
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ErrorBoundary name="Header">
        <Header />
      </ErrorBoundary>
      
      <main className="pb-0 mb-0">
        <ErrorBoundary name="Hero">
          <Hero />
        </ErrorBoundary>
        
        <ErrorBoundary name="Documents">
          <DocumentsSection />
        </ErrorBoundary>
        
        <ErrorBoundary name="Navigation">
          <SectionNavigation />
        </ErrorBoundary>
        
        <ErrorBoundary name="Project Overview">
          <ProjectOverview />
        </ErrorBoundary>
        
        {/* Load heavy components only after initial render */}
        {!isInitialLoad && (
          <>
            <ErrorBoundary name="Gallery">
              <Suspense fallback={<LoadingDiv section="gallery" />}>
                <Gallery />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary name="Location">
              <Suspense fallback={<LoadingDiv section="location" />}>
                <Location />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary name="FAQ">
              <Suspense fallback={<LoadingDiv section="FAQ" />}>
                <FAQ />
              </Suspense>
            </ErrorBoundary>
          </>
        )}
        
        <ErrorBoundary name="About Urbanest">
          <AboutUrbanest />
        </ErrorBoundary>
        
        <ErrorBoundary name="Footer">
          <Suspense fallback={<LoadingDiv section="footer" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      {/* Fixed Bottom Navigation */}
      <ErrorBoundary name="Bottom Navigation">
        <BottomNavigation />
      </ErrorBoundary>
      
      {/* Scroll Buttons */}
      <ErrorBoundary name="Scroll Buttons">
        <ScrollButtons />
      </ErrorBoundary>
      
      {/* Floating WhatsApp Button */}
      <ErrorBoundary name="Floating WhatsApp">
        <FloatingWhatsApp />
      </ErrorBoundary>
      
      {/* Toast Notifications */}
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;