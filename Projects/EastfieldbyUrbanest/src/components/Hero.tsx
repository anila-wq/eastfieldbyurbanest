import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { ArrowRight, MapPin, Home, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTg0NTMzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury modern apartment interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Luxury Residences
                <span className="block text-amber-400">Redefined</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Experience modern living at its finest. Discover curated spaces with world-class amenities designed for contemporary lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                  Explore Homes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                  Download Brochure
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Home className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-gray-300">Premium Units</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-300">Prime Locations</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:col-span-5 flex justify-end">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get Exclusive Access</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Full Name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <select className="w-full px-3 py-2 border border-input bg-input-background rounded-md text-sm">
                      <option value="">Select Property Type</option>
                      <option value="1bhk">1 BHK</option>
                      <option value="2bhk">2 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="penthouse">Penthouse</option>
                    </select>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3">
                    Request Site Visit
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}