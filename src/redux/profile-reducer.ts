

let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { post: 'Hi, how are yoy?' },
        { post: 'Whre are you?' },
        { post: 'I am fine hbh' }
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action: any) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: state.newPostText
            }
            state.posts.push(newPost)
            //state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

    }

}


export function addPostActionCreator() {
    return { type: ADD_POST }
}
export function updateNewPostTextActionCreator(newText: any) {
    debugger
    return ({ type: UPDATE_NEW_POST_TEXT, newText })
}