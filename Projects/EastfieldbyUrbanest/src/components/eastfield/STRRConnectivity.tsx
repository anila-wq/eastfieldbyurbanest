import { Card, CardContent } from '../ui/card';
import { MapPin, Plane, Building, Clock } from 'lucide-react';

const connectivityData = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "500 Mtrs from STRR",
    description: "Direct access to Satellite Town Ring Road",
    color: "text-green-400"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "20 Minutes to Airport",
    description: "Quick connectivity to Kempegowda International Airport",
    color: "text-blue-400"
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "30 Minutes to ITPL",
    description: "Easy commute to International Tech Park Bangalore",
    color: "text-purple-400"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "40 Minutes Sarjapur & Electronic City",
    description: "Seamless access via STRR to major IT hubs",
    color: "text-orange-400"
  }
];

export default function STRRConnectivity() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Exceptional STRR Connectivity
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strategically positioned with unparalleled connectivity to major destinations via 
            Satellite Town Ring Road (STRR) for seamless urban mobility.
          </p>
        </div>

        {/* Connectivity Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectivityData.map((item, index) => (
            <Card key={index} className="bg-black border-gray-800 hover:bg-gray-800 transition-colors group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="bg-black border-gray-800 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Why STRR Connectivity Matters</h3>
              <p className="text-gray-300 leading-relaxed">
                The Satellite Town Ring Road (STRR) is a game-changing infrastructure that connects all major 
                IT corridors, the airport, and residential hubs. Living just 500 meters from STRR means you're 
                at the center of Bangalore's growth story, with unmatched convenience for work, travel, and lifestyle.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}