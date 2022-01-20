import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {InitialProfileStateType} from "../../redux/profile-reducer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type PropsType = {
    profilePage: InitialProfileStateType
    addPost: (post:string) => void
    updateStatus: (status: string) => void
    status:string
}
export function Profile(props: PropsType) {



    return (
        <div>
            <ProfileInfo profile = {props.profilePage.profile} status={props.profilePage.status} updateStatus={props.updateStatus}/>
            <MyPosts addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}
