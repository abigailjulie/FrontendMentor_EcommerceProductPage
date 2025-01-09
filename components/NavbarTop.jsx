import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import profileImg from "../src/assets/images/image-avatar.png";
import cart from "../src/assets/images/icon-cart.svg";
import "./NavbarTop.css";
import { useState } from "react";
import CartModal from "./CartModal";
import QuantityPill from "./QuantityPill";

export default function NavbarTop({ quantity, resetQuantity }) {
  //Create a state that will toggle Modal
  const [showModal, setShowModel] = useState(false);

  //Create a function that sets it to true and false
  const handleShowModal = () => setShowModel(true);
  const handleCloseModal = () => setShowModel(false);

  return (
    <>
      <div className="navbarTop d-flex flex-row justify-content-between align-items-center">
        <Navbar expand="lg" className="bg-transparent p-0">
          <Container className="p-0 align-items-baseline" fluid>
            <Navbar.Toggle
              className="navbarToggle border-0"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            />
            <Navbar.Brand className="navbarBrand m-0 p-0" href="#">
              sneakers
            </Navbar.Brand>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              className="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                aria-label="Close navigation menu"
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navLinks justify-content-end flex-grow-1">
                  <Nav.Link href="#action1" aria-label="Collections">
                    Collections
                  </Nav.Link>
                  <Nav.Link href="#action2" aria-label="Men">
                    Men
                  </Nav.Link>
                  <Nav.Link href="#action2" aria-label="Women">
                    Women
                  </Nav.Link>
                  <Nav.Link href="#action2" aria-label="About">
                    About
                  </Nav.Link>
                  <Nav.Link href="#action2" aria-label="Contact">
                    Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className="profile d-flex flex-row align-items-center">
          <div className="cartPill">
            <QuantityPill quantity={quantity} />
            <img src={cart} alt="Cart Icon" className="cartIcon" />
          </div>

          <img
            src={profileImg}
            alt="User profile"
            className="profileImg"
            onClick={handleShowModal}
          />
        </div>
      </div>
      <hr className="profileNavBreak m-0" />

      <CartModal
        quantity={quantity}
        resetQuantity={resetQuantity}
        show={showModal}
        handleClose={handleCloseModal}
      />
    </>
  );
}
