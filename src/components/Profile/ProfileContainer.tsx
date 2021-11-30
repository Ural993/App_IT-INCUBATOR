import {connect} from 'react-redux';
import React from 'react';
import {
    addPost,
    InitialProfileStateType,
    setUserProfile,
    updateNewPostText
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType} from "../Common/types/types";
import {RouteComponentProps, withRouter} from 'react-router-dom';

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

}
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType
type OwnPropsType = MSTPType & MDTPType

class ProfileContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '1143'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}


let MapStateToProps = (state: AppStateType): MSTPType => {
    return ({
            profilePage: state.profilePage
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
    setUserProfile
})(ProfileContainerAPIWithRouter)

