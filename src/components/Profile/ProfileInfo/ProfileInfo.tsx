import s from './ProfileInfo.module.css'
import {ProfileType} from "../../Common/types/types";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import { AppStateType } from '../../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';

type PropsType = {
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: PropsType) => {
    const profile = useSelector<AppStateType, ProfileType>(state=> state.profilePage.profile)
    const status = useSelector<AppStateType, string>(state=> state.profilePage.status)
    const dispatch = useDispatch()
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.avatar}>
                <img alt={'#'} src={profile.photos.small}/>
                <ProfileStatus status={status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <h3>{profile.fullName}</h3>
                <hr/>
                <div>Profile in VK:<a href={profile.contacts.vk}>{profile.contacts.vk}</a></div>
                <div>Profile in facebook: <a href={profile.contacts.facebook} target="_blank"
                                             rel="noreferrer">{profile.contacts.facebook}</a></div>
                <div>Profile in instagram: <a href={profile.contacts.instagram} target="_blank"
                                              rel="noreferrer">{profile.contacts.instagram}</a></div>
                <div>Profile in github:<a href={profile.contacts.github} target="_blank"
                                          rel="noreferrer"> {profile.contacts.github} </a></div>
                <div>Profile in twitter:<a href={profile.contacts.twitter} target="_blank"
                                           rel="noreferrer"> {profile.contacts.twitter}</a></div>
            </div>
            <hr/>
        </div>
    )
}

