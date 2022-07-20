import React, { useEffect } from 'react';
import MyPosts from './MyPosts/MyPosts';
import { getProfileTC, getStatusTC } from "../../redux/profile-reducer";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

type PathParamType = {
    userId: string
}
interface PropsType extends RouteComponentProps<PathParamType> {
    updateStatus: (status: string) => void
}

export function Profile(props: PropsType) {
    const userIdFromState = useSelector<AppStateType, string>((state) => state.auth.id)
    const dispatch = useDispatch()
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = userIdFromState
        }
        if (!userId) {
            props.history.push('/login')
        }
        dispatch(getProfileTC(userId))
        dispatch(getStatusTC(userId))
    })
    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus} />
            <MyPosts />
        </div>
    )
}
