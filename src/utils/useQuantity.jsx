import { useState } from "react";

export default function useQuantity() {
  const [quantity, setQuantity] = useState(0);
  const [tempQuantity, setTempQuantity] = useState(0);

  const increaseQuantity = () => {
    setTempQuantity(tempQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (tempQuantity > 0) {
      setTempQuantity(tempQuantity - 1);
    }
  };

  const resetQuantity = () => {
    setQuantity(0);
    setTempQuantity(0);
  };

  const addToCart = () => {
    if (tempQuantity > 0) {
      setQuantity(tempQuantity);
      setTempQuantity(0);
    }
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
    resetQuantity,
    addToCart,
    tempQuantity,
  };
}
