let ADD_MESSAGE = 'ADD_MESSAGE'
export type InitialDialogStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsType = {
    name: string,
    id: number
}
type MessageType = {
    message: string
}
let initialState: InitialDialogStateType = {
    dialogs: [
        {name: 'Vovs', id: 1},
        {name: 'Petr', id: 2},
        {name: 'Sasha', id: 3},
        {name: 'Dimich', id: 4}
    ],
    messages: [
        {message: 'Hi, how are yoy?'},
        {message: 'Whre are you?'},
        {message: 'I am fine'}
    ]
}


export let dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            return {...state, messages: [...state.messages, {message: action.message}]}
        }

        default:
            return state
    }
}

export const addMessage = (message: string) => {
    return {type: ADD_MESSAGE, message} as const
}
type addMessageACType = ReturnType<typeof addMessage>

type ActionsType = addMessageACType