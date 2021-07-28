import React from 'react'
import menu from '../../assets/images/menu-icon.png'
import settings from '../../assets/images/settings-icon.png'
import "./Nav.module.scss"
import "../../App.scss"


const Nav = () => {
    return (
        <nav>
            <img src = {menu} />
            <h1>Ear Worm</h1>
            <img src = {settings} />   
        </nav>
    )
}

export default Nav
