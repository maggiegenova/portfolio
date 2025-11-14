import React, { useState } from "react";
import "./alone-mode-gallery.css";

function AloneModePhaseFour() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/video-1.png",
    "/video-2.png",
    "/video-3.png",
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

export default AloneModePhaseFour;
