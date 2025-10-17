import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

export default function ScrollButtons() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Show scroll up button when user has scrolled down more than 300px
      setShowScrollUp(scrollTop > 300);
      
      // Hide scroll down button when near bottom (within 100px)
      setShowScrollDown(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollUp && (
        <Button
          onClick={scrollToTop}
          className="fixed right-4 bottom-24 z-[60] bg-[#c9980b] hover:bg-[#c9980b]/80 text-black p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 md:right-8 md:bottom-8"
          size="icon"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}

      {/* Scroll to Bottom Button */}
      {showScrollDown && (
        <Button
          onClick={scrollToBottom}
          className="fixed right-4 bottom-40 z-[60] bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 md:right-8 md:bottom-24"
          size="icon"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}