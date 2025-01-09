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
      <Modal className="cartModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartItems quantity={quantity} resetQuantity={resetQuantity} />

          <button
            className="checkoutBtn d-flex justify-content-center align-items-center"
            aria-labelledby="Checkout cart"
            onClick={handleClose}
          >
            Checkout
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
