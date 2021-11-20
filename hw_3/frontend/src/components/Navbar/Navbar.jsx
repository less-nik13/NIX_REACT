import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        <nav className="nav">
            <NavLink exact to="/task3" className="nav__link" activeClassName="nav__link-active">Task 3</NavLink>
            {isAuthenticated &&
            <>
                <NavLink exact to="/" activeClassName="nav__link-active" className="nav__link">
                    Todo
                </NavLink>
                <NavLink exact to="/profile" className="nav__link" activeClassName="nav__link-active">
                    Profile
                </NavLink>
            </>}
        </nav>
    );
};
export default Navbar;