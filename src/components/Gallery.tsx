import React,{ useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}images/gallery/gallery.json`)
      .then(res => res.json())
      .then((files: { src: string; alt: string }[]) => {
        const images = files.map((file, index) => ({
          id: index + 1,
          src: `images/gallery/${file.src}`,        
          alt: file.alt
        }));
        setGalleryImages(images);
      })
      .catch(err => console.error('Error loading gallery:', err));
  }, []);

  // Simple masonry using CSS Grid
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div 
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridAutoRows: 'masonry'
          }}
        >
          {galleryImages.map(image => (
            <div key={image.id} className="break-inside-avoid">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}