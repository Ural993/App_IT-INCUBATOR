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
    //debugger
    let postsMap = props.profilePage.posts.map((p: any) => <Post post={p.post} />)
    let myRef: any = React.createRef();

    function onButtonClick() {
        props.addPost()
    }

    function onPostChange(e: any) {
        console.log(e.target.value)

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
                {postsMap}
            </div>
        </div>
    )
}