import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        window.localStorage.getItem('token')
    )

    const logout = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/coders">Coders</Link>
            <Link to="/login">Login</Link>
            <Link to="/submit">Submit</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    )
}

export default Nav
