import React,{ useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry from 'react-masonry-css';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export function Gallery() {
  const [columnCount, setColumnCount] = useState(1);
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
    useEffect(() => {
      const updateColumnCount = () => {
        const width = window.innerWidth;
        if (width >= 1280) {
          setColumnCount(4);
        } else if (width >= 1024) {
          setColumnCount(3);
        } else if (width >= 640) {
          setColumnCount(2);
        } else {
          setColumnCount(1);
        }
      };
  
      updateColumnCount();
      window.addEventListener('resize', updateColumnCount);
      return () => window.removeEventListener('resize', updateColumnCount);
    }, []);
  
    return (
      <div className="bg-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div 
            style={{
              columnCount,
              columnGap: '1.5rem',
              columnFill: 'balance',
            }}
          >
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="mb-6 overflow-hidden rounded-lg group"
                style={{ 
                  breakInside: 'avoid',
                  display: 'inline-block', 
                  width: '100%' 
                }}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
    // <div className="bg-black min-h-screen">
    //   <div className="max-w-7xl mx-auto px-6 py-16">
    //     <Masonry
    //       // breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
    //       breakpointCols={3}
    //       className="my-masonry-grid"
    //       columnClassName="my-masonry-grid_column"
    //     >
    //       {galleryImages.map(image => (
    //         <div key={image.id}>
    //           <ImageWithFallback
    //             src={image.src}
    //             alt={image.alt}
    //             className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    //           />
    //         </div>
    //       ))}
    //     </Masonry>
    //   </div>
    // </div>
  
