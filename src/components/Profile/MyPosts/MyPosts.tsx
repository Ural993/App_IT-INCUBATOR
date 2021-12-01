import React from 'react';
import { InitialProfileStateType} from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

type PropsType = {
    profilePage: InitialProfileStateType
    addPost: () => void
    updateNewPostText: (text: any) => void
}



export default function MyPosts(props: PropsType) {

    function onButtonClick() {
        props.addPost()
    }

    function onPostChange(e: any) {
        props.updateNewPostText(e.target.value)
    }

    return (
        <div>
            my posts
            <div>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
                <button onClick={onButtonClick}>Add post</button>
            </div>
            <div className={s.posts}>
                {props.profilePage.posts.map(p => (<Post {...p}  />))}
            </div>
        </div>
    )
}