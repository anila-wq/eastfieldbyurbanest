import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { submitForm } from '../../utils/form-submission';
import { toast } from 'sonner@2.0.3';

const faqData = [
  {
    question: "Where is Eastfield located?",
    answer: "Eastfield is located in Hoskote, just 900 meters from STRR, offering excellent connectivity to Bangalore's prime hubs."
  },
  {
    question: "Does Eastfield offer a 10:90 payment plan?",
    answer: "Yes, Eastfield offers a convenient 10:90 payment plan where you can book your apartment by paying just 10% down payment and enjoy no pre-EMI till structure completion."
  },
  {
    question: "What makes Eastfield unique?",
    answer: "With 91% open space, only 4 corner homes per floor, and a lifestyle-driven design, Eastfield offers unmatched exclusivity and comfort."
  },
  {
    question: "Is Eastfield a RERA-approved project?",
    answer: "✅ Yes, Eastfield is fully RERA-approved."
  },
  {
    question: "How many units are available at Eastfield?",
    answer: "Eastfield has only 200 premium 3 BHK apartments, spread across two 25-storey towers."
  },
  {
    question: "What are the amenities offered?",
    answer: "Eastfield offers a lavish 15000 sqft clubhouse, swimming pool, gym, landscaped gardens, kids' play area and indoor/outdoor sports facilities."
  },
  {
    question: "What is the starting price of 3 BHK apartments at Eastfield?",
    answer: "The starting price is ₹1.39 Cr. For detailed pricing, offers, and flexible payment plans, please contact us directly."
  },
  {
    question: "What are the available flat sizes at Eastfield?",
    answer: "Eastfield offers spacious 3 BHK apartments with unit sizes ranging from 1744 sq. ft. to 1886 sq. ft., thoughtfully designed to maximize natural light, ventilation, and privacy. For detailed floor plans and the brochure, please contact us."
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const toggleItem = (index: number) => {
    setOpenItem(prev => prev === index ? null : index);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        toast.success('Request Submitted!', {
          description: 'Thank you! Our experts will contact you shortly.',
          duration: 5000,
        });
        setShowContactForm(false);
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
        description: 'Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayedFAQs = showMore ? faqData : faqData.slice(0, 4);
  const hasMoreFAQs = faqData.length > 4;

  return (
    <section id="faqs" className="pt-4 pb-6 lg:pt-6 lg:pb-8 bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
            FAQ'S
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Eastfield by Urbanest Realty.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3">
          {displayedFAQs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleItem(index)}
                className="w-full pt-2 pb-3 text-left flex justify-between items-center text-white hover:text-[#c9980b] transition-colors"
              >
                <h3 className="text-lg font-light pr-3">{faq.question}</h3>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="pb-4">
                  <p className="text-gray-300 leading-relaxed font-light">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        {hasMoreFAQs && (
          <div className="text-center mt-6">
            {!showMore ? (
              <Button 
                onClick={() => setShowMore(true)}
                className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 px-8 py-3"
              >
                See More Questions ({faqData.length - 4} more)
              </Button>
            ) : (
              <Button 
                onClick={() => setShowMore(false)}
                className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 px-8 py-3"
              >
                Show Less Questions
              </Button>
            )}
          </div>
        )}

        {/* Contact for More Info */}
        <div className="mt-8 text-center">
          <Card className="bg-black border-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-light mb-2 text-white">Still Have Questions?</h3>
              <p className="text-gray-300 mb-4">
                Our expert team is here to help you with any additional queries about Eastfield.
              </p>
              <Button 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => setShowContactForm(true)}
              >
                Contact Our Experts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-white">Contact Our Experts</DialogTitle>
            <DialogDescription className="text-gray-300">
              Fill in your details and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="mt-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b]"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="number" className="text-white">Phone Number</Label>
              <Input
                id="number"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className="mt-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b]"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email ID</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="mt-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#c9980b]"
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowContactForm(false)}
                disabled={isSubmitting}
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#c9980b] hover:bg-[#c9980b]/80 text-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
