import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo.png';
import { Image } from 'react-bootstrap';
function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          {' '}
          <Image src={Logo} />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
<<<<<<< HEAD
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#buyers">Buyers</Nav.Link>
            <Nav.Link href="#contact-us">Contact</Nav.Link>
=======
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/buyers">Buyers</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
>>>>>>> 8ac8de17f4d1a10d0e7e9880cbd57aefeff8440d
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <Button variant="text">Login</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/registration-intro">
              <Button>Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav