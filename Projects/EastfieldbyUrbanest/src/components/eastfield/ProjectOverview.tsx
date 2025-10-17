import { useState, memo, useCallback } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Download, FileText, Map, Loader2, Building2, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import { submitForm } from '../../utils/form-submission';

const ProjectOverview = memo(function ProjectOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const handleIconClick = useCallback((actionType: string) => {
    setSelectedAction(actionType);
    setIsModalOpen(true);
  }, []);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.number || !formData.email) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone number validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.number.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Forms and Webhook
      const result = await submitForm({
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        message: ''
      }, 'enquiry');

      // Store data locally for backup
      const leadData = {
        name: formData.name,
        phone: formData.number,
        email: formData.email,
        action: selectedAction,
        timestamp: new Date().toISOString(),
        source: 'Eastfield Landing Page'
      };
      
      const existingLeads = JSON.parse(localStorage.getItem('eastfield_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('eastfield_leads', JSON.stringify(existingLeads));
      
      if (result.success) {
        toast.success(`Thank you ${formData.name}!`, {
          description: `Your ${selectedAction.toLowerCase()} request has been submitted. Our team will contact you shortly.`,
          duration: 5000,
        });
        setFormData({ name: '', number: '', email: '' });
        setIsModalOpen(false);
      } else {
        toast.error('Submission Failed', {
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
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setFormData({ name: '', number: '', email: '' });
  }, []);
  return (
    <section id="overview" className="pt-12 pb-12 lg:pt-16 lg:pb-16 bg-gray-900 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
            YOUR EXCLUSIVE 3 BHK PARADISE AWAITS
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Eastfield by Urbanest Realty in Hoskote features premium 3 BHK apartments in Bangalore with 91% open space, twin 25-storey towers, and only 200 exclusive corner homes, just 900m from STRR, offering luxury living with excellent connectivity and lifestyle amenities.
          </p>

          {/* Statistics Container */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">91%</p>
              <p className="text-sm text-gray-300">Open Space</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">Only 4</p>
              <p className="text-sm text-gray-300">Apartments a Floor</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">All Corners</p>
              <p className="text-sm text-gray-300">Homes</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">900mts</p>
              <p className="text-sm text-gray-300">from STRR</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">2B+G+25</p>
              <p className="text-sm text-gray-300">Total Floors</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-sm text-gray-300">Amenities</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">15000</p>
              <p className="text-sm text-gray-300">Sqft Club House</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <p className="text-2xl font-bold text-white">200</p>
              <p className="text-sm text-gray-300">Premium Units</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column - Project Details */}
          <div>

          </div>

          {/* Right Column - Image */}
          <div className="relative">

          </div>
        </div>

        {/* Action Items with Images - Horizontal Format */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-row gap-3 justify-center items-stretch -mt-16 -mb-8 py-0">
            <div className="flex-1 max-w-xs">
              <div 
                onClick={() => handleIconClick('Floor Plan')}
                className="w-full h-full bg-transparent text-white transition-all duration-300 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[160px] sm:min-h-[180px] text-[14px] cursor-pointer hover:bg-gray-800/50"
              >
                <Map className="w-8 h-8 text-[#c9980b]" />
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#c9980b]" />
                  <h4 className="font-light text-sm sm:text-base">Floor Plan</h4>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-xs">
              <div 
                onClick={() => handleIconClick('Brochure')}
                className="w-full h-full bg-transparent text-white transition-all duration-300 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[160px] sm:min-h-[180px] cursor-pointer hover:bg-gray-800/50"
              >
                <BookOpen className="w-8 h-8 text-[#c9980b]" />
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#c9980b]" />
                  <h4 className="font-light text-sm sm:text-base">Brochure</h4>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-xs">
              <div 
                onClick={() => handleIconClick('Master Plan')}
                className="w-full h-full bg-transparent text-white transition-all duration-300 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[160px] sm:min-h-[180px] cursor-pointer hover:bg-gray-800/50 mx-auto"
              >
                <Building2 className="w-8 h-8 text-[#c9980b]" />
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#c9980b]" />
                  <h4 className="font-light text-sm sm:text-base">Master Plan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-sm bg-gray-900 border-gray-700 max-h-[70vh] p-0 gap-0 overflow-hidden flex flex-col">
            <DialogHeader className="flex-shrink-0 p-3 pb-2 border-b border-gray-700/50">
              <DialogTitle className="text-white text-base">
                Get Your {selectedAction}
              </DialogTitle>
              <DialogDescription className="text-gray-300 text-xs">
                Please fill out your details below and we'll send you the {selectedAction.toLowerCase()} directly to your email.
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-y-scroll custom-scrollbar flex-1 px-3" style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch', minHeight: 0, touchAction: 'pan-y' }}>
            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-white text-sm">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#c9980b] h-9 text-sm"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="number" className="text-white text-sm">
                  Phone Number *
                </Label>
                <Input
                  id="number"
                  type="tel"
                  value={formData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                  placeholder="Enter your phone number"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#c9980b] h-9 text-sm"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white text-sm">
                  Email ID *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#c9980b] h-9 text-sm"
                  required
                />
              </div>
              
              <div className="flex gap-2 pt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeModal}
                  className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white h-9 text-sm"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#c9980b] hover:bg-[#c9980b]/80 text-black font-semibold h-9 text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </Button>
              </div>
              <div className="h-4"></div>
            </form>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
});

export default ProjectOverview;