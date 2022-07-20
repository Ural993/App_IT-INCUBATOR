import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import {
    setUserProfile, updateStatusTC
} from '../../redux/profile-reducer';
import {Profile} from "./Profile";
import {ProfileType} from "../Common/types/types";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { compose } from 'redux';

type PathParamType = {
    userId: string
}

type MDTPType = {
    addPost: (post:string) => void
    updateNewPostText: (text: any) => void
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType
type OwnPropsType =  MDTPType

class ProfileContainerAPI extends React.Component<PropsType> {

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}


export default compose <ComponentType>(connect(null, {
    updateStatusTC,
    setUserProfile,
}), withRouter)(ProfileContainerAPI)