import React from "react";
import { Modal } from "react-bootstrap";
import "./ImgLightbox.css";

export default function ImgLightbox({
  show,
  handleClose,
  activeImg,
  images,
  setActiveImg,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="lightbox"
      backdrop="static"
      role="dialog"
      aria-labelledby="contained-modal-title-vcenter"
      aria-modal="true"
      tabindex="-1"
      centered
    >
      <Modal.Header className="modalHeader" closeButton></Modal.Header>
      <Modal.Body>
        <div className="productImgsContainer">
          {/* Active Image */}
          <div
            className="activeImgContainter"
            role="figure"
            aria-labelledby="activeImageDescription"
          >
            <img
              className="activeImg"
              src={activeImg}
              alt="Currently selected sneaker image"
              aria-live="polite"
              id="activeImageDescription"
            />
          </div>

          {/* Thumbnails */}
          <div
            className="thumbnails d-flex flex-row  align-items-center justify-content-between"
            role="group"
            aria-label="Product images thumbnails"
          >
            {images.map((image) => (
              <button
                key={image.src}
                onClick={() => setActiveImg(image.src)}
                className="thumbnailBtn"
                aria-label={image.alt}
              >
                <img
                  src={image.thumb}
                  alt={image.alt}
                  className="thumbnailImg"
                />
              </button>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
