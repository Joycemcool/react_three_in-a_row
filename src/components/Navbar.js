import React from "react";
import { Nav, NavLink } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>React-based Three-in-a-Row Game</h1>
            <Nav>
                
                    <NavLink to="/home" >
                        Home |  
                    </NavLink>
                    <NavLink to="/sample" >
                        Sample page |  
                    </NavLink>
                    <NavLink to="/random">
                        Random page 
                    </NavLink>
            </Nav>
        </>
    );
};
 
export default Navbar;