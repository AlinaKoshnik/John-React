import React, { useState } from "react"
import {Link} from "react-router-dom"
import './Header.scss';


const Header = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode () {
        toggleMenu(!isMenuOpen);
    }

    return (
        <header className="header">
                <div className="header-content">
                    <div className="header-menu menu">
                        <div onClick = {toggleMenuMode}className="menu-icon icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className={isMenuOpen ? "menu-body active" : "menu-body"}>
                            <ul className="menu-list">
                                <li><Link to="/" className="menu-link">Home</Link></li>
                                <li><Link to="/works" className="menu-link">Works</Link></li>
                                <li><Link to="/blog" className="menu-link">Blog</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header