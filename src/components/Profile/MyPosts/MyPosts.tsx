import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export default function MyPosts(props: any) {
    let postsMap = props.profilePage.posts.map((p: any) => <Post post={p.post} />)
    let myRef: any = React.createRef();

    function onButtonClick() {
        props.dispatch(addPostActionCreator())
    }

    function onPostChange(e: any) {
        props.dispatch(updateNewPostTextActionCreator(e.target.value))
    }

    return (
        <div>
            my posts
            <div>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
                <button onClick={onButtonClick}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsMap}
            </div>
        </div>
    )
}