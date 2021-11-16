import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar style={{ borderBottom: "1px solid black" }}>
      <Container>
        <Navbar.Brand>
          <h3>My Blog</h3>
        </Navbar.Brand>
      </Container>
      <Nav className="me-auto">
        <Nav.Link href="login">Log in</Nav.Link>
        <Nav.Link href="signup">Sign up</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
