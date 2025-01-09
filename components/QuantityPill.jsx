import React from "react";

export default function QuantityPill({ quantity }) {
  return (
    <div
      className="quantityPill d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "var(--Orange)",
        color: "var(--White)",
        borderRadius: ".5rem",
        maxWidth: "1.5rem",
        fontSize: ".8rem",
        fontWeight: "600"
      }}
    >
      {quantity}
    </div>
  );
}
