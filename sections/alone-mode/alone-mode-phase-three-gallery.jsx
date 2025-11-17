import React, { useState } from "react";
import "./alone-mode-gallery.css";
import aloneModeSolution from "../../app/images/alone-mode-solution.png";
import bondTouch from "../../app/images/bond-touch.png";
import challengeApplication from "../../app/images/challenge-application.png";
import contentDigest from "../../app/images/content-digest.png";
import ringLimiter from "../../app/images/ring-limiter.png";
import sbsn from "../../app/images/sbsn.png";

function AloneModeGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    aloneModeSolution,
    bondTouch,
    challengeApplication,
    contentDigest,
    ringLimiter,
    sbsn,
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
          <img src={selectedImage} alt="Full size" className="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default AloneModeGallery;
