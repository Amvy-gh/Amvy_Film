import{Navbar, Container, Nav} from "react-bootstrap"

const MyNavbar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>Amvy Films</Navbar.Brand>
                    <Nav>
                        <Nav.Link>TRENDING</Nav.Link>
                        <Nav.Link>SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar;