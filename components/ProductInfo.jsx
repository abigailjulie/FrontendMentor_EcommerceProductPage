import React from "react";
import { Badge } from "react-bootstrap";
import minus from "../src/assets/images/icon-minus.svg";
import plus from "../src/assets/images/icon-plus.svg";
import cart from "../src/assets/images/icon-cart.svg";
import ProductImgs from "./ProductImgs";
import ImgCarousel from "./ImgCarousel";
import "./ProductInfo.css";

export default function ProductInfo({
  quantity,
  tempQuantity,
  decreaseQuantity,
  increaseQuantity,
  addToCart,
}) {
  return (
    <div className="productInfo">
      <ProductImgs />
      <ImgCarousel />
      <section className="productInfoContent">
        <header>
          <h1 className="prodInfoTitle">SNEAKER COMPANY</h1>
          <h2 className="prodInfoHeading">Fall Limited Edition Sneakers</h2>
        </header>
        <p className="prodInfoText">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="newPriceWrapper">
          <div className="newPrice d-flex flex-row align-items-center">
            <p className="p-0" aria-live="polite">
              $125.00
            </p>
            <Badge bg="dark" aria-label="50% off">
              50%
            </Badge>
          </div>
          <p className="oldPrice m-0" aria-live="polite">
            $250.00
          </p>
        </div>

        <div className="cartBtns">
          <div className="cartNumBtn d-flex flex-row justify-content-center align-items-center">
            <button
              aria-labelledby="Decrease quantity"
              className="decreaseQuantityBtn border-0 bg-transparent"
              onClick={decreaseQuantity}
            >
              <img src={minus} className="minusSym" alt="Decrease quantity" />
            </button>
            {/* ADA: The role and status will announce to a reader when a change is made */}
            <span
              role="status"
              className="count mx-4"
              id="count"
              aria-live="polite"
            >
              {tempQuantity}
            </span>
            <button
              onClick={increaseQuantity}
              aria-labelledby="Increase quantity"
              className="increaseQuantityBtn border-0 bg-transparent"
            >
              <img src={plus} className="plusSym" alt="Increase quantity" />
            </button>
          </div>
          <button
            className="cartAddBtn d-flex flex-row justify-content-center align-items-center"
            aria-labelledby="Add product to cart"
            onClick={addToCart}
          >
            <img src={cart} className="cartIconBtn" alt="Cart Icon" />
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}
