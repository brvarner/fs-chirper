import * as React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar: React.FC<NavbarProps> = props => {

    let resolved = useResolvedPath('');
    let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<nav className="nav justify-content-center align-items-center p-2 mb-2 shadow">
            <NavLink className="btn btn-link mx-2" style={{ textDecoration: match ? "underline" : "none" }} to='/'>Home</NavLink>
            <NavLink className="btn btn-link mx-2" style={{ textDecoration: match ? "underline" : "none" }} to='/compose'>Compose</NavLink>
        </nav>
	);
};

interface NavbarProps {}

export default Navbar;