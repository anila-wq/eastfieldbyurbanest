import { Download, Map, FileText } from 'lucide-react';
import { Button } from '../ui/button';

export default function DocumentsSection() {
  const documents = [
    {
      id: 'floor-plan',
      title: 'Floor Plan',
      icon: Map,
      description: 'View detailed floor layouts'
    },
    {
      id: 'master-plan',
      title: 'Master Plan',
      icon: FileText,
      description: 'Explore project master plan'
    },
    {
      id: 'brochure',
      title: 'Brochure',
      icon: Download,
      description: 'Download project brochure'
    }
  ];

  const handleDocumentClick = (docType: string) => {
    // Handle document download/view logic
    console.log(`Opening ${docType}`);
  };

  return (
    <></>
  );
}