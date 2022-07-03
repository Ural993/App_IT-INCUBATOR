import { v1 } from "uuid"

let ADD_MESSAGE = 'ADD_MESSAGE'
export type InitialDialogStateType = typeof initialState

export type DialogsType = {
    name: string,
    id: string
}
export type MessageType = {
    message: string,
    id: string
}
let initialState = {
    dialogs: [
        { name: 'Vovs', id: v1() },
        { name: 'Petr', id: v1() },
        { name: 'Sasha', id: v1() },
        { name: 'Dimich', id: v1() }
    ] as DialogsType[],
    messages: [
        {message: 'Hi, how are yoy?', id: v1()},
        {message: 'Whre are you?', id: v1()},
        {message: 'I am fine', id: v1()}
    ] as MessageType[]
}


export let dialogsReducer = (state:InitialDialogStateType = initialState, action: ActionsType):InitialDialogStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, messages: [...state.messages, {message: action.message, id:v1()}]}
        }

        default:
            return state
    }
}

export const addMessageAC = (message: string) => {
    return {type: ADD_MESSAGE, message} as const
}
type addMessageACType = ReturnType<typeof addMessageAC>

type ActionsType = addMessageACType