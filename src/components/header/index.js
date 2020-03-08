import React from 'react'

import {NavLink} from 'react-router-dom';

import "./style.css";
import logo from '../../resources/logo.png';

const Header = () => (
    <header id="main-header">
        <NavLink to='/' className='header-link' activeClassName='header-link-active'>
            <h1>ONG Fênix</h1>
        </NavLink>
        <img src={logo} alt="logo"/>
    </header>
);

export default Header;