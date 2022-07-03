import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css'
import Message from './Message';
import {addMessageAC, DialogsType, MessageType} from "../../redux/dialogs-reducer";
import {AddMessageFormRedux, FormDataType} from "./AddMessageForm";

type PropsType = {}

export function Dialogs(props: PropsType) {
    const messages = useSelector<AppStateType, MessageType[]>((state)=>state.dialogsPage.messages)
    const dialogs = useSelector<AppStateType, DialogsType[]>((state)=>state.dialogsPage.dialogs)
    let dialogsMap = dialogs.map((d: DialogsType) => <DialogItem  key={d.id} name={d.name} id={d.id}/>)
    let messagesMap = messages.map((m: MessageType) => <Message  key ={m.id} message={m.message}/>)
    const dispatch = useDispatch()

    const onClick = (value: FormDataType) => {
        dispatch(addMessageAC(value.NewMessageBody))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsMap}
            </div>
            <div className={s.messages}>
                {messagesMap}
            </div>
            <AddMessageFormRedux onSubmit={onClick}/>
        </div>
    )
}
