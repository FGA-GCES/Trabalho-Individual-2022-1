import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Style';

const NavbarComp = () => {
    return (
        <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
                <Navbar.Collapse id="navbar-library">
                    <Nav.Link as={Link} to="/" style={styles.navbarText}>
                        Biblioteca
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Perfil" style={styles.navbarText}>
                        Perfil
                    </Nav.Link>
                </Navbar.Collapse>
        </Navbar>
        );
};

export default NavbarComp;