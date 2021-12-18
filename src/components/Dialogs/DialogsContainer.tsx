import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css'
import Message from './Message';
import {Redirect} from "react-router-dom";



function Dialogs(props: any) {

    let dialogsMap = props.dialogsPage.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    let messagesMap = props.dialogsPage.messages.map((m: any) => <Message message={m.message}/>)
    if (!props.isAuth) return <Redirect to={'/login'}/>
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

let MapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let DialogsContainer = connect(MapStateToProps, null)(Dialogs)

export default DialogsContainer