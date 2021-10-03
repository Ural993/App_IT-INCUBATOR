import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

export default function Profile() {
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://vraki.net/sites/default/files/inline/images/1_42.jpg" alt="" />
            </div>
            <div>
                ava+disctiptions
            </div>
            <MyPosts />
        </div>
    )
}