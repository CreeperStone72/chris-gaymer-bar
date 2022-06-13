import { Navbar, Nav, NavLink, NavbarBrand, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import icon from "../../images/icon.png";

import { ServerIP } from "..";

function TopNavbar() {
    return (
        <header className="bg-success bg-gradient">
            <Navbar className="shadow-lg mx-auto" expand="lg">
                <Container>
                    <NavbarBrand href="#home" className="px-5">
                        <img
                            src={icon}
                            width="100"
                            height="100"
                            alt="Server logo"
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="#home" className="no-caps fs-4 mx-2">Status</NavLink>
                            <NavLink href="#link" className="no-caps fs-4 mx-2">Map</NavLink>
                        </Nav>
                        <Nav className="ms-auto">
                            <ServerIP />
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default TopNavbar;