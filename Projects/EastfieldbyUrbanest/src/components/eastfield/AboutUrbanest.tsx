import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Users, 
  Building, 
  MapPin,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const achievements = [
  {
    icon: <Building className="w-8 h-8" />,
    number: "50+",
    label: "Projects Delivered",
    description: "Successfully completed residential projects across Bangalore"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "5000+",
    label: "Happy Families",
    description: "Families enjoying their dream homes with Urbanest"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "25+",
    label: "Years Experience",
    description: "Decades of expertise in real estate development"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    number: "15+",
    label: "Prime Locations",
    description: "Strategic locations across Bangalore's growth corridors"
  }
];



export default function AboutUrbanest() {
  return (
    <section id="about-urbanest" className="pt-1 pb-6 lg:pt-3 lg:pb-8 bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Desktop Horizontal Layout */}
        <div className="hidden md:block">
          {/* Centered Main Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
              ABOUT URBANEST REALTY
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Eastfield by Urbanest Realty in Hoskote features premium 3 BHK apartments in Bangalore with 91% open space, twin 25-storey towers, and only 200 exclusive corner homes, just 900m from STRR, offering luxury living with excellent connectivity and lifestyle amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left Column - About Urbanest Content (2/3 width) */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold mb-4 text-white">Our Legacy</h3>
                  <div className="space-y-3 text-gray-300 leading-relaxed">
                    <p>
                      Founded with a vision to transform Bangalore's residential landscape, Urbanest Realty 
                      has emerged as a trusted name in premium real estate development. Our journey began 
                      with a simple belief: every family deserves a home that reflects their aspirations 
                      and enhances their lifestyle.
                    </p>
                    <p>
                      Over the years, we have successfully delivered 50+ residential projects across 
                      Bangalore's prime locations, housing over 5,000 happy families. Our commitment 
                      to quality, innovation, and customer satisfaction has earned us recognition as 
                      one of the city's most reliable developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - RERA Section (1/3 width) */}
            <div className="md:col-span-1 flex flex-col justify-start mt-16">
              <div className="bg-black border border-gray-800 rounded-lg p-6">
                <h5 className="text-lg font-semibold text-white mb-3 text-center">RERA Registration</h5>
                <p className="text-sm text-gray-300 text-center break-all">
                  PRM/KA/RERA/1250/304/PR/131224/007290
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden">
          {/* About Urbanest Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
              ABOUT URBANEST REALTY
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Eastfield by Urbanest Realty in Hoskote features premium 3 BHK apartments in Bangalore with 91% open space, twin 25-storey towers, and only 200 exclusive corner homes, just 900m from STRR, offering luxury living with excellent connectivity and lifestyle amenities.
            </p>
          </div>

          {/* Our Legacy Section - Mobile */}
          <div className="mb-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">Our Legacy</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Founded with a vision to transform Bangalore's residential landscape, Urbanest Realty 
                    has emerged as a trusted name in premium real estate development. Our journey began 
                    with a simple belief: every family deserves a home that reflects their aspirations 
                    and enhances their lifestyle.
                  </p>
                  <p>
                    Over the years, we have successfully delivered 50+ residential projects across 
                    Bangalore's prime locations, housing over 5,000 happy families. Our commitment 
                    to quality, innovation, and customer satisfaction has earned us recognition as 
                    one of the city's most reliable developers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RERA Section */}
          <div className="text-center">
            <div className="bg-black border border-gray-800 rounded-lg p-4 max-w-md mx-auto">
              <h5 className="text-lg font-semibold text-white mb-2">RERA Registration</h5>
              <p className="text-sm text-gray-300">
                PRM/KA/RERA/1250/304/PR/131224/007290
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}