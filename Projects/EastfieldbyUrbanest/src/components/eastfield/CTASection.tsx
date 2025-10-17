import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Phone, Calendar, Download, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Call to Action */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Request For A Site Visit
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience the luxury and elegance of Eastfield firsthand. Schedule your personal 
              site visit today and discover why this is the perfect home for your family.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-white" />
                <span>Flexible visit timing to suit your schedule</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-white" />
                <span>Expert guidance from our sales consultants</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Download className="w-5 h-5 text-white" />
                <span>Detailed brochures and floor plans</span>
              </div>
            </div>

            {/* RERA Information */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Project RERA:</span> PRM/KA/RERA/1250/304/PR/131224/007290
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">
                  Book Your Site Visit
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Full Name *" 
                      className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address *" 
                      className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <select className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md">
                      <option value="">Preferred Unit Type</option>
                      <option value="tower-a-1">Tower A - Unit 1 (1746 sq ft, East)</option>
                      <option value="tower-a-2">Tower A - Unit 2 (1766 sq ft, West)</option>
                      <option value="tower-a-3">Tower A - Unit 3 (1886 sq ft, East)</option>
                      <option value="tower-a-4">Tower A - Unit 4 (1746 sq ft, West)</option>
                      <option value="tower-b-1">Tower B - Unit 1 (1852 sq ft, South)</option>
                      <option value="tower-b-2">Tower B - Unit 2 (1766 sq ft, South)</option>
                      <option value="tower-b-3">Tower B - Unit 3 (1744 sq ft, North)</option>
                      <option value="tower-b-4">Tower B - Unit 4 (1766 sq ft, North)</option>
                    </select>
                  </div>
                  
                  <div>
                    <select className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md">
                      <option value="">Preferred Visit Time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                      <option value="weekend">Weekend Visit</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-white text-black hover:bg-gray-200 py-3">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Site Visit
                  </Button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>

                {/* Alternative Contact Options */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-300 text-center mb-4">Or contact us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" size="sm" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-gray-700 text-white hover:bg-gray-800">
                      <Mail className="mr-2 w-4 h-4" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}