import { Navbar, Container } from "react-bootstrap";
import "../index.css";
import logoText from "../assets/Logo.png";
import Button from "./Button";
import available from "../assets/icons/Ellipse 1.svg";
function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoText} width={"180rem"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end mt-2"
        >
          <div className="role-text m-5">Web Developer</div>
          <Button
            width={"18rem"}
            height={"3rem"}
            bgcolor={"transparent"}
            outlineColor={"rgba(0, 255, 183, 0.33)"}
            logo={available}
            logoWidth={"15rem"}
            fontSize={"1.1rem"}
          >
            Available to work
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
