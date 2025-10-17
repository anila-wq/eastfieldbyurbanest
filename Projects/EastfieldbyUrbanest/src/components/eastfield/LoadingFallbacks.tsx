import { memo } from 'react';

// Simple fallback for failed components
export const ComponentFallback = memo(({ sectionName }: { sectionName: string }) => (
  <div className="py-16 bg-gray-900 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-white mb-4">{sectionName}</h2>
      <p className="text-gray-400 mb-6">This section is temporarily unavailable</p>
      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
));

// Fast loading placeholder - minimal rendering to prevent timeout
export const FastPlaceholder = memo(({ height = "h-32" }: { height?: string }) => (
  <div className={`${height} bg-black flex items-center justify-center`}>
    <div className="w-6 h-6 border-2 border-gray-600 border-t-[#c9980b] rounded-full animate-spin"></div>
  </div>
));

// Section-specific fallbacks
export const GalleryFallback = memo(() => (
  <ComponentFallback sectionName="Gallery" />
));

export const ProjectOverviewFallback = memo(() => (
  <ComponentFallback sectionName="Project Overview" />
));

export const LocationFallback = memo(() => (
  <ComponentFallback sectionName="Location" />
));

export const FAQFallback = memo(() => (
  <ComponentFallback sectionName="FAQ" />
));

export const AboutUrbanestFallback = memo(() => (
  <ComponentFallback sectionName="About Urbanest" />
));

export const ReraFallback = memo(() => (
  <ComponentFallback sectionName="RERA Information" />
));

export const FooterFallback = memo(() => (
  <ComponentFallback sectionName="Footer" />
));