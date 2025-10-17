import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { 
  MapPin, 
  Clock, 
  School, 
  Calendar, 
  Heart,
  Plane,
  ShoppingBag,
  Building2,
  X
} from 'lucide-react';
import { submitForm } from '../../utils/form-submission';
import { toast } from 'sonner@2.0.3';

const locationData = {
  education: [
    { name: "National Public School", time: "30 mins", distance: "15 km" },
    { name: "Jain Heritage School", time: "20 mins", distance: "10 km" },
    { name: "Vibgyor High School", time: "18 mins", distance: "8 km" },
    { name: "Capstone High CBSE", time: "7 mins", distance: "3.8 km" },
    { name: "Shriram Global School", time: "27 mins", distance: "14 km" },
    { name: "Sun Valley Public School", time: "18 mins", distance: "8.7 km" }
  ],
  healthcare: [
    { name: "Sathya Sai Hospital", time: "50 mins", distance: "26 km" },
    { name: "Manipal Hospital", time: "40 mins", distance: "20 km" },
    { name: "MVJ Medical College", time: "8 mins", distance: "4.7 km" },
    { name: "Motherhood Clinic", time: "21 mins", distance: "11 km" },
    { name: "East Point Hospital", time: "30 mins", distance: "18 km" },
    { name: "Bangalore Pet Hospital", time: "25 mins", distance: "13 km" }
  ],
  connectivity: [
    { name: "Airport", time: "", distance: "30 kms" },
    { name: "Whitefield (Kadugodi) Metro", time: "30 mins", distance: "15 km" },
    { name: "KR Puram Railway Station", time: "40 mins", distance: "21 km" },
    { name: "Whitefield Railway Station", time: "28 mins", distance: "14 km" },
    { name: "Kadugodi Tree Park Metro", time: "36 mins", distance: "16 km" },
    { name: "Hoskote Bus Stand", time: "11 mins", distance: "5 km" }
  ],
  shopping: [
    { name: "Phoenix Marketcity", time: "35 mins", distance: "20 km" },
    { name: "Orion Uptown Mall", time: "15 mins", distance: "11 km" },
    { name: "Nexus Shantiniketan", time: "40 mins", distance: "19 km" },
    { name: "Park Square Mall", time: "40 mins", distance: "17 km" },
    { name: "Rolla Hyper Market", time: "25 mins", distance: "12 km" },
    { name: "SBR Horizon", time: "22 mins", distance: "11.5 km" }
  ],
  workplace: [
    { name: "ITPL", time: "37 mins", distance: "17 km" },
    { name: "TCS", time: "40 mins", distance: "18 km" },
    { name: "Bearys Global Research Triangle", time: "20 mins", distance: "9.3 km" },
    { name: "Tata Elxsi", time: "38 mins", distance: "19 km" },
    { name: "Aero Space Park", time: "31 mins", distance: "22 km" },
    { name: "Siemens Limited", time: "20 mins", distance: "11 km" }
  ]
};

