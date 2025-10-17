import image_b78dfbf3470d5d565260ab21c2330454f0208f80 from 'figma:asset/b78dfbf3470d5d565260ab21c2330454f0208f80.png';
import { useState, memo, useCallback, useRef, useEffect, Suspense } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowRight, Download, Clock, Star, Award, X, Volume2, VolumeX, CheckCircle2, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import heroImage from 'figma:asset/2d730b41dab0c9b9877a156bdbc4f6cd6cf7df35.png';
import eastfieldLogo from 'figma:asset/b78dfbf3470d5d565260ab21c2330454f0208f80.png';
import heroBackgroundImage from 'figma:asset/03055be5c6e78eff6f1477444dd526e0eb5f37f6.png';
import { submitForm } from '../../utils/form-submission';
import { toast } from 'sonner@2.0.3';

const Hero = memo(function Hero() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });
  
  const desktopVideoRef = useRef<HTMLIFrameElement>(null);
  const mobileVideoRef = useRef<HTMLIFrameElement>(null);

  // Load video after component mounts to prevent blocking
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 500); // Increased delay to prevent blocking
    return () => clearTimeout(timer);
  }, []);

  // Mobile keyboard detection with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== 'undefined') {
          const vh = window.visualViewport?.height || window.innerHeight;
          const isKeyboardOpen = vh < window.screen.height * 0.75;
          setKeyboardVisible(isKeyboardOpen);
        }
      }, 100); // Throttle resize events
    };

    if (typeof window !== 'undefined') {
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', handleResize);
        return () => {
          clearTimeout(timeoutId);
          window.visualViewport?.removeEventListener('resize', handleResize);
        };
      } else {
        window.addEventListener('resize', handleResize);
        return () => {
          clearTimeout(timeoutId);
          window.removeEventListener('resize', handleResize);
        };
      }
    }
  }, []);

  // Simplified YouTube API handling
  useEffect(() => {
    // Simple check for video readiness without complex message handling
    const timer = setTimeout(() => {
      // Video should be ready after a reasonable delay
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitForm({
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        message: ''
      }, 'enquiry');
      
      if (result.success) {
        toast.success('Enquiry Submitted!', {
          description: 'Thank you for your interest. Our team will contact you shortly.',
          duration: 5000,
        });
        setShowEnquiryForm(false);
        setFormData({ name: '', number: '', email: '' });
      } else {
        toast.error('Submission Failed', {
          description: result.errors?.join(', ') || 'Please try again later or contact us directly.',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly at the number provided.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const toggleMute = useCallback(() => {
    // Simple toggle for UI state only
    // Note: Due to browser autoplay policies, audio control via iframe is limited
    setIsMuted(prev => !prev);
  }, []);

  return (
    <>
    {/* Desktop Layout - 16:9 Aspect Ratio Video Design */}
    <section id="hero-section" className="hidden md:block relative w-full min-h-screen flex items-center justify-center pt-0 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover"
          style={{ 
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%'
          }}
        />
      </div>
      
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content Overlay - Centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="absolute bottom-16 left-0 right-0 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Horizontal Layout Container */}
            <div className="flex flex-col gap-4 bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/10 max-w-2xl mx-auto">
              
              {/* Top Section - Three Column Layout with Centered Heading */}
              <div className="grid grid-cols-3 items-center">
                {/* Left Section - Premium Badge */}
                <div className="flex justify-start">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c9980b]/20 to-[#c9980b]/10 border border-[#c9980b]/30 rounded-lg backdrop-blur-sm">
                    <div className="flex flex-col">
                      <span className="text-[#c9980b] font-semibold text-sm">Premium 3 BHK Apartments at Eastfield,</span>
                      <div>
                        <span className="text-white text-sm">Hoskote – Just 900m from STRR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Section - Main Heading */}
                <div className="text-center">
                  <ImageWithFallback 
                    src={image_b78dfbf3470d5d565260ab21c2330454f0208f80} 
                    alt="Eastfield by Urbanest Realty" 
                    className="h-24 w-auto mx-auto object-contain"
                    loading="eager"
                  />
                </div>

                {/* Right Section - Payment Plan */}
                <div className="flex justify-end">
                  <div 
                    className="flex flex-col items-center gap-1 justify-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <span className="text-base text-white">Just Pay</span>
                    <span className="text-4xl font-bold text-[#c9980b]">10%</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-lg font-medium text-[#c9980b]">No Pre-EMI<sup className="text-sm">*</sup></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description Text */}
              <p className="text-center text-gray-300 leading-relaxed">
                Urbanest Realty presents Eastfield – 200 exclusive corner homes in twin 25-storey towers with 91% open space.
              </p>
              
              {/* Bottom Section - Centered CTA Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#c9980b] to-[#c9980b] hover:from-[#c9980b]/80 hover:to-[#c9980b]/80 text-black px-8 py-3 text-sm font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => setShowEnquiryForm(true)}
                >
                  <span>ENQUIRE NOW</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - positioned relative to section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-20">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-white/50"></div>
        </div>
      </div>
    </section>

    {/* Mobile Layout - Stacked Design */}
    <section id="hero-section-mobile" className="md:hidden w-full pt-0" style={{backgroundColor: '#000000'}}>
      {/* Background Image Section */}
      <div className="relative w-full">
        <div className="relative w-full aspect-[16/11] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroBackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent px-[1px] py-[0px]" />
        

      </div>

      {/* Content Section Below Image */}
      <div className="px-4 pt-0 pb-8 -mt-8" style={{backgroundColor: '#000000'}}>
        <div className="max-w-lg mx-auto text-center text-white">
          
          {/* Premium Badge */}


          {/* Main Heading */}
          <div className="relative mb-6">
            <img 
              src={eastfieldLogo} 
              alt="Eastfield by Urbanest Realty" 
              className="h-32 sm:h-36 w-auto mx-auto object-contain mt-1"
            />
            
            {/* Decorative Line */}
            <p className="text-center text-gray-300 mt-2 font-light">Premium 3 BHK Apartments at Eastfield, Hoskote – Just 900m from STRR</p>
          </div>

          {/* Subtitle and Pricing */}
          <div className="mb-6">

            
            {/* Price Display */}
            <div 
              className="flex flex-col items-center gap-1 justify-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <span className="text-xl text-white">Just Pay</span>
              <span className="text-5xl sm:text-6xl font-bold text-[#c9980b]">10%</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-3xl font-medium text-[#c9980b]">No Pre-EMI<sup className="text-xl">*</sup></span>
              </div>
            </div>

            {/* Eastfield Description */}
            <p className="text-center text-gray-300 mt-4 px-4 leading-relaxed">
              Urbanest Realty presents Eastfield – 200 exclusive corner homes in twin 25-storey towers with 91% open space.
            </p>
            
            {/* Enquire Now Button */}
            <div className="mt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#c9980b] to-[#c9980b] hover:from-[#c9980b]/80 hover:to-[#c9980b]/80 text-black px-8 py-4 font-bold rounded-[10px] transition-colors duration-200"
                onClick={() => setShowEnquiryForm(true)}
              >
                <span>ENQUIRE NOW</span>
              </Button>
            </div>
          </div>



        </div>
      </div>
    </section>

    {/* Payment Plan Popup Modal */}
    <Dialog open={showWelcomePopup} onOpenChange={setShowWelcomePopup}>
      <DialogContent className="bg-gradient-to-br from-gray-900 to-black border-[#c9980b]/30 max-w-2xl mx-auto">
        <DialogHeader className="relative">
          {/* Close Button */}
          <button
            onClick={() => setShowWelcomePopup(false)}
            className="absolute right-0 top-0 rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
          
          <DialogTitle className="text-white text-2xl font-bold text-center">
            10:90 Payment Plan
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            Eastfield - The Twin Towers of Hoskote
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[70vh] mt-6">
          <div className="space-y-6 pr-4">
            {/* Main Introduction */}
            <div className="bg-gradient-to-r from-[#c9980b]/20 to-[#c9980b]/20 backdrop-blur-sm rounded-xl p-6 border border-[#c9980b]/30">
              <p className="text-gray-100 leading-relaxed text-center">
                Urbanest Realty's Eastfield - The Twin Towers of Hoskote now comes with the 10:90 Payment Plan, 
                making it the perfect choice for those seeking a dream home or a high-return investment.
              </p>
            </div>
            
            {/* How it Works Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                How does the 10:90 Payment Plan work?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9980b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-[#c9980b] font-semibold mb-1">Book Your Flat:</p>
                    <p className="text-gray-300">Simply pay 10% of the total cost to book your apartment.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9980b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-[#c9980b] font-semibold mb-1">No Pre-EMIs:</p>
                    <p className="text-gray-300">You pay no pre-EMIs until the project structure is completed, which is expected within 18 to 20 months from September 2025.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Investment Highlights Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                Investment Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9980b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">💰</span>
                  </div>
                  <div>
                    <p className="text-[#c9980b] font-semibold mb-1">Current Price:</p>
                    <p className="text-gray-300">The current base price per sq. ft. is just INR 7,300.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#c9980b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black font-bold text-sm">📈</span>
                  </div>
                  <div>
                    <p className="text-[#c9980b] font-semibold mb-1">Projected Appreciation:</p>
                    <p className="text-gray-300">The minimum appreciation is 23%, with the potential to go beyond it, ensuring a significant return on your investment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center pt-4">
              <Button
                onClick={() => {
                  setShowWelcomePopup(false);
                  setShowEnquiryForm(true);
                }}
                className="bg-gradient-to-r from-[#c9980b] to-[#c9980b] hover:from-[#c9980b]/80 hover:to-[#c9980b]/80 text-black font-bold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Get More Details - Enquire Now
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>

    {/* Enquiry Form Modal - Mobile Keyboard Optimized */}
    <Dialog open={showEnquiryForm} onOpenChange={setShowEnquiryForm}>
      <DialogContent 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-[#c9980b]/30 max-w-sm mx-auto shadow-2xl w-[90vw] sm:w-full p-0 gap-0 overflow-hidden flex flex-col"
        style={{
          maxHeight: keyboardVisible ? '40vh' : '70vh',
          height: keyboardVisible ? '40vh' : 'auto'
        }}
      >
        
        {/* Fixed Header */}
        <DialogHeader className={`relative flex-shrink-0 border-b border-gray-700/50 ${keyboardVisible ? 'p-2 pb-1' : 'p-3 pb-2'}`}>
          {/* Close Button */}
          <button
            onClick={() => setShowEnquiryForm(false)}
            className="absolute right-2 top-2 rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 z-10"
            aria-label="Close form"
          >
            <X className="w-4 h-4" />
          </button>
          
          <DialogTitle className={`text-white font-bold text-center pr-8 ${keyboardVisible ? 'text-sm' : 'text-base'}`}>
            Get in Touch
          </DialogTitle>
          <DialogDescription className={`text-gray-300 text-center mt-0.5 text-xs ${keyboardVisible ? 'sr-only' : ''}`}>
            Fill out the form below and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        
        {/* Scrollable Form Content */}
        <div 
          className={`overflow-y-scroll custom-scrollbar flex-1 ${keyboardVisible ? 'px-2 pb-2' : 'px-3 pb-3'}`}
          style={{ 
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            minHeight: 0,
            touchAction: 'pan-y'
          }}
        >
          <form onSubmit={handleFormSubmit} className={`${keyboardVisible ? 'space-y-1.5 pt-1.5' : 'space-y-3 pt-2'}`}>
            <div className={keyboardVisible ? 'space-y-1.5' : 'space-y-2.5'}>
              <div>
                <Label htmlFor="name" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`bg-slate-800/50 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b] focus:ring-2 focus:ring-[#c9980b]/20 rounded-lg px-2.5 transition-all duration-200 hover:bg-slate-700/50 ${keyboardVisible ? 'h-8 text-xs' : 'h-9 text-sm'}`}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="number" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                  Phone Number *
                </Label>
                <Input
                  id="number"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                  className={`bg-slate-800/50 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b] focus:ring-2 focus:ring-[#c9980b]/20 rounded-lg px-2.5 transition-all duration-200 hover:bg-slate-700/50 ${keyboardVisible ? 'h-8 text-xs' : 'h-9 text-sm'}`}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                  Email ID *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`bg-slate-800/50 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b] focus:ring-2 focus:ring-[#c9980b]/20 rounded-lg px-2.5 transition-all duration-200 hover:bg-slate-700/50 ${keyboardVisible ? 'h-8 text-xs' : 'h-9 text-sm'}`}
                  required
                />
              </div>
            </div>
            
            {/* Submit and Cancel Buttons */}
            <div className={`border-t border-gray-700/30 ${keyboardVisible ? 'pt-1.5' : 'pt-3'}`}>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => {
                    setShowEnquiryForm(false);
                    setFormData({ name: '', number: '', email: '' });
                  }}
                  disabled={isSubmitting}
                  className={`flex-1 bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${keyboardVisible ? 'py-1.5 text-xs' : 'py-2.5 text-sm'}`}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 bg-gradient-to-r from-[#c9980b] to-[#b8860b] hover:from-[#c9980b]/90 hover:to-[#b8860b]/90 text-black font-bold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-[#c9980b]/25 disabled:opacity-50 disabled:cursor-not-allowed ${keyboardVisible ? 'py-1.5 text-xs' : 'py-2.5 text-sm'}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
              </div>
            </div>
            
            {/* Extra space for better scrolling */}
            <div className={keyboardVisible ? 'h-4' : 'h-8'}></div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
});

export default Hero;