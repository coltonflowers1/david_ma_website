import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Button } from './ui/button';
import { VimeoPlayer } from './VimeoPlayer';

interface Video {
  id: string;
  vimeoId: string;
  title: string;
  subtitle?: string;
  duration: string;
  thumbnail: string;
}

export function Reel() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      vimeoId: "123456789", // Replace with actual Vimeo video ID
      title: "Grace Period",
      subtitle: "Monologue",
      duration: "00:31",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop"
    },
    {
      id: "2",
      vimeoId: "987654321", // Replace with actual Vimeo video ID
      title: "Stage and Screen Combat Reel 2025",
      subtitle: "",
      duration: "01:18",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
    },
    {
      id: "3",
      vimeoId: "456789123", // Replace with actual Vimeo video ID
      title: "Martial Arts Reel 2025",
      subtitle: "HDR",
      duration: "00:38",
      thumbnail: "https://images.unsplash.com/photo-1555597827-e71c00eae900?w=600&h=300&fit=crop"
    }
  ];

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="relative group cursor-pointer">
              <div 
                className="aspect-video bg-gray-800 rounded-lg overflow-hidden"
                onClick={() => openVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <Button
                    size="lg"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </Button>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-yellow-400 text-lg font-medium">{video.title}</h3>
                  {video.subtitle && (
                    <p className="text-white text-sm">{video.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Vimeo Player */}
            <VimeoPlayer
              videoId={selectedVideo.vimeoId}
              title={selectedVideo.title}
              autoplay={true}
              className="w-full h-full rounded-lg"
            />
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeVideo}
          />
        </div>
      )}
    </div>
  );
}