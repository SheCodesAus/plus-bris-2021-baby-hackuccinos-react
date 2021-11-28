import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavbarDropdown from 'react-navbar-dropdown'
import { faCaretUp, faCaretDown, faBookmark, faUser, faArchive, faCog } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        window.localStorage.getItem('token')
    )

    const logout = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    // return (
    //     <NavbarDropdown>
    //     <NavbarDropdown.Toggle className="menu__item">
    //         <NavbarDropdown.Open>
    //         <FontAwesomeIcon icon={faCaretDown} fixedWidth />
    //         </NavbarDropdown.Open>
    //         <NavbarDropdown.Close>
    //         <FontAwesomeIcon icon={faCaretUp} fixedWidth />
    //         </NavbarDropdown.Close>
    //         </NavbarDropdown.Toggle>
    //         <NavbarDropdown.CSSTransitionMenu
    //         className="example1-dropdown-menu"
    //         classNames="example1-dropdown-menu"
    //         timeout={200}
    //         >
    //         <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 1: clicked!')}>
    //         <div>
    //             <FontAwesomeIcon icon={faUser} fixedWidth />
    //         </div>
    //         <div className="example1-dropdown-menu-item__spacer" />
    //         <div className="example1-dropdown-menu-item__text">Item 1</div>
    //         </NavbarDropdown.Item>
    //         <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 2: clicked!')}>
    //         <div>
    //             <FontAwesomeIcon icon={faBookmark} fixedWidth />
    //         </div>
    //         <div className="example1-dropdown-menu-item__spacer" />
    //         <div className="example1-dropdown-menu-item__text">Item 2</div>
    //         </NavbarDropdown.Item>
    //         <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 3: clicked!')}>
    //         <div>
    //             <FontAwesomeIcon icon={faArchive} fixedWidth />
    //         </div>
    //         <div className="example1-dropdown-menu-item__spacer" />
    //         <div className="example1-dropdown-menu-item__text">Item 3</div>
    //         </NavbarDropdown.Item>
    //         <NavbarDropdown.Item className="example1-dropdown-menu-item" onClick={() => alert('Item 4: clicked!')}>
    //         <div>
    //             <FontAwesomeIcon icon={faCog} fixedWidth />
    //         </div>
    //         <div className="example1-dropdown-menu-item__spacer" />
    //         <div className="example1-dropdown-menu-item__text">Item 4</div>
    //         </NavbarDropdown.Item>
    //         </NavbarDropdown.CSSTransitionMenu>
    //     </NavbarDropdown>
    // );

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/contact">Contact</Link>
            <NavbarDropdown>
                <NavbarDropdown.Toggle className="menu__item">
                <NavbarDropdown.Open>
                <FontAwesomeIcon icon={faCaretDown} fixedWidth className="arrow" />
                </NavbarDropdown.Open>
                <NavbarDropdown.Close>
                <FontAwesomeIcon icon={faCaretUp} fixedWidth className="arrow" />
                </NavbarDropdown.Close>
                </NavbarDropdown.Toggle>
            <NavbarDropdown.CSSTransitionMenu
            className="example1-dropdown-menu"
            classNames="example1-dropdown-menu"
            timeout={200}
            >
            <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            <Link to="/coders">Coders</Link>
            </NavbarDropdown.Item>
            <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            <Link to="/login">Login</Link>
            </NavbarDropdown.Item>
            <NavbarDropdown.Item className="example1-dropdown-menu-item">
            <div className="example1-dropdown-menu-item__spacer" />
            <Link to="/submit">Submit</Link>
            </NavbarDropdown.Item>
            </NavbarDropdown.CSSTransitionMenu>
            </NavbarDropdown>
            <NavbarDropdown className="nav-drop">Portal</NavbarDropdown>
            {/* <Link to="/coders">Coders</Link>
            <Link to="/login">Login</Link>
            <Link to="/submit">Submit</Link> */}
        </nav>
    )
}

export default Nav
