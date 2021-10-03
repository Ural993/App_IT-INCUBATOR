import React from 'react';
import s from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={s.nav}>
            <div className="container">
                <div><a href="/profile">Profile</a></div>
                <div><a href="/dialogs">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Musics</a></div>
                <div><a href="#">Settings</a></div>
            </div>
        </nav>
    )
}