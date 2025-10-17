import image_b78dfbf3470d5d565260ab21c2330454f0208f80 from 'figma:asset/b78dfbf3470d5d565260ab21c2330454f0208f80.png';
import image_eae075123418c2f6b24913ac633abc96778773bf from 'figma:asset/eae075123418c2f6b24913ac633abc96778773bf.png';
import image_eae075123418c2f6b24913ac633abc96778773bf from 'figma:asset/eae075123418c2f6b24913ac633abc96778773bf.png';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Home
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <h2 className="text-3xl tracking-wider">EASTFIELD</h2>
              <p className="text-gray-400 text-sm mt-1">by Urbanest Realty</p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Luxury, nature, and connectivity come together at Eastfield. Don't miss the chance to own a premium 3 BHK in one of Bangalore's fastest-growing locations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left lg:pl-8">
            <h4 className="text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm">Project Overview</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm">Gallery</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm">Location</a></li>
              <li><a href="#faqs" className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm">FAQ's</a></li>
              <li><a href="#about-urbanest" className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm">About Urbanest</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-[#c9980b] mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300 leading-snug">Eastfield by Urbanest Realty</p>
                  <p className="text-gray-300 leading-snug">Hosa Bengaluru, Hoskote</p>
                  <p className="text-gray-300 leading-snug">Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="w-4 h-4 text-[#c9980b] flex-shrink-0" />
                <a 
                  href="tel:7090300066" 
                  className="text-gray-300 hover:text-[#c9980b] transition-colors duration-200 text-sm"
                >
                  +91 70903 00066
                </a>
              </div>

              <div className="flex space-x-3 justify-center lg:justify-start pt-1">
                <a 
                  href="https://www.instagram.com/urbanest_realty?igsh=MTM5bWNpdjM4ZmY2dA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c9980b] hover:text-black transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1GDdMW9MHq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c9980b] hover:text-black transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/urbanest-realty-669997303/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c9980b] hover:text-black transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-3">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Urbanest Realty. All rights reserved. | Eastfield
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}