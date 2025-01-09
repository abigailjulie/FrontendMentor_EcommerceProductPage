import { Modal } from "react-bootstrap";
import "./CartModal.css";
import CartItems from "./CartItems";

export default function CartModal({
  show,
  handleClose,
  quantity,
  resetQuantity,
}) {
  //All of the functions that show and hide this component are coming from the parent component
  //Only the close function is trigger in this component
  return (
    <>
      <Modal
        className="cartModal"
        show={show}
        onHide={handleClose}
        aria-labelledby="cartModalLabel"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id="cartModalLabel">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {quantity === 0 ? (
            <p className="emptyCart" role="alert">Your cart is empty.</p>
          ) : (
            <CartItems quantity={quantity} resetQuantity={resetQuantity} />
          )}

          {quantity > 0 && (
            <button
              className="checkoutBtn d-flex justify-content-center align-items-center"
              aria-labelledby="Checkout cart"
              onClick={handleClose}
              aria-label="Proceed to checkout"
              autoFocus
            >
              Checkout
            </button>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
