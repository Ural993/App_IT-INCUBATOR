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
                <img alt={'#'} src={props.profile.photos.small}/>
            </div>
            <div>
                <h3>{props.profile.fullName}</h3>
                <hr/>
                <div>Profile in VK:<a href='#'>{props.profile.contacts.vk}</a></div>
                <div>Profile in facebook: <a href={props.profile.contacts.facebook} target="_blank"  rel="noreferrer">{props.profile.contacts.facebook}</a></div>
                <div>Profile in instagram: <a href={props.profile.contacts.instagram} target="_blank"  rel="noreferrer">{props.profile.contacts.instagram}</a></div>
                <div>Profile in github:<a href={props.profile.contacts.github} target="_blank"  rel="noreferrer"> {props.profile.contacts.github} </a></div>
                <div>Profile in twitter:<a href={props.profile.contacts.twitter} target="_blank"  rel="noreferrer"> {props.profile.contacts.twitter}</a></div>
            </div>
            <hr/>
        </div>
    )
}