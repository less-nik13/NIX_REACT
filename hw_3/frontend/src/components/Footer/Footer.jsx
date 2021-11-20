import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">Copyright &copy;
                <Link to="/" className="footer__link"> TodoList </Link>
                <span className="footer__created-by">by Nikita Podgorniy. </span>
                <span className="footer__date">{new Date().getFullYear()}</span>
            </p>
        </div>
    );
};

export default Footer;