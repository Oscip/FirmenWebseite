import React, { useState } from 'react';
import Image1 from '../assets/limeli-pictures/Test/Picture2.png';
import Image2 from '../assets/limeli-pictures/Test/Picture2.png';
import Image3 from '../assets/limeli-pictures/Test/Picture2.png';
import Image4 from '../assets/limeli-pictures/Test/Picture2.png';
import Image5 from '../assets/limeli-pictures/Test/Picture2.png';



const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <div className="image-gallery">
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="gallery-image"
                        onClick={() => openImage(image)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeImage}>
                    <img src={selectedImage} alt="Enlarged view" className="lightbox-image" />
                    <button className="close-btn" onClick={closeImage}>X</button>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;