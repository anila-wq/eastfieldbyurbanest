import { Button } from './ui/button';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: '1',
    title: 'Luxe Heights',
    location: 'Downtown Metropolitan',
    image: 'https://images.unsplash.com/photo-1709098897901-3899213c2493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzU4NDUyOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹2.5 Cr',
    unitTypes: ['2 BHK', '3 BHK'],
    area: '1200-1800 sq ft',
    possession: 'Dec 2024',
    status: 'ready' as const
  },
  {
    id: '2',
    title: 'Skyline Residences',
    location: 'Business District',
    image: 'https://images.unsplash.com/photo-1733630769260-8bece4226f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMGx1eHVyeXxlbnwxfHx8fDE3NTg1MTk5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹3.2 Cr',
    unitTypes: ['3 BHK', '4 BHK'],
    area: '1600-2200 sq ft',
    possession: 'Mar 2025',
    status: 'under-construction' as const
  },
  {
    id: '3',
    title: 'Garden Villas',
    location: 'Serene Suburbs',
    image: 'https://images.unsplash.com/photo-1757924330358-a48d65664dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwYXBhcnRtZW50JTIwY29tcGxleHxlbnwxfHx8fDE3NTg1MTk5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: '₹4.8 Cr',
    unitTypes: ['4 BHK', 'Penthouse'],
    area: '2400-3500 sq ft',
    possession: 'Jun 2025',
    status: 'upcoming' as const
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of luxury residences, each designed to offer the finest in modern living and architectural excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="hover:bg-amber-50 hover:border-amber-300">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}