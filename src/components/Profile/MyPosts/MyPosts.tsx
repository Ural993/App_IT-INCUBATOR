import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export default function MyPosts(props: any) {
    let postsMap = props.posts.map((p: any) => <Post post={p.post} />)
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsMap}
            </div>
        </div>
    )
}