import { useState, memo, useMemo, useCallback } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Core essential images only - lazy load others
import poolImage from 'figma:asset/e7d65534142b783e73ab42c3efab25273244e860.png';
import coupleBalconyImage from 'figma:asset/8cc8b7c128c8f624e773f3848455e8025715ac4a.png';
import newFamilyTogetherImage from 'figma:asset/7bf07920dd546a9118b17d15aa3bedab2c19a9d2.png';
import newFriendsCelebrationImage from 'figma:asset/d58fb9b09d3234907c01f271cf8f487b36658b94.png';
import newFamilyRainImage from 'figma:asset/4bb47f72d9245f9190a71316599bd9935c361ec5.png';
import modernWomanImage from 'figma:asset/242fa30f22952c705cf7ad66e1276e57aa611188.png';
import eveningCityViewImage from 'figma:asset/ce3ba545c4f9df52a265432e033a394e7a527713.png';
import coupleNightViewImage from 'figma:asset/0255fd4e805c287f1244bad40a5b5eb54f3c4881.png';
import romanticSunsetImage from 'figma:asset/bf35908dcfe10cf970e0afc7bf0fe6a547000239.png';

// Video thumbnail image
import videoThumbnailImage from 'figma:asset/2e47635dd8e1e6b1e439cd73e790bed477fdd071.png';

// New apartment interior images
import apartmentLivingDiningImage from 'figma:asset/2687f3f9905cac3f269b933757f72c565c95dcc5.png';
import apartmentBalconyViewImage from 'figma:asset/022b4a9cbf4b6ef670a1d04be29242e31703fb52.png';
import apartmentModernLivingImage from 'figma:asset/363797b7f3f89584a0305af7c2f778741962a1bf.png';

// Latest apartment interior showcase images
import luxuryLivingRoomImage from 'figma:asset/f91f5f9bfdaaa2e6aa5e0d16abaa677e389c15dd.png';
import masterBedroomImage from 'figma:asset/e2758c5b7ce25a00bea790752cad0c224315633a.png';
import modernKitchenImage from 'figma:asset/4bf5896c0facad2556298d7d81aa65a472eb161e.png';

// Building exterior and aerial views
import buildingExteriorEveningImage from 'figma:asset/5b6627d12f65b44f23bdd2c38b35d9d19f1ed4d4.png';
import buildingAerialViewImage from 'figma:asset/3ed87ae776dca51e00eeb7e87d9fd631f8d6edfe.png';
import buildingDaylightViewImage from 'figma:asset/5768c060f4f4f3c07cd347123f255370171f3e54.png';
import towerPlansImage from 'figma:asset/a0a1b5021344590f65e077cb514c480246d7b214.png';

// Optimized gallery images - prioritize actual apartment interiors first
const galleryImages = [
  {
    title: "Connected to 2 Highways",
    description: "Bird's eye view showcasing Eastfield's strategic location and architectural brilliance",
    image: buildingAerialViewImage
  },
  {
    title: "Eastfield - Twin Towers in Paradise",
    description: "Majestic twin 25-storey towers surrounded by lush greenery and serene landscapes",
    image: buildingDaylightViewImage
  },
  {
    title: "Twin Tower Majesty - NightView",
    description: "Stunning evening view of Eastfield's iconic twin 25-storey towers",
    image: buildingExteriorEveningImage
  },
  {
    title: "Luxury Living Room",
    description: "Sophisticated living space with ambient lighting and designer finishes",
    image: luxuryLivingRoomImage
  },
  {
    title: "Master Bedroom",
    description: "Elegant bedroom with premium lighting and contemporary design",
    image: masterBedroomImage
  },
  {
    title: "Modern Kitchen",
    description: "State-of-the-art kitchen with premium appliances and sleek cabinetry",
    image: modernKitchenImage
  },
  {
    title: "Living & Dining Area",
    description: "Elegant open-plan living with modern furnishings and stunning interiors",
    image: apartmentLivingDiningImage
  },
  {
    title: "Private Balcony",
    description: "Spacious balcony with comfortable seating and beautiful city views",
    image: apartmentBalconyViewImage
  },
  {
    title: "Modern Living Space",
    description: "Contemporary living room with luxury finishes and premium amenities",
    image: apartmentModernLivingImage
  },
  {
    title: "Multi-Generational Living",
    description: "Perfect homes for families of all sizes to create lasting memories",
    image: newFamilyTogetherImage
  },
  {
    title: "Evening City Views",
    description: "Marvel at stunning city lights from your private sanctuary",
    image: eveningCityViewImage
  },
  {
    title: "91% Open Space",
    description: "Expansive green landscapes and open areas for a healthier lifestyle",
    image: newFamilyRainImage
  }
];

