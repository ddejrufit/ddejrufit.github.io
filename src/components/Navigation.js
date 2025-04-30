import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {         
    return(
      <div className='header'>
      <Navbar bg="light" data-bs-theme="light" >
      <Container>
        <Navbar.Brand href="#home" >KCW</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">   Home</Nav.Link>
          <Nav.Link href="#About">   About</Nav.Link>
          <Nav.Link href="#Project">   Project</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    );
}

export default Navigation;