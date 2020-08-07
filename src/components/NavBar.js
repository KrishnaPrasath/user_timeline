import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const NavBar = () => {

    const [ collapsed, setCollapsed ] = useState(false);
    const toggle = () => setCollapsed(!collapsed);

    return(
        <>
            <Navbar color="faded" light className="shadow-sm" expand="md">
                <NavbarBrand href="/" className="mr-auto">Timeline View</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink target="_blank" href="https://krishnaprasath.github.io/">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink target="_blank" href="https://github.com/KrishnaPrasath">GitHub</NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;