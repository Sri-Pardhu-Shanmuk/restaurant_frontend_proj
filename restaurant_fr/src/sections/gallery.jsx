import React from "react";
import "./gallerycss.css";

const galleryImages = [
  "/5thimg.webp",
  "/2ndimg.webp",
  "/3rdimg.webp",
  "/4thimg.webp",
  "/1stimg.webp",
  "/6thimg.webp"
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h1>Gallery</h1>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div className={`gallery-item item-${index + 1}`} key={index}>
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;