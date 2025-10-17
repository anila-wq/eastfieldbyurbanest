import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Home, Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    image: string;
    price: string;
    unitTypes: string[];
    area: string;
    possession: string;
    status: 'ready' | 'under-construction' | 'upcoming';
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    'ready': 'bg-green-100 text-green-800',
    'under-construction': 'bg-amber-100 text-amber-800',
    'upcoming': 'bg-blue-100 text-blue-800'
  };

  const statusLabels = {
    'ready': 'Ready to Move',
    'under-construction': 'Under Construction',
    'upcoming': 'Upcoming'
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className={`absolute top-3 left-3 ${statusColors[project.status]}`}>
          {statusLabels[project.status]}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Configuration:</span>
            <span className="font-medium">{project.unitTypes.join(', ')}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Area:</span>
            <span className="font-medium">{project.area}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Possession:</span>
            <span className="font-medium">{project.possession}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-lg font-bold text-amber-600">{project.price}</p>
            </div>
            <Button variant="outline" size="sm" className="hover:bg-amber-50 hover:border-amber-300">
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}