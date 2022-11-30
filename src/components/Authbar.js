import { Container, Nav, Navbar } from "react-bootstrap";
import LogOut from "../auth/LogOut";
import LoginLink from "../auth/LoginLink";
import SignUpLink from '../auth/SignUpLink';

function Authbar({ email }) {
  return (
    <Navbar className='mb-3' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Blogster</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          {email ? <LogOut email={email} /> : <><LoginLink />{' '}<SignUpLink /></>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Authbar;