export default function Location() {
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  // Mobile keyboard detection
  useEffect(() => {
    const handleResize = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      const isKeyboardOpen = vh < window.screen.height * 0.75;
      setKeyboardVisible(isKeyboardOpen);
    };

    if (typeof window !== 'undefined' && window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      return () => window.visualViewport.removeEventListener('resize', handleResize);
    } else {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
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
      }, 'siteVisit');
      
      if (result.success) {
        toast.success('Site Visit Booked!', {
          description: 'Thank you! We will contact you to confirm your visit.',
          duration: 5000,
        });
        setShowSiteVisitForm(false);
        setFormData({ name: '', number: '', email: '' });
      } else {
        toast.error('Booking Failed', {
          description: result.errors?.join(', ') || 'Please try again later or contact us directly.',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <>
    <section id="location" className="pt-8 pb-12 lg:pt-10 lg:pb-16 bg-black scroll-mt-16 min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 mt-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
            PRIME LOCATION & CONNECTIVITY
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Eastfield is strategically located in Hoskote, Bangalore's rapidly developing corridor, with direct access to both Chintamani Road and Shidlaghatta Road. Just 900 meters from the upcoming STRR, it offers excellent connectivity to Whitefield, ITPL, Bangalore International Airport and other key areas—making it an ideal choice for smart urban living.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Map */}
          <div className="flex flex-col">
            <Card className="bg-gray-900 border-gray-800 flex-1 flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="w-full bg-gray-800 rounded-lg overflow-hidden mb-4 flex-1 min-h-[400px] lg:min-h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7029.035022545776!2d77.81073018820538!3d13.092234012694068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae05004c692735%3A0x393505a956e2b9d7!2sURBANEST%20EASTFIELD!5e0!3m2!1sen!2sin!4v1760525550707!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                
                <div className="text-center space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-[#c9980b] text-black hover:bg-[#c9980b]/80 font-semibold"
                    onClick={() => setShowSiteVisitForm(true)}
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Site Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Amenities & Connectivity */}
          <div>
            <h3 className="text-2xl font-normal mb-4 text-white text-center">
              NEIGHBOURHOOD
            </h3>
            
            <Accordion type="single" collapsible className="space-y-3">
              {/* Education */}
              <AccordionItem value="education" className="border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#c9980b] py-4">
                  <div className="flex items-center">
                    <School className="mr-3 w-5 h-5" />
                    <span className="text-lg font-light">Education</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3">
                    {locationData.education.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg">
                        <div>
                          <h4 className="font-light text-white">{item.name}</h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Healthcare */}
              <AccordionItem value="healthcare" className="border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#c9980b] py-4">
                  <div className="flex items-center">
                    <Heart className="mr-3 w-5 h-5" />
                    <span className="text-lg font-light">Healthcare</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3">
                    {locationData.healthcare.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg">
                        <div>
                          <h4 className="font-light text-white">{item.name}</h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Connectivity */}
              <AccordionItem value="connectivity" className="border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#c9980b] py-4">
                  <div className="flex items-center">
                    <Plane className="mr-3 w-5 h-5" />
                    <span className="text-lg font-light">Connectivity</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3">
                    {locationData.connectivity.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg">
                        <div>
                          <h4 className="font-light text-white">{item.name}</h4>
                        </div>
                        <div className="text-right">
                          {item.time && (
                            <div className="flex items-center text-sm text-gray-300">
                              <Clock className="w-4 h-4 mr-1" />
                              {item.time}
                            </div>
                          )}
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Shopping & Entertainment */}
              <AccordionItem value="shopping" className="border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#c9980b] py-4">
                  <div className="flex items-center">
                    <ShoppingBag className="mr-3 w-5 h-5" />
                    <span className="text-lg font-light">Shopping & Entertainment</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3">
                    {locationData.shopping.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg">
                        <div>
                          <h4 className="font-light text-white">{item.name}</h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Workplace & IT Hubs */}
              <AccordionItem value="workplace" className="border-gray-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-[#c9980b] py-4">
                  <div className="flex items-center">
                    <Building2 className="mr-3 w-5 h-5" />
                    <span className="text-lg font-light">Workplace & IT Hubs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="space-y-3">
                    {locationData.workplace.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg">
                        <div>
                          <h4 className="font-light text-white">{item.name}</h4>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-300">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.distance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Site Visit Form Modal - Mobile Keyboard Optimized */}
      <Dialog open={showSiteVisitForm} onOpenChange={setShowSiteVisitForm}>
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
              onClick={() => setShowSiteVisitForm(false)}
              className="absolute right-2 top-2 rounded-full p-1.5 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 z-10"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
            
            <DialogTitle className={`text-white font-bold text-center pr-8 ${keyboardVisible ? 'text-sm' : 'text-base'}`}>
              Book Site Visit
            </DialogTitle>
            {!keyboardVisible && (
              <DialogDescription className="text-gray-300 text-center mt-0.5 text-xs">
                Schedule your visit to Eastfield and experience luxury living firsthand.
              </DialogDescription>
            )}
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
                  <Label htmlFor="visit-name" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                    Name *
                  </Label>
                  <Input
                    id="visit-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`bg-slate-800/50 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b] focus:ring-2 focus:ring-[#c9980b]/20 rounded-lg px-2.5 transition-all duration-200 hover:bg-slate-700/50 ${keyboardVisible ? 'h-8 text-xs' : 'h-9 text-sm'}`}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="visit-number" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                    Phone Number *
                  </Label>
                  <Input
                    id="visit-number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={(e) => handleInputChange('number', e.target.value)}
                    className={`bg-slate-800/50 border-2 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b] focus:ring-2 focus:ring-[#c9980b]/20 rounded-lg px-2.5 transition-all duration-200 hover:bg-slate-700/50 ${keyboardVisible ? 'h-8 text-xs' : 'h-9 text-sm'}`}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="visit-email" className={`text-white font-medium block ${keyboardVisible ? 'mb-0.5 text-xs' : 'mb-1 text-sm'}`}>
                    Email ID *
                  </Label>
                  <Input
                    id="visit-email"
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
                      setShowSiteVisitForm(false);
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
                    {isSubmitting ? 'Booking...' : 'Schedule Visit'}
                  </Button>
                </div>
              </div>
              
              {/* Extra space for better scrolling */}
              <div className={keyboardVisible ? 'h-4' : 'h-16'}></div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>
    </>
  );
}