let rerenderEntireTree = () => {
    console.log('state changed')
}


type PostsType = {
    post: string
}
type MessagesType = {
    message: string
}
type DialogsType = {
    name: string
    id: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type StateType = {
    dialogsPage: {
        dialogsPage: DialogsPageType
        profilePage: ProfilePageType
    }
}

export let state = {
    dialogsPage: {
        dialogs: [
            { name: 'Vovs', id: 1 },
            { name: 'Petr', id: 2 },
            { name: 'Sasha', id: 3 },
            { name: 'Dimich', id: 4 }
        ],
        messages: [
            { message: 'Hi, how are yoy?' },
            { message: 'Whre are you?' },
            { message: 'I am fine' }
        ]
    },
    profilePage: {
        posts: [
            { post: 'Hi, how are yoy?' },
            { post: 'Whre are you?' },
            { post: 'I am fine' }
        ],
        newPostText: ""
    }
}

export function addPost() {
    let newPost = {
        post: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree();
}

export function updateNewPostText(text: any) {
    state.profilePage.newPostText = text
    rerenderEntireTree();
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}