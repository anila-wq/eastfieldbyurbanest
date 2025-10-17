import image_c448b27b0a7e484978529def6d6f246f89740e41 from 'figma:asset/c448b27b0a7e484978529def6d6f246f89740e41.png';
import image_cacc7d0542330c66e3ec96e4dd0de6bf4fa060f6 from 'figma:asset/cacc7d0542330c66e3ec96e4dd0de6bf4fa060f6.png';
import image_5b6627d12f65b44f23bdd2c38b35d9d19f1ed4d4 from 'figma:asset/5b6627d12f65b44f23bdd2c38b35d9d19f1ed4d4.png';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Home, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const otherProjects = [
  {
    id: '1',
    title: 'Eastfield',
    location: 'Devanahalli, Bangalore',
    image: image_5b6627d12f65b44f23bdd2c38b35d9d19f1ed4d4,
    price: '₹1.39 Cr Onwards',
    unitTypes: ['3 BHK'],
    area: '1744-1886 sq ft',
    status: 'ready' as const,
    features: ['Twin Towers', 'Airport Proximity', '40+ Amenities']
  },
  {
    id: '2',
    title: 'Serene Exotica',
    location: 'Whitefield, Bangalore',
    image: image_cacc7d0542330c66e3ec96e4dd0de6bf4fa060f6,
    price: '₹1.8 Cr Onwards',
    unitTypes: ['2 BHK', '3 BHK'],
    area: '1200-1600 sq ft',
    status: 'under-construction' as const,
    features: ['Resort Living', 'Premium Amenities', 'Gated Community']
  },
  {
    id: '3',
    title: 'Elite-35',
    location: 'Sarjapur Road, Bangalore',
    image: image_c448b27b0a7e484978529def6d6f246f89740e41,
    price: '₹1.5 Cr Onwards',
    unitTypes: ['2 BHK', '3 BHK'],
    area: '1100-1500 sq ft',
    status: 'upcoming' as const,
    features: ['Modern Design', 'Green Living', 'Strategic Location']
  }
];

const statusColors = {
  'ready': 'bg-green-900 text-green-300 border-green-800',
  'under-construction': 'bg-orange-900 text-orange-300 border-orange-800',
  'upcoming': 'bg-blue-900 text-blue-300 border-blue-800'
};

const statusLabels = {
  'ready': 'Under Construction',
  'under-construction': 'On Going',
  'upcoming': 'Completed'
};

export default function OtherProjects() {
  return (
    <section className="pt-8 pb-0 lg:pt-12 lg:pb-0 bg-gray-900 -mb-8">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Other Projects
          </h2>

        </div>

        {/* Horizontal Scrolling Projects */}
        <div className="mb-12">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max">
              {otherProjects.map((project) => (
                <Card key={project.id} className="bg-black border-gray-800 hover:bg-gray-900 transition-colors group overflow-hidden flex-shrink-0 w-80">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className={`absolute top-3 left-3 ${statusColors[project.status]}`}>
                        {statusLabels[project.status]}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                        <div className="flex items-center text-gray-300 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                      </div>



                      {/* Features */}
                      <div className="mb-4">

                      </div>

                      <div className="border-t border-gray-800 pt-4">

                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Scroll Instruction */}
          <div className="flex justify-center mt-6">

          </div>
        </div>


      </div>
    </section>
  );
}