import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const masterPlans = [
  {
    title: "Master Plan Overview",
    description: "Complete project layout with twin towers and amenities",
    image: "figma:asset/master-plan-1.png"
  }
];

const towerAFloorPlans = [
  {
    title: "Tower A - Unit 1 (East Facing)",
    description: "1746 sq ft | 3 BHK | Premium East Facing Unit",
    image: "figma:asset/tower-a-unit-1.png"
  },
  {
    title: "Tower A - Unit 2 (West Facing)", 
    description: "1766 sq ft | 3 BHK | Spacious West Facing Unit",
    image: "figma:asset/tower-a-unit-2.png"
  },
  {
    title: "Tower A - Unit 3 (East Facing)",
    description: "1886 sq ft | 3 BHK | Largest East Facing Unit",
    image: "figma:asset/tower-a-unit-3.png"
  },
  {
    title: "Tower A - Unit 4 (West Facing)",
    description: "1746 sq ft | 3 BHK | Premium West Facing Unit",
    image: "figma:asset/c3f18e0c-fdc0-4f7f-9b25-3a7b8c8f0e2d.png"
  }
];

const towerBFloorPlans = [
  {
    title: "Tower B - Unit 1 (South Facing)",
    description: "1852 sq ft | 3 BHK | Premium South Facing Unit",
    image: "figma:asset/7e1c8d9b-2e5f-4a8b-9c7d-1e2f3a4b5c6d.png"
  },
  {
    title: "Tower B - Unit 2 (South Facing)",
    description: "1766 sq ft | 3 BHK | Spacious South Facing Unit", 
    image: "figma:asset/tower-b-unit-2.png"
  },
  {
    title: "Tower B - Unit 3 (North Facing)",
    description: "1744 sq ft | 3 BHK | Premium North Facing Unit",
    image: "figma:asset/4f7a8b9c-3d5e-4f8b-9c7d-2e3f4a5b6c7d.png"
  },
  {
    title: "Tower B - Complete Layout",
    description: "Complete floor layout showing all units in Tower B",
    image: "figma:asset/9b8a7c6d-4e5f-4a8b-9c7d-3e4f5a6b7c8d.png"
  }
];

interface FloorPlanCarouselProps {
  title: string;
  plans: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

function FloorPlanCarousel({ title, plans }: FloorPlanCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-white text-center">{title}</h3>
      
      <div className="relative">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-white mb-2">{plans[currentSlide].title}</h4>
              <p className="text-gray-300">{plans[currentSlide].description}</p>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src={plans[currentSlide].image}
                alt={plans[currentSlide].title}
                className="w-full h-[500px] object-contain bg-white rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="border-gray-600 text-white hover:bg-gray-800"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function FloorPlans() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="w-full px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tower Plans & Floor Plans
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore detailed floor plans for both towers with various unit configurations and layouts.
          </p>
        </div>

        {/* Master Plan */}
        <FloorPlanCarousel title="Master Plan" plans={masterPlans} />

        {/* Tower A Floor Plans */}
        <FloorPlanCarousel title="Tower A Floor Plans" plans={towerAFloorPlans} />

        {/* Tower B Floor Plans */}
        <FloorPlanCarousel title="Tower B Floor Plans" plans={towerBFloorPlans} />
      </div>
    </section>
  );
}