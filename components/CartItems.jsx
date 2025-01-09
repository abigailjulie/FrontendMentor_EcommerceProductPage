import React from "react";
import "./CartItems.css";
import thumb1 from "../src/assets/images/image-product-1-thumbnail.jpg";
import trash from "../src/assets/images/icon-delete.svg";

export default function CartItems({ quantity, resetQuantity }) {
  let finalTotal = 125 * quantity;

  return (
    <section className="cartItems d-flex flex-row justify-content-between align-items-center">
      <img
        src={thumb1}
        className="cartImg"
        alt="sneaker product 1 - Front view"
      />
      <div className="cartTotal">
        <h1 className="cartItem">Fall Limited Addition Sneakers</h1>
        <p className="cartCal">
          $125.00 x {quantity}
          <span className="cartFinal">${finalTotal}.00</span>
        </p>
      </div>
      <button className="border-0 bg-transparent" onClick={resetQuantity}>
        <img src={trash} className="closeBtn" alt="Close icon" />
      </button>
    </section>
  );
}
