import React, { useState } from "react";
import "./ProductImgs.css";
//It's better to use to different set of images even if the only difference is size
//Easier to load and unneccassary data consumption
//Larger images
import img1 from "../src/assets/images/image-product-1.jpg";
import img2 from "../src/assets/images/image-product-2.jpg";
import img3 from "../src/assets/images/image-product-3.jpg";
import img4 from "../src/assets/images/image-product-4.jpg";
//Smaller images
import thumb1 from "../src/assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../src/assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../src/assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../src/assets/images/image-product-4-thumbnail.jpg";
import ImgLightbox from "./ImgLightbox";

export default function ProductImgs() {
  const [activeImg, setActiveImg] = useState(img1); //img1 is set as the default
  const [showLightbox, setShowLightbox] = useState(false);

  const images = [
    { src: img1, alt: "sneaker product 1 - Side view", thumb: thumb1 },
    { src: img2, alt: "sneaker product 1 - Front view", thumb: thumb2 },
    { src: img3, alt: "sneaker product 1 - Top view", thumb: thumb3 },
    { src: img4, alt: "sneaker product 1 - Angle view", thumb: thumb4 },
  ];

  const handleActiveImgClick = () => setShowLightbox(true);
  const handleCloseLightbox = () => setShowLightbox(false);

  const handleImgClick = (imagesrc) => {
    setActiveImg(imagesrc);
  };

  return (
    <div className="imgsDesktopOnly">
      {/* Active Image */}
      <div className="activeImgContainter">
        <button
          className="border-0 bg-transparent"
          onClick={handleActiveImgClick}
        >
          <img
            className="activeImg"
            src={activeImg}
            alt="Currently selected sneaker image"
            aria-live="polite" //announces changes to the reader
          />
        </button>
      </div>
      {/* Image thumbnails */}
      <div
        className="thumbnails d-flex flex-row justify-content-between"
        role="group"
        aria-label="Product images"
      >
        {images.map((image) => (
          <button
            key={image.src}
            onClick={() => handleImgClick(image.src)}
            className="thumbnailBtn"
            aria-label={image.alt}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              className="thumbnailImg"
              role="img"
            />
          </button>
        ))}
      </div>

      <ImgLightbox
        show={showLightbox}
        handleClose={handleCloseLightbox}
        activeImg={activeImg}
        images={images}
        setActiveImg={setActiveImg}
      />
    </div>
  );
}
