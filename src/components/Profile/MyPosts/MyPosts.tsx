import React from 'react';
import {InitialProfileStateType} from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength30, required} from "../../../utils/validators/validators";
import { Textarea } from '../../Common/FormControls/FormControls';
import Button from '../../../commons/components/Button/Button';

type PropsType = {
    profilePage: InitialProfileStateType
    addPost: (post:string) => void
}

export default function MyPosts(props: PropsType) {
    const onSubmit = (value: FormDataType) => {
       props.addPost(value.postText)
    }

    return (
        <div>
            my posts
            <div>
                <AddPostFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {props.profilePage.posts.map(p => (<Post key={p.id} {...p}  />))}
            </div>
        </div>
    )
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'postText'} type="text" validate={[required, maxLength30]}/>
            <Button type='primary' htmlType='submit' title='Add post'/>
        </form>
    )
}
type FormDataType = {
    postText: string
}
const AddPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddPostForm'})(AddPostForm)