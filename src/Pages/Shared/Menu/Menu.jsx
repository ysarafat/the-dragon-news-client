import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Menu = () => {
  const {user,logout} = useContext(AuthContext)
    return (
        <Navbar bg="" expand="lg" variant='light'>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav_links me-auto">
              
            </Nav>
            <Nav className=" mx-auto fs-5 fw-semibold">
              <Link className='text-decoration-none d-flex align-items-center text-secondary' to="/">Home</Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto ">
              <Nav.Link href="#link"> <CgProfile style={{fontSize:40}} /> </Nav.Link>
              <Button className='login_btn fs-5 fw-semibold px-5 ms-2 ' variant="dark">
                {
                  user ? <Link className='text-decoration-none d-flex align-items-center text-light' onClick={logout}>Logout</Link> : <Link className='text-decoration-none d-flex align-items-center text-light' to='/login'>Login</Link>
                }
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;