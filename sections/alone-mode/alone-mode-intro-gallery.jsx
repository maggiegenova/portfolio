import React, { useState } from "react";
import "./alone-mode-gallery.css";
import introImageOne from "../../app/images/intro-1.png";
import introImageTwo from "../../app/images/intro-2.png";
import introImageThree from "../../app/images/intro-3.png";

function IntroGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    introImageOne,
    introImageTwo,
    introImageThree,
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

export default IntroGallery;
