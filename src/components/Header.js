import React from 'react';
import { useState } from 'react';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='centerNav' sticky='top' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='navItems container-fluid mx-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' href='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about' href='/about'>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/projects' href='/projects'>
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact' href='/contact'>
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem className='ms-auto'>
                        <NavLink className='nav-link' to='/clientLogin'>
                            Client Login
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
         </Navbar>    
    );
}

export default Header;