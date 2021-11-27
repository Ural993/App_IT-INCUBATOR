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
                <img src="https://vraki.net/sites/default/files/inline/images/1_42.jpg" alt="" />
            </div>
            <div>
                <img src={props.profile.photos.small}/>
                ava+disctiptions
            </div>
        </div>
    )
}