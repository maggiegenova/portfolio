import React, { useState } from "react";
import "./alone-mode-gallery.css";
import videoOne from "../../app/images/video-1.png";
import videoTwo from "../../app/images/video-2.png";
import videoThree from "../../app/images/video-3.png";

function AloneModePhaseFour() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    videoOne,
    videoTwo,
    videoThree,
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

export default AloneModePhaseFour;
