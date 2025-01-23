import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

const MyNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar variant="dark" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand href="/" className="brand-logo">
                    Amvy Films
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending" className="nav-link">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero" className="nav-link">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;