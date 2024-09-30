import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React App</Navbar.Brand> {/*simulates home button*/}
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/content">Content</Nav.Link> {/*directs to page 1*/}
        <Nav.Link as={Link} to="/header">Header</Nav.Link> {/*directs to page 2*/}
        <Nav.Link as={Link} to="/footer">Footer</Nav.Link> {/*directs to page 3*/}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar; {/*export*/}