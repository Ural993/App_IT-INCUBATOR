import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../Common/types/types";
import {Preloader} from "../../Common/Preloader/Preloader";
type PropsType={
    profile:ProfileType
}
export const ProfileInfo=(props:PropsType)=> {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.avatar}>
                <img src={props.profile.photos.small}/>
            </div>
            <div>
                <h3>{props.profile.fullName}</h3>
                <hr/>
                <div>Profile in VK: {props.profile.contacts.vk}</div>
                <div>Profile in facebook: {props.profile.contacts.facebook}</div>
                <div>Profile in instagram: {props.profile.contacts.instagram}</div>
                <div>Profile in github: {props.profile.contacts.github}</div>
                <div>Profile in twitter: {props.profile.contacts.twitter}</div>
            </div>
            <hr/>
        </div>
    )
}