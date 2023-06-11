import React from 'react';
import apple from './apple.jpeg';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='md' bg='light' variant='light' >
                <Container>
                    <NavbarBrand href = '/'>
                        <img src = { apple } alt = 'apple-logo' className = 'd-inline-block align-top'
                             width = '50px'
                             height='50px'

                            />
                    </NavbarBrand>
                    <NavbarToggle area-controls='responsive-navbar-nav'/>
                </Container>

            </Navbar>
        </>
    );
};

export default Header;