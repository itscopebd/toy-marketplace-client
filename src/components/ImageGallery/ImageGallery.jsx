import { useState } from 'react';
import { Gallery } from "react-grid-gallery";
// import { images as IMAGES } from "./images";
const ImageGallery = () => {
    const [images, setImages] = useState(IMAGES);
 
    const handleSelect = (index) => {
        const nextImages = images.map((image, i) =>
          i === index ? { ...image, isSelected: !image.isSelected } : image
        );
        setImages(nextImages);
      };
    
    return (
        <div>
             <Gallery images={images} />
        </div>
    );
};

export default ImageGallery;