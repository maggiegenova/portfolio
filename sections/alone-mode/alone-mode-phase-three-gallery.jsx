import React, { useState } from "react";
import "./alone-mode-gallery.css";

function AloneModeGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/alone-mode-solution.png",
    "/bond-touch.png",
    "/challenge-application.png",
    "/content-digest.png",
    "/ring-limiter.png",
    "/sbsn.png",
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
          <img src={selectedImage} alt="Full size" className="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default AloneModeGallery;
