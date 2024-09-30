import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/content">Content</Nav.Link>
        <Nav.Link as={Link} to="/header">Header</Nav.Link>
        <Nav.Link as={Link} to="/footer">Footer</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;