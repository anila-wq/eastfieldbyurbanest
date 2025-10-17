import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const amenities = [
  {
    title: "15000 sqft Club House",
    description: "Expansive social hub for community gatherings",
    image: "figma:asset/c03b50ce-e9c1-4ccb-93ea-61be6ecfe9df.png"
  },
  {
    title: "Lavish Swimming Pool",
    description: "Resort-style pool for ultimate relaxation",
    image: "figma:asset/d6e06fea-9549-40b1-b6f9-0094bd97a9f9.png"
  },
  {
    title: "Women's Swimming Pool",
    description: "Exclusive pool facility for women",
    image: "figma:asset/d6e06fea-9549-40b1-b6f9-0094bd97a9f9.png"
  },
  {
    title: "Community Events",
    description: "Vibrant social gatherings and celebrations",
    image: "figma:asset/1b2a2dbc-f7f2-41b1-8b3b-bf8e5e5e85b6.png"
  },
  {
    title: "Business Centre",
    description: "Modern workspace for professionals",
    image: "figma:asset/a6e6f4f4-2334-4c6a-8e9a-2d2e8e8e8e8e.png"
  },
  {
    title: "Yoga Deck",
    description: "Peaceful space for wellness activities",
    image: "figma:asset/c03b50ce-e9c1-4ccb-93ea-61be6ecfe9df.png"
  },
  {
    title: "Kids Play Area",
    description: "Safe and fun space for children",
    image: "figma:asset/91a39b14-3a3b-4a02-ba36-59db8c94c4b3.png"
  },
  {
    title: "Pet Park",
    description: "Dedicated area for furry friends",
    image: "figma:asset/73b4567f-5432-4321-9876-543210987654.png"
  }
];

const additionalAmenities = [
  "Skating Rink", "Relax Zone", "Party Hall", "Indoor Work Station", 
  "Guest Rooms", "Spa & Salon Provision", "Cricket Pitch"
];

export default function Amenities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(amenities.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentAmenities = () => {
    const start = currentSlide * itemsPerSlide;
    return amenities.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Experience a Lifestyle Like Never Before
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Eastfield by Urbanest, ensuring every day is as comfortable and luxurious as possible.
          </p>
        </div>

        {/* Amenities Carousel */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCurrentAmenities().map((amenity, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-white">{amenity.title}</h3>
                    <p className="text-sm text-gray-300">{amenity.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
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

        {/* Additional Amenities Grid */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">Additional Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalAmenities.map((amenity, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                <p className="text-white font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}