import { Card, CardContent } from '../ui/card';
import { 
  Shield, 
  Award, 
  Leaf, 
  Users, 
  Building, 
  MapPin,
  Star,
  Clock
} from 'lucide-react';

const uspItems = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Prime Location",
    description: "500m from STRR with excellent connectivity to Airport, ITPL, and IT corridors",
    highlight: "Strategic"
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Low Density Living",
    description: "Only 200 premium units across twin towers ensuring privacy and exclusivity",
    highlight: "Exclusive"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "91% Open Space",
    description: "Vast green spaces with sustainable design and eco-friendly features",
    highlight: "Green Living"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "RERA Approved",
    description: "PRM/KA/RERA/1250/304/PR/131224/007290 - Complete transparency and trust",
    highlight: "Trusted"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Specifications",
    description: "High-quality finishes and fittings with attention to every detail",
    highlight: "Luxury"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "25+ Years Experience",
    description: "Urbanest Realty's proven track record in delivering quality homes",
    highlight: "Experience"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "40+ World-Class Amenities",
    description: "Resort-style living with comprehensive facilities for all age groups",
    highlight: "Complete"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Ready to Move",
    description: "Well-planned construction timeline ensuring timely possession",
    highlight: "Reliable"
  }
];

export default function ProjectUSP() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Why Choose Eastfield by Urbanest?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the unique advantages that make Eastfield the perfect choice for your dream home.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {uspItems.map((item, index) => (
            <Card key={index} className="bg-black border-gray-800 hover:bg-gray-800 transition-all duration-300 group">
              <CardContent className="p-6 text-center relative overflow-hidden">
                {/* Highlight Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-black border-gray-800 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Experience Luxury Living?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join the select few who understand that home is not just a place to live, but a lifestyle to experience. 
                Eastfield by Urbanest offers everything you need for a perfect life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
                  Schedule Site Visit
                </button>
                <button className="border border-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Download Brochure
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}