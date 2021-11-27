import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import {InitialProfileStateType} from "../../redux/profile-reducer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
    profilePage: InitialProfileStateType
    addPost: () => void
    updateNewPostText: (text: any) => void
}
export function Profile(props: PropsType) {
   // debugger

    return (
        <div>
            <ProfileInfo profile = {props.profilePage.profile}/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}
