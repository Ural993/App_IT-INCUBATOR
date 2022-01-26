import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import DialogItem from './DialogItem';
import s from './Dialogs.module.css'
import Message from './Message';
import {addMessage, InitialDialogStateType} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {AddMessageFormRedux, FormDataType} from "./AddMessageForm";

type PropsType = MSTPType & MDTPType

function Dialogs(props: PropsType) {
    let dialogsMap = props.dialogsPage.dialogs.map((d: any) => <DialogItem  key={d.id} name={d.name} id={d.id}/>)
    let messagesMap = props.dialogsPage.messages.map((m: any) => <Message  key ={m.id} message={m.message}/>)

    const onClick = (value: FormDataType) => {
        props.addMessage(value.NewMessageBody)
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

let MapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
type MSTPType = {
    dialogsPage: InitialDialogStateType
}
type MDTPType = {
    addMessage: (message: string) => void
}

export default compose<ComponentType>(connect(MapStateToProps, {addMessage}), withAuthRedirect)(Dialogs)