import React from 'react'
import '../index.css'
import logo from '../logo.png'

const Header = () => {
    return (
        <div className="header">
            <header>
                <img className="header-img" src={logo} />
        </header>
    </div>
    )
}

export default Header;