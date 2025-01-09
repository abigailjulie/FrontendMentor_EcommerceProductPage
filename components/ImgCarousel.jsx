import React from "react";
import { Carousel, Image } from "react-bootstrap";
import img1 from "../src/assets/images/image-product-1.jpg";
import img2 from "../src/assets/images/image-product-2.jpg";
import img3 from "../src/assets/images/image-product-3.jpg";
import img4 from "../src/assets/images/image-product-4.jpg";
import "./ImgCarousel.css";

export default function ImgCarousel() {
  return (
    <div className="carousel">
      <Carousel
        className="carouselMobileOnly"
        fade
        indicators={false}
        aria-label="Product image carousel"
        prevLabel="Previous Image"
        nextLabel="Next image"
      >
        <Carousel.Item>
          <Image
            src={img1}
            alt="Photo of shoes from front perspective"
            aria-labelledby="carouselItem1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={img2}
            alt="Photo of shoes from back perspective"
            aria-labelledby="carouselItem2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={img3}
            alt="Photo of single shoe on rocks"
            aria-labelledby="carouselItem3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={img4}
            alt="Photo of side profile of shoe on rocks"
            aria-labelledby="carouselItem4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
