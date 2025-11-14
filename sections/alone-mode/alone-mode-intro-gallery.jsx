import React, { useState } from "react";
import "./alone-mode-gallery.css";

function IntroGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/intro-1.png",
    "/intro-2.png",
    "/intro-3.png",
  ];

  return (
    <div>
      {/* Gallery grid */}
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
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

export default IntroGallery;
