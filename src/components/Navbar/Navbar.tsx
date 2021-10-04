import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={s.nav}>
            <div className="container">
                <div><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
                <div><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
                <div><NavLink to="/news">News</NavLink></div>
                <div><NavLink to="/musics">Musics</NavLink></div>
                <div><NavLink to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    )
}