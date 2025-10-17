import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-semibold text-foreground">LuxeHomes</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-sm font-medium text-foreground hover:text-amber-600 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-amber-600 transition-colors">
              About
            </a>
            <a href="#amenities" className="text-sm font-medium text-foreground hover:text-amber-600 transition-colors">
              Amenities
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-sm">
              <Phone className="w-4 h-4 mr-2" />
              +1 234 567 8900
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              Book Site Visit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              <a
                href="#projects"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#amenities"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 234 567 8900
                </Button>
                <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Book Site Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}