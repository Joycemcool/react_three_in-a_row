import React from "react";
import { Nav, NavLink } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>

            <h1 style={{ textAlign: 'center' }}>React-based Three-in-a-Row Game</h1>
            <Nav>
                
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/sample" activeStyle>
                        Sample page
                    </NavLink>
                    <NavLink to="/random" activeStyle>
                        Random page
                    </NavLink>
            </Nav>
        </>
    );
};
 
export default Navbar;