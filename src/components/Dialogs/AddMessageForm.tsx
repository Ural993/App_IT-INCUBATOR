import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Textarea } from "../Common/FormControls/FormControls";
import React from "react";
import {maxLength30, required} from "../../utils/validators/validators";


const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'NewMessageBody'} validate={[required,maxLength30 ]}/>
            </div>
            <button>Add message</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<FormDataType>({form:'dialog-add-message-form'})(AddMessageForm)

export type FormDataType={
    NewMessageBody:string
}