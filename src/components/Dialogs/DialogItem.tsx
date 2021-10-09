import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemTypeProps = {
    name: string;
    id: string
}

export default function DialogItem(props: DialogItemTypeProps) {
    return (
        <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}


