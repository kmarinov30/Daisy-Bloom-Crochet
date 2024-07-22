import React, { useState } from 'react';
import logo from '../images/logo.png';
import checkout from '../images/checkout.png';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="#home"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center">
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={isOpen ? toggleMenu : () => ''}>Начало</Link>
                    <Link to="/products" onClick={isOpen ? toggleMenu : () => ''}>Продукти</Link>
                    <Link to="/contacts" onClick={isOpen ? toggleMenu : () => ''}>Контакти</Link>
                    {
                        isOpen &&
                        <Link to="/checkout" onClick={toggleMenu}>
                            <img src={checkout} alt="Checkout" className="checkout-icon" />
                        </Link>
                    }
                </div>
            </div>
            {
                !isOpen && <div className="navbar-checkout">
                    <Link to="#checkout">
                        <img src={checkout} alt="Checkout" className="checkout-icon" />
                    </Link>
                </div>
            }

            <div className={`burger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;