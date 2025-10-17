import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const pricingData = [
  { tower: 'A', unit: '1', sqft: '1746', facing: 'East', price: '₹1.25 Cr* Onwards' },
  { tower: 'A', unit: '2', sqft: '1766', facing: 'West', price: '₹1.28 Cr* Onwards' },
  { tower: 'A', unit: '3', sqft: '1886', facing: 'East', price: '₹1.35 Cr* Onwards' },
  { tower: 'A', unit: '4', sqft: '1746', facing: 'West', price: '₹1.25 Cr* Onwards' },
  { tower: 'B', unit: '1', sqft: '1852', facing: 'South', price: '₹1.32 Cr* Onwards' },
  { tower: 'B', unit: '2', sqft: '1766', facing: 'South', price: '₹1.28 Cr* Onwards' },
  { tower: 'B', unit: '3', sqft: '1744', facing: 'North', price: '₹1.26 Cr* Onwards' },
  { tower: 'B', unit: '4', sqft: '1766', facing: 'North', price: '₹1.28 Cr* Onwards' },
];

export default function ConfigurationsPricing() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Configurations & Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At Eastfield by Urbanest Realty you will find the perfect home to match your lifestyle. 
            Choose from a variety of thoughtfully designed smart residences:
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-white font-semibold">Tower</TableHead>
                      <TableHead className="text-white font-semibold">Unit No:</TableHead>
                      <TableHead className="text-white font-semibold">Sqft</TableHead>
                      <TableHead className="text-white font-semibold">Facing</TableHead>
                      <TableHead className="text-white font-semibold">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pricingData.map((item, index) => (
                      <TableRow key={index} className="border-gray-700 hover:bg-gray-700">
                        <TableCell className="font-medium text-white">{item.tower}</TableCell>
                        <TableCell className="text-gray-300">{item.unit}</TableCell>
                        <TableCell className="text-gray-300">{item.sqft}</TableCell>
                        <TableCell className="text-gray-300">{item.facing}</TableCell>
                        <TableCell className="text-white font-semibold">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Starting from <span className="text-2xl font-bold text-white">INR 1.39 Cr*</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3">
              Get Detailed Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3">
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}