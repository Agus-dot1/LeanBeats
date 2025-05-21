import { useState, useEffect } from 'react';

// List of important images to preload
const imagesToPreload = [
  "https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg",
  "https://res.cloudinary.com/do17gdc0b/image/upload/v1747593291/0D57FE94-C257-4747-BDDF-1F444ACDBFC9_eexnof.png",
  "https://res.cloudinary.com/do17gdc0b/image/upload/v1747593286/D851250A-D700-4160-B0C3-5922A59BCB41_ezwcz9.png",
  "/icon-dark.svg",
  "/icon-light.svg",
  "/colabo.png"
];

export const useImagePreloader = () => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setImagesPreloaded(true);
          }
          resolve(img);
        };
        img.onerror = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setImagesPreloaded(true);
          }
          reject();
        };
      });
    };

    // Preload all images in parallel
    Promise.all(imagesToPreload.map(src => preloadImage(src)))
      .catch(err => {
        console.warn('Some images failed to preload', err);
        setImagesPreloaded(true); // Continue anyway
      });

    // Fallback in case some images fail to load
    const timeout = setTimeout(() => {
      if (!imagesPreloaded) {
        setImagesPreloaded(true);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, []);

  return { imagesPreloaded };
};