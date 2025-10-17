import image_0c1e9899896b786103246b29b6b25c9fbfdc5fa9 from 'figma:asset/0c1e9899896b786103246b29b6b25c9fbfdc5fa9.png';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Logo clicked! Scrolling to top...');
    
    // Close menu if open
    setIsMenuOpen(false);
    
    // Scroll to top
    window.scrollTo({ 
      top: 0, 
      left: 0,
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Simple logic: if scrolled more than hero section height, show background
      const heroSection = document.getElementById('hero-section'); // Desktop hero
      const heroSectionMobile = document.getElementById('hero-section-mobile'); // Mobile hero
      
      let heroHeight = 0;
      
      if (window.innerWidth >= 768) {
        // Desktop: use hero-section height or fallback to viewport height
        heroHeight = heroSection?.offsetHeight || window.innerHeight;
      } else {
        // Mobile: use mobile hero section height  
        heroHeight = heroSectionMobile?.offsetHeight || window.innerHeight;
      }
      
      // Show background when scrolled past 90% of hero section
      const threshold = heroHeight * 0.9;
      setIsScrolled(scrollPosition > threshold);
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', optimizedScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Set initial state - start transparent
    setIsScrolled(false);
    
    // Check initial state after DOM is ready
    const timer = setTimeout(handleScroll, 300);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-black border-b border-gray-800/30 shadow-xl' 
          : 'bg-black/90 backdrop-blur-sm border-b border-gray-800/20'
      }`}
      style={{
        width: '100vw',
        height: '64px',
        left: 0,
        right: 0,
        position: 'fixed',
        pointerEvents: 'auto',
        zIndex: 9999
      }}
      onMouseMove={() => console.log('Header mouse move detected')}
      onClick={() => console.log('Header clicked!')}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'relative' : ''
      }`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div
            onClick={handleLogoClick}
            onMouseDown={handleLogoClick}
            onTouchStart={handleLogoClick}
            onTouchEnd={handleLogoClick}
            onMouseMove={() => console.log('Logo hover detected')}
            className="flex-shrink-0 cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLogoClick(e as any);
              }
            }}
            aria-label="Go to Home"
            style={{
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              zIndex: 99999,
              position: 'relative',
              pointerEvents: 'auto'
            }}
          >
            <ImageWithFallback
              src={image_0c1e9899896b786103246b29b6b25c9fbfdc5fa9}
              alt="Eastfield by Urbanest Realty"
              className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
              style={{ pointerEvents: 'none', display: 'block' }}
            />
          </div>

          {/* Menu Button Section */}
          <div className="flex-shrink-0">
            <button
              className="flex items-center justify-center w-12 h-12 text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/20 hover:border-[#c9980b]/60 hover:shadow-lg hover:shadow-[#c9980b]/20 mr-4 px-[10px] py-[0px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 rotate-0 hover:rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Full Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-6 space-y-4">
                {/* Navigation Links */}
                <nav className="space-y-1">
                  <a
                    href="#hero-section"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Home
                  </a>
                  <a
                    href="#overview"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Overview
                  </a>
                  <a
                    href="#gallery"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </a>
                  <a
                    href="#location"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Location
                  </a>
                  <a
                    href="#faqs"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ's
                  </a>
                  <a
                    href="#about-urbanest"
                    className="block px-3 py-2 text-lg font-medium text-white hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Urbanest
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
