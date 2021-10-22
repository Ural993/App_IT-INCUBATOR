import { connect } from 'react-redux';
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';


function Profile(props: any) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.profilePage} />
        </div>
    )
}
let MapStateToProps = (state: AppStateType) => {
    return ({
        profilePage: state.profilePage
    }
    )
}
let MapDispatchToProps = (dispatch: any) => {
    return ({
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (text: any) => dispatch(updateNewPostTextActionCreator(text))
    })
}


const ProfileContainer = connect(MapStateToProps, MapDispatchToProps)(Profile)

export default ProfileContainer;