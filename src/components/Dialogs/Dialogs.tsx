import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css'
import Message from './Message';

// type DialogsTypeProps = {
//     messages: { message: string },

// }


export default function Dialogs(props: any) {

    let dialogsMap = props.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id} />)
    let messagesMap = props.messages.map((m: any) => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsMap}
            </div>
            <div className={s.messages}>
                {messagesMap}
            </div>
        </div>
    )
}