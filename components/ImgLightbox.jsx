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
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton></Modal.Header>
      <Modal.Body>
        <div className="productImgsContainer">
          {/* Active Image */}
          <div className="activeImgContainter">
            <img
              className="activeImg"
              src={activeImg}
              alt="Currently selected sneaker image"
              aria-live="polite"
            />
          </div>

          {/* Thumbnails */}
          <div
            className="thumbnails d-flex flex-row  align-items-center justify-content-between"
            role="group"
            aria-label="Product images"
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
                  role="img"
                />
              </button>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
