import { Card, CardContent } from '../ui/card';
import { 
  MapPin, 
  Home, 
  Droplet, 
  Zap, 
  Star, 
  Coffee 
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const highlights = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Strategic Location",
    description: "Well-connected to major hubs like ITPL, Airport, Sarjapur, Electronic City, STRR and Chennai Express Highway"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Spacious Living",
    description: "Experience airy, open layouts designed to offer unparalleled comfort and freedom in every corner"
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Water Conservation",
    description: "Sustainable water solutions with rainwater harvesting and 100 days of drinking water storage capacity"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Conservation",
    description: "Solar energy solutions to promote sustainable, cost-efficient lifestyle while reducing conventional energy reliance"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Premium Specifications",
    description: "Crafted with attention to detail, delivering superior quality and timeless elegance in every corner"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "40+ Amenities",
    description: "Ensuring comfort, fun, and convenience for every age and lifestyle with world-class facilities"
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="w-full px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Eastfield by Urbanest - Project Highlights
          </h2>
        </div>

        {/* Feature Image */}
        <div className="mb-12">
          <ImageWithFallback
            src="figma:asset/91a39b14-3a3b-4a02-ba36-59db8c94c4b3.png"
            alt="Eastfield family outdoor activities"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Highlights Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{highlight.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}