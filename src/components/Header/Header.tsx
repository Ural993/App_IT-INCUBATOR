import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

type PropsType ={
    login: string
    isAuth:boolean
}
export default function Header(props:PropsType) {
    return (
        <header className={s.header}>
<div className={s.login}>
    {props.isAuth ?<NavLink to={'/login'}>{props.login}</NavLink>:<NavLink to={'/login'}>Login</NavLink>}
</div>
        </header>
    )
}