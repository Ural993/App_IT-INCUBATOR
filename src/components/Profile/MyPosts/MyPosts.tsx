import React from 'react';
import {InitialProfileStateType} from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
                {props.profilePage.posts.map(p => (<Post {...p}  />))}
            </div>
        </div>
    )
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'postText'} type="text"/>
            <button>Add post</button>
        </form>
    )
}
type FormDataType = {
    postText: string
}
const AddPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddPostForm'})(AddPostForm)