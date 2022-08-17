import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { React } from 'react';
import styles from './Style';

const NavbarComp = () => (
    <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
            <Navbar.Collapse id="navbar-library">
                <Nav.Link as={Link} to="/" style={styles.navbarText}>
                    Biblioteca
                </Nav.Link>
                <Nav.Link as={Link} to="/Perfil" style={styles.navbarText}>
                    Perfil
                </Nav.Link>
                {!sessionStorage.getItem('app-userID') && (
                <Nav.Link as={Link} to="/Register" style={styles.navbarText}>
                    Registro
                </Nav.Link>)}
                {!sessionStorage.getItem('app-userID') && (
                <Nav.Link as={Link} to="/Login" style={styles.navbarText}>
                    Login
                </Nav.Link>)}
            </Navbar.Collapse>
    </Navbar>
    );

export default NavbarComp;