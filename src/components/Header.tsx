import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

import { FaSearch } from "react-icons/fa";

import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="header">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="container">
                        <div className="top-bar-content">
                            <div className="contact-info">
                                <span>Call Us: +10 (87) 263 3567</span>
                                <span className='border-right'></span>
                                <span>info@gardening.com</span>
                                <span className='border-right'></span>
                                <span>Mon - Fri: 9:00 - 19:00</span>
                            </div>
                            <div className="icon-box">
                                <span><FaFacebook /></span>
                                <span><FaInstagram /></span>
                                <span><FaLinkedinIn /></span>
                                <span><FaYoutube /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Navigation */}
            <nav className="main-nav">
                <div className="container-header">
                    <div className="nav-content">
                        <div className="logo">
                            <img src='/image/logo.png.webp' alt='logo' />
                        </div>

                        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                            <Link to="/">Home</Link>
                            <Link to="/service">Services</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>

                            {/* Dropdown Menu */}
                            <div className="dropdown">
                                <Link to="/blog" className="dropdown-toggle">Blog▾</Link>
                                <div className="dropdown-content">
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/blog">Blog Details</Link>
                                    <Link to="/blog">Elements</Link>
                                </div>
                            </div>

                            <Link to="/contact">Contact</Link>

                            <div className="nav-actions">
                                <form className='form-header'>
                                    <input type="text" placeholder='Search'/>
                                    <button className='btn-search-header'><FaSearch /></button>
                                </form>
                                <button className="quote-btn">Get Free Quote</button>
                            </div>
                        </div>

                        <button className="menu-toggle" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
