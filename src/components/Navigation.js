import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function Navigation({scrollToHome, scrollToAbout, scrollToProject}) {         


    return(
      <div className='header'>
      <Navbar bg="light" data-bs-theme="light" >
      <Container>
        <Navbar.Brand href="#home" >KCW</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={scrollToHome}>   Home</Nav.Link>
          <Nav.Link onClick={scrollToAbout}>   About</Nav.Link>
          <Nav.Link onClick={scrollToProject}>   Project</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
    );
}

export default Navigation;