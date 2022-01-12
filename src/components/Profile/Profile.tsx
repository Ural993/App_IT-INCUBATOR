import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {InitialProfileStateType} from "../../redux/profile-reducer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {Redirect} from "react-router-dom";

type PropsType = {
    profilePage: InitialProfileStateType
    addPost: () => void
    updateNewPostText: (text: any) => void
    updateStatus: (status: string) => void
    status:string
}
export function Profile(props: PropsType) {



    return (
        <div>
            <ProfileInfo profile = {props.profilePage.profile} status={props.profilePage.status} updateStatus={props.updateStatus}/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}
