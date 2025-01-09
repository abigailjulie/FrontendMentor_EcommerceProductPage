import React, { useState } from "react";
import NavbarTop from "../components/NavbarTop";
import ProductInfo from "../components/ProductInfo";
import useQuantity from "../src/utils/useQuantity";

export default function Home() {
  const {
    quantity,
    tempQuantity,
    increaseQuantity,
    decreaseQuantity,
    resetQuantity,
    addToCart,
  } = useQuantity();

  return (
    <>
      <NavbarTop quantity={quantity} resetQuantity={resetQuantity} />
      <ProductInfo
        quantity={quantity}
        tempQuantity={tempQuantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        addToCart={addToCart} //pass this function along so it can be trigger in child
      />
    </>
  );
}
