import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import styles from './Style';

const NavbarComp = () => {
    const [logged, setLogged] = useState(false);

    const isLogged = () => {
        if (localStorage.getItem('app-token')){
            setLogged(true);
        }
    }

    useEffect(() => {
        isLogged();
    }, [localStorage.getItem('app-token')]);

    return (
        <Navbar expand="lg" variant="dark" clickfixed="top" fixed="top" style={styles.navbar}>
                <Navbar.Collapse id="navbar-library">
                    <Nav.Link as={Link} to="/" style={styles.navbarText}>
                        Biblioteca
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Perfil" style={styles.navbarText}>
                        Perfil
                    </Nav.Link>
                    {logged ? null : 
                    <Nav.Link as={Link} to="/Register" style={styles.navbarText}>
                        Registro
                    </Nav.Link>}
                    {logged ? null : 
                    <Nav.Link as={Link} to="/Login" style={styles.navbarText}>
                        Login
                    </Nav.Link>}
                </Navbar.Collapse>
        </Navbar>
        );
};

export default NavbarComp;