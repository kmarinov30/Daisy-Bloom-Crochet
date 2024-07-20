import React, { useState } from 'react';
import logo from '../images/logo.png';
import checkout from '../images/checkout.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center">
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={isOpen ? toggleMenu : () => ''}>Начало</a>
                    <a href="#services" onClick={isOpen ? toggleMenu : () => ''}>Продукти</a>
                    <a href="#contact" onClick={isOpen ? toggleMenu : () => ''}>Контакти</a>
                    {
                        isOpen &&
                        <a href="#checkout" onClick={toggleMenu}>
                            <img src={checkout} alt="Checkout" className="checkout-icon" />
                        </a>
                    }
                </div>
            </div>
            {
                !isOpen && <div className="navbar-checkout">
                    <a href="#checkout">
                        <img src={checkout} alt="Checkout" className="checkout-icon" />
                    </a>
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