import React, { useState } from "react";
import "./design-system-gallery.css";
import variantImageOne from "../../app/images/variantOne.png";
import variantImageTwo from "../../app/images/variantTwo.png";
import bordersImage from "../../app/images/Borders.png";
import shadowsImage from "../../app/images/Shadows.png";

function VariantsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    variantImageOne,
    variantImageTwo,
    bordersImage,
    shadowsImage,
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
          <img src={selectedImage} alt="Variants gallery" className="overlay-image" />
        </div>
      )}
    </div>
  );
}

export default VariantsGallery;
