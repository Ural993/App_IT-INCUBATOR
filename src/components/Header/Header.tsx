import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {useDispatch} from "react-redux";
import {logout} from '../../redux/auth-reducer';

type PropsType = {
    login: string
    isAuth: boolean
}
export default function Header(props: PropsType) {
    let dispatch = useDispatch()
    return (
        <header className={s.header}>
            <div className={s.login}>
                {props.isAuth ? <NavLink to={'/login'}>{props.login}
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </NavLink>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}