// Updated video gallery with YouTube video
const galleryVideos = [
  {
    title: "Eastfield Project Showcase",
    description: "Explore the stunning Eastfield development by Urbanest Realty",
    thumbnail: videoThumbnailImage,
    videoUrl: "https://www.youtube.com/embed/7hpscRlSKQE",
    youtubeId: "7hpscRlSKQE",
    duration: "Featured"
  }
];

// Non-clickable image card component
const ImageCard = memo(({ image, index }: { image: any; index: number }) => {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:bg-gray-800 transition-colors flex-shrink-0 w-80">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <ImageWithFallback
            src={image.image}
            alt={image.title}
            className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
            style={{ willChange: 'auto' }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg text-white mb-1 text-center">{image.title}</h3>
        </div>
      </CardContent>
    </Card>
  );
});

// Enhanced video card component with modal functionality
const VideoCard = memo(({ video, index, onVideoClick }: { video: any; index: number; onVideoClick: (video: any) => void }) => (
  <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:bg-gray-800 transition-colors flex-shrink-0 w-80">
    <CardContent className="p-0">
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={() => onVideoClick(video)}
      >
        <ImageWithFallback
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-105"
          loading="lazy"
          style={{ willChange: 'auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#c9980b] rounded-full p-4 transition-transform duration-200 group-hover:scale-110">
            <Play className="w-6 h-6 text-black fill-current" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </span>
        </div>

        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg text-white mb-1">{video.title}</h3>
          <p className="text-sm text-gray-300">{video.description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
));

const Gallery = memo(function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  // Optimized for performance with expanded apartment interior images
  const visibleImages = useMemo(() => galleryImages.slice(0, 13), []); // Show all gallery images including latest interiors, exterior views, and tower plans
  const visibleVideos = useMemo(() => galleryVideos.slice(0, 1), []); // Show 1 video
  
  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  const handleVideoClick = useCallback((video: any) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  }, []);

  const closeVideoModal = useCallback(() => {
    setShowVideoModal(false);
    setSelectedVideo(null);
  }, []);

  return (
    <section 
      id="gallery" 
      className="pt-4 pb-1 lg:pt-6 lg:pb-2 bg-gray-900 scroll-mt-20"
    >
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-normal mb-3 text-white">
            GALLERY
          </h2>
          <div className="flex justify-center items-center gap-2 max-w-3xl mx-auto -mb-6">
            <button
              onClick={() => handleTabChange('photos')}
              className={`text-lg transition-colors duration-300 ${
                activeTab === 'photos' 
                  ? 'text-[#c9980b] font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Photos
            </button>
            <span className="text-gray-500">|</span>
            <button
              onClick={() => handleTabChange('videos')}
              className={`text-lg transition-colors duration-300 ${
                activeTab === 'videos' 
                  ? 'text-[#c9980b] font-semibold' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Videos
            </button>
          </div>
          <div className="flex justify-center mt-6">

          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="relative">
          {activeTab === 'photos' ? (
            <div>
              {/* Photos Gallery */}
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max">
                  {visibleImages.map((image, index) => (
                    <ImageCard key={`photo-${index}`} image={image} index={index} />
                  ))}
                </div>
              </div>

              {/* Scroll Instruction for Photos */}
              <div className="flex justify-center mt-4">

              </div>
            </div>
          ) : (
            <div>
              {/* Videos Gallery */}
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max">
                  {visibleVideos.map((video, index) => (
                    <VideoCard 
                      key={`video-${index}`} 
                      video={video} 
                      index={index} 
                      onVideoClick={handleVideoClick}
                    />
                  ))}
                </div>
              </div>

              {/* Scroll Instruction for Videos */}
              <div className="flex justify-center mt-4">
                
              </div>
            </div>
          )}
        </div>

        {/* Gallery Stats */}

      </div>

      {/* Video Modal */}
      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="bg-black border-gray-800 max-w-4xl w-full h-auto p-0 overflow-hidden">
          {/* Accessible Dialog Title and Description - visually hidden */}
          <DialogTitle className="sr-only">
            {selectedVideo?.title || 'Video Player'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedVideo?.description || 'Watch the video content'}
          </DialogDescription>

          {/* Close Button */}
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Content */}
          {selectedVideo && (
            <div className="relative w-full">
              {/* Video Title */}
              <div className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent p-6 pt-16">
                <h3 className="text-xl text-white mb-1">{selectedVideo.title}</h3>
                <p className="text-sm text-gray-300">{selectedVideo.description}</p>
              </div>

              {/* YouTube Video Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${selectedVideo.videoUrl}?autoplay=1&mute=1&rel=0&modestbranding=1&enablejsapi=1&playsinline=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
});

export default Gallery;
