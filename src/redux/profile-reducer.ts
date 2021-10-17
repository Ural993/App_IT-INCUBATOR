

let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
type PostType = {
    post: string
}
type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        { post: 'Hi, how are yoy?' },
        { post: 'Whre are you?' },
        { post: 'I am fine hbh' }
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action: any): InitialStateType => {
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

        default:
            return state

    }

}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export function addPostActionCreator(): AddPostActionCreatorType {
    return { type: ADD_POST }
}
export function updateNewPostTextActionCreator(newText: string): UpdateNewPostTextActionCreatorType {
    return ({ type: UPDATE_NEW_POST_TEXT, newText })
}