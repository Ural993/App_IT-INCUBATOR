import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {InitialProfileStateType} from "../../redux/profile-reducer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {Redirect} from "react-router-dom";

type PropsType = {
    profilePage: InitialProfileStateType
    isAuth: boolean
    addPost: () => void
    updateNewPostText: (text: any) => void
}
export function Profile(props: PropsType) {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <ProfileInfo profile = {props.profilePage.profile}/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}
