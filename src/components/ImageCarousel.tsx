import { useState, useEffect } from 'react';

const ImageCarousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch images from an API or set them manually
    const fetchedImages = ['/Kai.jpg', '/cocoon.png', '/cocoon-app.png'];
    setImages(fetchedImages);

    // Automatically slide the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fetchedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-400px flex items-center justify-center">
      <div style={{ height: '500px', width: '100%' }}>
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
