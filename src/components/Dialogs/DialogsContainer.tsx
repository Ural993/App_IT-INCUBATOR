import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css'
import Message from './Message';
import {InitialDialogStateType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type PropsType = {
    dialogsPage: InitialDialogStateType
}

function Dialogs(props: PropsType) {
    let dialogsMap = props.dialogsPage.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    let messagesMap = props.dialogsPage.messages.map((m: any) => <Message message={m.message}/>)
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
    }
}

export default compose<ComponentType>(connect(MapStateToProps, null), withAuthRedirect)(Dialogs)