import React from 'react';
import s from './Dialogs.module.css'

type MessageTypeProps = {
    message: string;
}

export default function Message(props: MessageTypeProps) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
