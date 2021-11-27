import {PhotoType, ProfileType} from "../components/Common/types/types";


let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let SET_USER_PROFILE= 'SET_USER_PROFILE'
type PostType = {
    post: string
}
export type InitialProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile:ProfileType
}

let initialState: InitialProfileStateType = {
    posts: [
        { post: 'Hi, how are yoy?' },
        { post: 'Whre are you?' },
        { post: 'I am fine hbh' }
    ],
    newPostText: "",
    profile:null
}

export const profileReducer = (state = initialState, action: any): InitialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                post: state.newPostText
            }
            let copyState = { ...state }
            copyState.posts = [...state.posts]
            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }

        case UPDATE_NEW_POST_TEXT: {
            let copyState = { ...state }

            copyState.newPostText = action.newText
            return copyState
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state

    }

}
type AddPostACType = {
    type: typeof ADD_POST
}
export function addPost(): AddPostACType {
    return { type: ADD_POST }
}
type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export function updateNewPostText(newText: string): UpdateNewPostTextACType {
    return ({ type: UPDATE_NEW_POST_TEXT, newText })
}
type setUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile=(profile:ProfileType):setUserProfileACType=>({type:SET_USER_PROFILE, profile})