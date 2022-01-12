import {v1} from "uuid";
import {ProfileType} from "../components/Common/types/types";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let GET_STATUS = 'GET_STATUS'
type PostType = {
    post: string
    id: string
}
export type InitialProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
    status:string
}

let initialState: InitialProfileStateType = {
    posts: [
        {id: v1(), post: 'Hi, how are yoy?'},
        {id: v1(), post: 'Whre are you?'},
        {id: v1(), post: 'I am fine hbh'}
    ],
    newPostText: "",
    profile: null,
    status:'',
}

export const profileReducer = (state = initialState, action: any): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, {id: v1(), post: state.newPostText}]}
        }


        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state}

            copyState.newPostText = action.newText
            return copyState
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case GET_STATUS:{
            return {...state, status:action.status}
        }

        default:
            return state

    }

}
type AddPostACType = {
    type: typeof ADD_POST
}

export function addPost(): AddPostACType {
    return {type: ADD_POST}
}

type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export function updateNewPostText(newText: string): UpdateNewPostTextACType {
    return ({type: UPDATE_NEW_POST_TEXT, newText})
}

type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileACType => ({type: SET_USER_PROFILE, profile})
 const setStatus=(status:string)=>({type:GET_STATUS, status})

export const getProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
    }
}

