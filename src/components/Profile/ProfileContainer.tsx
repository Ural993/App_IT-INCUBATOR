import {connect} from 'react-redux';
import React from 'react';
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

type PathParamType = {
    userId: string
}
type MSTPType = {
    profilePage: InitialProfileStateType
    isAuth:boolean
}
type MDTPType = {
    addPost: () => void
    updateNewPostText: (text: any) => void
    setUserProfile: (profile: ProfileType) => void
    getProfile:(userId:string) => void
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
            isAuth: state.auth.isAuth
        }
    )
}
// let MapDispatchToProps = (dispatch: any): MDTPType => {
//     return ({
//         addPost: () => dispatch(addPostActionCreator()),
//         updateNewPostText: (text: any) => dispatch(updateNewPostTextActionCreator(text))
//     })
// }
let ProfileContainerAPIWithRouter = withRouter(ProfileContainerAPI)

export const ProfileContainer = connect(MapStateToProps, {
    addPost,
    updateNewPostText,
    setUserProfile, getProfile
})(ProfileContainerAPIWithRouter)

