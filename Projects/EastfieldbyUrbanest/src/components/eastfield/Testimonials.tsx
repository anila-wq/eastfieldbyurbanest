import { Card, CardContent } from '../ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh & Priya Sharma",
    location: "Eastfield Residents",
    rating: 5,
    testimonial: "Eastfield has exceeded our expectations in every way. The spacious 3BHK, world-class amenities, and excellent connectivity to ITPL make it perfect for our family. Urbanest Realty's attention to detail is remarkable.",
    avatar: "RS"
  },
  {
    name: "Arjun Patel",
    location: "IT Professional",
    rating: 5,
    testimonial: "The STRR connectivity is a game-changer! My commute to Electronic City is just 40 minutes now. The premium specifications and 91% open space create a resort-like atmosphere. Best investment decision ever.",
    avatar: "AP"
  },
  {
    name: "Sneha & Vikram Reddy",
    location: "Young Family",
    rating: 5,
    testimonial: "We love the low-density community concept with only 200 units. Our kids enjoy the vast play areas and we appreciate the security. The proximity to good schools was a major deciding factor for us.",
    avatar: "SR"
  },
  {
    name: "Dr. Meera Krishnan",
    location: "Healthcare Professional",
    rating: 5,
    testimonial: "The airport connectivity is fantastic for my frequent travels. The 15000 sqft clubhouse and amenities like yoga deck help me maintain work-life balance. Urbanest has created something truly special.",
    avatar: "MK"
  },
  {
    name: "Rohit & Kavya Mehta",
    location: "Business Owners",
    rating: 5,
    testimonial: "The business centre and modern infrastructure support our work-from-home needs perfectly. The premium finishes and attention to detail in every unit reflect the quality we expected from Urbanest Realty.",
    avatar: "RM"
  },
  {
    name: "Deepak Gupta",
    location: "Investment Advisor",
    rating: 5,
    testimonial: "From an investment perspective, Eastfield's location near STRR and the planned infrastructure development make it an excellent choice. The RERA approval gives additional confidence in the project.",
    avatar: "DG"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            What Our Residents Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from families who have made Eastfield their home and experience the Urbanest difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-gray-800 hover:bg-white/15 transition-colors backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-300">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-gray-400" />
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-white">200+</p>
            <p className="text-sm text-gray-300">Happy Families</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">4.9★</p>
            <p className="text-sm text-gray-300">Average Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-sm text-gray-300">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">25+</p>
            <p className="text-sm text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}