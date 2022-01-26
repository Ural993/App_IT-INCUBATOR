import { v1 } from "uuid"

let ADD_MESSAGE = 'ADD_MESSAGE'
export type InitialDialogStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsType = {
    name: string,
    id: string
}
type MessageType = {
    message: string,
    id: string
}
let initialState: InitialDialogStateType = {
    dialogs: [
        {name: 'Vovs', id: v1()},
        {name: 'Petr', id: v1()},
        {name: 'Sasha', id:v1()},
        {name: 'Dimich', id: v1()}
    ],
    messages: [
        {message: 'Hi, how are yoy?', id: v1()},
        {message: 'Whre are you?', id: v1()},
        {message: 'I am fine', id: v1()}
    ]
}


export let dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, messages: [...state.messages, {message: action.message, id:v1()}]}
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