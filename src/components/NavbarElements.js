
// Filename - ./components/Navbar.js
 
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    height: 85px;
    display: flex;
    justify-content: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
 
export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: start;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;
 