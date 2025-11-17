import React, { useState } from "react";
import "./alone-mode-gallery.css";
import introImageFour from "../../app/images/intro-4.png";
import introImageFive from "../../app/images/intro-5.png";

function AloneModeHomePageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    introImageFour,
    introImageFive,
  ];

  return (
    <div>
      {/* Gallery grid */}
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {/* Overlay (lightbox) */}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Phase four gallery" className="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default AloneModeHomePageGallery;
