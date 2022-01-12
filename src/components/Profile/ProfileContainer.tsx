import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import {
    addPost, getProfile,
    getStatus,
    InitialProfileStateType,
    setUserProfile,
    updateNewPostText, updateStatus
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from "./Profile";
import {ProfileType} from "../Common/types/types";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

type PathParamType = {
    userId: string
}
type MSTPType = {
    profilePage: InitialProfileStateType
    status:string
}
type MDTPType = {
    addPost: () => void
    updateNewPostText: (text: any) => void
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType
type OwnPropsType = MSTPType & MDTPType

class ProfileContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '1143'
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let MapStateToProps = (state: AppStateType): MSTPType => {
    return ({
            profilePage: state.profilePage,
            status:state.profilePage.status
        }
    )
}


export default compose <ComponentType>(connect(MapStateToProps, {
    addPost,getStatus,updateStatus,
    updateNewPostText,
    setUserProfile, getProfile
}), withRouter, withAuthRedirect)(ProfileContainerAPI)