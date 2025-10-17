import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Award, 
  Users, 
  Building, 
  Leaf, 
  Shield, 
  Star,
  CheckCircle 
} from 'lucide-react';

const achievements = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "50+ Projects",
    description: "Delivered across prime locations"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "10,000+ Families",
    description: "Living in our premium communities"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "25+ Awards",
    description: "For architectural excellence"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "98% Satisfaction",
    description: "Customer happiness rating"
  }
];

const highlights = [
  "Premium locations in the heart of the city",
  "World-class amenities and facilities", 
  "Sustainable and eco-friendly construction",
  "24/7 security and concierge services",
  "Smart home technology integration",
  "Dedicated parking and recreational spaces"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <Badge className="mb-4 bg-amber-100 text-amber-800">
              About LuxeHomes
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redefining Luxury Living for Over 
              <span className="text-amber-600"> 25 Years</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are committed to creating exceptional residential experiences that blend modern design, 
              premium amenities, and sustainable living. Our legacy spans over two decades of delivering 
              homes that inspire and elevate everyday life.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">LEED Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-amber-600">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}