import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

type DialogItemTypeProps = {
    name: string;
    id: string
}
type MessageTypeProps = {
    message: string;
}
function DialogItem(props: DialogItemTypeProps) {
    return (
        <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}
function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Vova" id='1' />
                <DialogItem name="Petr" id='2' />
                <DialogItem name="Sasha" id='3' />
                <DialogItem name="Dimich" id='4' />
            </div>
            <div className={s.messages}>
                <Message message='Hi, how are yoy?' />
            </div>
        </div>
    )
}