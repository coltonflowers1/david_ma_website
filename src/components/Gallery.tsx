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
    fetch('/images/gallery/gallery.json')
      .then(res => res.json())
      .then((files: { src: string; alt: string }[]) => {
        // Map the JSON objects to include an ID for React keys
        const images = files.map((file, index) => ({
          id: index + 1,        // unique ID for key
          src: `images/gallery/${file.src}`,        
          alt: file.alt         // already meaningful alt text
        }));
        setGalleryImages(images);
      })
      .catch(err => console.error('Error loading gallery:', err));
  }, []);


  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div key={image.id} className="aspect-[4/5] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}