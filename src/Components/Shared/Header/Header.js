import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/login');
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='title fw-bolder footer-title' href="#home">Daily Deals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            {
                                user && (<Nav.Link as={Link} to='/additem'>Add Item</Nav.Link>)
                            }
                           
                            {
                                user && (<Nav.Link as={Link} to='/manageinventories'>Manage Items</Nav.Link>)
                            }
                           
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/inventory'>Inventory Items</Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleSignOut} eventKey={2} href="#memes">
                                    Signout
                                </Nav.Link> : <Nav.Link as={Link} to='/signup' eventKey={2} href="#memes">
                                    Login
                                </Nav.Link>
                            }
                            {
                                user && (<Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>)
                            }
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;