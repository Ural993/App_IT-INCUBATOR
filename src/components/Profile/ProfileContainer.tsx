import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import {
    addPost, getProfile,
    InitialProfileStateType,
    setUserProfile,
    updateNewPostText
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
}
type MDTPType = {
    addPost: () => void
    updateNewPostText: (text: any) => void
    setUserProfile: (profile: ProfileType) => void
    getProfile: (userId: string) => void
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
        }
    )
}


export default compose <ComponentType>(connect(MapStateToProps, {
    addPost,
    updateNewPostText,
    setUserProfile, getProfile
}), withRouter, withAuthRedirect)(ProfileContainerAPI)